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
} from "../chunk-DMYNSE3E.js";
import "../chunk-WUJTYW2R.js";
import "../chunk-N3HZ7BCC.js";
import "../chunk-ZZQRW4SS.js";
import "../chunk-J5PVRKYB.js";
import "../chunk-PFECA6WV.js";
import "../chunk-GAC2MQ7G.js";
import "../chunk-TN5FUPZM.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GSHR2COK.js";
import {
  createUniver
} from "../chunk-WJI3CYJ4.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-ZJ6UCU7X.js";
import "../chunk-XVQUQN32.js";
import "../chunk-EEUJHQEE.js";
import "../chunk-TQIO7PRG.js";
import "../chunk-SWGUQWHA.js";
import "../chunk-TAYDO4L5.js";
import "../chunk-ILADHZMU.js";
import "../chunk-7AFTDK4N.js";
import "../chunk-Q7QIMPSL.js";
import "../chunk-ELKIVHXI.js";
import "../chunk-TKSXJR5U.js";
import "../chunk-2KXTOOVM.js";
import "../chunk-UXAVM3YE.js";
import "../chunk-E4DEPHF7.js";
import "../chunk-L4XQB5B5.js";
import "../chunk-QTETZIFL.js";
import "../chunk-GVKG5GI7.js";
import "../chunk-EK36UWLA.js";
import "../chunk-TA533AUM.js";
import "../chunk-RGIQILDK.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-UEB57LIN.js";
import "../chunk-KAV3QSQW.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-HINQTSXY.js";
import "../chunk-MNMA3DIW.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-JBTX5AZD.js";
import "../chunk-MZIIE37M.js";
import {
  default_default,
  mergeLocales
} from "../chunk-AE3R7DH2.js";
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
