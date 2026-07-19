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
} from "../chunk-O5ZVIRMH.js";
import "../chunk-I7D5NLVH.js";
import "../chunk-ANISBYP3.js";
import "../chunk-SQNB5BXN.js";
import "../chunk-7GHWLFFJ.js";
import "../chunk-73WTACXN.js";
import "../chunk-44MRLDFT.js";
import "../chunk-7TQX2BCF.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-U2CCMETK.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-XOLFHXLN.js";
import "../chunk-ZEDURJDP.js";
import "../chunk-75WWDPBV.js";
import "../chunk-ADKJTUJA.js";
import "../chunk-JXLSNPRY.js";
import "../chunk-T7I3D4VX.js";
import "../chunk-MWIL75HP.js";
import "../chunk-5ZK4LBSY.js";
import "../chunk-LWZEJZFI.js";
import "../chunk-U5INUUUC.js";
import "../chunk-GOOLQTQL.js";
import "../chunk-UANBNWAU.js";
import "../chunk-PNJIYUZM.js";
import "../chunk-BDS5PPVC.js";
import "../chunk-YAGQFJKW.js";
import "../chunk-3ZCP733S.js";
import "../chunk-5XPQPNBC.js";
import "../chunk-SN3VLZBH.js";
import "../chunk-DLVYVF5V.js";
import "../chunk-OSIUONFY.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-BD4AZUYQ.js";
import "../chunk-XVHDNOQH.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-C772RFFN.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-7U53J3FY.js";
import "../chunk-7UTO6AD7.js";
import {
  default_default,
  mergeLocales
} from "../chunk-JDLKIM3V.js";
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
