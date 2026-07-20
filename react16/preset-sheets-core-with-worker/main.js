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
} from "../chunk-FCKPBNGH.js";
import "../chunk-SHSJYGR5.js";
import "../chunk-FSKPZZGN.js";
import "../chunk-H6AO7XWI.js";
import "../chunk-7ZV43N5O.js";
import "../chunk-QBNKIGH3.js";
import "../chunk-FLUXXK2P.js";
import "../chunk-HAOYYA4I.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GNXEBRMD.js";
import {
  createUniver
} from "../chunk-KIVY3HJ7.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-FBNBT237.js";
import "../chunk-VSLBQ76J.js";
import "../chunk-5HSBU7YA.js";
import "../chunk-O5D6NNYA.js";
import "../chunk-TYFZZ63T.js";
import "../chunk-QKIRY2RA.js";
import "../chunk-ID2G45H5.js";
import "../chunk-AXWBO7CZ.js";
import "../chunk-JC4REQEP.js";
import "../chunk-FFWFY2UD.js";
import "../chunk-5D5W5W4O.js";
import "../chunk-RM3DWPNN.js";
import "../chunk-WNH2ZYUY.js";
import "../chunk-VMIBYCYR.js";
import "../chunk-CEZJUUND.js";
import "../chunk-ICLRI4VA.js";
import "../chunk-UCXPWFC4.js";
import "../chunk-Q76RBTRB.js";
import "../chunk-44FRZNN5.js";
import "../chunk-BMGP4575.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-H6XSKLCW.js";
import "../chunk-IKCA4G7J.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LKK342C3.js";
import "../chunk-RT67ICL6.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-BVJL2XEK.js";
import "../chunk-B6QBU7G3.js";
import {
  default_default,
  mergeLocales
} from "../chunk-I7JVIHX5.js";
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
