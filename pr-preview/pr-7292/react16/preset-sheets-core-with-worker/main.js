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
} from "../chunk-OVDIUAZU.js";
import "../chunk-OXZBB4QT.js";
import "../chunk-TZ3U2ON5.js";
import "../chunk-2URC7XZN.js";
import "../chunk-FPHIM5HC.js";
import "../chunk-6SF35ASU.js";
import "../chunk-REQRIKDK.js";
import "../chunk-ANMTCZKV.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-374DJ6YY.js";
import {
  createUniver
} from "../chunk-SZ343T2R.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-CBXCVNM7.js";
import "../chunk-S3OVD66U.js";
import "../chunk-RB3TEYZ3.js";
import "../chunk-SHSETVIZ.js";
import "../chunk-X3H36JYK.js";
import "../chunk-MOLDK3VM.js";
import "../chunk-ELJA4CEZ.js";
import "../chunk-KI5CT7T4.js";
import "../chunk-ZTLYHSRM.js";
import "../chunk-VTRCQ7BC.js";
import "../chunk-LZ76DP42.js";
import "../chunk-YNBDU5X4.js";
import "../chunk-JSQU4NND.js";
import "../chunk-W5UJVDJW.js";
import "../chunk-2XSYQGHN.js";
import "../chunk-T5HH4QJX.js";
import "../chunk-RY2AV6V4.js";
import "../chunk-XNZBNOKE.js";
import "../chunk-TOUFNUKR.js";
import "../chunk-JGKDNRCW.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-IJ3IXJZK.js";
import "../chunk-HV3EXX75.js";
import "../chunk-L6MCIUQR.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-3LBADK2S.js";
import "../chunk-JXXTLVNI.js";
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
