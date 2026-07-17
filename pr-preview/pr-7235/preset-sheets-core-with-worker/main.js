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
} from "../chunk-TIROFTIQ.js";
import "../chunk-OSTHJTJB.js";
import "../chunk-VHTR4QHH.js";
import "../chunk-2KENC34N.js";
import "../chunk-6CQUPK3B.js";
import "../chunk-KRBN5KST.js";
import "../chunk-PSJX5MFF.js";
import "../chunk-OE4PG3S3.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GSHR2COK.js";
import {
  createUniver
} from "../chunk-H7QHKKUN.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-CXU3SQBS.js";
import "../chunk-7YAIVL6T.js";
import "../chunk-BJ6223FY.js";
import "../chunk-2SDZK7L6.js";
import "../chunk-3H3VTDWE.js";
import "../chunk-3OETGUOU.js";
import "../chunk-Z3EJXHDN.js";
import "../chunk-SWHDWTA2.js";
import "../chunk-WBF63BZZ.js";
import "../chunk-MD4PUTB3.js";
import "../chunk-7DZQ6MTX.js";
import "../chunk-ZENWD3RL.js";
import "../chunk-WM2NHLMK.js";
import "../chunk-2Q7LXA3Q.js";
import "../chunk-CFLPNLT4.js";
import "../chunk-ITWNK37V.js";
import "../chunk-7YLES6LL.js";
import "../chunk-KKYZQQWV.js";
import "../chunk-JE4OBOGU.js";
import "../chunk-T67UMXJD.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-LJWJTURH.js";
import "../chunk-TCQVNB3M.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-MRAU7DSD.js";
import "../chunk-MNMA3DIW.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-AJHNJVEY.js";
import "../chunk-PALYGNIK.js";
import {
  default_default,
  mergeLocales
} from "../chunk-SBUQW7IY.js";
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
