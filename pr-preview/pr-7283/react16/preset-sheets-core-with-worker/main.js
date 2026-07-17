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
} from "../chunk-XUXL2A4R.js";
import "../chunk-BK4KRPNY.js";
import "../chunk-RAHDTBP4.js";
import "../chunk-BIQKJDT6.js";
import "../chunk-AH6DUQCQ.js";
import "../chunk-NO6EAJWP.js";
import "../chunk-V5GBC4JS.js";
import "../chunk-FZLQWYZV.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-W23QMLAK.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-EDODSYIK.js";
import "../chunk-VK22VML6.js";
import "../chunk-WCKF7BDY.js";
import "../chunk-PB7Y6NYP.js";
import "../chunk-PDG5JRJ5.js";
import "../chunk-LYBBAYGA.js";
import "../chunk-ZYNCFXUU.js";
import "../chunk-ERFSPJX6.js";
import "../chunk-6JEQMIBG.js";
import "../chunk-FMNBUAQI.js";
import "../chunk-ZPBJHQKQ.js";
import "../chunk-IRNUT3BQ.js";
import "../chunk-4TWTP4ZV.js";
import "../chunk-YKNGE33L.js";
import "../chunk-ZOCKVNLC.js";
import "../chunk-JSCFAZHE.js";
import "../chunk-OL5WUJNI.js";
import "../chunk-LSFQTCD6.js";
import "../chunk-QBN7ANOM.js";
import "../chunk-FZSWXIJC.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-GORRU5NH.js";
import "../chunk-NEAGN6VF.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-VB5TTCGB.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-XQM2BAYI.js";
import "../chunk-KJTB5QCX.js";
import {
  default_default,
  mergeLocales
} from "../chunk-KBPXUGTM.js";
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
