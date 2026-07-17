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
} from "../chunk-4D3LKZ7I.js";
import "../chunk-VTHOKKTL.js";
import "../chunk-MKOLWGNV.js";
import "../chunk-DJ6SVGJS.js";
import "../chunk-KVHTJ2N5.js";
import "../chunk-HMBXEKVO.js";
import "../chunk-TWWMYJPO.js";
import "../chunk-W4JGY4O3.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-5E6Y233T.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-UYHCGXSW.js";
import "../chunk-S5DNNDVN.js";
import "../chunk-52D27RML.js";
import "../chunk-Q4MT6NNG.js";
import "../chunk-YNGE7UPD.js";
import "../chunk-WCKZ36S6.js";
import "../chunk-Q5U42U52.js";
import "../chunk-UL5XTOJG.js";
import "../chunk-OYEWOMRQ.js";
import "../chunk-S344MX4T.js";
import "../chunk-B6YPZOFU.js";
import "../chunk-BM3OTM4R.js";
import "../chunk-MFV6DFJH.js";
import "../chunk-U3BXGKHY.js";
import "../chunk-ASUNTXAL.js";
import "../chunk-7TEY6IZ6.js";
import "../chunk-4TZGFT4D.js";
import "../chunk-VTWMNL5O.js";
import "../chunk-6NQTIW2J.js";
import "../chunk-23VYIF3M.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-GA5VID6A.js";
import "../chunk-47MQZF2Z.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-ORYNE4VV.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-NC5A3MKJ.js";
import "../chunk-KN5XN4TJ.js";
import {
  default_default,
  mergeLocales
} from "../chunk-WTTGPGQK.js";
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
