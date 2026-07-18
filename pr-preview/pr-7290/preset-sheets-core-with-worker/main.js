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
} from "../chunk-VJ4H7ASF.js";
import "../chunk-ARVSHVT4.js";
import "../chunk-7KIJJWCE.js";
import "../chunk-BEZEM2A3.js";
import "../chunk-2LJQEOHF.js";
import "../chunk-IR77YM6T.js";
import "../chunk-KTVJKDI5.js";
import "../chunk-VGEVM5XA.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-374DJ6YY.js";
import {
  createUniver
} from "../chunk-SZ343T2R.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-IZ5KQSYM.js";
import "../chunk-QS542LQM.js";
import "../chunk-Z6YJBBF4.js";
import "../chunk-KX7AOVMW.js";
import "../chunk-RQEXMJBU.js";
import "../chunk-XPCXPRTU.js";
import "../chunk-UGMYLPHH.js";
import "../chunk-TOMOOGFZ.js";
import "../chunk-KVLBQ45J.js";
import "../chunk-FX3FWPDX.js";
import "../chunk-UNQNW6ZH.js";
import "../chunk-EEQXJFHT.js";
import "../chunk-J2PEVNYA.js";
import "../chunk-LVYBOB7R.js";
import "../chunk-2XSYQGHN.js";
import "../chunk-T5HH4QJX.js";
import "../chunk-XHVYYHWF.js";
import "../chunk-XNZBNOKE.js";
import "../chunk-PZEGEJ3B.js";
import "../chunk-ZX25COXL.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-ZDWV6DZP.js";
import "../chunk-HV3EXX75.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-F6HYNG7A.js";
import "../chunk-JXXTLVNI.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-KOL7QAKS.js";
import "../chunk-VPYMURTI.js";
import {
  default_default,
  mergeLocales
} from "../chunk-KDL4XP5H.js";
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
