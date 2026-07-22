import {
  UniverActionRecorderPlugin
} from "./chunk-WONUTILK.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-6R6Q6JY7.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-VATEJXJC.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-MWFC7QMF.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ESRBYKVN.js";
import {
  UniverWatermarkPlugin
} from "./chunk-T6M62VE2.js";
import "./chunk-YCGAOLBU.js";
import {
  loadDebuggerLocale
} from "./chunk-5QITRLLT.js";
import "./chunk-PK2T7OTC.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-3UM4KHZD.js";
import "./chunk-FMUHC6KL.js";
import "./chunk-QPLOI7KP.js";
import "./chunk-V6HXYYIT.js";
import "./chunk-W63J6SIM.js";
import "./chunk-TM7KTVMI.js";
import "./chunk-7WKE7NN5.js";
import "./chunk-4TZYBZA3.js";
import "./chunk-MSS67GGG.js";
import "./chunk-FTAZ6D2Q.js";
import "./chunk-HTWP7ETG.js";
import "./chunk-HO2OWOV7.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets/very-lazy.ts
var IS_E2E = false;
function getVeryLazyPlugins() {
  const plugins = [
    [UniverActionRecorderPlugin],
    [UniverSheetsHyperLinkUIPlugin],
    [UniverSheetsSortUIPlugin],
    [UniverSheetsCrosshairHighlightPlugin],
    [UniverSheetsFindReplacePlugin],
    [UniverWatermarkPlugin]
  ];
  if (!IS_E2E) {
    plugins.push([UniverDebuggerPlugin, {
      fabEntryUnitType: 2 /* UNIVER_SHEET */,
      localeLoader: loadDebuggerLocale
    }]);
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
