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
} from "../chunk-Z3TBI3T5.js";
import "../chunk-7OMUTIXZ.js";
import "../chunk-MA5GW5ZG.js";
import "../chunk-H6CBMPWO.js";
import "../chunk-ND33STZS.js";
import "../chunk-ZRBTVCOF.js";
import "../chunk-IJT3C7TV.js";
import "../chunk-ADO73A2F.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-UYNP7FIL.js";
import {
  createUniver
} from "../chunk-TWEDTCA3.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-3DMI7LIT.js";
import "../chunk-LQFKMWOU.js";
import "../chunk-OUEMUZIV.js";
import "../chunk-APUY5FUG.js";
import "../chunk-Y6QTLSTA.js";
import "../chunk-SXDP5O57.js";
import "../chunk-GUEVRFZX.js";
import "../chunk-EJWL37IZ.js";
import "../chunk-NFNYEJ4L.js";
import "../chunk-N4VOWRDE.js";
import "../chunk-IEG7ZJ26.js";
import "../chunk-QUAO56AA.js";
import "../chunk-7WD5UPA7.js";
import "../chunk-GDDFE2LF.js";
import "../chunk-7E6CMYE4.js";
import "../chunk-QLCZK3IN.js";
import "../chunk-MBIJZUVN.js";
import "../chunk-LYBFH6FD.js";
import "../chunk-WYUC5LJW.js";
import "../chunk-L53UJCB2.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-OBTSUHS4.js";
import "../chunk-JS7QQG3C.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-HKK367X4.js";
import "../chunk-MNMA3DIW.js";
import "../chunk-CKXFPMES.js";
import "../chunk-4LPILMGO.js";
import "../chunk-M56I3X25.js";
import {
  default_default,
  mergeLocales
} from "../chunk-QEB532PW.js";
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
