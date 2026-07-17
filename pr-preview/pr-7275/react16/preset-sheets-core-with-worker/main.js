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
} from "../chunk-Q3AULF26.js";
import "../chunk-V7DKAW36.js";
import "../chunk-25JVPRKP.js";
import "../chunk-2J4FIOIW.js";
import "../chunk-2NY2MVUF.js";
import "../chunk-4CYPIC4Z.js";
import "../chunk-ERYJAPGK.js";
import "../chunk-4YGL7WW4.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-536Z4QKZ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-TZMJLZJG.js";
import "../chunk-KNIWTUEW.js";
import "../chunk-GSK4Z44D.js";
import "../chunk-S5HZOBLT.js";
import "../chunk-6QYH3UXT.js";
import "../chunk-RLFV7IGZ.js";
import "../chunk-5YD27GFQ.js";
import "../chunk-Q7EXQUBK.js";
import "../chunk-6YJ6DVO7.js";
import "../chunk-XOLRODHO.js";
import "../chunk-7CYBNH2W.js";
import "../chunk-XL2Z5LQD.js";
import "../chunk-Y255HRBH.js";
import "../chunk-4HXKLS73.js";
import "../chunk-YPXOSRDC.js";
import "../chunk-KSNAAQD3.js";
import "../chunk-I2YLEBCZ.js";
import "../chunk-6AVG2GAC.js";
import "../chunk-3APMRQNE.js";
import "../chunk-5WO5ODMW.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-CL3B2JWT.js";
import "../chunk-PBMDEVXC.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-ZCI2FDXL.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-KVAY7V76.js";
import "../chunk-Z3BH4FVF.js";
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
