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
} from "../chunk-DV2WMC3H.js";
import "../chunk-3AQVMLAW.js";
import "../chunk-7MF7T6KH.js";
import "../chunk-NHTRM7X5.js";
import "../chunk-4OJLQW4K.js";
import "../chunk-QQCI5AYE.js";
import "../chunk-3ACGPJXL.js";
import "../chunk-BAU3OKZR.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-BNUP2FQV.js";
import {
  createUniver
} from "../chunk-PPZLBUZL.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-QRXF5N6T.js";
import "../chunk-GOX7XG4R.js";
import "../chunk-ZAEWHMTE.js";
import "../chunk-CUFPDSCL.js";
import "../chunk-JCUWNQ2Y.js";
import "../chunk-MYIK6ZKX.js";
import "../chunk-7Y6TA4OB.js";
import "../chunk-S4P4F45X.js";
import "../chunk-5PNUBHZC.js";
import "../chunk-R6KPCXJQ.js";
import "../chunk-MF7LRCAL.js";
import "../chunk-PGJL75VV.js";
import "../chunk-P2I5HKIR.js";
import "../chunk-APBWMNOX.js";
import "../chunk-JLUEHN5E.js";
import "../chunk-NSNOPB3X.js";
import "../chunk-HM4FXDLN.js";
import "../chunk-FRDCE3MS.js";
import "../chunk-ZFUVZZV4.js";
import "../chunk-CTCLZJJS.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-MVZAHYFO.js";
import "../chunk-GQUTXII2.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-I7VZJZMU.js";
import "../chunk-5OGCV4NR.js";
import "../chunk-CKXFPMES.js";
import "../chunk-7HAHH2CT.js";
import "../chunk-IQR62XS7.js";
import {
  default_default,
  mergeLocales
} from "../chunk-2CS7RBBN.js";
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
