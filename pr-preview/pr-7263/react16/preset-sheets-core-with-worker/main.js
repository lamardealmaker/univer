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
} from "../chunk-ABB44IJD.js";
import "../chunk-5OI6KGAA.js";
import "../chunk-ZB3N6S2D.js";
import "../chunk-R3ONP6SD.js";
import "../chunk-WXYEJTAP.js";
import "../chunk-CO5ZTZG7.js";
import "../chunk-7XUWFJ3D.js";
import "../chunk-4HGKHZ6P.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-BNUP2FQV.js";
import {
  createUniver
} from "../chunk-E7P4VYLH.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-ICQNTAZF.js";
import "../chunk-7BSI77GC.js";
import "../chunk-TEHFV4JM.js";
import "../chunk-52KCK7BC.js";
import "../chunk-LDMVNR44.js";
import "../chunk-4TJHFV5L.js";
import "../chunk-YMV4YKUD.js";
import "../chunk-B6WJFSEF.js";
import "../chunk-HHW53KEB.js";
import "../chunk-OEPMWHHK.js";
import "../chunk-FX6PDT6G.js";
import "../chunk-HQTDXEAO.js";
import "../chunk-RJDF4YWH.js";
import "../chunk-E2GJZ76B.js";
import "../chunk-U3XZRGOU.js";
import "../chunk-N3OCI5JR.js";
import "../chunk-YUEY4PBV.js";
import "../chunk-5XNU6EHR.js";
import "../chunk-EHROH7XB.js";
import "../chunk-UWN2KQGM.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-DV6SGVPN.js";
import "../chunk-CFAO7OPH.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-PUCENP4Z.js";
import "../chunk-5OGCV4NR.js";
import "../chunk-CKXFPMES.js";
import "../chunk-U3HPYX3U.js";
import "../chunk-FGPXQBRL.js";
import {
  default_default,
  mergeLocales
} from "../chunk-RRAAZ522.js";
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
