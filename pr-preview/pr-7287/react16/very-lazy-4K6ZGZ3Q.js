import {
  UniverActionRecorderPlugin
} from "./chunk-4LVXKPKB.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-FKVMJSTT.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-QO3V2B5E.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-7NACA6H4.js";
import {
  UniverDebuggerPlugin
} from "./chunk-RCQGWHQO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-7IDNIRUE.js";
import "./chunk-ZOBIR5L5.js";
import {
  loadDebuggerLocale
} from "./chunk-PAVHGAWO.js";
import "./chunk-SKX7OZPQ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-EZICGTPO.js";
import "./chunk-OD5JULIN.js";
import "./chunk-TGDQGA5B.js";
import "./chunk-4VAHIW5W.js";
import "./chunk-WUWUYCW5.js";
import "./chunk-IXEHVME3.js";
import "./chunk-S6XGWHVM.js";
import "./chunk-HOJE6KZL.js";
import "./chunk-WNY25Z7C.js";
import "./chunk-XAJLTAUM.js";
import "./chunk-6OBE5I5L.js";
import "./chunk-RJIFU6SG.js";
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
