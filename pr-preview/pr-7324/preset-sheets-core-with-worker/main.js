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
} from "../chunk-WGG7SW4K.js";
import "../chunk-UDLBQTH4.js";
import "../chunk-KHIQTWCK.js";
import "../chunk-XHA6ZRA5.js";
import "../chunk-VPMEPA72.js";
import "../chunk-MDNIISKB.js";
import "../chunk-Z4DHKN4F.js";
import "../chunk-JEII7SUK.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-666N4LWS.js";
import {
  createUniver
} from "../chunk-KSRE4GRD.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-LSTU6AGW.js";
import "../chunk-ZHMVAA35.js";
import "../chunk-CHNTCDZZ.js";
import "../chunk-HTVWYSER.js";
import "../chunk-6S44BJ3H.js";
import "../chunk-23Z7JYMP.js";
import "../chunk-PG7YA2D2.js";
import "../chunk-QK2SJEFZ.js";
import "../chunk-IJTPQ5GC.js";
import "../chunk-BDCYWOZZ.js";
import "../chunk-F2O4YXLR.js";
import "../chunk-22OGS6ZP.js";
import "../chunk-7UMULUER.js";
import "../chunk-7UMLLGWV.js";
import "../chunk-NUDYAHB3.js";
import "../chunk-MYDLZHHT.js";
import "../chunk-Q2HUCG6N.js";
import "../chunk-P2KMD3TF.js";
import "../chunk-7QHVWLSA.js";
import "../chunk-IQQDFJU7.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-XEKXAVJZ.js";
import "../chunk-TSLRAHBE.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-XUPIB4PS.js";
import "../chunk-3BTKBUIM.js";
import "../chunk-HQGT7UAX.js";
import "../chunk-NTW4V4SW.js";
import "../chunk-54D2JQ6Q.js";
import {
  default_default,
  mergeLocales
} from "../chunk-LLQCVTT7.js";
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
