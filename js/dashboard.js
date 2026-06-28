// Asset Vision dashboard and table rendering utilities
//
// Dashboard-specific rendering is exposed through a browser-global namespace to
// keep app.js focused on orchestration without introducing module syntax.
window.AssetVisionDashboard = (() => {
  const { yen, pct, dstr } = window.AssetVisionCommon;
  const { rangeRows } = window.AssetVisionChart;

  const change = (a, b) => (a == null || b == null) ? null : a - b;

  function mainPurposeLabel(c, purpose) {
    const p = purpose(c.mainPurpose);
    return p ? `${p.icon} ${p.label}` : "-";
  }

  function totalLatest(channels, latest) {
    let total = 0, has = false;
    for (const c of channels()) {
      const r = latest(c.id);
      if (r) {
        total += r.asset;
        has = true;
      }
    }
    return has ? total : null;
  }

  function totalPrev(channels, prev) {
    let total = 0, has = false;
    for (const c of channels()) {
      const r = prev(c.id);
      if (r) {
        total += r.asset;
        has = true;
      }
    }
    return has ? total : null;
  }

  function monthStartTotal(channels, latest, rows) {
    const all = channels().map(c => latest(c.id)).filter(Boolean);
    if (!all.length) return null;
    const lastDate = all.map(r => r.date).sort().at(-1);
    const ym = lastDate.slice(0, 7);
    let total = 0, has = false;
    for (const c of channels()) {
      const rs = rows(c.id).filter(r => r.date.slice(0, 7) === ym);
      if (rs.length) {
        total += rs[0].asset;
        has = true;
      }
    }
    return has ? total : null;
  }

  function renderSummary({ channels, latest, prev, rows }) {
    const t = totalLatest(channels, latest), p = totalPrev(channels, prev), ms = monthStartTotal(channels, latest, rows);
    const diff = change(t, p), mdiff = change(t, ms);
    document.getElementById("summary").innerHTML = `
<div class="card"><h2>総資産</h2><div class="big">${yen(t)}</div><div class="small">登録済み資産グループ合計</div></div>
<div class="card"><h2>前回比</h2><div class="big ${diff >= 0 ? "good" : "bad"}">${diff == null ? "-" : yen(diff)}</div><div class="small">登録済みデータ同士の比較</div></div>
<div class="card"><h2>月初比</h2><div class="big ${mdiff >= 0 ? "good" : "bad"}">${mdiff == null ? "-" : yen(mdiff)}</div><div class="small">最新月の初回データ比</div></div>
<div class="card"><h2>総評</h2><button class="commentBtn" onclick="openMarketMemo()">💬</button><div class="small">資産間のつながりを見る</div></div>`;
  }

  function renderChannelTable({ channels, latest, prev, purpose, lastMemoForChannel }) {
    const total = totalLatest(channels, latest);
    const trs = channels().map(c => {
      const r = latest(c.id), pr = prev(c.id), memo = lastMemoForChannel(c.id);
      const diff = r && pr ? r.asset - pr.asset : null;
      const share = total && r ? r.asset / total : null;
      return `<tr><td><button class="nameBtn" onclick="openChannelDetail('${c.id}')">${c.name}</button></td><td><span class="purpose">${mainPurposeLabel(c, purpose)}</span></td><td>${r ? yen(r.asset) : "未登録"}</td><td class="${diff >= 0 ? "good" : "bad"}">${diff == null ? "-" : yen(diff)}</td><td>${r ? yen(r.profit) : "-"}</td><td>${share == null ? "-" : (share * 100).toFixed(1) + "%"}</td><td><button class="commentBtn ${memo ? "" : "empty"}" onclick="openChannelMemo('${c.id}')">${memo ? "💬" : "○"}</button></td></tr>`;
    }).join("");
    document.getElementById("channelTable").innerHTML = `<table><thead><tr><th>資産グループ</th><th>目的</th><th>評価額</th><th>前回比</th><th>損益</th><th>比率</th><th>コメント</th></tr></thead><tbody>${trs}</tbody></table>`;
  }

  function renderDataTable({ selectedChannel, selectedRange, rows }) {
    const rsFull = rows(selectedChannel);
    const rs = rangeRows(rsFull, selectedRange).slice().reverse().slice(0, 50);
    document.getElementById("dataTable").innerHTML = `<table><thead><tr><th>日付</th><th>評価額</th><th>元本/拠出金</th><th>損益</th><th>損益率</th><th>前回比</th></tr></thead><tbody>${rs.map(r => {
      const idx = rsFull.findIndex(x => x.date === r.date);
      const pr = idx > 0 ? rsFull[idx - 1] : null;
      const diff = pr ? r.asset - pr.asset : null;
      return `<tr><td>${dstr(r.date)}</td><td>${yen(r.asset)}</td><td>${yen(r.principal)}</td><td>${yen(r.profit)}</td><td>${pct(r.profitRate)}</td><td class="${diff >= 0 ? "good" : "bad"}">${diff == null ? "-" : yen(diff)}</td></tr>`;
    }).join("")}</tbody></table>`;
  }

  return {
    renderSummary,
    renderChannelTable,
    renderDataTable
  };
})();
