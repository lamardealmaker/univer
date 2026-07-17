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
} from "../chunk-ELRBYLQU.js";
import "../chunk-SDFN6N7T.js";
import "../chunk-A5IW2226.js";
import "../chunk-L2HO2CQG.js";
import "../chunk-MXUVCFNT.js";
import "../chunk-DZDUVWVS.js";
import "../chunk-7M3DEVQO.js";
import "../chunk-JCZPTWXG.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-UYNP7FIL.js";
import {
  createUniver
} from "../chunk-J6USCKUG.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-NIR3G7JM.js";
import "../chunk-GGDI5YAS.js";
import "../chunk-HXWJ7HBU.js";
import "../chunk-QOYJHYHA.js";
import "../chunk-CBES7IWD.js";
import "../chunk-JL5DMGE5.js";
import "../chunk-DYRHXZZA.js";
import "../chunk-5ZF2FC5J.js";
import "../chunk-J5H3AARC.js";
import "../chunk-6SFB24GI.js";
import "../chunk-YCPUPCJF.js";
import "../chunk-4JNGIFBI.js";
import "../chunk-6XW5VZ7Z.js";
import "../chunk-HDKTJG76.js";
import "../chunk-YOVMMJ7T.js";
import "../chunk-XX424HZD.js";
import "../chunk-SKND6NK2.js";
import "../chunk-D32JIKSU.js";
import "../chunk-3XNHCADX.js";
import "../chunk-WM4GRYXF.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-FB3AVI5Q.js";
import "../chunk-GW4VGJQ6.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-L4PYN4TJ.js";
import "../chunk-MNMA3DIW.js";
import "../chunk-CKXFPMES.js";
import "../chunk-EY3JSFTH.js";
import "../chunk-SN56XSRC.js";
import {
  default_default,
  mergeLocales
} from "../chunk-LDL4QTZT.js";
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
