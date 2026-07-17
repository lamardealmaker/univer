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
} from "../chunk-2QDHVYPY.js";
import "../chunk-C5REWIAB.js";
import "../chunk-PF5TI3HO.js";
import "../chunk-DY5BZELQ.js";
import "../chunk-WH4BM4GL.js";
import "../chunk-AAGI625O.js";
import "../chunk-JSAI2DTX.js";
import "../chunk-QELL5DW3.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-3DKIKJI3.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-CI42JLZM.js";
import "../chunk-GKS2NKCV.js";
import "../chunk-2FPGYEZ6.js";
import "../chunk-FANQ26OK.js";
import "../chunk-MRZXBYKS.js";
import "../chunk-57CHML7Z.js";
import "../chunk-TSFOTNLB.js";
import "../chunk-6UWY6G4O.js";
import "../chunk-CYMQDOOF.js";
import "../chunk-ANWCRG6I.js";
import "../chunk-2LXWY3TI.js";
import "../chunk-54PFHOII.js";
import "../chunk-VYUSG6PR.js";
import "../chunk-4UI5G7GT.js";
import "../chunk-6CSUR6OU.js";
import "../chunk-TNZXXRP7.js";
import "../chunk-VJXY5Q4C.js";
import "../chunk-HOWLSWGE.js";
import "../chunk-7BSR2VVD.js";
import "../chunk-LKQHL32Y.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-L4PCTLJZ.js";
import "../chunk-7XL7FWM6.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-CQ7UYAIQ.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-7QDY2TDF.js";
import "../chunk-5BWHODX4.js";
import {
  default_default,
  mergeLocales
} from "../chunk-7X4H4BYU.js";
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
