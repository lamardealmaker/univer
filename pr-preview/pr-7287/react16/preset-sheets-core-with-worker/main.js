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
} from "../chunk-HKGLVAMS.js";
import "../chunk-WXVXVJEC.js";
import "../chunk-O2R56MLK.js";
import "../chunk-EPVICGC4.js";
import "../chunk-UF6W6RDN.js";
import "../chunk-TIOUR5FE.js";
import "../chunk-KC6QDIKW.js";
import "../chunk-UY5NFMM2.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-IO2KC6WN.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-QGNWH3AL.js";
import "../chunk-FUCYVCDZ.js";
import "../chunk-UDLFZSEH.js";
import "../chunk-6P7V2FT4.js";
import "../chunk-SPWZPPSZ.js";
import "../chunk-QLPNPLDU.js";
import "../chunk-K6IULCAH.js";
import "../chunk-NTO3FRZ6.js";
import "../chunk-2YWOGR4N.js";
import "../chunk-5UNICZEN.js";
import "../chunk-56XVEQPT.js";
import "../chunk-XKQJW7PG.js";
import "../chunk-UHZPTQ3S.js";
import "../chunk-YVPRA6TP.js";
import "../chunk-UTKZZHZW.js";
import "../chunk-4X5MKNLO.js";
import "../chunk-LXOPMUZQ.js";
import "../chunk-6OZPNGHY.js";
import "../chunk-TCS5DXJ7.js";
import "../chunk-UQUTRHPU.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-KU2XUV44.js";
import "../chunk-S7G5XKJF.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-4FGQMKJL.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-7UDFNS2Y.js";
import "../chunk-4DYEZKTR.js";
import {
  default_default,
  mergeLocales
} from "../chunk-JSXMCQAF.js";
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
