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
} from "../chunk-NQWMOPNR.js";
import "../chunk-T3MI5V2M.js";
import "../chunk-K2D4TYUS.js";
import "../chunk-AKHW6ZOD.js";
import "../chunk-OXBI2SF2.js";
import "../chunk-KSCMWR5H.js";
import "../chunk-3MAQ3IOH.js";
import "../chunk-3GKLVJ2E.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-63PUBAAR.js";
import {
  createUniver
} from "../chunk-6FMCMWDP.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-ZT2LWEMD.js";
import "../chunk-T57EISX6.js";
import "../chunk-PVX5TUQV.js";
import "../chunk-FFYUVA6P.js";
import "../chunk-MEB7CVKE.js";
import "../chunk-7O7JON3Y.js";
import "../chunk-5Q54XOV2.js";
import "../chunk-QBQGR3T3.js";
import "../chunk-PRWGWPE7.js";
import "../chunk-77DKWK35.js";
import "../chunk-6YIJWKIY.js";
import "../chunk-A4CGI55K.js";
import "../chunk-Q3OLG6W5.js";
import "../chunk-RLLRRRGG.js";
import "../chunk-GAQWO6WO.js";
import "../chunk-CQNVWY62.js";
import "../chunk-KE5LB26U.js";
import "../chunk-JIG7REER.js";
import "../chunk-RR7Q7XGK.js";
import "../chunk-GPIGWJPB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-VEOKQKQZ.js";
import "../chunk-ZPHG2RB6.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-C3FJHTQU.js";
import "../chunk-RT67ICL6.js";
import "../chunk-6E3W7VDH.js";
import "../chunk-3L7AA2MQ.js";
import "../chunk-S2JHE4EK.js";
import {
  default_default,
  mergeLocales
} from "../chunk-7UDGGJR5.js";
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
