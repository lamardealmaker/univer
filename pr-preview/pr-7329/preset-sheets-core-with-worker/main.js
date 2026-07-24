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
} from "../chunk-QFHM5L3R.js";
import "../chunk-J7I5LXEN.js";
import "../chunk-G2PAHC33.js";
import "../chunk-K22CVIUK.js";
import "../chunk-OKABXPZD.js";
import "../chunk-VHS5D4YT.js";
import "../chunk-4PDZMVYI.js";
import "../chunk-JPH4BZQN.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-JMZJQV3F.js";
import {
  createUniver
} from "../chunk-B54QHKEA.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-EZ3WFAMC.js";
import "../chunk-C3DY6XDY.js";
import "../chunk-C5TMDVSZ.js";
import "../chunk-TXVQ4YEB.js";
import "../chunk-4FL5PJMC.js";
import "../chunk-UV5S2NOY.js";
import "../chunk-CNJTNF7M.js";
import "../chunk-VZ24ZHUE.js";
import "../chunk-ZZI2UBQV.js";
import "../chunk-GVMO7OMJ.js";
import "../chunk-XFT2KTUQ.js";
import "../chunk-7WQRXCNR.js";
import "../chunk-HCYLXCQ7.js";
import "../chunk-QW62UBVN.js";
import "../chunk-G7TV6WLP.js";
import "../chunk-WS7MWMTL.js";
import "../chunk-7X6EDYJB.js";
import "../chunk-CGDUFVL4.js";
import "../chunk-L5BHKJ4J.js";
import "../chunk-6X57MLET.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-XYTTYL24.js";
import "../chunk-B4YCZCN6.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-L7QJLVG7.js";
import "../chunk-7RKWV2OH.js";
import "../chunk-GNL7T4QS.js";
import "../chunk-SWWNNEEA.js";
import "../chunk-KKQWNXAE.js";
import {
  default_default,
  mergeLocales
} from "../chunk-JD3KJOQJ.js";
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
