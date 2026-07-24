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
} from "../chunk-XMJCQY4A.js";
import "../chunk-YWV4NTUP.js";
import "../chunk-7WHWJJOM.js";
import "../chunk-ALKE2RHE.js";
import "../chunk-YXWAVICS.js";
import "../chunk-4GYZJWNZ.js";
import "../chunk-IIC6ZIYR.js";
import "../chunk-T6ZWLSPM.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-JMZJQV3F.js";
import {
  createUniver
} from "../chunk-YU6HQYML.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-GKIQ5GWH.js";
import "../chunk-BYTA6ESN.js";
import "../chunk-TUU52DFA.js";
import "../chunk-KNADLMJL.js";
import "../chunk-ZEBB6T6M.js";
import "../chunk-SXUNVQYN.js";
import "../chunk-TM6UE34F.js";
import "../chunk-MTPN3FDE.js";
import "../chunk-OUAO32Y6.js";
import "../chunk-ITNWKUEF.js";
import "../chunk-4SRC5Y7S.js";
import "../chunk-G64QXZJY.js";
import "../chunk-BTL2EPXY.js";
import "../chunk-HN6XBBWJ.js";
import "../chunk-DGTPWCRW.js";
import "../chunk-6PQHJUI2.js";
import "../chunk-MZKKB56N.js";
import "../chunk-OOOLFT6Z.js";
import "../chunk-EFWHF55A.js";
import "../chunk-URJDLYLM.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-KWSI3CYQ.js";
import "../chunk-W25FCP6C.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-DVPFJYEU.js";
import "../chunk-7RKWV2OH.js";
import "../chunk-GNL7T4QS.js";
import "../chunk-FBTXTQTX.js";
import "../chunk-T3ZF4P6J.js";
import {
  default_default,
  mergeLocales
} from "../chunk-MIK4BD7H.js";
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
