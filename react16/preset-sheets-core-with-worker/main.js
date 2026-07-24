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
} from "../chunk-BACIKJQN.js";
import "../chunk-NGDYTD4T.js";
import "../chunk-LTPUGG2O.js";
import "../chunk-DMVK7GVH.js";
import "../chunk-ZNDKQOZV.js";
import "../chunk-KN3BADHM.js";
import "../chunk-DT77EJWT.js";
import "../chunk-EO5A6IE3.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-2K3GSJAR.js";
import {
  createUniver
} from "../chunk-I54FJSJ3.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-4OO2EXOI.js";
import "../chunk-PFP5CYBP.js";
import "../chunk-MDPVZBTN.js";
import "../chunk-VQS6CJUZ.js";
import "../chunk-KMSZGGYN.js";
import "../chunk-JX7M23K3.js";
import "../chunk-N74P77RH.js";
import "../chunk-ASI3OUH3.js";
import "../chunk-5BQDEOUY.js";
import "../chunk-22OHCTFH.js";
import "../chunk-LOQZRNHL.js";
import "../chunk-4X6RCN5O.js";
import "../chunk-2W4YFPUY.js";
import "../chunk-LMBWBPMY.js";
import "../chunk-PO5ZGHQT.js";
import "../chunk-SYM4OOBL.js";
import "../chunk-UOJQIWUM.js";
import "../chunk-PH4B7R6S.js";
import "../chunk-K6BRYOOT.js";
import "../chunk-B5HC4CAF.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-GAR7NJMN.js";
import "../chunk-5DJSLAB5.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-F64YQP6G.js";
import "../chunk-7RKWV2OH.js";
import "../chunk-IO6QFEOM.js";
import "../chunk-7OMJQ65A.js";
import "../chunk-HGZHCRP5.js";
import {
  default_default,
  mergeLocales
} from "../chunk-RLTCIETE.js";
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
