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
} from "../chunk-WL5T3566.js";
import "../chunk-2DEILZRL.js";
import "../chunk-AJA3AWYR.js";
import "../chunk-23HFZ7IJ.js";
import "../chunk-Z4XQV2TC.js";
import "../chunk-PXZAA6PG.js";
import "../chunk-XUGG3FXM.js";
import "../chunk-4VLTE3YT.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GF5UTAQD.js";
import {
  createUniver
} from "../chunk-KRZ7OLBS.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-6M57G7SZ.js";
import "../chunk-5AEMNLC7.js";
import "../chunk-WYFQSN22.js";
import "../chunk-WGU3KKR3.js";
import "../chunk-EWVXPTUI.js";
import "../chunk-RA5URZRD.js";
import "../chunk-CNQBCG2N.js";
import "../chunk-NX6RIRGW.js";
import "../chunk-IHRYRAGV.js";
import "../chunk-74PNJ6ER.js";
import "../chunk-JS5QLNPA.js";
import "../chunk-KSHJKSBK.js";
import "../chunk-JNE34MJT.js";
import "../chunk-PV3BL3QF.js";
import "../chunk-6UVVNMOM.js";
import "../chunk-IS75OT57.js";
import "../chunk-HV43MYVT.js";
import "../chunk-4JVBNTL3.js";
import "../chunk-5M2S7MS4.js";
import "../chunk-Z34WP5PA.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-C72VBTJ2.js";
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
