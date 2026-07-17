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
} from "../chunk-ABZFRTUD.js";
import "../chunk-5SGDZAZI.js";
import "../chunk-67TP6MOM.js";
import "../chunk-HBA37YG6.js";
import "../chunk-GHLKDUFF.js";
import "../chunk-WZZJKRZV.js";
import "../chunk-YVPPJKST.js";
import "../chunk-JDHADAWT.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-Y7HISAE3.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-ITLA2DS7.js";
import "../chunk-OQF5V4LO.js";
import "../chunk-RNXLXYIO.js";
import "../chunk-OURVV32G.js";
import "../chunk-MXJNUPM6.js";
import "../chunk-YEGB5GOU.js";
import "../chunk-YJ6BOUR4.js";
import "../chunk-NVZXT2U6.js";
import "../chunk-QNCILETD.js";
import "../chunk-FHZ6KYXS.js";
import "../chunk-ZVF2WUFH.js";
import "../chunk-ASBJMGCQ.js";
import "../chunk-XXLJYHU4.js";
import "../chunk-VWEN55CD.js";
import "../chunk-53GCV7QY.js";
import "../chunk-IWRPFP76.js";
import "../chunk-HOGCHCLH.js";
import "../chunk-ZQLB4SOO.js";
import "../chunk-GNDOLAJ7.js";
import "../chunk-DDRE5RJY.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-3BM76LJM.js";
import "../chunk-LOIXV5J5.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-2OFXGP3A.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-MCZBJK6L.js";
import "../chunk-Q3HG77NM.js";
import {
  default_default,
  mergeLocales
} from "../chunk-M2MWB6U2.js";
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
