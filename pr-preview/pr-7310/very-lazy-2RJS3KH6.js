import {
  UniverActionRecorderPlugin
} from "./chunk-XNLJMAP4.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-2DEILZRL.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-Z4XQV2TC.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-D7Q7ZAJX.js";
import {
  UniverDebuggerPlugin
} from "./chunk-EONBBQVU.js";
import {
  UniverWatermarkPlugin
} from "./chunk-TMFDKMIG.js";
import "./chunk-E3TI6Y6T.js";
import {
  loadDebuggerLocale
} from "./chunk-6M57G7SZ.js";
import "./chunk-RA5URZRD.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-NX6RIRGW.js";
import "./chunk-IHRYRAGV.js";
import "./chunk-KSHJKSBK.js";
import "./chunk-JNE34MJT.js";
import "./chunk-PV3BL3QF.js";
import "./chunk-5M2S7MS4.js";
import "./chunk-Z34WP5PA.js";
import "./chunk-C72VBTJ2.js";
import "./chunk-4HRHY67D.js";
import "./chunk-3T2J7QKX.js";
import "./chunk-BPQHTQJ4.js";
import "./chunk-SAVY66LP.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-multi-units/very-lazy.ts
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
