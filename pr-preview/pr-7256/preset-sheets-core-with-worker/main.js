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
} from "../chunk-BANFFUEE.js";
import "../chunk-MYDNCVP4.js";
import "../chunk-PX7A6ODL.js";
import "../chunk-ORTQE64G.js";
import "../chunk-SFJH5IYU.js";
import "../chunk-HFR64GC4.js";
import "../chunk-ZW5DECE3.js";
import "../chunk-ROJQ2WH7.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-BNUP2FQV.js";
import {
  createUniver
} from "../chunk-EVXRPISL.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-DAE7FFTX.js";
import "../chunk-KRRYXKHD.js";
import "../chunk-N5CPRPSW.js";
import "../chunk-KLW65XAU.js";
import "../chunk-HVXWG44K.js";
import "../chunk-7FJX3F4Q.js";
import "../chunk-J5J63VFH.js";
import "../chunk-NXDQYXEQ.js";
import "../chunk-PV767NNL.js";
import "../chunk-2QKGHOX7.js";
import "../chunk-ORYV3R2Q.js";
import "../chunk-ZLHKM4LB.js";
import "../chunk-Z4V4SH7Q.js";
import "../chunk-EVFLLNMM.js";
import "../chunk-C2MTMN7J.js";
import "../chunk-ESRNT5VW.js";
import "../chunk-ERGVVHGO.js";
import "../chunk-JF7CL3AQ.js";
import "../chunk-S2GYUVVL.js";
import "../chunk-OZI25QXK.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-R3FURYVI.js";
import "../chunk-GIXTJOYT.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-DSXI3R4L.js";
import "../chunk-5OGCV4NR.js";
import "../chunk-CKXFPMES.js";
import "../chunk-AVV6LYFI.js";
import "../chunk-XY6TNQNM.js";
import {
  default_default,
  mergeLocales
} from "../chunk-DJVW44P3.js";
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
