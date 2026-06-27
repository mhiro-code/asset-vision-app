// Asset Vision common utilities
//
// This file intentionally exposes utility functions through a single namespace
// to avoid changing the existing global function behavior during the first
// refactoring step of Issue #2.
window.AssetVisionCommon = (() => {
  const yen = n =>
    (n == null || Number.isNaN(n))
      ? "-"
      : new Intl.NumberFormat("ja-JP", {
          style: "currency",
          currency: "JPY",
          maximumFractionDigits: 0
        }).format(n);

  const pct = n =>
    (n == null || Number.isNaN(n)) ? "-" : (n * 100).toFixed(1) + "%";

  const dstr = s => s ? String(s).replaceAll("-", "/") : "-";

  const byDate = (a, b) => new Date(a.date) - new Date(b.date);

  function todayIso() {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  }

  function parseAmountInput(v) {
    const s = String(v || "")
      .replace(/[￥¥円,，\s]/g, "")
      .replace(/[０-９]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0xFEE0));
    if (!/^\d+$/.test(s)) return null;
    return Number(s);
  }

  function normalizeOcrText(text) {
    return String(text || "")
      .replace(/[０-９]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0xFEE0))
      .replace(/[／]/g, "/")
      .replace(/[－ー―]/g, "-")
      .replace(/[，]/g, ",");
  }

  function toIsoDate(y, m, d) {
    const yy = Number(y), mm = Number(m), dd = Number(d);
    if (!yy || !mm || !dd || mm < 1 || mm > 12 || dd < 1 || dd > 31) return null;
    const dt = new Date(yy, mm - 1, dd);
    if (dt.getFullYear() !== yy || dt.getMonth() + 1 !== mm || dt.getDate() !== dd) return null;
    return `${yy}-${String(mm).padStart(2, "0")}-${String(dd).padStart(2, "0")}`;
  }

  function numberCandidates(text) {
    const normalized = normalizeOcrText(text);
    const nums = normalized.match(/\d{1,3}(?:,\d{3})+|\d{6,}/g) || [];
    return nums
      .map(n => Number(n.replace(/,/g, "")))
      .filter(v => Number.isFinite(v) && v > 10000);
  }

  return {
    yen,
    pct,
    dstr,
    byDate,
    todayIso,
    parseAmountInput,
    normalizeOcrText,
    toIsoDate,
    numberCandidates
  };
})();
