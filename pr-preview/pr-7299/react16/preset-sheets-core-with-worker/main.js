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
} from "../chunk-XDMUELR4.js";
import "../chunk-DGNXPBOO.js";
import "../chunk-BAD2INHV.js";
import "../chunk-XZ5VIRML.js";
import "../chunk-PEHRIIDN.js";
import "../chunk-QLA67DFJ.js";
import "../chunk-MO7ANF65.js";
import "../chunk-4DS7Q5YJ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-63PUBAAR.js";
import {
  createUniver
} from "../chunk-VH7M5EOK.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-GBL3PDEY.js";
import "../chunk-HEBJZYU6.js";
import "../chunk-LICFVG4T.js";
import "../chunk-2C3KMU27.js";
import "../chunk-I3HNE6OK.js";
import "../chunk-JCL2EZMA.js";
import "../chunk-WL4TCTFA.js";
import "../chunk-3IAP3AZ7.js";
import "../chunk-67SAKULC.js";
import "../chunk-YUQEJC7N.js";
import "../chunk-BL4KLOAB.js";
import "../chunk-MYLWSSFO.js";
import "../chunk-QF7C6WXX.js";
import "../chunk-WMI7TYEP.js";
import "../chunk-7V7O7R7T.js";
import "../chunk-XR64V7IG.js";
import "../chunk-YY3CB3JX.js";
import "../chunk-UY626MVT.js";
import "../chunk-I36BEPXV.js";
import "../chunk-5RF6QEJE.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-3XYSHYJO.js";
import "../chunk-52QD5ZOZ.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-5FVFOJ5F.js";
import "../chunk-RT67ICL6.js";
import "../chunk-6E3W7VDH.js";
import "../chunk-O7SFXNR4.js";
import "../chunk-ZUW5CMIO.js";
import {
  default_default,
  mergeLocales
} from "../chunk-5FNWWQ47.js";
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
