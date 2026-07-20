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
} from "../chunk-QCZQ33TU.js";
import "../chunk-62IWJYJL.js";
import "../chunk-EENBMYBS.js";
import "../chunk-BNGSIIYC.js";
import "../chunk-LB65PRAR.js";
import "../chunk-VXB5BRKM.js";
import "../chunk-DX46GJEY.js";
import "../chunk-CREIIXC7.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GNXEBRMD.js";
import {
  createUniver
} from "../chunk-SV2IGJBB.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-VYCYHXCJ.js";
import "../chunk-OPNFMVWW.js";
import "../chunk-WTRTFD4R.js";
import "../chunk-ZAOC2G7W.js";
import "../chunk-ALK2366H.js";
import "../chunk-B24FC4JF.js";
import "../chunk-U4NMQSDJ.js";
import "../chunk-LUNSNCZM.js";
import "../chunk-QGFBYSYZ.js";
import "../chunk-73LDN5R3.js";
import "../chunk-GWQLZOWW.js";
import "../chunk-MHKMSJCT.js";
import "../chunk-VV2M4XBG.js";
import "../chunk-A3QGOWU7.js";
import "../chunk-D32HWUDS.js";
import "../chunk-TPIHRZCJ.js";
import "../chunk-ELN4ZIIS.js";
import "../chunk-GBMWEQ3Y.js";
import "../chunk-64XE5JND.js";
import "../chunk-NJUCPULC.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-MQT4NK3P.js";
import "../chunk-IGNDEM5L.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-SKO3JANX.js";
import "../chunk-RT67ICL6.js";
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
