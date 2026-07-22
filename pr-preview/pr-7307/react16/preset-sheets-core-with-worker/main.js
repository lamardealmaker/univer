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
} from "../chunk-I73YOB4R.js";
import "../chunk-6ULBITCK.js";
import "../chunk-C6JWEZT5.js";
import "../chunk-OHK2YLUL.js";
import "../chunk-HF6ZMWZS.js";
import "../chunk-F6WTLZQZ.js";
import "../chunk-2JQVS7EW.js";
import "../chunk-WKAKIMUY.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-63PUBAAR.js";
import {
  createUniver
} from "../chunk-DDGKQNUW.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-XX5SOVYM.js";
import "../chunk-AHKSLU7L.js";
import "../chunk-EQNFVTYW.js";
import "../chunk-HMVVY6WB.js";
import "../chunk-5U3GYV2F.js";
import "../chunk-PK2T7OTC.js";
import "../chunk-VQ2VCNXB.js";
import "../chunk-JNQHMV7W.js";
import "../chunk-4UQWQTXY.js";
import "../chunk-ZM5DWJZT.js";
import "../chunk-7OWRHZI6.js";
import "../chunk-TGLDH3ZQ.js";
import "../chunk-7FR4UL6G.js";
import "../chunk-FURGFDHX.js";
import "../chunk-HG4ERB2L.js";
import "../chunk-PHGWEDHE.js";
import "../chunk-IGZPOXGH.js";
import "../chunk-ZKWWW5P3.js";
import "../chunk-WQ6A4BAN.js";
import "../chunk-B7WTVZJN.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-4TZYBZA3.js";
import "../chunk-QECJTCNJ.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-EYXLHBFO.js";
import "../chunk-RT67ICL6.js";
import "../chunk-6E3W7VDH.js";
import "../chunk-FSBNILI5.js";
import "../chunk-EBG4Y6CA.js";
import {
  default_default,
  mergeLocales
} from "../chunk-HO2OWOV7.js";
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
