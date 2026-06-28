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
    let normalized = String(text || "")
      .replace(/[０-９]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0xFEE0))
      .replace(/[／]/g, "/")
      .replace(/[－ー―]/g, "-")
      .replace(/[，]/g, ",");
    const japaneseSeparatedBySpaces = /([\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}])[ \t　]+([\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}])/gu;
    let compacted = normalized.replace(japaneseSeparatedBySpaces, "$1$2");
    while (compacted !== normalized) {
      normalized = compacted;
      compacted = normalized.replace(japaneseSeparatedBySpaces, "$1$2");
    }
    return normalized;
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
    console.log("[OCR date] normalized:", normalized);
    const pattern1 = /(20\d{2})\s*[\/\-.年]\s*(\d{1,2})\s*[\/\-.月]\s*(\d{1,2})\s*(?:日)?\s*現在/;
    console.log("[OCR date] testing common pattern1:", pattern1);
    let m = normalized.match(pattern1);
    console.log("[OCR date] common pattern1:", m);
    if (m) {
      const result = toIsoDate(m[1], m[2], m[3]);
      console.log("[OCR date] result:", result);
      return result;
    }
    const pattern2 = /現在\s*(20\d{2})\s*[\/\-.年]\s*(\d{1,2})\s*[\/\-.月]\s*(\d{1,2})/;
    console.log("[OCR date] testing common pattern2:", pattern2);
    m = normalized.match(pattern2);
    console.log("[OCR date] common pattern2:", m);
    if (m) {
      const result = toIsoDate(m[1], m[2], m[3]);
      console.log("[OCR date] result:", result);
      return result;
    }
    const pattern3 = /(?:基準日|評価基準日|基準年月日|年月日)[^0-9]*(20\d{2})\s*[\/\-.年]\s*(\d{1,2})\s*[\/\-.月]\s*(\d{1,2})/;
    console.log("[OCR date] testing common pattern3:", pattern3);
    m = normalized.match(pattern3);
    console.log("[OCR date] common pattern3:", m);
    if (m) {
      const result = toIsoDate(m[1], m[2], m[3]);
      console.log("[OCR date] result:", result);
      return result;
    }
    const pattern4 = /(?:基準日|評価基準日|基準年月日|年月日)[^0-9]*(\d{1,2})\s*[\/\-.月]\s*(\d{1,2})\s*(?:日)?/;
    console.log("[OCR date] testing common pattern4:", pattern4);
    m = normalized.match(pattern4);
    console.log("[OCR date] common pattern4:", m);
    if (m) {
      const result = toIsoDate(new Date().getFullYear(), m[1], m[2]);
      console.log("[OCR date] result:", result);
      return result;
    }
    const pattern5 = /(20\d{2})\s*[\/\-.年]\s*(\d{1,2})\s*[\/\-.月]\s*(\d{1,2})\s*(?:日)?\s*(?:基準|時点)/;
    console.log("[OCR date] testing common pattern5:", pattern5);
    m = normalized.match(pattern5);
    console.log("[OCR date] common pattern5:", m);
    if (m) {
      const result = toIsoDate(m[1], m[2], m[3]);
      console.log("[OCR date] result:", result);
      return result;
    }
    const result = null;
    console.log("[OCR date] result:", result);
    return result;
  }

  function isCompactDateNumber(v) {
    const s = String(v);
    if (!/^20\d{6}$/.test(s)) return false;
    return toIsoDate(s.slice(0, 4), s.slice(4, 6), s.slice(6, 8)) != null;
  }

  function numberCandidates(text) {
    const normalized = normalizeOcrText(text);
    const nums = normalized.match(/\d{1,3}(?:\s*,\s*\d{3})+|\d{6,}/g) || [];
    return nums
      .map(n => Number(n.replace(/[\s,]/g, "")))
      .filter(v => Number.isFinite(v) && v > 10000 && !isCompactDateNumber(v));
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

  function extractSaisonBaseDate(text) {
    const commonDate = extractCommonBaseDate(text);
    console.log("[OCR date] saison common result:", commonDate);
    if (commonDate) return commonDate;
    const normalized = normalizeOcrText(text).replace(/\s+/g, " ");
    console.log("[OCR date] saison normalized:", normalized);
    const pattern1 = /(?:基準日|評価基準日|基準年月日|年月日|基準価額適用日|適用日|現在)[^0-9]{0,20}(20\d{2})\s*[\/\-.年]\s*(\d{1,2})\s*[\/\-.月]\s*(\d{1,2})\s*(?:日)?/;
    console.log("[OCR date] testing saison pattern1:", pattern1);
    let m = normalized.match(pattern1);
    console.log("[OCR date] saison pattern1:", m);
    if (m) {
      const result = toIsoDate(m[1], m[2], m[3]);
      console.log("[OCR date] saison result:", result);
      return result;
    }
    const pattern2 = /(?:基準日|評価基準日|基準年月日|年月日|基準価額適用日|適用日|現在)[^0-9]{0,20}(20\d{2})\s+(\d{1,2})\s+(\d{1,2})/;
    console.log("[OCR date] testing saison pattern2:", pattern2);
    m = normalized.match(pattern2);
    console.log("[OCR date] saison pattern2:", m);
    if (m) {
      const result = toIsoDate(m[1], m[2], m[3]);
      console.log("[OCR date] saison result:", result);
      return result;
    }
    const pattern3 = /(20\d{2})\s+(\d{1,2})\s+(\d{1,2})\s*(?:日)?\s*(?:現在|時点|基準)/;
    console.log("[OCR date] testing saison pattern3:", pattern3);
    m = normalized.match(pattern3);
    console.log("[OCR date] saison pattern3:", m);
    if (m) {
      const result = toIsoDate(m[1], m[2], m[3]);
      console.log("[OCR date] saison result:", result);
      return result;
    }
    const result = null;
    console.log("[OCR date] saison result:", result);
    return result;
  }

  function extractSaisonAmount(text) {
    return extractAmountNearKeywords(text, /評価額|評価金額|評価額合計|資産評価額|資産合計|合計評価額|時価評価額|お預り資産|お預かり資産|評価損益/) || numberCandidates(text).sort((a, b) => b - a)[0] || null;
  }

  const ocrExtractors = {
    sbi_ideco: {baseDate: extractCommonBaseDate, amount: extractSbiAmount},
    saison_nisa: {baseDate: extractSaisonBaseDate, amount: extractSaisonAmount}
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
    extractSaisonBaseDate,
    numberCandidates,
    extractAmountNearKeywords,
    extractSbiAmount,
    extractSaisonAmount,
    ocrExtractors,
    runCommonOcr,
    extractOcrValues
  };
})();
