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
} from "../chunk-HGPFJ6LD.js";
import "../chunk-B4WEA4WP.js";
import "../chunk-VV4ZKKOE.js";
import "../chunk-CZ5R2EI3.js";
import "../chunk-INJYHJK2.js";
import "../chunk-G2SKR3PO.js";
import "../chunk-RXTWEXK2.js";
import "../chunk-OGXWULF3.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-63PUBAAR.js";
import {
  createUniver
} from "../chunk-JMPSR523.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-HS75KBFA.js";
import "../chunk-D2Y6ATHX.js";
import "../chunk-UOKDE6OI.js";
import "../chunk-SKZX6RVH.js";
import "../chunk-FTLOCGDF.js";
import "../chunk-WQG2BVGK.js";
import "../chunk-TYEKPORL.js";
import "../chunk-6V4QVG2G.js";
import "../chunk-ZY225B4L.js";
import "../chunk-LMKACHFS.js";
import "../chunk-WOZPGAOD.js";
import "../chunk-NL3XBNZS.js";
import "../chunk-CNVKYC6C.js";
import "../chunk-JWWKPC7Q.js";
import "../chunk-FYOQAQ6J.js";
import "../chunk-4BJNTCKW.js";
import "../chunk-Q7RQUAMQ.js";
import "../chunk-OSWEEDUS.js";
import "../chunk-BONJDQ7T.js";
import "../chunk-XXJAVF5O.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-6AM74UQX.js";
import "../chunk-3WIXW4B2.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-4GAKH6J2.js";
import "../chunk-RT67ICL6.js";
import "../chunk-6E3W7VDH.js";
import "../chunk-WZUQ6F4L.js";
import "../chunk-OR7UCNP7.js";
import {
  default_default,
  mergeLocales
} from "../chunk-QO3C2C2Z.js";
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
