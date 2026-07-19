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
} from "../chunk-XHME64Q4.js";
import "../chunk-SCBLV3CU.js";
import "../chunk-GDYF2HQ7.js";
import "../chunk-CJNACSUO.js";
import "../chunk-UYCIXNNK.js";
import "../chunk-IO4IYXGS.js";
import "../chunk-35ZUSD6B.js";
import "../chunk-FCIQWITR.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-NKY4DFX6.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-KLKBTD3Q.js";
import "../chunk-64VBEDYQ.js";
import "../chunk-XPPYAEES.js";
import "../chunk-BP6P4G7L.js";
import "../chunk-THQP4RUQ.js";
import "../chunk-BZFZLXIV.js";
import "../chunk-IHVLTPVO.js";
import "../chunk-RCVW3OET.js";
import "../chunk-A6IHUNW3.js";
import "../chunk-J2CDTN5X.js";
import "../chunk-5NZKCEGQ.js";
import "../chunk-K233QV2H.js";
import "../chunk-BDGBQQMX.js";
import "../chunk-THFR4UFV.js";
import "../chunk-O4K2WMHD.js";
import "../chunk-J7QLDUYX.js";
import "../chunk-JT44TF2Z.js";
import "../chunk-GBSDMMMU.js";
import "../chunk-4CFHPDEB.js";
import "../chunk-QKGVWKWV.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-CPC53RJS.js";
import "../chunk-O2FBART7.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LTKAZ3YE.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-YJIO2C26.js";
import "../chunk-GHYF6TLP.js";
import {
  default_default,
  mergeLocales
} from "../chunk-GF474R7N.js";
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
