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
} from "../chunk-6L4DZ5Q3.js";
import "../chunk-UNVO6SFX.js";
import "../chunk-FRP4FWW7.js";
import "../chunk-NM476PP2.js";
import "../chunk-SR4OAAGK.js";
import "../chunk-2OJQ3S3X.js";
import "../chunk-FPDUODSW.js";
import "../chunk-4GHQQBKI.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-ZO6HWFIS.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-YW4SQCWM.js";
import "../chunk-WTWGCB64.js";
import "../chunk-5JOPERQH.js";
import "../chunk-WIXV75TY.js";
import "../chunk-L2N3KKQ3.js";
import "../chunk-LX7LNAEK.js";
import "../chunk-5ZIMRK3H.js";
import "../chunk-UHH5ANH6.js";
import "../chunk-H4PZB2JA.js";
import "../chunk-UFYT4BOO.js";
import "../chunk-WLWR54BP.js";
import "../chunk-VJYXYJC4.js";
import "../chunk-XC7VZYVD.js";
import "../chunk-BMXSIPEW.js";
import "../chunk-QIFPIV7Z.js";
import "../chunk-G5JJLNXH.js";
import "../chunk-KIFDQJAX.js";
import "../chunk-D6ENEVRM.js";
import "../chunk-WWXZNS2Y.js";
import "../chunk-ZFXRHBTR.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-O5REJQTM.js";
import "../chunk-NHWHHRSS.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-IGTAP655.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-IM332U3Z.js";
import "../chunk-YR3EBCJL.js";
import {
  default_default,
  mergeLocales
} from "../chunk-LWQF5CC6.js";
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
