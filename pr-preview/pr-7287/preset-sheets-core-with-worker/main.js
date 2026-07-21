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
} from "../chunk-GB7MIHR6.js";
import "../chunk-ULMLKTVQ.js";
import "../chunk-HVLZ3YIN.js";
import "../chunk-KD2GLRUW.js";
import "../chunk-DY6MPHOV.js";
import "../chunk-W3R5PGIT.js";
import "../chunk-JXDVA3GL.js";
import "../chunk-UZEQAB7P.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GNXEBRMD.js";
import {
  createUniver
} from "../chunk-W3O7664Y.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-WCR2IDAH.js";
import "../chunk-EYCYDX25.js";
import "../chunk-MYGL3YP2.js";
import "../chunk-BVQ4PSI2.js";
import "../chunk-IKBDRPKY.js";
import "../chunk-CDETSGGG.js";
import "../chunk-MSBPQTCM.js";
import "../chunk-MO5I6STJ.js";
import "../chunk-Q5BVY6ZY.js";
import "../chunk-44Y3UKXQ.js";
import "../chunk-646UD4P3.js";
import "../chunk-EYS3QUF6.js";
import "../chunk-BDSLBBPJ.js";
import "../chunk-NVVLMKOI.js";
import "../chunk-4CEQW3KS.js";
import "../chunk-OQ3KUPUS.js";
import "../chunk-IDCFSUEG.js";
import "../chunk-FIIBSXWG.js";
import "../chunk-3VCKAITY.js";
import "../chunk-TTOHCSDV.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-UP2CNROP.js";
import "../chunk-KOO7MV2Y.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-MIQDXCVC.js";
import "../chunk-RT67ICL6.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-LX2DEVI5.js";
import "../chunk-ON7MQNKU.js";
import {
  default_default,
  mergeLocales
} from "../chunk-V7YB6CU5.js";
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
