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
} from "../chunk-GBPJNR7R.js";
import "../chunk-SPIPFANF.js";
import "../chunk-HPXXIG5H.js";
import "../chunk-7DFCGOBE.js";
import "../chunk-GU3WC6E3.js";
import "../chunk-HA5PNPHG.js";
import "../chunk-ZEDNCQIS.js";
import "../chunk-ERP34QE6.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-CENPYPGL.js";
import {
  createUniver
} from "../chunk-I54FJSJ3.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-P4JY35Y6.js";
import "../chunk-ZY5DSTYZ.js";
import "../chunk-H7MYNXA6.js";
import "../chunk-FKCHYLBV.js";
import "../chunk-GOTAAGVZ.js";
import "../chunk-JX7M23K3.js";
import "../chunk-5ZY2KXGP.js";
import "../chunk-JHTL6RDA.js";
import "../chunk-GTQCXVS5.js";
import "../chunk-KOMAIIN2.js";
import "../chunk-J4EG6VZP.js";
import "../chunk-6YJM6F47.js";
import "../chunk-TWZILU24.js";
import "../chunk-EKVF45AQ.js";
import "../chunk-PO5ZGHQT.js";
import "../chunk-SYM4OOBL.js";
import "../chunk-WH3B53GK.js";
import "../chunk-PH4B7R6S.js";
import "../chunk-QEEPPHQO.js";
import "../chunk-MOE32XHT.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-GAR7NJMN.js";
import "../chunk-5DJSLAB5.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-D5NPODZW.js";
import "../chunk-3BTKBUIM.js";
import "../chunk-W7SCD2GT.js";
import "../chunk-PP2PHL2R.js";
import "../chunk-W4NVE3XT.js";
import {
  default_default,
  mergeLocales
} from "../chunk-RLTCIETE.js";
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
