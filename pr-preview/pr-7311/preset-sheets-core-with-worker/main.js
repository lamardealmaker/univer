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
} from "../chunk-NPCOH57W.js";
import "../chunk-G6WHJG2W.js";
import "../chunk-YEL3AI2Z.js";
import "../chunk-2FYDDQGY.js";
import "../chunk-DQOHAWRI.js";
import "../chunk-5GODAQFI.js";
import "../chunk-6OO76ZBJ.js";
import "../chunk-KEZJH4EX.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-CENPYPGL.js";
import {
  createUniver
} from "../chunk-UUZDHTLP.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-SKIEW3ZJ.js";
import "../chunk-EIUYBOU7.js";
import "../chunk-3OEOVIIY.js";
import "../chunk-AQQRMB2F.js";
import "../chunk-G4SPYRC3.js";
import "../chunk-3MGSOXMQ.js";
import "../chunk-3ZLX3JPA.js";
import "../chunk-JKKYTCGC.js";
import "../chunk-WB6AT7VP.js";
import "../chunk-B6BZKVW2.js";
import "../chunk-6HIS66VH.js";
import "../chunk-NT27HNAM.js";
import "../chunk-L5N6EK44.js";
import "../chunk-ORNCECME.js";
import "../chunk-SHVSS5WN.js";
import "../chunk-UN5DENJG.js";
import "../chunk-5TDXNWMC.js";
import "../chunk-NG3XLTNK.js";
import "../chunk-K3ZG63JY.js";
import "../chunk-NDLZPOUP.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-ISCJ2R73.js";
import "../chunk-AOGYP6JO.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-MTLRNOSN.js";
import "../chunk-3BTKBUIM.js";
import "../chunk-W7SCD2GT.js";
import "../chunk-QDZX4RLS.js";
import "../chunk-XFNITGGT.js";
import {
  default_default,
  mergeLocales
} from "../chunk-JAWHQSZK.js";
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
