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
} from "../chunk-FUOCT4JU.js";
import "../chunk-AJKBJVRM.js";
import "../chunk-R2KUHDXI.js";
import "../chunk-TOQBWQPC.js";
import "../chunk-QBL5MTEN.js";
import "../chunk-TXAKYHVF.js";
import "../chunk-H3Z76XJK.js";
import "../chunk-XEV26NTQ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-DUJN3TXJ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-NLE2KDFI.js";
import "../chunk-ATMK3BAB.js";
import "../chunk-WYMQO2GX.js";
import "../chunk-J3GOKFNC.js";
import "../chunk-I6XDMAGE.js";
import "../chunk-7EW5C7MR.js";
import "../chunk-OQOUFDNR.js";
import "../chunk-5LETJDU7.js";
import "../chunk-LRNFZAEF.js";
import "../chunk-YORKONEI.js";
import "../chunk-7O2J7JZQ.js";
import "../chunk-LMJ4IFK3.js";
import "../chunk-JFFKTPOY.js";
import "../chunk-HP2WEK2B.js";
import "../chunk-WGAQF3WM.js";
import "../chunk-IXG3U4W6.js";
import "../chunk-UUFTONAD.js";
import "../chunk-QQCHJU4K.js";
import "../chunk-MVOWOER3.js";
import "../chunk-WIWKXDD7.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-756NKHGC.js";
import "../chunk-LICJO5DR.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-KZJMUOYO.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-ZEDWP55C.js";
import "../chunk-6KFG42LC.js";
import {
  default_default,
  mergeLocales
} from "../chunk-MRUZHKXB.js";
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
