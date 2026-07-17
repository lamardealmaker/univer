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
} from "../chunk-HCRL4EOD.js";
import "../chunk-T3OMWUUB.js";
import "../chunk-YPO3ALBH.js";
import "../chunk-R2XZ557F.js";
import "../chunk-56MXFRGN.js";
import "../chunk-BIFGCO3L.js";
import "../chunk-BJ3DGTNP.js";
import "../chunk-MGH32R3T.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-5E6Y233T.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-46IHOGCA.js";
import "../chunk-F6Y4PRWF.js";
import "../chunk-OVL5IKBT.js";
import "../chunk-Q4MT6NNG.js";
import "../chunk-YNGE7UPD.js";
import "../chunk-QXNB3ADC.js";
import "../chunk-Q5U42U52.js";
import "../chunk-5C3STTUV.js";
import "../chunk-OYEWOMRQ.js";
import "../chunk-6VDPEYPY.js";
import "../chunk-B6YPZOFU.js";
import "../chunk-67Q25QBV.js";
import "../chunk-WGRD5ZZN.js";
import "../chunk-HTHXZRIK.js";
import "../chunk-ASUNTXAL.js";
import "../chunk-7TEY6IZ6.js";
import "../chunk-7XOCQ66B.js";
import "../chunk-VTWMNL5O.js";
import "../chunk-6NNCJEUZ.js";
import "../chunk-ALND7WPK.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-VUYV6U5L.js";
import "../chunk-47MQZF2Z.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-ORYNE4VV.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-NC5A3MKJ.js";
import "../chunk-KN5XN4TJ.js";
import {
  default_default,
  mergeLocales
} from "../chunk-WTTGPGQK.js";
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
