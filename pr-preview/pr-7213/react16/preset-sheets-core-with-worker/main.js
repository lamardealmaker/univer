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
} from "../chunk-6CTP5NQN.js";
import "../chunk-7GDB5UNZ.js";
import "../chunk-CYNDUQYN.js";
import "../chunk-HXKJDV2A.js";
import "../chunk-AZ4K525P.js";
import "../chunk-JRAGMPDE.js";
import "../chunk-PQ76F4B4.js";
import "../chunk-NRP7Z5CH.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-DGFQBGD3.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-GYUJDZL4.js";
import "../chunk-ZC6QZ2HE.js";
import "../chunk-NIE2WGJO.js";
import "../chunk-FLOTNBP2.js";
import "../chunk-2RZX7ZT5.js";
import "../chunk-TR5GO2US.js";
import "../chunk-IREWMXI6.js";
import "../chunk-QHNIQ6VR.js";
import "../chunk-E4LHDMKA.js";
import "../chunk-VVBJABQB.js";
import "../chunk-4JJBFU2M.js";
import "../chunk-OXMGSPL5.js";
import "../chunk-AIYWW2PP.js";
import "../chunk-2A52V36M.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-JMCS7XBA.js";
import "../chunk-IG2C2ZCW.js";
import "../chunk-2B5ZKU7Y.js";
import "../chunk-FG7AAHC7.js";
import "../chunk-YGRGP2TI.js";
import "../chunk-UKSIMNEJ.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-AE2SMQJX.js";
import "../chunk-3VA4ORAS.js";
import "../chunk-2FVEG47S.js";
import "../chunk-WMVBWFQG.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-X6R3HG3L.js";
import "../chunk-JFITKU43.js";
import {
  default_default,
  mergeLocales
} from "../chunk-LT6FETEP.js";
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
