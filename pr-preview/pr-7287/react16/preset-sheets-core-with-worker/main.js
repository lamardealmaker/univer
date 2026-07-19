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
} from "../chunk-2IIT2S6W.js";
import "../chunk-3WI6SC5T.js";
import "../chunk-XGBKOIOJ.js";
import "../chunk-PZFUIK6E.js";
import "../chunk-LNO335K7.js";
import "../chunk-IKWL3PKU.js";
import "../chunk-4TJTTCPC.js";
import "../chunk-FUT2GBI2.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-5JKUXOL2.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-OOJSOVBS.js";
import "../chunk-HAUCJRZG.js";
import "../chunk-FMH7S5VP.js";
import "../chunk-LUTT7SYP.js";
import "../chunk-PQ6KS5NA.js";
import "../chunk-22KNQBMH.js";
import "../chunk-XBLWINS6.js";
import "../chunk-R4PS4SID.js";
import "../chunk-EQYEF7TE.js";
import "../chunk-POJYLXY6.js";
import "../chunk-E6MB3CVO.js";
import "../chunk-TNYKZBXZ.js";
import "../chunk-4F2ARLJP.js";
import "../chunk-MZHLRYLD.js";
import "../chunk-7IKNTE4R.js";
import "../chunk-F2OHWDYQ.js";
import "../chunk-FWEG4S5P.js";
import "../chunk-HG2ILZYY.js";
import "../chunk-CK2AJVH4.js";
import "../chunk-CAPRATJL.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-SSLJNNLM.js";
import "../chunk-TBH6ZROY.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-KORVF2GC.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-TGILKA5V.js";
import "../chunk-6H5IIH26.js";
import {
  default_default,
  mergeLocales
} from "../chunk-EWDDTFQR.js";
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
