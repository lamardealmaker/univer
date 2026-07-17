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
} from "../chunk-BE3HYLOG.js";
import "../chunk-Y75LUFK4.js";
import "../chunk-LUFXBLBL.js";
import "../chunk-5RAMGZVI.js";
import "../chunk-WANLP54G.js";
import "../chunk-PHZX6A3X.js";
import "../chunk-I3Q43EG4.js";
import "../chunk-MHLMHVNP.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-KEWALBL2.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-7FYG62TC.js";
import "../chunk-2XHJBXD7.js";
import "../chunk-WIX4H6S4.js";
import "../chunk-4PXNYECL.js";
import "../chunk-27ZBVRMD.js";
import "../chunk-6KSFPQMM.js";
import "../chunk-GQPFIW6Y.js";
import "../chunk-6SQ7SG7D.js";
import "../chunk-QPMUETJU.js";
import "../chunk-MHIT6BRF.js";
import "../chunk-OT3UYMPQ.js";
import "../chunk-LAD4GVSG.js";
import "../chunk-VSVEC6ID.js";
import "../chunk-AL5EYF4N.js";
import "../chunk-O4CRIMVC.js";
import "../chunk-O3JM5CAK.js";
import "../chunk-IWANJFJB.js";
import "../chunk-P6QM4N26.js";
import "../chunk-XUOZUHNT.js";
import "../chunk-TCIXXMIF.js";
import "../chunk-WLENLEPE.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-M2Y4C6XV.js";
import "../chunk-TYFBZFLI.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GD36DX3J.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-JUQD2ZD4.js";
import "../chunk-ISOJK5GO.js";
import {
  default_default,
  mergeLocales
} from "../chunk-2NJBYRKH.js";
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
