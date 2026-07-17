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
} from "../chunk-6A7G52WD.js";
import "../chunk-ZWW3F2DO.js";
import "../chunk-RYFJOD4D.js";
import "../chunk-ARGTWYCY.js";
import "../chunk-S3ZKDPX5.js";
import "../chunk-327TP32G.js";
import "../chunk-ONQ6TBI6.js";
import "../chunk-GPJOOWZE.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GSHR2COK.js";
import {
  createUniver
} from "../chunk-6WE2HZ4A.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-N7XHVX4V.js";
import "../chunk-QZAU3YUL.js";
import "../chunk-RBVP7GXU.js";
import "../chunk-BDHYIFCR.js";
import "../chunk-TSNXCNPS.js";
import "../chunk-A42RNHCM.js";
import "../chunk-LSF4POHA.js";
import "../chunk-OVQUHMF6.js";
import "../chunk-YYQJ5QCL.js";
import "../chunk-7FHRUHDQ.js";
import "../chunk-242QEQV5.js";
import "../chunk-KSNEDRGZ.js";
import "../chunk-R4F3IYPG.js";
import "../chunk-VLUBKWWO.js";
import "../chunk-7T5UHT6A.js";
import "../chunk-UEMJT2OC.js";
import "../chunk-NKAX7YJI.js";
import "../chunk-JIZNSXQD.js";
import "../chunk-65GFA2QT.js";
import "../chunk-2J43C5JD.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-FJ7LZHIQ.js";
import "../chunk-FR2PKJFC.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-3FKRKIME.js";
import "../chunk-MNMA3DIW.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-G7SXFZ34.js";
import "../chunk-7SRTVBCX.js";
import {
  default_default,
  mergeLocales
} from "../chunk-JKGF6EFW.js";
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
