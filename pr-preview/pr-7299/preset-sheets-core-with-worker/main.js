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
} from "../chunk-5SIXMBSB.js";
import "../chunk-E4RO4G7H.js";
import "../chunk-4QIOEDMG.js";
import "../chunk-V3TTP6K3.js";
import "../chunk-5IPTVQ4T.js";
import "../chunk-QMSEKIUP.js";
import "../chunk-PIUBTNQU.js";
import "../chunk-O3YLY23X.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GNXEBRMD.js";
import {
  createUniver
} from "../chunk-6FMCMWDP.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-JUALPVCB.js";
import "../chunk-RQRFWYCR.js";
import "../chunk-IZGM7S4D.js";
import "../chunk-FFYUVA6P.js";
import "../chunk-MEB7CVKE.js";
import "../chunk-YO43H3OI.js";
import "../chunk-5Q54XOV2.js";
import "../chunk-RXTDZUBB.js";
import "../chunk-PRWGWPE7.js";
import "../chunk-DYJSXBVS.js";
import "../chunk-6YIJWKIY.js";
import "../chunk-QPC36KIP.js";
import "../chunk-TXONSSOW.js";
import "../chunk-GC5TIPZA.js";
import "../chunk-GAQWO6WO.js";
import "../chunk-CQNVWY62.js";
import "../chunk-547FKRP4.js";
import "../chunk-JIG7REER.js";
import "../chunk-HHFW36YX.js";
import "../chunk-GV7BDRSR.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-USNZHLNV.js";
import "../chunk-ZPHG2RB6.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-C3FJHTQU.js";
import "../chunk-RT67ICL6.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-3L7AA2MQ.js";
import "../chunk-S2JHE4EK.js";
import {
  default_default,
  mergeLocales
} from "../chunk-7UDGGJR5.js";
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
