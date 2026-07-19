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
} from "../chunk-NEOVACDI.js";
import "../chunk-KXJSEFWD.js";
import "../chunk-RKREIEXI.js";
import "../chunk-6FEM6RZW.js";
import "../chunk-TUSFU7YJ.js";
import "../chunk-DF4VINGC.js";
import "../chunk-5C65OQR4.js";
import "../chunk-Y7D5S35F.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-I5V7YBRX.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-O5E3MWSX.js";
import "../chunk-AW4OI62U.js";
import "../chunk-B7PFR3LJ.js";
import "../chunk-ZCTSPSWX.js";
import "../chunk-LZDNN7JO.js";
import "../chunk-47T32P7J.js";
import "../chunk-D7XRXF3M.js";
import "../chunk-QAFPZOQI.js";
import "../chunk-GKOPRLVD.js";
import "../chunk-HULMZVJC.js";
import "../chunk-IMH5SVYZ.js";
import "../chunk-FWB76SBQ.js";
import "../chunk-EPF64CV7.js";
import "../chunk-CRFXJBEX.js";
import "../chunk-UXUI3ZJ2.js";
import "../chunk-B4MAY4YN.js";
import "../chunk-OQUZZN2F.js";
import "../chunk-G4HGUORG.js";
import "../chunk-274MQYO6.js";
import "../chunk-EOQESUVA.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-WZRSDBHA.js";
import "../chunk-FKNDSFRP.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-EXFLV3OL.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-PQNGZWJ6.js";
import "../chunk-4BVUHLOO.js";
import {
  default_default,
  mergeLocales
} from "../chunk-NOU3WR7A.js";
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
