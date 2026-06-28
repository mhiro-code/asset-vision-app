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

  return {
    yen,
    pct,
    dstr,
    byDate,
    todayIso
  };
})();
