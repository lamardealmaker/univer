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
} from "../chunk-RATZHA2Y.js";
import "../chunk-GIDUKI5Z.js";
import "../chunk-MXJL4OV7.js";
import "../chunk-4PCVT374.js";
import "../chunk-7SOVRCQ3.js";
import "../chunk-OSHTO4MU.js";
import "../chunk-AZZLK32P.js";
import "../chunk-TPDPHTVQ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GNXEBRMD.js";
import {
  createUniver
} from "../chunk-OFS64K2O.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-GS5EJQL7.js";
import "../chunk-ODRS4BPC.js";
import "../chunk-46RM6LYT.js";
import "../chunk-P4X5YP7L.js";
import "../chunk-QP3UPM3V.js";
import "../chunk-OD6RBLDX.js";
import "../chunk-7JX36UGS.js";
import "../chunk-QXRQSVXI.js";
import "../chunk-HOT5SNCA.js";
import "../chunk-GPHC2VR3.js";
import "../chunk-PD2ASMGH.js";
import "../chunk-KPFGYC3N.js";
import "../chunk-PN7TKNNN.js";
import "../chunk-E3EB6O3S.js";
import "../chunk-2SAEFH3U.js";
import "../chunk-RW2YD3Y5.js";
import "../chunk-FVK4MXS4.js";
import "../chunk-SHIK4MHB.js";
import "../chunk-NCPGOBBL.js";
import "../chunk-BEQH3R6D.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-4CX7GQL6.js";
import "../chunk-3ZBE4CU5.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-XRZRRLSI.js";
import "../chunk-RT67ICL6.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-OMRVEMWW.js";
import "../chunk-62P57WM5.js";
import {
  default_default,
  mergeLocales
} from "../chunk-6QPW3C4R.js";
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
