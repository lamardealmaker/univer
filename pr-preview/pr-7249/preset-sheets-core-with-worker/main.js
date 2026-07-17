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
} from "../chunk-BEDWUSFO.js";
import "../chunk-SL2PF3R7.js";
import "../chunk-NZL5ZDFS.js";
import "../chunk-RVPSALWM.js";
import "../chunk-HF4NMLYL.js";
import "../chunk-QAT6DWJY.js";
import "../chunk-AUX4GYTZ.js";
import "../chunk-E7QOGQAM.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-BNUP2FQV.js";
import {
  createUniver
} from "../chunk-EVXRPISL.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-WMVCUK5E.js";
import "../chunk-26O3X4I3.js";
import "../chunk-L6FPY43M.js";
import "../chunk-KLW65XAU.js";
import "../chunk-HVXWG44K.js";
import "../chunk-UZZKNMBJ.js";
import "../chunk-J5J63VFH.js";
import "../chunk-CE5LYJUS.js";
import "../chunk-PV767NNL.js";
import "../chunk-2QKGHOX7.js";
import "../chunk-ORYV3R2Q.js";
import "../chunk-3TOTVEAB.js";
import "../chunk-FAOYOEW2.js";
import "../chunk-22MD2OJX.js";
import "../chunk-C2MTMN7J.js";
import "../chunk-ESRNT5VW.js";
import "../chunk-U5FJR2H2.js";
import "../chunk-JF7CL3AQ.js";
import "../chunk-CLCIF2ZI.js";
import "../chunk-XBVSVYYT.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-T44DWQTU.js";
import "../chunk-GIXTJOYT.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-DSXI3R4L.js";
import "../chunk-5OGCV4NR.js";
import "../chunk-CKXFPMES.js";
import "../chunk-AVV6LYFI.js";
import "../chunk-XY6TNQNM.js";
import {
  default_default,
  mergeLocales
} from "../chunk-DJVW44P3.js";
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
