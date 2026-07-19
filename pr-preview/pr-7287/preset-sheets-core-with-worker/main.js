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
} from "../chunk-S5AMVMB5.js";
import "../chunk-ABYKJ3SD.js";
import "../chunk-DC7FNVMC.js";
import "../chunk-F7LMEEDQ.js";
import "../chunk-JTS3APP5.js";
import "../chunk-JU4IXYAL.js";
import "../chunk-S5IHUIC6.js";
import "../chunk-3ED3GAI2.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-24G5OZ7W.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-7O5UXBQD.js";
import "../chunk-JPSVNA6L.js";
import "../chunk-E54JC7UK.js";
import "../chunk-RRNO6FUE.js";
import "../chunk-3YDKLG7R.js";
import "../chunk-NSCR7O4G.js";
import "../chunk-D2FZOZNN.js";
import "../chunk-6J3DMEHY.js";
import "../chunk-H6QXK5AJ.js";
import "../chunk-T4LNNQY2.js";
import "../chunk-3BJK6MJ2.js";
import "../chunk-GXWYHDOM.js";
import "../chunk-2FP7O2U6.js";
import "../chunk-BIZNHCRU.js";
import "../chunk-UHMCDFW4.js";
import "../chunk-NXKBVIY3.js";
import "../chunk-7QAFJFBK.js";
import "../chunk-P27TA3LS.js";
import "../chunk-7FIJQL3C.js";
import "../chunk-QFEKDUAF.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-2LDOLTZK.js";
import "../chunk-WKVVBYWB.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-APONP5I3.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-DYS3SBAV.js";
import "../chunk-TDM22U6Q.js";
import {
  default_default,
  mergeLocales
} from "../chunk-IIRVF2HV.js";
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
