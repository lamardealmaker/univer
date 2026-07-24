import {
  UniverActionRecorderPlugin
} from "./chunk-EBKMLTYH.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-UDLBQTH4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-VPMEPA72.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-BRS5P44S.js";
import {
  UniverDebuggerPlugin
} from "./chunk-VTGBCOJ6.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ZECXB65U.js";
import "./chunk-XU5YPWEA.js";
import {
  loadDebuggerLocale
} from "./chunk-MUMYUYRA.js";
import "./chunk-23Z7JYMP.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-QK2SJEFZ.js";
import "./chunk-IJTPQ5GC.js";
import "./chunk-22OGS6ZP.js";
import "./chunk-7UMULUER.js";
import "./chunk-7UMLLGWV.js";
import "./chunk-7QHVWLSA.js";
import "./chunk-IQQDFJU7.js";
import "./chunk-XEKXAVJZ.js";
import "./chunk-XUPIB4PS.js";
import "./chunk-NTW4V4SW.js";
import "./chunk-54D2JQ6Q.js";
import "./chunk-LLQCVTT7.js";
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
