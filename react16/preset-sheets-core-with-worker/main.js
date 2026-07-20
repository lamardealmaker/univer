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
} from "../chunk-72OOJQGH.js";
import "../chunk-K7FAPDGI.js";
import "../chunk-JD5RSNBI.js";
import "../chunk-ZFW26AYT.js";
import "../chunk-P7BFBQVY.js";
import "../chunk-4C7LOLLT.js";
import "../chunk-ZHITJDMY.js";
import "../chunk-A6ONLSWS.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GNXEBRMD.js";
import {
  createUniver
} from "../chunk-SZ343T2R.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-UKM2FYDE.js";
import "../chunk-SWRVH23Y.js";
import "../chunk-LJMGIMAE.js";
import "../chunk-SHSETVIZ.js";
import "../chunk-X3H36JYK.js";
import "../chunk-VWAKZUN4.js";
import "../chunk-ELJA4CEZ.js";
import "../chunk-L3XAGDM3.js";
import "../chunk-ZTLYHSRM.js";
import "../chunk-VYCG7O4S.js";
import "../chunk-LZ76DP42.js";
import "../chunk-VMARFF56.js";
import "../chunk-CIBQEK3L.js";
import "../chunk-GQ4VPMLK.js";
import "../chunk-2XSYQGHN.js";
import "../chunk-T5HH4QJX.js";
import "../chunk-OM5UL7DK.js";
import "../chunk-XNZBNOKE.js";
import "../chunk-Y5G2OXH6.js";
import "../chunk-HC4V5NKS.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-N3KJJFOF.js";
import "../chunk-HV3EXX75.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-3LBADK2S.js";
import "../chunk-RT67ICL6.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-JHNQBJPZ.js";
import "../chunk-ALOYUQOY.js";
import {
  default_default,
  mergeLocales
} from "../chunk-KDL4XP5H.js";
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
