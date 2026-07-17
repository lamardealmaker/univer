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
} from "../chunk-2IGBENKI.js";
import "../chunk-5OM5CPVB.js";
import "../chunk-72RXEFRR.js";
import "../chunk-5LAKMYNT.js";
import "../chunk-2NDXKZ4J.js";
import "../chunk-NEG46HZY.js";
import "../chunk-KVUJOD46.js";
import "../chunk-C7PUKPIK.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-TJKJOMMU.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-NUOIMOCE.js";
import "../chunk-PPPVLTS4.js";
import "../chunk-DVTPNYTS.js";
import "../chunk-PFNLRKGH.js";
import "../chunk-RMCD36RX.js";
import "../chunk-IGX7TZUG.js";
import "../chunk-B5Z3ULVJ.js";
import "../chunk-A7NFDYBO.js";
import "../chunk-ZQ65Q5TK.js";
import "../chunk-VBEBBRGY.js";
import "../chunk-USR2KQ5X.js";
import "../chunk-NIA4YRMS.js";
import "../chunk-WMT7DRVA.js";
import "../chunk-RWD2CR44.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-NY44FKU6.js";
import "../chunk-HDT3O5SL.js";
import "../chunk-ETKFKJK7.js";
import "../chunk-U2OJ46UV.js";
import "../chunk-7BZAPDYT.js";
import "../chunk-YROKCJXB.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-66F6IXH3.js";
import "../chunk-W2CQHLHX.js";
import "../chunk-2FVEG47S.js";
import "../chunk-AEYG3EZL.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-DHOPL66F.js";
import "../chunk-BG7SGHYA.js";
import {
  default_default,
  mergeLocales
} from "../chunk-II7REV6J.js";
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
