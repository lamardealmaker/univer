import {
  UniverActionRecorderPlugin
} from "./chunk-DLKMEDUY.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-WJGLOXEF.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-PPBWPYZ7.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-VODNEUIZ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-GV7N2THX.js";
import {
  UniverWatermarkPlugin
} from "./chunk-7IDNIRUE.js";
import "./chunk-5DBTCA3N.js";
import {
  loadDebuggerLocale
} from "./chunk-SO5SEQ72.js";
import "./chunk-SKX7OZPQ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-YC4M42DA.js";
import "./chunk-OD5JULIN.js";
import "./chunk-HX72CZ3V.js";
import "./chunk-53PQQWQ4.js";
import "./chunk-RCZUQOBI.js";
import "./chunk-IXEHVME3.js";
import "./chunk-HLQJAOWY.js";
import "./chunk-HOJE6KZL.js";
import "./chunk-WNY25Z7C.js";
import "./chunk-XAJLTAUM.js";
import "./chunk-6OBE5I5L.js";
import "./chunk-RJIFU6SG.js";
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
