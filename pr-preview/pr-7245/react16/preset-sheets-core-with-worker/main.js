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
} from "../chunk-77PUWG75.js";
import "../chunk-XQTXDYJV.js";
import "../chunk-QNE72PFW.js";
import "../chunk-FHTCH6D4.js";
import "../chunk-LV47672S.js";
import "../chunk-KI3FCATR.js";
import "../chunk-ZZ3AIR6M.js";
import "../chunk-3GGQ7PXV.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-UYNP7FIL.js";
import {
  createUniver
} from "../chunk-D3SZPKFT.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-Z4GUXYEB.js";
import "../chunk-RHTTCIYL.js";
import "../chunk-HB6QN4Z6.js";
import "../chunk-M5HICVVS.js";
import "../chunk-KVRF5RET.js";
import "../chunk-SQVSQT7T.js";
import "../chunk-SGHOWDTQ.js";
import "../chunk-O7EFQKI6.js";
import "../chunk-BIVLMGT3.js";
import "../chunk-7LOHM2KY.js";
import "../chunk-AKIITBJ4.js";
import "../chunk-6RIJSM3K.js";
import "../chunk-OLGYSP7K.js";
import "../chunk-VJDAUND5.js";
import "../chunk-A46H67YQ.js";
import "../chunk-O6URL6FP.js";
import "../chunk-ISA77AEF.js";
import "../chunk-FLHV2W57.js";
import "../chunk-VZ7OGHVL.js";
import "../chunk-AZF3DKFC.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-23JPBHQA.js";
import "../chunk-P5AMHYIN.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-C7PERF6S.js";
import "../chunk-MNMA3DIW.js";
import "../chunk-CKXFPMES.js";
import "../chunk-SSB36RZY.js";
import "../chunk-QYILVMFA.js";
import {
  default_default,
  mergeLocales
} from "../chunk-SDQSMZKV.js";
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
