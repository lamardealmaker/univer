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
} from "../chunk-WM4F3HZE.js";
import "../chunk-QJ2HFBGP.js";
import "../chunk-ASYNUHCX.js";
import "../chunk-VJX7AIVO.js";
import "../chunk-QL7H55F6.js";
import "../chunk-CJ5YK7KN.js";
import "../chunk-TZJXNVYS.js";
import "../chunk-YOLGGFFO.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-CNGJ6CU4.js";
import {
  createUniver
} from "../chunk-WMOYKJ5D.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-5HOTS2TM.js";
import "../chunk-PMW36TRE.js";
import "../chunk-PDXH3HDK.js";
import "../chunk-25POX3ZX.js";
import "../chunk-L4PBFCX6.js";
import "../chunk-BPQPEARQ.js";
import "../chunk-A7LHZAUZ.js";
import "../chunk-OTP2E3J6.js";
import "../chunk-DUVAEDV5.js";
import "../chunk-AFA7REW7.js";
import "../chunk-XWDCOBVQ.js";
import "../chunk-2FC7ABTG.js";
import "../chunk-TLBWQULZ.js";
import "../chunk-N4XH5WKY.js";
import "../chunk-TMH6CWGL.js";
import "../chunk-ZG27HWUS.js";
import "../chunk-IVU4TKXX.js";
import "../chunk-FY5J4V3Q.js";
import "../chunk-AHHRULAS.js";
import "../chunk-JWN5VN3B.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-7V2XEAWA.js";
import "../chunk-22BOW4EN.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-G2ZW2BDM.js";
import "../chunk-7RKWV2OH.js";
import "../chunk-O2N4YVYW.js";
import "../chunk-47MGLYD5.js";
import "../chunk-PW5H4QGM.js";
import {
  default_default,
  mergeLocales
} from "../chunk-UEDAY4IO.js";
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
