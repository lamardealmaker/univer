import {
  UniverSheetsConditionalFormattingPreset,
  UniverSheetsCorePreset,
  UniverSheetsDataValidationPreset,
  UniverSheetsDrawingPreset,
  UniverSheetsFilterPreset,
  UniverSheetsFindReplacePreset,
  UniverSheetsHyperLinkPreset,
  UniverSheetsNotePreset,
  UniverSheetsSortPreset,
  UniverSheetsTablePreset,
  UniverSheetsThreadCommentPreset,
  zh_CN_default,
  zh_CN_default2 as zh_CN_default3,
  zh_CN_default3 as zh_CN_default4,
  zh_CN_default4 as zh_CN_default6,
  zh_CN_default5 as zh_CN_default7,
  zh_CN_default6 as zh_CN_default8,
  zh_CN_default7 as zh_CN_default9,
  zh_CN_default8 as zh_CN_default10,
  zh_CN_default9 as zh_CN_default11
} from "../chunk-6JCCCJ75.js";
import "../chunk-JJE3XM7Y.js";
import "../chunk-NNQ7G3R3.js";
import "../chunk-54TMZYMX.js";
import "../chunk-WTQNY3Z5.js";
import "../chunk-KJQGHPUM.js";
import "../chunk-7OZRJMUA.js";
import "../chunk-NFTG6TUX.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-CENPYPGL.js";
import {
  createUniver
} from "../chunk-UUZDHTLP.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-OLFC366I.js";
import "../chunk-2ENX2C6A.js";
import "../chunk-RB47N4DV.js";
import "../chunk-AQQRMB2F.js";
import "../chunk-G4SPYRC3.js";
import "../chunk-BMRBFE25.js";
import "../chunk-3ZLX3JPA.js";
import "../chunk-KM5RRPWO.js";
import "../chunk-WB6AT7VP.js";
import "../chunk-B6BZKVW2.js";
import "../chunk-6HIS66VH.js";
import "../chunk-A73TK6BQ.js";
import "../chunk-FZRUTRIY.js";
import "../chunk-GE5ZFGQN.js";
import "../chunk-SHVSS5WN.js";
import "../chunk-UN5DENJG.js";
import "../chunk-WTDDY4SE.js";
import "../chunk-NG3XLTNK.js";
import "../chunk-7NQHI6ZF.js";
import "../chunk-BJHPWHFO.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-WDOGA3AR.js";
import "../chunk-AOGYP6JO.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-MTLRNOSN.js";
import "../chunk-3BTKBUIM.js";
import "../chunk-W7SCD2GT.js";
import "../chunk-QDZX4RLS.js";
import "../chunk-XFNITGGT.js";
import {
  default_default,
  mergeLocales
} from "../chunk-JAWHQSZK.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// src/preset-sheets-core-with-worker/main.ts
var { univer, univerAPI } = createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    zhCN: mergeLocales(
      zh_CN_default2,
      zh_CN_default4,
      zh_CN_default,
      zh_CN_default3,
      zh_CN_default5,
      zh_CN_default6,
      zh_CN_default7,
      zh_CN_default8,
      zh_CN_default9,
      zh_CN_default10,
      zh_CN_default11
    )
  },
  theme: default_default,
  presets: [
    UniverSheetsCorePreset({
      workerURL: new Worker(new URL("./worker.js", import.meta.url), { type: "module" })
    }),
    UniverSheetsDrawingPreset(),
    UniverSheetsConditionalFormattingPreset(),
    UniverSheetsFilterPreset(),
    UniverSheetsHyperLinkPreset(),
    UniverSheetsDataValidationPreset(),
    UniverSheetsFindReplacePreset(),
    UniverSheetsNotePreset(),
    UniverSheetsSortPreset(),
    UniverSheetsTablePreset(),
    UniverSheetsThreadCommentPreset()
  ]
});
univerAPI.createWorkbook(DEFAULT_WORKBOOK_DATA_DEMO);
window.univer = univer;
window.univerAPI = univerAPI;
