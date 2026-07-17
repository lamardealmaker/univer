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
} from "../chunk-4FIWRRLI.js";
import "../chunk-V4QBOCIK.js";
import "../chunk-M53KS4HM.js";
import "../chunk-MKZN3GPU.js";
import "../chunk-J5XOKWIA.js";
import "../chunk-OU6HTVHM.js";
import "../chunk-RPRTAKME.js";
import "../chunk-AGHS3Y5S.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-DGFQBGD3.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-S72FU5HF.js";
import "../chunk-X7F7TAO7.js";
import "../chunk-PNGVPVQ6.js";
import "../chunk-ELCV5JL4.js";
import "../chunk-REDKLN2F.js";
import "../chunk-POWHMBJH.js";
import "../chunk-IREWMXI6.js";
import "../chunk-WD7AV5PB.js";
import "../chunk-7BBPEWH7.js";
import "../chunk-XYHIVFID.js";
import "../chunk-QTBTVSHV.js";
import "../chunk-2JEQVHCV.js";
import "../chunk-E7UIGV4Q.js";
import "../chunk-QYYOQ5CI.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-JMCS7XBA.js";
import "../chunk-IG2C2ZCW.js";
import "../chunk-UH7BYI3F.js";
import "../chunk-FG7AAHC7.js";
import "../chunk-OARRDGON.js";
import "../chunk-WV2BWNAK.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-AE2SMQJX.js";
import "../chunk-N7L354MO.js";
import "../chunk-2FVEG47S.js";
import "../chunk-WMVBWFQG.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-VYIAE3OT.js";
import "../chunk-4FXSDHB6.js";
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
