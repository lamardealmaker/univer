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
} from "../chunk-HE3N5MZO.js";
import "../chunk-G3DPANEG.js";
import "../chunk-WO2T5LS6.js";
import "../chunk-KCPEZQNI.js";
import "../chunk-CLAQUZ7S.js";
import "../chunk-X2F5MHTL.js";
import "../chunk-PEE4DS5R.js";
import "../chunk-KD7DYNL4.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-CNGJ6CU4.js";
import {
  createUniver
} from "../chunk-I54FJSJ3.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-COQ3A3WR.js";
import "../chunk-7S4ZBXHN.js";
import "../chunk-ORLIWCAO.js";
import "../chunk-MWSKOAPJ.js";
import "../chunk-BCXRDX4R.js";
import "../chunk-JX7M23K3.js";
import "../chunk-2GZZ7AG3.js";
import "../chunk-E62ISRY7.js";
import "../chunk-TVZ5VKXG.js";
import "../chunk-COYW4VYD.js";
import "../chunk-ECVFANWN.js";
import "../chunk-DCMZMYG3.js";
import "../chunk-EC5SJWCG.js";
import "../chunk-GQSEG75L.js";
import "../chunk-PO5ZGHQT.js";
import "../chunk-SYM4OOBL.js";
import "../chunk-IX7XWJRZ.js";
import "../chunk-PH4B7R6S.js";
import "../chunk-W6GY7QZO.js";
import "../chunk-LVZALIE5.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-GAR7NJMN.js";
import "../chunk-5DJSLAB5.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-2PZVU6UA.js";
import "../chunk-7RKWV2OH.js";
import "../chunk-O2N4YVYW.js";
import "../chunk-DPZUWCWC.js";
import "../chunk-X3HPZGMT.js";
import {
  default_default,
  mergeLocales
} from "../chunk-RLTCIETE.js";
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
