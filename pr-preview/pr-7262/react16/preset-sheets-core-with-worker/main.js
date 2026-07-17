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
} from "../chunk-EB7WOED7.js";
import "../chunk-5OJRCUD6.js";
import "../chunk-S7AOBD5O.js";
import "../chunk-JTEJOLFW.js";
import "../chunk-R5QWCF2N.js";
import "../chunk-AMYQXIXM.js";
import "../chunk-PNIRZZAK.js";
import "../chunk-E22DCV2O.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-BNUP2FQV.js";
import {
  createUniver
} from "../chunk-PPZLBUZL.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-6QH6TSED.js";
import "../chunk-6GGTVPV4.js";
import "../chunk-LDSRMYAY.js";
import "../chunk-CUFPDSCL.js";
import "../chunk-JCUWNQ2Y.js";
import "../chunk-MYIK6ZKX.js";
import "../chunk-7Y6TA4OB.js";
import "../chunk-THTNDZWK.js";
import "../chunk-5PNUBHZC.js";
import "../chunk-R6KPCXJQ.js";
import "../chunk-MF7LRCAL.js";
import "../chunk-MVWKHD6A.js";
import "../chunk-52FGCKD6.js";
import "../chunk-GVSNZEWZ.js";
import "../chunk-JLUEHN5E.js";
import "../chunk-NSNOPB3X.js";
import "../chunk-LRIK44JK.js";
import "../chunk-FRDCE3MS.js";
import "../chunk-ZFUVZZV4.js";
import "../chunk-AXY444OX.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-MVZAHYFO.js";
import "../chunk-GQUTXII2.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-I7VZJZMU.js";
import "../chunk-5OGCV4NR.js";
import "../chunk-CKXFPMES.js";
import "../chunk-PCUUUZAN.js";
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
