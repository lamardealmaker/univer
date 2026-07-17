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
} from "../chunk-KAHBPJ2H.js";
import "../chunk-KJLSTJGJ.js";
import "../chunk-OFNOBNYX.js";
import "../chunk-GKNDWYSI.js";
import "../chunk-CCMSF4PG.js";
import "../chunk-XNVTQVGP.js";
import "../chunk-7PKEVNXT.js";
import "../chunk-OH5UJZPQ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-WJX2U6DB.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-YS7HGHTO.js";
import "../chunk-F2ERU56M.js";
import "../chunk-5OHHDK2B.js";
import "../chunk-CH5YDYVK.js";
import "../chunk-T43LP4KZ.js";
import "../chunk-HUK7CIOA.js";
import "../chunk-OXYDC2X7.js";
import "../chunk-HEU454NX.js";
import "../chunk-Z6UJHVDJ.js";
import "../chunk-OLLQVX2Y.js";
import "../chunk-RQ4XI4WL.js";
import "../chunk-34QRRYS3.js";
import "../chunk-O6PRRW7Z.js";
import "../chunk-FKIHEANL.js";
import "../chunk-XTFBF6PW.js";
import "../chunk-TQIPXV6J.js";
import "../chunk-GAG75SBK.js";
import "../chunk-VJLTKP44.js";
import "../chunk-MHBV4NGS.js";
import "../chunk-3322V2EV.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-AKJJ4FYL.js";
import "../chunk-YCI2TTTB.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-EXSD3EBI.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-SX6XMEUY.js";
import "../chunk-QAGZHJGL.js";
import {
  default_default,
  mergeLocales
} from "../chunk-S3GUYQY5.js";
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
