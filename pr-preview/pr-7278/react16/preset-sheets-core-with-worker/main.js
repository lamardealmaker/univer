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
} from "../chunk-ZF5L3DHD.js";
import "../chunk-IWZQHPYX.js";
import "../chunk-G4OPLBVK.js";
import "../chunk-KMYE4RMM.js";
import "../chunk-IPPRQXXN.js";
import "../chunk-2FIVEGDT.js";
import "../chunk-X3VBXNFL.js";
import "../chunk-G3DC234V.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-ENZZNJ22.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-GWTHLISD.js";
import "../chunk-VXUNYELH.js";
import "../chunk-O7OMLWHU.js";
import "../chunk-M4TSTLAS.js";
import "../chunk-6CCWAEZS.js";
import "../chunk-FBBMH5LO.js";
import "../chunk-2LRQQ4PD.js";
import "../chunk-COB34VZM.js";
import "../chunk-QYD3IDR3.js";
import "../chunk-RTOBCPIC.js";
import "../chunk-NTBQ37CM.js";
import "../chunk-IOIJEPSD.js";
import "../chunk-AJCGR6FF.js";
import "../chunk-7IAGYJ7F.js";
import "../chunk-TE5KR74S.js";
import "../chunk-5XGYMHOO.js";
import "../chunk-BGRUD5SN.js";
import "../chunk-ILTZ2DRX.js";
import "../chunk-VTS6GCC7.js";
import "../chunk-WECBJNMR.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-4S6YNTII.js";
import "../chunk-BTZ36RUQ.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-N4MCUC7X.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-7SCTSQ5Z.js";
import "../chunk-ZB2EG2DN.js";
import {
  default_default,
  mergeLocales
} from "../chunk-V2SQB4ZF.js";
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
