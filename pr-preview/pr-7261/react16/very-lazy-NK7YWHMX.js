import {
  UniverActionRecorderPlugin
} from "./chunk-7SLBK4BU.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-RCDTFBNS.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-3G6GOAJC.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-BXUTK2H7.js";
import {
  UniverDebuggerPlugin
} from "./chunk-VENBMHLA.js";
import {
  UniverWatermarkPlugin
} from "./chunk-43SCT2CG.js";
import "./chunk-B4M4HIUA.js";
import {
  loadDebuggerLocale
} from "./chunk-G2IWFN53.js";
import "./chunk-2PA2Z366.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-REFJU25Y.js";
import "./chunk-PV767NNL.js";
import "./chunk-NJTRPA3N.js";
import "./chunk-XPEV33P2.js";
import "./chunk-WH4F52QW.js";
import "./chunk-6Z5DQ2EY.js";
import "./chunk-KFOSQTFK.js";
import "./chunk-ARBK2HJI.js";
import "./chunk-DSXI3R4L.js";
import "./chunk-AVV6LYFI.js";
import "./chunk-XY6TNQNM.js";
import "./chunk-DJVW44P3.js";
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
