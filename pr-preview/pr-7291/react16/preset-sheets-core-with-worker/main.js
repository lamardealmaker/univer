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
} from "../chunk-ZH6UI37A.js";
import "../chunk-IZ6OFY5O.js";
import "../chunk-WRYNXJAN.js";
import "../chunk-MISXZRLK.js";
import "../chunk-3TDCR2FF.js";
import "../chunk-HZB6YN4B.js";
import "../chunk-FSMI7FRX.js";
import "../chunk-LXGRZLER.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-374DJ6YY.js";
import {
  createUniver
} from "../chunk-SV2IGJBB.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-LUTQ4ESN.js";
import "../chunk-V2ARNIGT.js";
import "../chunk-AVORJXYT.js";
import "../chunk-ZAOC2G7W.js";
import "../chunk-ALK2366H.js";
import "../chunk-3LMQJO26.js";
import "../chunk-U4NMQSDJ.js";
import "../chunk-4V4RFDLI.js";
import "../chunk-QGFBYSYZ.js";
import "../chunk-RBQEOVAZ.js";
import "../chunk-GWQLZOWW.js";
import "../chunk-E6F5OJNJ.js";
import "../chunk-6ACXN3IF.js";
import "../chunk-JWYUVLZU.js";
import "../chunk-D32HWUDS.js";
import "../chunk-TPIHRZCJ.js";
import "../chunk-AYIHCCXE.js";
import "../chunk-GBMWEQ3Y.js";
import "../chunk-4PDAPJGR.js";
import "../chunk-QUM3JBTX.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-IQMWKPZP.js";
import "../chunk-IGNDEM5L.js";
import "../chunk-L6MCIUQR.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-SKO3JANX.js";
import "../chunk-JXXTLVNI.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-N7S5VYEO.js";
import "../chunk-Z4IK4AV3.js";
import {
  default_default,
  mergeLocales
} from "../chunk-FD3JZH6D.js";
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
