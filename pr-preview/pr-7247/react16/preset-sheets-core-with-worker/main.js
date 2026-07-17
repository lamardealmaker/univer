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
} from "../chunk-ZYMSM3W4.js";
import "../chunk-42R3OHAF.js";
import "../chunk-NS26NNBK.js";
import "../chunk-7TNQCIF7.js";
import "../chunk-X74JAVES.js";
import "../chunk-QP2KAAFV.js";
import "../chunk-XCVCJ5AI.js";
import "../chunk-L6OYKSQP.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-UYNP7FIL.js";
import {
  createUniver
} from "../chunk-TWEDTCA3.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-2RDYHF7V.js";
import "../chunk-GHZVAAZX.js";
import "../chunk-QW6QT5WR.js";
import "../chunk-APUY5FUG.js";
import "../chunk-Y6QTLSTA.js";
import "../chunk-WQEPLWET.js";
import "../chunk-GUEVRFZX.js";
import "../chunk-BBHWOLJZ.js";
import "../chunk-NFNYEJ4L.js";
import "../chunk-N4VOWRDE.js";
import "../chunk-IEG7ZJ26.js";
import "../chunk-C3GRK3JN.js";
import "../chunk-3J4AFXWB.js";
import "../chunk-OPJZR7GP.js";
import "../chunk-7E6CMYE4.js";
import "../chunk-QLCZK3IN.js";
import "../chunk-BUHDOBHW.js";
import "../chunk-LYBFH6FD.js";
import "../chunk-MUR5TKJK.js";
import "../chunk-2I3MX5JU.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-K4JVPNG6.js";
import "../chunk-JS7QQG3C.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-HKK367X4.js";
import "../chunk-MNMA3DIW.js";
import "../chunk-CKXFPMES.js";
import "../chunk-4LPILMGO.js";
import "../chunk-M56I3X25.js";
import {
  default_default,
  mergeLocales
} from "../chunk-QEB532PW.js";
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
