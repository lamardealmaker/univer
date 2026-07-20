import {
  UniverActionRecorderPlugin
} from "./chunk-NFEXSBGG.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-IPL37MLH.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-7RANTISL.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-JWWZUKSI.js";
import {
  UniverDebuggerPlugin
} from "./chunk-LOOCMZTO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-7IDNIRUE.js";
import "./chunk-BJTPK55E.js";
import {
  loadDebuggerLocale
} from "./chunk-QN4VIF6W.js";
import "./chunk-SKX7OZPQ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-UHBSKVII.js";
import "./chunk-OD5JULIN.js";
import "./chunk-MXTSIRXO.js";
import "./chunk-PFT6QV62.js";
import "./chunk-ROGKLWAB.js";
import "./chunk-IXEHVME3.js";
import "./chunk-SVPNNYBX.js";
import "./chunk-HOJE6KZL.js";
import "./chunk-WNY25Z7C.js";
import "./chunk-XAJLTAUM.js";
import "./chunk-6OBE5I5L.js";
import "./chunk-RJIFU6SG.js";
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
