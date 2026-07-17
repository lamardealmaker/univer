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
} from "../chunk-JVVAABIO.js";
import "../chunk-E6NUOOPS.js";
import "../chunk-F3X23FBL.js";
import "../chunk-QHE7M3JV.js";
import "../chunk-LUA633G4.js";
import "../chunk-K4YWX2E3.js";
import "../chunk-KNCTJ2LK.js";
import "../chunk-7UXYXSX3.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-ATZPXPFF.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-YWIGRTDJ.js";
import "../chunk-J4M63MOJ.js";
import "../chunk-DT4SQNMX.js";
import "../chunk-SGKDSK3G.js";
import "../chunk-WHYPIR2R.js";
import "../chunk-ZLDNRMZ5.js";
import "../chunk-A6J6W6RX.js";
import "../chunk-BDRUAMNY.js";
import "../chunk-INYOQ74Z.js";
import "../chunk-Q4NPTQRA.js";
import "../chunk-PNXQMXMC.js";
import "../chunk-B4EGCEYD.js";
import "../chunk-C5QTTVBO.js";
import "../chunk-N46QPJFB.js";
import "../chunk-K565IP4F.js";
import "../chunk-GO5TBLGI.js";
import "../chunk-MMK2WYOX.js";
import "../chunk-RBO2BXRJ.js";
import "../chunk-TCDTP3ZT.js";
import "../chunk-VR6ZIYZ6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-AY63UQCZ.js";
import "../chunk-TQX6M3BI.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-F4VJL6FP.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-NSFKJQN7.js";
import "../chunk-X6CE6G36.js";
import {
  default_default,
  mergeLocales
} from "../chunk-SEOZDTQ5.js";
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
