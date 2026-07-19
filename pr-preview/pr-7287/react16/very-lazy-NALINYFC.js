import {
  UniverActionRecorderPlugin
} from "./chunk-UQVJDREU.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-SCBLV3CU.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-UYCIXNNK.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-QZNREOAM.js";
import {
  UniverDebuggerPlugin
} from "./chunk-J5XHHAM4.js";
import {
  UniverWatermarkPlugin
} from "./chunk-XTZJDGAV.js";
import "./chunk-3DQHWYMF.js";
import {
  loadDebuggerLocale
} from "./chunk-KLKBTD3Q.js";
import "./chunk-BZFZLXIV.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-RCVW3OET.js";
import "./chunk-A6IHUNW3.js";
import "./chunk-K233QV2H.js";
import "./chunk-BDGBQQMX.js";
import "./chunk-THFR4UFV.js";
import "./chunk-4CFHPDEB.js";
import "./chunk-QKGVWKWV.js";
import "./chunk-CPC53RJS.js";
import "./chunk-LTKAZ3YE.js";
import "./chunk-YJIO2C26.js";
import "./chunk-GHYF6TLP.js";
import "./chunk-GF474R7N.js";
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
