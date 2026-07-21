import {
  UniverActionRecorderPlugin
} from "./chunk-4TAZZUZ5.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-W24A7IY5.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-WWQMMCK2.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-J3NBETM4.js";
import {
  UniverDebuggerPlugin
} from "./chunk-CWZ7NTIK.js";
import {
  UniverWatermarkPlugin
} from "./chunk-DLEFKCGJ.js";
import "./chunk-SRGVB7JR.js";
import {
  loadDebuggerLocale
} from "./chunk-ECCKD3HU.js";
import "./chunk-OKNKO5JP.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ABACOHCL.js";
import "./chunk-QYN6GDJ4.js";
import "./chunk-MDJQMXVZ.js";
import "./chunk-TSOIN4OZ.js";
import "./chunk-JBVAEUFK.js";
import "./chunk-6MWSYICV.js";
import "./chunk-TK5L6D2R.js";
import "./chunk-2FSEQWPD.js";
import "./chunk-5NCSFO5U.js";
import "./chunk-PIYGBPYI.js";
import "./chunk-7FJVVP7M.js";
import "./chunk-UO46IVZK.js";
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
