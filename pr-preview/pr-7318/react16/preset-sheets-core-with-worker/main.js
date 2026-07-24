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
} from "../chunk-L2GNNH7U.js";
import "../chunk-PTVVP3J3.js";
import "../chunk-HGVR3RMP.js";
import "../chunk-MJ5BSR67.js";
import "../chunk-OTC4GZ47.js";
import "../chunk-SFGOYCQL.js";
import "../chunk-RWBP45G6.js";
import "../chunk-AE5LW3MQ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-CNGJ6CU4.js";
import {
  createUniver
} from "../chunk-WMOYKJ5D.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-CX5NXXAO.js";
import "../chunk-5N52TNTO.js";
import "../chunk-5C4OMQRG.js";
import "../chunk-25POX3ZX.js";
import "../chunk-L4PBFCX6.js";
import "../chunk-BPQPEARQ.js";
import "../chunk-A7LHZAUZ.js";
import "../chunk-KFX6SJSW.js";
import "../chunk-DUVAEDV5.js";
import "../chunk-AFA7REW7.js";
import "../chunk-XWDCOBVQ.js";
import "../chunk-GBY6LQAF.js";
import "../chunk-WIWZSY3O.js";
import "../chunk-253HEH7Q.js";
import "../chunk-TMH6CWGL.js";
import "../chunk-ZG27HWUS.js";
import "../chunk-YTW5N2DC.js";
import "../chunk-FY5J4V3Q.js";
import "../chunk-AHHRULAS.js";
import "../chunk-KKSIKDPM.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-7V2XEAWA.js";
import "../chunk-22BOW4EN.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-G2ZW2BDM.js";
import "../chunk-7RKWV2OH.js";
import "../chunk-O2N4YVYW.js";
import "../chunk-47MGLYD5.js";
import "../chunk-PW5H4QGM.js";
import {
  default_default,
  mergeLocales
} from "../chunk-UEDAY4IO.js";
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
