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
} from "../chunk-7TAUWE2X.js";
import "../chunk-GSWEWIJ4.js";
import "../chunk-FDEX6QJJ.js";
import "../chunk-FFNR2GHK.js";
import "../chunk-FLLSO4W7.js";
import "../chunk-VZEC5ZXK.js";
import "../chunk-6X24I5AY.js";
import "../chunk-A7YAPW44.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-6VXGKRFY.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-UZMIA3ZM.js";
import "../chunk-7TCUT6DU.js";
import "../chunk-WAW7MGIJ.js";
import "../chunk-VNHC7HPV.js";
import "../chunk-MCCF6OAL.js";
import "../chunk-PUG6ZFBK.js";
import "../chunk-HRALYPYA.js";
import "../chunk-JUYLX247.js";
import "../chunk-6V4PZWJR.js";
import "../chunk-XLWO72EX.js";
import "../chunk-V3GIQBFV.js";
import "../chunk-4K2AEDE2.js";
import "../chunk-7LYNUWZC.js";
import "../chunk-R6L53KVG.js";
import "../chunk-OTWM5UWR.js";
import "../chunk-6Z7ENLGE.js";
import "../chunk-OTHYX7AA.js";
import "../chunk-AJFEC4AG.js";
import "../chunk-ZW6ILKPP.js";
import "../chunk-FHUBYM4F.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-JR6K7VYA.js";
import "../chunk-4RBST3WM.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-RJZLV6EI.js";
import "../chunk-WDQ4UVQE.js";
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
