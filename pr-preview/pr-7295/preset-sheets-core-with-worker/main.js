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
} from "../chunk-QXJCKZW4.js";
import "../chunk-27HSQ3IV.js";
import "../chunk-SOX3IWRJ.js";
import "../chunk-OIDSYZKV.js";
import "../chunk-4Y7FWLBP.js";
import "../chunk-5WA2MYOD.js";
import "../chunk-WIICQ26F.js";
import "../chunk-WSHNFWMJ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GNXEBRMD.js";
import {
  createUniver
} from "../chunk-SV2IGJBB.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-AEQA7HGJ.js";
import "../chunk-JVJDYID7.js";
import "../chunk-6Z5WHJAU.js";
import "../chunk-ZAOC2G7W.js";
import "../chunk-ALK2366H.js";
import "../chunk-4XO72TYX.js";
import "../chunk-U4NMQSDJ.js";
import "../chunk-KJZTQJJI.js";
import "../chunk-QGFBYSYZ.js";
import "../chunk-PVP6TUSB.js";
import "../chunk-GWQLZOWW.js";
import "../chunk-VHL45KXN.js";
import "../chunk-IFHZOFXD.js";
import "../chunk-ZQXTXLAM.js";
import "../chunk-D32HWUDS.js";
import "../chunk-TPIHRZCJ.js";
import "../chunk-PBQGUB44.js";
import "../chunk-GBMWEQ3Y.js";
import "../chunk-XZLDA7KU.js";
import "../chunk-OT2A7JJT.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-N3TFKLQB.js";
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
