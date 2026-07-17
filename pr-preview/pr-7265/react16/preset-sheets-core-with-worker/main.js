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
} from "../chunk-ZS2VT3WH.js";
import "../chunk-7PJ2CUO2.js";
import "../chunk-UOVEX7KS.js";
import "../chunk-APTPNAOT.js";
import "../chunk-WCIWVAD7.js";
import "../chunk-BI4QOFZ5.js";
import "../chunk-LOZSLAJU.js";
import "../chunk-K227GZ7V.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-BNUP2FQV.js";
import {
  createUniver
} from "../chunk-PPZLBUZL.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-NVTGXAQL.js";
import "../chunk-MG6N4L3J.js";
import "../chunk-W7TFRXXY.js";
import "../chunk-E6CK3ZR6.js";
import "../chunk-MPGS2CUR.js";
import "../chunk-MYIK6ZKX.js";
import "../chunk-224LOGIS.js";
import "../chunk-CKZ33EWB.js";
import "../chunk-6B6ZSLV7.js";
import "../chunk-HYCBNN72.js";
import "../chunk-R5EI76RR.js";
import "../chunk-QMQR5CDV.js";
import "../chunk-A33UBOND.js";
import "../chunk-ACGNN5DC.js";
import "../chunk-JLUEHN5E.js";
import "../chunk-NSNOPB3X.js";
import "../chunk-2DZ6ROUL.js";
import "../chunk-FRDCE3MS.js";
import "../chunk-ZFUVZZV4.js";
import "../chunk-FLZJBOXA.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-MVZAHYFO.js";
import "../chunk-GQUTXII2.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-KFC6W3IV.js";
import "../chunk-5OGCV4NR.js";
import "../chunk-CKXFPMES.js";
import "../chunk-H2PZ3C73.js";
import "../chunk-I7AO7NZF.js";
import {
  default_default,
  mergeLocales
} from "../chunk-2CS7RBBN.js";
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
