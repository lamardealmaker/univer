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
} from "../chunk-KXNUQOTV.js";
import "../chunk-NU5DL6QC.js";
import "../chunk-2NRTSDLJ.js";
import "../chunk-PXNRUVDE.js";
import "../chunk-DEREXEBR.js";
import "../chunk-F2NZGM6P.js";
import "../chunk-32STYHMU.js";
import "../chunk-5JPCFLQS.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-VEMZCXNQ.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-EEWOA4AK.js";
import "../chunk-JNTZUEDB.js";
import "../chunk-JTWZGPMX.js";
import "../chunk-D5GO3PKF.js";
import "../chunk-W2QAZLZB.js";
import "../chunk-AW3THQJC.js";
import "../chunk-MQWVFX6D.js";
import "../chunk-7YGFGBQZ.js";
import "../chunk-JDG5Q7QM.js";
import "../chunk-NWCQRKDM.js";
import "../chunk-5PKSD5FN.js";
import "../chunk-LNWB5DY6.js";
import "../chunk-T7ZNNFUL.js";
import "../chunk-UR7FLBMG.js";
import "../chunk-RAUPW3YF.js";
import "../chunk-HQTZEWNG.js";
import "../chunk-XHXEE2WU.js";
import "../chunk-EEBIG3SP.js";
import "../chunk-VYHEGTXK.js";
import "../chunk-BV7LMME3.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-EK2C55KF.js";
import "../chunk-QK6TZJEH.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-B3NIOS63.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-N6UCXEZB.js";
import "../chunk-3EG43LTZ.js";
import {
  default_default,
  mergeLocales
} from "../chunk-DOJ4S5IA.js";
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
