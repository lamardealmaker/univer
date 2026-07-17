import {
  UniverActionRecorderPlugin
} from "./chunk-DSNHBGQ7.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-SL2PF3R7.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-HF4NMLYL.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-W3WCMN3L.js";
import {
  UniverDebuggerPlugin
} from "./chunk-Q2HJSMQA.js";
import {
  UniverWatermarkPlugin
} from "./chunk-43SCT2CG.js";
import "./chunk-DGAFA6TW.js";
import {
  loadDebuggerLocale
} from "./chunk-WMVCUK5E.js";
import "./chunk-UZZKNMBJ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-CE5LYJUS.js";
import "./chunk-PV767NNL.js";
import "./chunk-3TOTVEAB.js";
import "./chunk-FAOYOEW2.js";
import "./chunk-22MD2OJX.js";
import "./chunk-CLCIF2ZI.js";
import "./chunk-XBVSVYYT.js";
import "./chunk-T44DWQTU.js";
import "./chunk-DSXI3R4L.js";
import "./chunk-AVV6LYFI.js";
import "./chunk-XY6TNQNM.js";
import "./chunk-DJVW44P3.js";
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
