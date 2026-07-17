import {
  UniverActionRecorderPlugin
} from "./chunk-JQ54AOKM.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-7OMUTIXZ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ND33STZS.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-XVYUCYLM.js";
import {
  UniverDebuggerPlugin
} from "./chunk-VO4XMIEP.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2UY62IDI.js";
import "./chunk-5BSMYKPH.js";
import {
  loadDebuggerLocale
} from "./chunk-3DMI7LIT.js";
import "./chunk-SXDP5O57.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-EJWL37IZ.js";
import "./chunk-NFNYEJ4L.js";
import "./chunk-QUAO56AA.js";
import "./chunk-7WD5UPA7.js";
import "./chunk-GDDFE2LF.js";
import "./chunk-WYUC5LJW.js";
import "./chunk-L53UJCB2.js";
import "./chunk-OBTSUHS4.js";
import "./chunk-HKK367X4.js";
import "./chunk-4LPILMGO.js";
import "./chunk-M56I3X25.js";
import "./chunk-QEB532PW.js";
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
