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
} from "../chunk-SC4WBPR5.js";
import "../chunk-EBJHWKT5.js";
import "../chunk-3PUBZ4JZ.js";
import "../chunk-J646KIUT.js";
import "../chunk-3XZZTN57.js";
import "../chunk-LW3DNUXO.js";
import "../chunk-G3AR4VZP.js";
import "../chunk-OHWU2QOI.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-63PUBAAR.js";
import {
  createUniver
} from "../chunk-IJS27JJZ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-ZF3575OJ.js";
import "../chunk-UVVGUSEY.js";
import "../chunk-YNMKV3IP.js";
import "../chunk-QHNB6FXX.js";
import "../chunk-UFVTLXFM.js";
import "../chunk-OKNKO5JP.js";
import "../chunk-7EXELOVX.js";
import "../chunk-YFURGUFD.js";
import "../chunk-QYN6GDJ4.js";
import "../chunk-DYLSCQUF.js";
import "../chunk-EMM7K5JU.js";
import "../chunk-T2WPJPJ6.js";
import "../chunk-FLUE6P6D.js";
import "../chunk-DV3Y5AAS.js";
import "../chunk-GUW2JHJB.js";
import "../chunk-7GBE5RD3.js";
import "../chunk-JRYQPQE7.js";
import "../chunk-T6KH2DAX.js";
import "../chunk-6MWSYICV.js";
import "../chunk-XYIUNZZX.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-2FSEQWPD.js";
import "../chunk-TIJU4SVQ.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-5NCSFO5U.js";
import "../chunk-RT67ICL6.js";
import "../chunk-6E3W7VDH.js";
import "../chunk-PIYGBPYI.js";
import "../chunk-7FJVVP7M.js";
import {
  default_default,
  mergeLocales
} from "../chunk-UO46IVZK.js";
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
