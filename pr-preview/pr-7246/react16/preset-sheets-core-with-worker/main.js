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
} from "../chunk-HPM4XYJG.js";
import "../chunk-5GP5ISA7.js";
import "../chunk-3LNXBOCJ.js";
import "../chunk-NJRYQNNU.js";
import "../chunk-BM43V3OA.js";
import "../chunk-PTTLTC3J.js";
import "../chunk-VIWUNEFP.js";
import "../chunk-ZTJE7WNT.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GSHR2COK.js";
import {
  createUniver
} from "../chunk-DP45LFFO.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-TAAVBZ72.js";
import "../chunk-IGCS6QZD.js";
import "../chunk-WX3GX44O.js";
import "../chunk-46GZYFAT.js";
import "../chunk-XLUVLZ72.js";
import "../chunk-SZC5QZIV.js";
import "../chunk-M7LOWCOD.js";
import "../chunk-75PA6RME.js";
import "../chunk-IVZBQVQ4.js";
import "../chunk-SVK7ZPPY.js";
import "../chunk-36TEURW2.js";
import "../chunk-EA5XJEOX.js";
import "../chunk-GDLQKIFN.js";
import "../chunk-VCITGCDQ.js";
import "../chunk-QWROOSF7.js";
import "../chunk-H42IVN7Z.js";
import "../chunk-27A4EC2G.js";
import "../chunk-S2KU4FZR.js";
import "../chunk-4OO4Y65L.js";
import "../chunk-TGV5SZHH.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-RR34ERDM.js";
import "../chunk-FNYYPRGY.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-7ZGN2HKJ.js";
import "../chunk-MNMA3DIW.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-FGYNDRR7.js";
import "../chunk-THSFYI7A.js";
import {
  default_default,
  mergeLocales
} from "../chunk-L2YDHVS3.js";
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
