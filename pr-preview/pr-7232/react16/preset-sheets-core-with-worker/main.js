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
} from "../chunk-77US4N4D.js";
import "../chunk-6MPJABPT.js";
import "../chunk-FSERFUEN.js";
import "../chunk-OONK66FM.js";
import "../chunk-7H6QHIIE.js";
import "../chunk-ABDCRG5L.js";
import "../chunk-SR64XNB6.js";
import "../chunk-JAXUJMU3.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-6WE2HZ4A.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-45XPEZVE.js";
import "../chunk-M6BUAB2U.js";
import "../chunk-GNXPAMS3.js";
import "../chunk-BDHYIFCR.js";
import "../chunk-TSNXCNPS.js";
import "../chunk-AX4ED444.js";
import "../chunk-LSF4POHA.js";
import "../chunk-WOCJR6SE.js";
import "../chunk-YYQJ5QCL.js";
import "../chunk-7FHRUHDQ.js";
import "../chunk-242QEQV5.js";
import "../chunk-IE6GLFSW.js";
import "../chunk-BTRJGKKP.js";
import "../chunk-5Y32QPUW.js";
import "../chunk-7T5UHT6A.js";
import "../chunk-UEMJT2OC.js";
import "../chunk-HZIF5LJD.js";
import "../chunk-JIZNSXQD.js";
import "../chunk-O5T7UNDA.js";
import "../chunk-ZNKYSGF6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-FOCWDXCV.js";
import "../chunk-FR2PKJFC.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-3FKRKIME.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-G7SXFZ34.js";
import "../chunk-7SRTVBCX.js";
import {
  default_default,
  mergeLocales
} from "../chunk-JKGF6EFW.js";
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
