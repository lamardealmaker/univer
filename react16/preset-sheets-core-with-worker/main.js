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
} from "../chunk-LW5PYGSI.js";
import "../chunk-FQ275Y5T.js";
import "../chunk-6QE6YMCV.js";
import "../chunk-J7LZZGYB.js";
import "../chunk-TVYZPRES.js";
import "../chunk-RV6U7HAR.js";
import "../chunk-55YRPGS6.js";
import "../chunk-PLOU6QE7.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GNXEBRMD.js";
import {
  createUniver
} from "../chunk-KJD4R2DQ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-GC7WOAPH.js";
import "../chunk-C33NYXJW.js";
import "../chunk-ZAT4XURN.js";
import "../chunk-GBZVZSXD.js";
import "../chunk-2Q5O2FNH.js";
import "../chunk-UTN2DPOU.js";
import "../chunk-LNCQ2IGD.js";
import "../chunk-ETMR3AZ4.js";
import "../chunk-HZVVG4ZG.js";
import "../chunk-YRIMLH5N.js";
import "../chunk-YMY6PXSP.js";
import "../chunk-U3KKUEI6.js";
import "../chunk-WLSA7ODV.js";
import "../chunk-V72LHEPZ.js";
import "../chunk-D3YC3R4D.js";
import "../chunk-E3WWKG6P.js";
import "../chunk-P76G5Z2Z.js";
import "../chunk-TCDGYH2B.js";
import "../chunk-2JTXL7DQ.js";
import "../chunk-2EIRHLET.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-AOFVIMMN.js";
import "../chunk-YSU2RKN3.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-VU33XQTF.js";
import "../chunk-RT67ICL6.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-LMPX2OTW.js";
import "../chunk-RKDQK3XP.js";
import {
  default_default,
  mergeLocales
} from "../chunk-7RPG6EBZ.js";
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
