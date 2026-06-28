// Asset Vision localStorage persistence utilities
//
// This file intentionally exposes storage helper functions through a single
// namespace to avoid changing the existing global function behavior during the
// incremental app.js refactoring for Issue #2.
window.AssetVisionStorage = (() => {
  const DB = window.ASSET_LIFELOG_DB;
  const STORAGE_KEY = "assetVision.accountDaily.v1";

  function loadSavedRows() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch {
      return [];
    }
  }

  function persistSavedRows() {
    const custom = DB.accountDaily.filter(r =>
      r.source_type === "screenshot_ocr" || r.source === "screenshot_ocr"
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
  }

  function mergeSavedRows() {
    for (const r of loadSavedRows()) {
      const i = DB.accountDaily.findIndex(x => x.date === r.date && x.channelId === r.channelId);
      if (i >= 0) DB.accountDaily[i] = { ...DB.accountDaily[i], ...r };
      else DB.accountDaily.push(r);
    }
  }

  return {
    loadSavedRows,
    persistSavedRows,
    mergeSavedRows
  };
})();
