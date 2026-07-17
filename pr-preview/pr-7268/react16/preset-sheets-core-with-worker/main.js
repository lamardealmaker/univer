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
} from "../chunk-GWPGKATP.js";
import "../chunk-ELKPHZ62.js";
import "../chunk-NFDUJ3IY.js";
import "../chunk-NYWG55M7.js";
import "../chunk-OFCUKA75.js";
import "../chunk-GNVXFCWK.js";
import "../chunk-ELOPXK3Q.js";
import "../chunk-DYDML2ES.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-BNUP2FQV.js";
import {
  createUniver
} from "../chunk-65LF24VT.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-JZEBFXA4.js";
import "../chunk-IE2Z24WU.js";
import "../chunk-5FWPJYCW.js";
import "../chunk-AEBDMPOL.js";
import "../chunk-JRLUBUSE.js";
import "../chunk-7NU5UX2I.js";
import "../chunk-25CTF7AX.js";
import "../chunk-DGBZEOYT.js";
import "../chunk-5RAVYVE7.js";
import "../chunk-ILVMKHWX.js";
import "../chunk-KSJIBBF3.js";
import "../chunk-EJY34MXJ.js";
import "../chunk-PDA5QUAT.js";
import "../chunk-FT7X6IJR.js";
import "../chunk-PFLLGMVY.js";
import "../chunk-SACF7NH4.js";
import "../chunk-MZDEMJ3G.js";
import "../chunk-FTZWCOOO.js";
import "../chunk-FDGKLKNF.js";
import "../chunk-XH44RUDB.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-65EMFKCV.js";
import "../chunk-AHDJ4KJA.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-NSTTH4CN.js";
import "../chunk-5OGCV4NR.js";
import "../chunk-CKXFPMES.js";
import "../chunk-TBQYTQ7Q.js";
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
