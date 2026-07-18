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
} from "../chunk-2E2CL6MZ.js";
import "../chunk-EUWBSDQG.js";
import "../chunk-VKJGAGIQ.js";
import "../chunk-UQKEYZLW.js";
import "../chunk-5DE4P2UK.js";
import "../chunk-NLUQHRBK.js";
import "../chunk-K6FQKTCB.js";
import "../chunk-CO73IU64.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-TW6HPCMK.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-VLXEOR6U.js";
import "../chunk-LWE7GPTU.js";
import "../chunk-FHINMONE.js";
import "../chunk-IJOFOBZE.js";
import "../chunk-NAWMPUL4.js";
import "../chunk-EWBYDSVK.js";
import "../chunk-L2XCYILI.js";
import "../chunk-6TRHWJNM.js";
import "../chunk-ILX2LUHI.js";
import "../chunk-UHHO2D5T.js";
import "../chunk-FMTT7XZ5.js";
import "../chunk-N65GP37L.js";
import "../chunk-377V3BBM.js";
import "../chunk-GJLVDVVC.js";
import "../chunk-CWMDYOQK.js";
import "../chunk-KQILPFG6.js";
import "../chunk-BXRDWOY3.js";
import "../chunk-XYI6LSLS.js";
import "../chunk-UVHCGEQY.js";
import "../chunk-OLNDOXYK.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-UI3JDZLA.js";
import "../chunk-HQEBNT4C.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-IUA5HQYE.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-POGZILZG.js";
import "../chunk-Z4GVOVAB.js";
import {
  default_default,
  mergeLocales
} from "../chunk-3PCLVKGS.js";
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
