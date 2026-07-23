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
} from "../chunk-SHROQBZU.js";
import "../chunk-JV56K23S.js";
import "../chunk-YTXM36FP.js";
import "../chunk-6A3SL3WY.js";
import "../chunk-KKSGQA6P.js";
import "../chunk-F3QMONU5.js";
import "../chunk-IYCTEJLX.js";
import "../chunk-6CEK6IIM.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GF5UTAQD.js";
import {
  createUniver
} from "../chunk-KRZ7OLBS.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-DMUQRR33.js";
import "../chunk-4X2QWGWF.js";
import "../chunk-P5Z2YJX7.js";
import "../chunk-WGU3KKR3.js";
import "../chunk-EWVXPTUI.js";
import "../chunk-4C7KQKYZ.js";
import "../chunk-CNQBCG2N.js";
import "../chunk-VVWHRFZN.js";
import "../chunk-IHRYRAGV.js";
import "../chunk-74PNJ6ER.js";
import "../chunk-JS5QLNPA.js";
import "../chunk-JBL2WFD7.js";
import "../chunk-D7UM4Y4X.js";
import "../chunk-4QC57VYZ.js";
import "../chunk-6UVVNMOM.js";
import "../chunk-IS75OT57.js";
import "../chunk-YIXFLN5J.js";
import "../chunk-4JVBNTL3.js";
import "../chunk-IPMBU7QA.js";
import "../chunk-XEUCBHET.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-625XF3RN.js";
import "../chunk-WRYXDTJA.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-4HRHY67D.js";
import "../chunk-3BTKBUIM.js";
import "../chunk-6E3W7VDH.js";
import "../chunk-3T2J7QKX.js";
import "../chunk-BPQHTQJ4.js";
import {
  default_default,
  mergeLocales
} from "../chunk-SAVY66LP.js";
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
