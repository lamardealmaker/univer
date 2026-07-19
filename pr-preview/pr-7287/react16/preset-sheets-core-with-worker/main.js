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
} from "../chunk-MMKXF3UY.js";
import "../chunk-AKDCEDR2.js";
import "../chunk-DXIJSOJD.js";
import "../chunk-FD2WPNDT.js";
import "../chunk-CELZIZ7N.js";
import "../chunk-SGIOAW2O.js";
import "../chunk-MOZJSNVM.js";
import "../chunk-H5X5ROJJ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-2KE4WHJD.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-IFD5CX3O.js";
import "../chunk-SZKBDD6B.js";
import "../chunk-ROX27GWH.js";
import "../chunk-7KLROV5E.js";
import "../chunk-IVDCP3QQ.js";
import "../chunk-DRNCCNCG.js";
import "../chunk-VI6BHERV.js";
import "../chunk-QMJQOJXQ.js";
import "../chunk-JWT242QM.js";
import "../chunk-SEWMBJGT.js";
import "../chunk-AUAM6ZPL.js";
import "../chunk-CT3NRW2Y.js";
import "../chunk-2FTWYJBI.js";
import "../chunk-WOC376NZ.js";
import "../chunk-3EOHUHM2.js";
import "../chunk-VJV7GPBZ.js";
import "../chunk-L6OXFST7.js";
import "../chunk-TB4GRE4Z.js";
import "../chunk-DYU5ITRL.js";
import "../chunk-T4UO3ZX3.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-FLBWAU7F.js";
import "../chunk-W7OQZZBD.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-KEXS675W.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-4KLRZ754.js";
import "../chunk-JLS66HNK.js";
import {
  default_default,
  mergeLocales
} from "../chunk-2TEKAXEL.js";
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
