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
} from "../chunk-EVMOQZV6.js";
import "../chunk-XESHOLML.js";
import "../chunk-2362RY5I.js";
import "../chunk-HL6DJKFN.js";
import "../chunk-GDT5Z5YE.js";
import "../chunk-VZ4HOG27.js";
import "../chunk-Y6NYTTAG.js";
import "../chunk-4A2IO66V.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-374DJ6YY.js";
import {
  createUniver
} from "../chunk-6VXGKRFY.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-ZXMSVVYU.js";
import "../chunk-L6PURF6E.js";
import "../chunk-ZRIWQO7R.js";
import "../chunk-VNHC7HPV.js";
import "../chunk-MCCF6OAL.js";
import "../chunk-K7SKDB2T.js";
import "../chunk-HRALYPYA.js";
import "../chunk-QIEXBXC2.js";
import "../chunk-6V4PZWJR.js";
import "../chunk-XLWO72EX.js";
import "../chunk-V3GIQBFV.js";
import "../chunk-WE6HI56M.js";
import "../chunk-5P2XEI2X.js";
import "../chunk-2Q6NNA3D.js";
import "../chunk-OTWM5UWR.js";
import "../chunk-6Z7ENLGE.js";
import "../chunk-ZLIYS45K.js";
import "../chunk-AJFEC4AG.js";
import "../chunk-VCMLRY5N.js";
import "../chunk-47ZALXF7.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-7TPDZYFV.js";
import "../chunk-4RBST3WM.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-RJZLV6EI.js";
import "../chunk-JXXTLVNI.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-BYQPA3KP.js";
import "../chunk-OGAOIOI3.js";
import {
  default_default,
  mergeLocales
} from "../chunk-K5ELNLYF.js";
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
