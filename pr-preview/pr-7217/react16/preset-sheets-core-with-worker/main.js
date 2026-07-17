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
} from "../chunk-BFA2SAWD.js";
import "../chunk-UFJ62QDV.js";
import "../chunk-GHUCGZLR.js";
import "../chunk-YXFXJ7F2.js";
import "../chunk-4BT55YG6.js";
import "../chunk-5QCTIDRC.js";
import "../chunk-HOBAUPIL.js";
import "../chunk-YOKJ274T.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-735OJCDK.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-RQJXMRDP.js";
import "../chunk-NGVP7UUU.js";
import "../chunk-AILBPXTZ.js";
import "../chunk-IIPZAK7D.js";
import "../chunk-M344IDQF.js";
import "../chunk-4L23DBIU.js";
import "../chunk-DULHMZA3.js";
import "../chunk-TNX55SUN.js";
import "../chunk-QU7FBAMK.js";
import "../chunk-F5NQUJP4.js";
import "../chunk-HGCM6PHV.js";
import "../chunk-BZH5ARX5.js";
import "../chunk-WEJOILCA.js";
import "../chunk-JX2CEJDP.js";
import "../chunk-EI6V575R.js";
import "../chunk-PMWZMB4D.js";
import "../chunk-CNMSQ7AO.js";
import "../chunk-3BYIPW5Y.js";
import "../chunk-JLSCVAQZ.js";
import "../chunk-G7J5JI6Q.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-STR5WP3G.js";
import "../chunk-2KZE57RX.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-OMOUDXTN.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-ZACKK3AL.js";
import "../chunk-HIBANMIM.js";
import {
  default_default,
  mergeLocales
} from "../chunk-TBRD6MYV.js";
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
