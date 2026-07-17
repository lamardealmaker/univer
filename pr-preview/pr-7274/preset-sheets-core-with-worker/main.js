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
} from "../chunk-HYBPA5GA.js";
import "../chunk-WYDNBZ5R.js";
import "../chunk-2SWP6S22.js";
import "../chunk-FKFDAD4B.js";
import "../chunk-BSL4WAD4.js";
import "../chunk-TWGRXBUZ.js";
import "../chunk-YRO7IMQK.js";
import "../chunk-YBLNBX4R.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-536Z4QKZ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-IMFUVKXP.js";
import "../chunk-66JK2JIA.js";
import "../chunk-JLKZRNAZ.js";
import "../chunk-QHY5FF4P.js";
import "../chunk-ADXOCU2R.js";
import "../chunk-RLFV7IGZ.js";
import "../chunk-G2Y77UZG.js";
import "../chunk-VWNC5D6S.js";
import "../chunk-ZIINSQ7M.js";
import "../chunk-VJVLRYVG.js";
import "../chunk-7T74GEKY.js";
import "../chunk-M6YB4FOQ.js";
import "../chunk-TFFEG6BI.js";
import "../chunk-MJISJWUU.js";
import "../chunk-YPXOSRDC.js";
import "../chunk-KSNAAQD3.js";
import "../chunk-EJDPA7PN.js";
import "../chunk-6AVG2GAC.js";
import "../chunk-3APMRQNE.js";
import "../chunk-FKIS4BWF.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-CL3B2JWT.js";
import "../chunk-PBMDEVXC.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-UEPGKXGM.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-AZVAWBBB.js";
import "../chunk-GAGIXZW5.js";
import {
  default_default,
  mergeLocales
} from "../chunk-STB3OOUD.js";
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
