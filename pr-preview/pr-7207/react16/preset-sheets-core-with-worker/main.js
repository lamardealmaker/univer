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
} from "../chunk-DUK2ZKY5.js";
import "../chunk-NPZM4SHQ.js";
import "../chunk-7EM5M4OY.js";
import "../chunk-R6DQAJ23.js";
import "../chunk-LWXQCXVA.js";
import "../chunk-POHTJH4O.js";
import "../chunk-5GUCLTQI.js";
import "../chunk-VQCBO4GG.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-GE5TPK7Q.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-GQJ7SHOV.js";
import "../chunk-CLFFDHPV.js";
import "../chunk-QRQHB7TR.js";
import "../chunk-M2TNCR6W.js";
import "../chunk-GUULLVGU.js";
import "../chunk-YU6Q2PNN.js";
import "../chunk-V5MOZLBT.js";
import "../chunk-CZBIW7MO.js";
import "../chunk-EBAV7YSL.js";
import "../chunk-HKZSNYSG.js";
import "../chunk-N3H7YJXI.js";
import "../chunk-BPDZYJGF.js";
import "../chunk-SRC5WBJI.js";
import "../chunk-RZJRHFVN.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-FBP2UY6R.js";
import "../chunk-E5KZGTDJ.js";
import "../chunk-SYMDYQHH.js";
import "../chunk-MPJFC7X2.js";
import "../chunk-USURWJAH.js";
import "../chunk-UKNH5LUD.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-7OQM37ST.js";
import "../chunk-SCJRDX4C.js";
import "../chunk-2FVEG47S.js";
import "../chunk-ZQQO54J6.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-FMWTNRSJ.js";
import "../chunk-UNYIH6OF.js";
import {
  default_default,
  mergeLocales
} from "../chunk-AYWINPRX.js";
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
