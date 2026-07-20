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
} from "../chunk-P77KAWFR.js";
import "../chunk-FKVMJSTT.js";
import "../chunk-RZFA7XTI.js";
import "../chunk-FWYGTXUX.js";
import "../chunk-QO3V2B5E.js";
import "../chunk-VD5BZNAV.js";
import "../chunk-RNTOVMW6.js";
import "../chunk-Y3TN24SH.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-GNXEBRMD.js";
import {
  createUniver
} from "../chunk-5CMUWHET.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-PAVHGAWO.js";
import "../chunk-NYLPHXQF.js";
import "../chunk-RP3BUAW6.js";
import "../chunk-JLTH7EOP.js";
import "../chunk-ITFX647F.js";
import "../chunk-SKX7OZPQ.js";
import "../chunk-QW5YEHOK.js";
import "../chunk-EZICGTPO.js";
import "../chunk-OD5JULIN.js";
import "../chunk-YSHBZ567.js";
import "../chunk-632LMC3G.js";
import "../chunk-TGDQGA5B.js";
import "../chunk-4VAHIW5W.js";
import "../chunk-WUWUYCW5.js";
import "../chunk-N4TURAIF.js";
import "../chunk-I6A3KPML.js";
import "../chunk-YT5KRXOW.js";
import "../chunk-5NCOLTUO.js";
import "../chunk-IXEHVME3.js";
import "../chunk-S6XGWHVM.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-HOJE6KZL.js";
import "../chunk-VMX56H2F.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-WNY25Z7C.js";
import "../chunk-RT67ICL6.js";
import "../chunk-R7KLXWDQ.js";
import "../chunk-XAJLTAUM.js";
import "../chunk-6OBE5I5L.js";
import {
  default_default,
  mergeLocales
} from "../chunk-RJIFU6SG.js";
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
