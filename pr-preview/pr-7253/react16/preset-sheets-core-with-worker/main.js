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
} from "../chunk-5WK6QGRV.js";
import "../chunk-5PAM4KBW.js";
import "../chunk-UHUICAXY.js";
import "../chunk-S5KD7ZUX.js";
import "../chunk-M4PABR5M.js";
import "../chunk-UI53VB6H.js";
import "../chunk-GWX4KRLL.js";
import "../chunk-KJGKMPOQ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-UYNP7FIL.js";
import {
  createUniver
} from "../chunk-EVXRPISL.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-WT4W5P7Q.js";
import "../chunk-OTCJ7PZ4.js";
import "../chunk-5YBJPJ37.js";
import "../chunk-DO7KXAZ7.js";
import "../chunk-DJQEO46E.js";
import "../chunk-7FJX3F4Q.js";
import "../chunk-KJWQ7YIX.js";
import "../chunk-VOWM4RJR.js";
import "../chunk-SKBCKMMR.js";
import "../chunk-55GRUYXI.js";
import "../chunk-PJ4JN5BR.js";
import "../chunk-XBVP63BL.js";
import "../chunk-BM666JEA.js";
import "../chunk-EURSUFWT.js";
import "../chunk-C2MTMN7J.js";
import "../chunk-ESRNT5VW.js";
import "../chunk-JO72ADGH.js";
import "../chunk-JF7CL3AQ.js";
import "../chunk-S2GYUVVL.js";
import "../chunk-LZ4NLJXK.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-R3FURYVI.js";
import "../chunk-GIXTJOYT.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-DVJ3ZZW2.js";
import "../chunk-MNMA3DIW.js";
import "../chunk-CKXFPMES.js";
import "../chunk-EMNNNI6N.js";
import "../chunk-623UIBHA.js";
import {
  default_default,
  mergeLocales
} from "../chunk-DJVW44P3.js";
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
