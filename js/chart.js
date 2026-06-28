// Asset Vision chart rendering utilities
//
// Chart-specific helpers are exposed through a browser-global namespace to keep
// the incremental app.js refactoring small and avoid module syntax.
window.AssetVisionChart = (() => {
  const DB = window.ASSET_LIFELOG_DB;
  const { yen, dstr } = window.AssetVisionCommon;

  function daysForRange(selectedRange) {
    return { "1M": 31, "3M": 93, "6M": 186, "1Y": 366 }[selectedRange] || null;
  }

  function rangeRows(rs, selectedRange) {
    const days = daysForRange(selectedRange);
    if (!days) return rs;
    if (!rs.length) return rs;
    const last = new Date(rs.at(-1).date);
    const min = new Date(last);
    min.setDate(min.getDate() - days);
    return rs.filter(r => new Date(r.date) >= min);
  }

  function niceStep(range) {
    const steps = [10000, 20000, 50000, 100000, 250000, 500000, 1000000, 2500000, 5000000, 10000000];
    const target = range / 4;
    return steps.find(s => s >= target) || steps.at(-1);
  }

  function niceYScale(vals) {
    let min = Math.min(...vals), max = Math.max(...vals);
    if (min === max) {
      min -= 50000;
      max += 50000;
    }
    const step = niceStep(max - min);
    const y0 = Math.floor(min / step) * step;
    const y1 = Math.ceil(max / step) * step;
    let ticks = [];
    for (let v = y0; v <= y1 + step / 2; v += step) ticks.push(v);
    return { y0, y1, step, ticks };
  }

  function formatX(dateStr, selectedRange) {
    const [y, m, d] = dateStr.split("-");
    if (selectedRange === "all") return `${y}/${Number(m)}`;
    return `${Number(m)}/${Number(d)}`;
  }

  function moneyDisplayMode() {
    return DB.settings?.moneyDisplayMode || DB.settings?.amountUnit || localStorage.getItem("moneyDisplayMode") || "man";
  }

  function summaryValue(n, { signed = false } = {}) {
    if (n == null || Number.isNaN(n)) return "-";
    const sign = signed ? (n > 0 ? "+" : n < 0 ? "-" : "±") : "";
    const abs = Math.abs(n);
    if (moneyDisplayMode() === "yen") return `${sign}${yen(abs)}`;
    return `${sign}${Math.round(abs / 10000).toLocaleString("ja-JP")}万円`;
  }

  function statusItem(label, value, cls = "", valueCls = "") {
    return `<span class="statusItem"><span class="statusLabel">${label}</span><b class="${cls} ${valueCls}">${value}</b></span>`;
  }

  function renderChartStatus(rs) {
    const el = document.getElementById("chartStatus");
    if (!el) return;
    if (rs.length < 2) {
      el.innerHTML = "";
      return;
    }
    const first = rs[0], last = rs.at(-1), diff = last.asset - first.asset;
    const diffClass = diff > 0 ? "good" : diff < 0 ? "bad" : "";
    el.innerHTML = [
      statusItem("期間", `${dstr(first.date)} ～ ${dstr(last.date)}`),
      statusItem("現在値", summaryValue(last.asset), "", "currentValue"),
      statusItem("期間増減", summaryValue(diff, { signed: true }), diffClass)
    ].join("");
  }

  function renderChart({ selectedChannel, selectedRange, channel, rows }) {
    const c = channel(selectedChannel);
    const rs = rangeRows(rows(selectedChannel), selectedRange);
    const el = document.getElementById("chart");
    if (rs.length < 2) {
      el.innerHTML = `<div class="small">グラフ表示には2件以上のデータが必要です。</div>`;
      renderChartStatus(rs);
      return;
    }
    const w = el.clientWidth || 850, h = el.clientHeight || 320, m = { l: 64, r: 18, t: 18, b: 42 };
    const vals = rs.map(r => r.asset), sc = niceYScale(vals), y0 = sc.y0, y1 = sc.y1;
    const x = i => m.l + (i / (rs.length - 1)) * (w - m.l - m.r);
    const y = v => h - m.b - ((v - y0) / (y1 - y0)) * (h - m.t - m.b);
    const path = rs.map((r, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(r.asset).toFixed(1)}`).join(" ");
    const xCount = Math.min(7, rs.length);
    const xIdx = Array.from({ length: xCount }, (_, i) => Math.round((rs.length - 1) * i / (xCount - 1)));
    const grid = sc.ticks.map(v => `<line class="gridline" x1="${m.l}" x2="${w - m.r}" y1="${y(v)}" y2="${y(v)}"/>`).join("");
    const ylabs = sc.ticks.map(v => `<text x="${m.l - 8}" y="${y(v) + 4}" text-anchor="end">${(v / 10000).toLocaleString("ja-JP")}万</text>`).join("");
    const xlabs = xIdx.map(i => `<text x="${x(i)}" y="${h - 14}" text-anchor="middle">${formatX(rs[i].date, selectedRange)}</text>`).join("");
    el.innerHTML = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><g class="axis">${grid}${ylabs}${xlabs}<line x1="${m.l}" x2="${w - m.r}" y1="${h - m.b}" y2="${h - m.b}"/><line x1="${m.l}" x2="${m.l}" y1="${m.t}" y2="${h - m.b}"/></g><path class="path" d="${path}" stroke="${c.color}"/><circle cx="${x(rs.length - 1)}" cy="${y(rs.at(-1).asset)}" r="4" fill="${c.color}"/></svg>`;
    renderChartStatus(rs);
  }

  return {
    daysForRange,
    rangeRows,
    statusItem,
    renderChartStatus,
    renderChart
  };
})();
