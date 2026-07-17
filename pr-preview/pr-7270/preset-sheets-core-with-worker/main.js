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
} from "../chunk-TGLLLWNV.js";
import "../chunk-Y3DILMPJ.js";
import "../chunk-DZE6SND6.js";
import "../chunk-MQYZFOQR.js";
import "../chunk-ABAFB27S.js";
import "../chunk-GJ6YT7D5.js";
import "../chunk-MNK7SNRP.js";
import "../chunk-4OO3DABW.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-ONB3TLRZ.js";
import {
  createUniver
} from "../chunk-65LF24VT.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-HGXWW44N.js";
import "../chunk-RIVZ2DPK.js";
import "../chunk-7LQZLE27.js";
import "../chunk-AEBDMPOL.js";
import "../chunk-JRLUBUSE.js";
import "../chunk-TJBWAVBF.js";
import "../chunk-25CTF7AX.js";
import "../chunk-NW3J2ZAQ.js";
import "../chunk-5RAVYVE7.js";
import "../chunk-LPASTFGN.js";
import "../chunk-KSJIBBF3.js";
import "../chunk-SCZNWHG3.js";
import "../chunk-ZN57JV22.js";
import "../chunk-6XHHIWPX.js";
import "../chunk-PFLLGMVY.js";
import "../chunk-SACF7NH4.js";
import "../chunk-XE6EQNBT.js";
import "../chunk-FTZWCOOO.js";
import "../chunk-UICQ6I7F.js";
import "../chunk-QEEZAS5D.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-CXKDTK37.js";
import "../chunk-AHDJ4KJA.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-NSTTH4CN.js";
import "../chunk-WDQ4UVQE.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-RBYPFHCX.js";
import "../chunk-IOSPCB23.js";
import {
  default_default,
  mergeLocales
} from "../chunk-EYIJFNJM.js";
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
