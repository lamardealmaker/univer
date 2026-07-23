import {
  UniverActionRecorderPlugin
} from "./chunk-UHRK6V5P.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-SPIPFANF.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GU3WC6E3.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-JR5GKLZ4.js";
import {
  UniverDebuggerPlugin
} from "./chunk-MMWF7XHW.js";
import {
  UniverWatermarkPlugin
} from "./chunk-DBJ5WYJ5.js";
import "./chunk-HLX37VWQ.js";
import {
  loadDebuggerLocale
} from "./chunk-P4JY35Y6.js";
import "./chunk-JX7M23K3.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-JHTL6RDA.js";
import "./chunk-GTQCXVS5.js";
import "./chunk-6YJM6F47.js";
import "./chunk-TWZILU24.js";
import "./chunk-EKVF45AQ.js";
import "./chunk-QEEPPHQO.js";
import "./chunk-MOE32XHT.js";
import "./chunk-GAR7NJMN.js";
import "./chunk-D5NPODZW.js";
import "./chunk-PP2PHL2R.js";
import "./chunk-W4NVE3XT.js";
import "./chunk-RLTCIETE.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-no-worker/very-lazy.ts
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
