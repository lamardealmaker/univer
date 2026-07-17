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
} from "../chunk-LRJ43LLQ.js";
import "../chunk-QOX7XTQW.js";
import "../chunk-24AM24JJ.js";
import "../chunk-Z3VAGB2B.js";
import "../chunk-JSBCPFU4.js";
import "../chunk-TLDPK6S3.js";
import "../chunk-2A7HU63J.js";
import "../chunk-75ZJWXYE.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-6I6OVFFR.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-UQCBVF7Y.js";
import "../chunk-PQUPGECZ.js";
import "../chunk-UBMEZJFW.js";
import "../chunk-CFA76K2H.js";
import "../chunk-A22B6KID.js";
import "../chunk-5QNDM7Q5.js";
import "../chunk-6XST37Q6.js";
import "../chunk-HNTJWUQ7.js";
import "../chunk-MM6QQTMY.js";
import "../chunk-AIF6WIMX.js";
import "../chunk-FGO4QI4I.js";
import "../chunk-ZQVTSRNL.js";
import "../chunk-SCOCWE3G.js";
import "../chunk-DJ56KLBT.js";
import "../chunk-XHXHCNUT.js";
import "../chunk-DZOOJNWD.js";
import "../chunk-D2GDYQZE.js";
import "../chunk-KT3O4UYY.js";
import "../chunk-WMOUGJI7.js";
import "../chunk-ZRZVVOUC.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-LH3GFQJE.js";
import "../chunk-S2EUAPWV.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-6LLP25PE.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-MYV6UH5V.js";
import "../chunk-GP5SU7I4.js";
import {
  default_default,
  mergeLocales
} from "../chunk-LAUCJFSS.js";
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
