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
} from "../chunk-G2HCGJHN.js";
import "../chunk-4V3COVLF.js";
import "../chunk-IZMP536Y.js";
import "../chunk-HVLUF3ME.js";
import "../chunk-ZCMLVGHZ.js";
import "../chunk-ZY5FXZX5.js";
import "../chunk-PAI4U4VE.js";
import "../chunk-JHJ3FCN2.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-374DJ6YY.js";
import {
  createUniver
} from "../chunk-SV2IGJBB.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-6QWBIRYQ.js";
import "../chunk-TCWHGASH.js";
import "../chunk-VOLQD22W.js";
import "../chunk-ZAOC2G7W.js";
import "../chunk-ALK2366H.js";
import "../chunk-NR33WJUS.js";
import "../chunk-U4NMQSDJ.js";
import "../chunk-75INGLUY.js";
import "../chunk-QGFBYSYZ.js";
import "../chunk-73LDN5R3.js";
import "../chunk-GWQLZOWW.js";
import "../chunk-5HWRN3J7.js";
import "../chunk-EVUV6CJL.js";
import "../chunk-NZQRU55Q.js";
import "../chunk-D32HWUDS.js";
import "../chunk-TPIHRZCJ.js";
import "../chunk-D3B56PHH.js";
import "../chunk-GBMWEQ3Y.js";
import "../chunk-4FEUQSM7.js";
import "../chunk-UAOUR7EN.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-Q24UB5PW.js";
import "../chunk-IGNDEM5L.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-SKO3JANX.js";
import "../chunk-JXXTLVNI.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-N7S5VYEO.js";
import "../chunk-Z4IK4AV3.js";
import {
  default_default,
  mergeLocales
} from "../chunk-FD3JZH6D.js";
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
