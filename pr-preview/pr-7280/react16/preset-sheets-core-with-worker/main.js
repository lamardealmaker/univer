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
} from "../chunk-2JWCPJW2.js";
import "../chunk-5D5NDXOF.js";
import "../chunk-C5UO7G5I.js";
import "../chunk-PZSKD7PQ.js";
import "../chunk-N4TSAYG6.js";
import "../chunk-U73SFLS3.js";
import "../chunk-WMVPAZJ2.js";
import "../chunk-R35PTHGV.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-BGQB4UI5.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-KJUELBR2.js";
import "../chunk-4IZ5HUGO.js";
import "../chunk-3X57QTUK.js";
import "../chunk-MGEGATQB.js";
import "../chunk-WZJ5SF3B.js";
import "../chunk-GFGPRFYL.js";
import "../chunk-XS4YMJM4.js";
import "../chunk-C547RORS.js";
import "../chunk-6AEMDDBA.js";
import "../chunk-ANSEKXH2.js";
import "../chunk-5FFVHMRY.js";
import "../chunk-WLT3XFS7.js";
import "../chunk-H46OVIQG.js";
import "../chunk-BJWTFBI2.js";
import "../chunk-AOB7GIDD.js";
import "../chunk-OPCRUSTG.js";
import "../chunk-JFRSDRMT.js";
import "../chunk-5WIOWSVC.js";
import "../chunk-CU2EDUDJ.js";
import "../chunk-JRNM2EKZ.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-ULZVYSIP.js";
import "../chunk-6C7U5TDW.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-6Q2GSEQ3.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-5O7RVKHK.js";
import "../chunk-ZQDF6DXU.js";
import {
  default_default,
  mergeLocales
} from "../chunk-IOWTIYQR.js";
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
