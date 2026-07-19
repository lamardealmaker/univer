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
} from "../chunk-I7644BC2.js";
import "../chunk-ZDVS5OM4.js";
import "../chunk-D2UTKP4C.js";
import "../chunk-IFEPPHV4.js";
import "../chunk-YLXFPYV3.js";
import "../chunk-5DCN56QG.js";
import "../chunk-DOOW3NLH.js";
import "../chunk-K54GOBMG.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-5LV5RC22.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-2KLHKDEV.js";
import "../chunk-UOWHWB7V.js";
import "../chunk-4I3WNU75.js";
import "../chunk-QS5CFCEG.js";
import "../chunk-EZOPNH5V.js";
import "../chunk-HIRNYZUS.js";
import "../chunk-NUZYTKHD.js";
import "../chunk-DRF5FT4D.js";
import "../chunk-NQT6WNFH.js";
import "../chunk-7ZUFXX7Z.js";
import "../chunk-VXJUZPNP.js";
import "../chunk-HILEPQAU.js";
import "../chunk-ADAHA7HX.js";
import "../chunk-T5RVU3KX.js";
import "../chunk-QSJCFPF6.js";
import "../chunk-BL3RQKCI.js";
import "../chunk-UR2EVOCB.js";
import "../chunk-GN6BNH6W.js";
import "../chunk-T6XN4F5H.js";
import "../chunk-5X5VM2J5.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-EZPYXFOP.js";
import "../chunk-RRZXYRJ4.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-PHXA7DTN.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-7T2XFBQ7.js";
import "../chunk-6EUTIKVY.js";
import {
  default_default,
  mergeLocales
} from "../chunk-YZCASKU5.js";
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
