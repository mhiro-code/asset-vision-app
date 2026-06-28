// Asset Vision detail and memo modal rendering utilities
//
// Detail-specific modal content is exposed through a browser-global namespace to
// keep app.js focused on orchestration without introducing module syntax.
window.AssetVisionDetail = (() => {
  const { yen, pct, dstr } = window.AssetVisionCommon;
  const { openModal } = window.AssetVisionModal;

  function stars(c) {
    if (c == null) return "-";
    const n = Math.round(c * 5);
    return "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n);
  }

  function maxDrawdown(rs) {
    let peak = -Infinity, peakDate = null, maxDd = 0, maxDdDate = null;
    for (const r of rs) {
      if (r.asset > peak) {
        peak = r.asset;
        peakDate = r.date;
      }
      const dd = r.asset - peak;
      if (dd < maxDd) {
        maxDd = dd;
        maxDdDate = r.date;
      }
    }
    return { value: maxDd, peakDate, date: maxDdDate };
  }

  function openMarketMemo({ memo }) {
    const m = memo;
    if (!m) {
      openModal("今日の総評", `<div class="small">総評コメントはありません。</div>`);
      return;
    }
    openModal("今日の総評", `<h3>市況</h3><div>${m.summary}</div><h3>資産間のつながり</h3><div>${m.relation}</div><h3>今日の学び</h3><div>${m.learning}</div><div class="confidence">信頼度：${stars(m.confidence)} / tags: ${(m.tags || []).join(", ")}</div>`);
  }

  function openChannelMemo({ channel, memo }) {
    const c = channel, m = memo;
    if (!m) {
      openModal(`${c.name} のコメント`, `<div class="small">コメントはまだありません。</div>`);
      return;
    }
    openModal(`${c.name} のコメント`, `<h3>今日のコメント</h3><div>${m.comment}</div><h3>今日の学び</h3><div>${m.learning}</div><div class="confidence">信頼度：${stars(m.confidence)}</div>`);
  }

  function openChannelDetail({ channel, rows, allPurposeLabels }) {
    const c = channel, rs = rows, r = rs.at(-1), pr = rs.at(-2), diff = r && pr ? r.asset - pr.asset : null;
    const high = rs.length ? rs.reduce((a, b) => b.asset > a.asset ? b : a, rs[0]) : null;
    const low = rs.length ? rs.reduce((a, b) => b.asset < a.asset ? b : a, rs[0]) : null;
    const dd = rs.length ? maxDrawdown(rs) : null;
    openModal(`${c.name} の詳細`, `<div class="detailGrid"><div class="detailItem"><b>目的</b>${allPurposeLabels(c)}</div><div class="detailItem"><b>最新資産</b>${r ? yen(r.asset) : "未登録"}</div><div class="detailItem"><b>前回比</b><span class="${diff >= 0 ? "good" : "bad"}">${diff == null ? "-" : yen(diff)}</span></div><div class="detailItem"><b>損益</b>${r ? yen(r.profit) : "-"} / ${r ? pct(r.profitRate) : "-"}</div><div class="detailItem"><b>最高値</b>${high ? yen(high.asset) : "-"}<br><span class="small">${high ? dstr(high.date) : ""}</span></div><div class="detailItem"><b>最低値</b>${low ? yen(low.asset) : "-"}<br><span class="small">${low ? dstr(low.date) : ""}</span></div></div><h3>運用方針</h3><div>${c.policy || "-"}</div><h3>メモ</h3><div>${c.note || "-"}</div><div class="confidence">最大ドローダウン：${dd ? yen(dd.value) : "-"} ${dd ? `(${dstr(dd.peakDate)} → ${dstr(dd.date)})` : ""}</div>`);
  }

  return {
    stars,
    openMarketMemo,
    openChannelMemo,
    openChannelDetail
  };
})();
