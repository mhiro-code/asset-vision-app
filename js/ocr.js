// Asset Vision OCR utilities
//
// OCR parsing and engine helpers are exposed through this namespace so import
// flows can share one focused module without keeping OCR logic in app.js.
window.AssetVisionOcr = (() => {
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

  function extractCommonBaseDate(text) {
    const normalized = normalizeOcrText(text).replace(/\s+/g, " ");
    let m = normalized.match(/(20\d{2})\s*[\/\-.年]\s*(\d{1,2})\s*[\/\-.月]\s*(\d{1,2})\s*(?:日)?\s*現在/);
    if (m) return toIsoDate(m[1], m[2], m[3]);
    m = normalized.match(/現在\s*(20\d{2})\s*[\/\-.年]\s*(\d{1,2})\s*[\/\-.月]\s*(\d{1,2})/);
    if (m) return toIsoDate(m[1], m[2], m[3]);
    m = normalized.match(/基準日[^0-9]*(20\d{2})\s*[\/\-.年]\s*(\d{1,2})\s*[\/\-.月]\s*(\d{1,2})/);
    if (m) return toIsoDate(m[1], m[2], m[3]);
    return null;
  }

  function numberCandidates(text) {
    const normalized = normalizeOcrText(text);
    const nums = normalized.match(/\d{1,3}(?:,\d{3})+|\d{6,}/g) || [];
    return nums
      .map(n => Number(n.replace(/,/g, "")))
      .filter(v => Number.isFinite(v) && v > 10000);
  }

  function extractAmountNearKeywords(text, keywords) {
    const normalized = normalizeOcrText(text);
    const lines = normalized.split(/\n+/).map(x => x.trim()).filter(Boolean);
    for (let i = 0; i < lines.length; i++) {
      if (keywords.test(lines[i])) {
        const area = lines.slice(i, Math.min(i + 4, lines.length)).join(" ");
        const found = numberCandidates(area).sort((a, b) => b - a)[0];
        if (found) return found;
      }
    }
    return null;
  }

  function extractSbiAmount(text) {
    return extractAmountNearKeywords(text, /評価額|資産評価額|時価評価額/) || numberCandidates(text).sort((a, b) => b - a)[0] || null;
  }

  function extractSaisonAmount(text) {
    return extractAmountNearKeywords(text, /評価額|評価金額|資産評価額|資産合計|合計評価額|時価評価額|お預り資産|NISA/) || numberCandidates(text).sort((a, b) => b - a)[0] || null;
  }

  const ocrExtractors = {
    sbi_ideco: {baseDate: extractCommonBaseDate, amount: extractSbiAmount},
    saison_nisa: {baseDate: extractCommonBaseDate, amount: extractSaisonAmount}
  };

  async function runCommonOcr(imageDataUrl, options = {}) {
    if (!window.Tesseract) throw new Error("OCR engine is not loaded");
    const result = await Tesseract.recognize(imageDataUrl, "jpn+eng", {
      logger: m => {
        if (m.status && options.onProgress) options.onProgress(m);
      }
    });
    return result?.data?.text || "";
  }

  function extractOcrValues(text, profile) {
    const ex = ocrExtractors[profile.ocrProfile] || ocrExtractors.sbi_ideco;
    return {baseDate: ex.baseDate(text), amount: ex.amount(text), rawText: text};
  }

  return {
    parseAmountInput,
    normalizeOcrText,
    toIsoDate,
    extractCommonBaseDate,
    numberCandidates,
    extractAmountNearKeywords,
    extractSbiAmount,
    extractSaisonAmount,
    ocrExtractors,
    runCommonOcr,
    extractOcrValues
  };
})();
