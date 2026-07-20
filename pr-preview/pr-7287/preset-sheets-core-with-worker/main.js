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
} from "../chunk-WI24LAZX.js";
import "../chunk-MSVOTWZF.js";
import "../chunk-X6LUM34X.js";
import "../chunk-5NHEOI43.js";
import "../chunk-YMH337OL.js";
import "../chunk-4TKRF5TJ.js";
import "../chunk-UTWCMFZ5.js";
import "../chunk-SCWO42BY.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GNXEBRMD.js";
import {
  createUniver
} from "../chunk-YCKSXMNA.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-6EQUQCP2.js";
import "../chunk-TIURNNZB.js";
import "../chunk-6ZR2BR7V.js";
import "../chunk-HWCYHLNX.js";
import "../chunk-XDQJB3YL.js";
import "../chunk-Y2ZKW3ZZ.js";
import "../chunk-SKTYHO2A.js";
import "../chunk-LMCZNNAV.js";
import "../chunk-TGKQJ2YD.js";
import "../chunk-JV6Z7DOT.js";
import "../chunk-CIJRPV3L.js";
import "../chunk-4ANS6WEI.js";
import "../chunk-J4UA4L7Q.js";
import "../chunk-BKIR34HR.js";
import "../chunk-R6BP5EMP.js";
import "../chunk-CGKJGDJU.js";
import "../chunk-ZMVZMHCQ.js";
import "../chunk-JQGW5555.js";
import "../chunk-5GI44LH7.js";
import "../chunk-GLPPCME6.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-2CV4JNOO.js";
import "../chunk-4465ZSPH.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-BBOHSEUH.js";
import "../chunk-RT67ICL6.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-TDSPDX3L.js";
import "../chunk-CDLFIQUZ.js";
import {
  default_default,
  mergeLocales
} from "../chunk-UOL2OHAA.js";
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
