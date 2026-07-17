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
} from "../chunk-5MJK5ALL.js";
import "../chunk-U464P4MX.js";
import "../chunk-IEQZJKOA.js";
import "../chunk-453ZXRRO.js";
import "../chunk-OECSQAVJ.js";
import "../chunk-M3TCLJF7.js";
import "../chunk-L45QNFQ4.js";
import "../chunk-ONG3ZCVX.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-NOZLEDI4.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-TUHWYDIL.js";
import "../chunk-I5FO45AB.js";
import "../chunk-PFRJMPMW.js";
import "../chunk-MQHEIXSS.js";
import "../chunk-OG4REFQX.js";
import "../chunk-4E23E6KR.js";
import "../chunk-35VRRE6Y.js";
import "../chunk-TKRXW5GW.js";
import "../chunk-IOI6MC44.js";
import "../chunk-KR7HM66P.js";
import "../chunk-V2QKBXES.js";
import "../chunk-GLCMBMOE.js";
import "../chunk-26UHMP6F.js";
import "../chunk-YWBWRFZC.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-P4XCPSWA.js";
import "../chunk-PPKNHLI3.js";
import "../chunk-OXMLB4G7.js";
import "../chunk-JTPAYPT3.js";
import "../chunk-LR5HIO4Y.js";
import "../chunk-XKO3JW3B.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-63DFZAS2.js";
import "../chunk-PDNVFZC7.js";
import "../chunk-2FVEG47S.js";
import "../chunk-JCXM4SWU.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-POXKYJUQ.js";
import "../chunk-XF4LYEKE.js";
import {
  default_default,
  mergeLocales
} from "../chunk-OVV7GT3M.js";
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
