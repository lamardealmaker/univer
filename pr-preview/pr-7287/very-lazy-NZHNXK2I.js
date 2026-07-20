import {
  UniverActionRecorderPlugin
} from "./chunk-TU3GO3CI.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-WA75YSYJ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GBPFDNCR.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-BJB2WAIC.js";
import {
  UniverDebuggerPlugin
} from "./chunk-2ZB535OQ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-SXJ7DER7.js";
import "./chunk-34VPJMTS.js";
import {
  loadDebuggerLocale
} from "./chunk-KO3JQG5O.js";
import "./chunk-G766MR7I.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-4PFV2XFE.js";
import "./chunk-NYVKN5WT.js";
import "./chunk-NO5LXRE5.js";
import "./chunk-CWGA7BJN.js";
import "./chunk-325W4XHZ.js";
import "./chunk-37CCQPTR.js";
import "./chunk-PXJRBH6Q.js";
import "./chunk-QR4IXNRE.js";
import "./chunk-EL2MA4WM.js";
import "./chunk-JYVQTEKH.js";
import "./chunk-CSXRQ456.js";
import "./chunk-EIUQN72C.js";
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
