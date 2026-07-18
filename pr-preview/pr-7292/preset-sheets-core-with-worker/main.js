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
} from "../chunk-JI6WWCL6.js";
import "../chunk-NG5AOQVK.js";
import "../chunk-B5KFRK6A.js";
import "../chunk-FQ2MZFU2.js";
import "../chunk-V5KPGOJM.js";
import "../chunk-WFIW7JXO.js";
import "../chunk-GDT6IPE5.js";
import "../chunk-ADIQAT3H.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-374DJ6YY.js";
import {
  createUniver
} from "../chunk-SV2IGJBB.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-X5DD7NCO.js";
import "../chunk-CJBSQFJ2.js";
import "../chunk-JJKSHYIN.js";
import "../chunk-AEFHXUKU.js";
import "../chunk-UEY4NPMX.js";
import "../chunk-3LMQJO26.js";
import "../chunk-ZWMXUPGO.js";
import "../chunk-A46657O2.js";
import "../chunk-QGZQGIZ2.js";
import "../chunk-XB4RNRAJ.js";
import "../chunk-QJ77NYHB.js";
import "../chunk-RLVTVZZU.js";
import "../chunk-AVVY4FL4.js";
import "../chunk-VAMRQPL7.js";
import "../chunk-D32HWUDS.js";
import "../chunk-TPIHRZCJ.js";
import "../chunk-N4C3CZV2.js";
import "../chunk-GBMWEQ3Y.js";
import "../chunk-VTI6APCV.js";
import "../chunk-QX73NBUB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-IQMWKPZP.js";
import "../chunk-IGNDEM5L.js";
import "../chunk-L6MCIUQR.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-E5XWEU65.js";
import "../chunk-JXXTLVNI.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-TI6U6U6U.js";
import "../chunk-E6DJCDTN.js";
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
