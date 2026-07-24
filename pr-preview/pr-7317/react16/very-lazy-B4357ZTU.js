import {
  UniverActionRecorderPlugin
} from "./chunk-CKLE4VEH.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-NGDYTD4T.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ZNDKQOZV.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-R7P7W3R3.js";
import {
  UniverDebuggerPlugin
} from "./chunk-2EEER2HU.js";
import {
  UniverWatermarkPlugin
} from "./chunk-DBJ5WYJ5.js";
import "./chunk-WWG33TPN.js";
import {
  loadDebuggerLocale
} from "./chunk-4OO2EXOI.js";
import "./chunk-JX7M23K3.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ASI3OUH3.js";
import "./chunk-5BQDEOUY.js";
import "./chunk-4X6RCN5O.js";
import "./chunk-2W4YFPUY.js";
import "./chunk-LMBWBPMY.js";
import "./chunk-K6BRYOOT.js";
import "./chunk-B5HC4CAF.js";
import "./chunk-GAR7NJMN.js";
import "./chunk-F64YQP6G.js";
import "./chunk-7OMJQ65A.js";
import "./chunk-HGZHCRP5.js";
import "./chunk-RLTCIETE.js";
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
