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
} from "../chunk-KYTQPM56.js";
import "../chunk-HRKISNIA.js";
import "../chunk-CBMI6CPQ.js";
import "../chunk-W444BKP4.js";
import "../chunk-WT32CLTM.js";
import "../chunk-IRSB5AWH.js";
import "../chunk-V7NFKSZZ.js";
import "../chunk-RTSB7ITY.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GSHR2COK.js";
import {
  createUniver
} from "../chunk-WJI3CYJ4.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-TEWK2GWW.js";
import "../chunk-CM6BAGK7.js";
import "../chunk-I72SABCC.js";
import "../chunk-N3E3D3VI.js";
import "../chunk-7R5P6265.js";
import "../chunk-TAYDO4L5.js";
import "../chunk-ZXZHIOYR.js";
import "../chunk-4TKZQK6I.js";
import "../chunk-6FSECGKG.js";
import "../chunk-T33KL2A4.js";
import "../chunk-ISZULVGD.js";
import "../chunk-Q2E2ECAM.js";
import "../chunk-T6YW3JCV.js";
import "../chunk-TBKZ3TKR.js";
import "../chunk-L4XQB5B5.js";
import "../chunk-QTETZIFL.js";
import "../chunk-GI5XDYQ7.js";
import "../chunk-EK36UWLA.js";
import "../chunk-TA533AUM.js";
import "../chunk-O6P4CNWQ.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-UEB57LIN.js";
import "../chunk-KAV3QSQW.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-SYKVOUJC.js";
import "../chunk-MNMA3DIW.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-4AAQ67CN.js";
import "../chunk-Z4HUTZZE.js";
import {
  default_default,
  mergeLocales
} from "../chunk-AE3R7DH2.js";
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
