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
} from "../chunk-RQP563VH.js";
import "../chunk-HNHFG5E7.js";
import "../chunk-6T6QAGLQ.js";
import "../chunk-VSUP6LFO.js";
import "../chunk-LZNO7XNG.js";
import "../chunk-LST2CBWB.js";
import "../chunk-TAO7YLDO.js";
import "../chunk-IOPGM32D.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-63PUBAAR.js";
import {
  createUniver
} from "../chunk-JMPSR523.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-W2IPK4JO.js";
import "../chunk-JCDUMJDI.js";
import "../chunk-JMDMMX7Y.js";
import "../chunk-6BRU44GF.js";
import "../chunk-4FKDO22W.js";
import "../chunk-WQG2BVGK.js";
import "../chunk-JZKYDZC3.js";
import "../chunk-NYHMWKFO.js";
import "../chunk-ZUX2FETO.js";
import "../chunk-EAO5EEG4.js";
import "../chunk-2C33NJE7.js";
import "../chunk-WRLVC2BQ.js";
import "../chunk-VAVZOLQ5.js";
import "../chunk-4W5TOARO.js";
import "../chunk-FYOQAQ6J.js";
import "../chunk-4BJNTCKW.js";
import "../chunk-KXMMDJM5.js";
import "../chunk-OSWEEDUS.js";
import "../chunk-WLGHV6AH.js";
import "../chunk-2XISZNLI.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-6AM74UQX.js";
import "../chunk-3WIXW4B2.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-JTCGG6PX.js";
import "../chunk-RT67ICL6.js";
import "../chunk-6E3W7VDH.js";
import "../chunk-BCAS46ZI.js";
import "../chunk-CFJENZU7.js";
import {
  default_default,
  mergeLocales
} from "../chunk-QO3C2C2Z.js";
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
