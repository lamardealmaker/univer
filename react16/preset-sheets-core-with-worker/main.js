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
} from "../chunk-AC3BWHHO.js";
import "../chunk-6R6Q6JY7.js";
import "../chunk-IFA2N6X6.js";
import "../chunk-DSXQFZNM.js";
import "../chunk-VATEJXJC.js";
import "../chunk-TIN6D3JU.js";
import "../chunk-CYVDSYXT.js";
import "../chunk-IQBBNL5T.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-63PUBAAR.js";
import {
  createUniver
} from "../chunk-DDGKQNUW.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-5QITRLLT.js";
import "../chunk-TSHIDCUO.js";
import "../chunk-IWENHCNN.js";
import "../chunk-MOY6FAH3.js";
import "../chunk-XCE6EMHQ.js";
import "../chunk-PK2T7OTC.js";
import "../chunk-SU7XEKFZ.js";
import "../chunk-3UM4KHZD.js";
import "../chunk-FMUHC6KL.js";
import "../chunk-LV22FCWO.js";
import "../chunk-4QKT7R5V.js";
import "../chunk-QPLOI7KP.js";
import "../chunk-V6HXYYIT.js";
import "../chunk-W63J6SIM.js";
import "../chunk-HG4ERB2L.js";
import "../chunk-PHGWEDHE.js";
import "../chunk-NQNHUMG3.js";
import "../chunk-ZKWWW5P3.js";
import "../chunk-TM7KTVMI.js";
import "../chunk-7WKE7NN5.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-4TZYBZA3.js";
import "../chunk-QECJTCNJ.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-MSS67GGG.js";
import "../chunk-RT67ICL6.js";
import "../chunk-6E3W7VDH.js";
import "../chunk-FTAZ6D2Q.js";
import "../chunk-HTWP7ETG.js";
import {
  default_default,
  mergeLocales
} from "../chunk-HO2OWOV7.js";
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
