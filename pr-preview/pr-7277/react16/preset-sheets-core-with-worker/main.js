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
} from "../chunk-J3FUCBJ2.js";
import "../chunk-IJDGFTAD.js";
import "../chunk-K2VLMTYO.js";
import "../chunk-I6RWVQWY.js";
import "../chunk-DMEHONQ4.js";
import "../chunk-CPPV5WHT.js";
import "../chunk-MRCKUQUK.js";
import "../chunk-7FCT3ZTF.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-MIDV6IWO.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-II6IZGLH.js";
import "../chunk-TOJRNSBF.js";
import "../chunk-OPAY3AOW.js";
import "../chunk-AZS4XLFR.js";
import "../chunk-AUXTOEKZ.js";
import "../chunk-4LKHWZU5.js";
import "../chunk-M7CXJCJJ.js";
import "../chunk-ZU6R2DLO.js";
import "../chunk-ZXCF2ITU.js";
import "../chunk-2Q7MDK4J.js";
import "../chunk-YMFRJBK7.js";
import "../chunk-R4LDZ63N.js";
import "../chunk-6FWJQAIA.js";
import "../chunk-UAA6KEXQ.js";
import "../chunk-UBOIHWWZ.js";
import "../chunk-XHDR6XYT.js";
import "../chunk-WVGZ3Z6B.js";
import "../chunk-MNKBO34U.js";
import "../chunk-2H4OG5YB.js";
import "../chunk-TTERHTD7.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-NDOVT6LF.js";
import "../chunk-P3IC5FUZ.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-APCJKRSX.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-V52KZQ22.js";
import "../chunk-VTGKT7HG.js";
import {
  default_default,
  mergeLocales
} from "../chunk-B5BSMKXI.js";
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
