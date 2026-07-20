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
} from "../chunk-JXMQTFHI.js";
import "../chunk-DFFVTEER.js";
import "../chunk-ZDSOB3SD.js";
import "../chunk-TUNUJY22.js";
import "../chunk-5REKGYZO.js";
import "../chunk-FTDECQOW.js";
import "../chunk-FE6P5FHG.js";
import "../chunk-7FOEJNL2.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GNXEBRMD.js";
import {
  createUniver
} from "../chunk-PVTQB425.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-WHFCJ4ZD.js";
import "../chunk-SSABSVIB.js";
import "../chunk-MKNYGO4P.js";
import "../chunk-VGMSDXHS.js";
import "../chunk-Q2SQO7GH.js";
import "../chunk-U4LRDZ4G.js";
import "../chunk-FPW3TDOT.js";
import "../chunk-EHQ4TIWW.js";
import "../chunk-KJB4CDPG.js";
import "../chunk-AMQ3UU6L.js";
import "../chunk-CGJROTPT.js";
import "../chunk-V7YI4T7X.js";
import "../chunk-W7VCB5UH.js";
import "../chunk-WXYUWY2D.js";
import "../chunk-X4L7PCLR.js";
import "../chunk-6YC3DAKS.js";
import "../chunk-NRLD62QL.js";
import "../chunk-HQMHRLDX.js";
import "../chunk-Z3WZ4VF2.js";
import "../chunk-PREI6LBO.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-7ML65O4Y.js";
import "../chunk-6NABFDFL.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-CY6BQZUF.js";
import "../chunk-RT67ICL6.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-2E52FVOU.js";
import "../chunk-RQBF6JVW.js";
import {
  default_default,
  mergeLocales
} from "../chunk-KCBSKUX4.js";
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
