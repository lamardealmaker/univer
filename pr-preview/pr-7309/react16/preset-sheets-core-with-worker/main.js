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
} from "../chunk-GCAPWYH5.js";
import "../chunk-F25XGY7Y.js";
import "../chunk-I4LWWTAB.js";
import "../chunk-TIZNNVPP.js";
import "../chunk-M7PPNR3F.js";
import "../chunk-6RS5ZB5Q.js";
import "../chunk-PJQA6XWJ.js";
import "../chunk-GF3DMXSE.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GF5UTAQD.js";
import {
  createUniver
} from "../chunk-3AD5ACMS.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-VFO3RGN6.js";
import "../chunk-NXP5BKMK.js";
import "../chunk-7I52EYCI.js";
import "../chunk-WRQCPDX6.js";
import "../chunk-SG5NVVSC.js";
import "../chunk-ESSFEXQT.js";
import "../chunk-72IJ6NGE.js";
import "../chunk-HJ2XXE5D.js";
import "../chunk-VUOFGFFP.js";
import "../chunk-XKR5IN3B.js";
import "../chunk-BXZYRREU.js";
import "../chunk-TLDW2BE4.js";
import "../chunk-BLJKDDIV.js";
import "../chunk-VWB4YFLH.js";
import "../chunk-EDU3U37W.js";
import "../chunk-YGHFFUED.js";
import "../chunk-PVTW66PV.js";
import "../chunk-YGGGAOOO.js";
import "../chunk-LJDSQID3.js";
import "../chunk-IGM2PDFK.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-5ZVYOOOJ.js";
import "../chunk-VAYUBKAG.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-HI3S6XZW.js";
import "../chunk-3BTKBUIM.js";
import "../chunk-6E3W7VDH.js";
import "../chunk-W2IE7XAE.js";
import "../chunk-FV4IGQDG.js";
import {
  default_default,
  mergeLocales
} from "../chunk-N4BCF5MH.js";
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
