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
} from "../chunk-O7QHITSD.js";
import "../chunk-UJGITABR.js";
import "../chunk-ZMSTBMHT.js";
import "../chunk-SZIVJKVA.js";
import "../chunk-45QIFBM6.js";
import "../chunk-NOIOPTK4.js";
import "../chunk-KX4DAFC2.js";
import "../chunk-MS7VMJLM.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-A3LR6BSI.js";
import {
  createUniver
} from "../chunk-65I5ZPFH.js";
import {
  DEFAULT_WORKBOOK_DATA_DEMO
} from "../chunk-NFSMWVW7.js";
import "../chunk-FRZKYABE.js";
import "../chunk-SGZNDJGP.js";
import "../chunk-3EVVFLJG.js";
import "../chunk-D7DHF6GS.js";
import "../chunk-DLJRCYJE.js";
import "../chunk-ZTQ7YG5O.js";
import "../chunk-4BJIOKDU.js";
import "../chunk-XBJYBWPF.js";
import "../chunk-TTXYMXTZ.js";
import "../chunk-XVYHKR47.js";
import "../chunk-3LHD5PNH.js";
import "../chunk-VKBHAS4H.js";
import "../chunk-4DQL7YD4.js";
import "../chunk-52LPCDHP.js";
import "../chunk-6HMJ7NYI.js";
import "../chunk-VGC2IWU6.js";
import "../chunk-UEXSOKOT.js";
import "../chunk-OT7B7OE4.js";
import "../chunk-OW4T4RYF.js";
import "../chunk-LI6UXASZ.js";
import "../chunk-6WYNQIA3.js";
import "../chunk-A3U6N6EB.js";
import "../chunk-CPLPYTNU.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-URSPW5KK.js";
import "../chunk-2FVEG47S.js";
import "../chunk-GNAKMJK7.js";
import "../chunk-D56GOLKC.js";
import "../chunk-LPTHD3KJ.js";
import {
  default_default,
  mergeLocales
} from "../chunk-BCDUMSPY.js";
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
