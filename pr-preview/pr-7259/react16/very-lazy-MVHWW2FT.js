import {
  UniverActionRecorderPlugin
} from "./chunk-YWNSADOR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-MH4OEXLE.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-JIUCM2ZA.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-OAXJP7KV.js";
import {
  UniverDebuggerPlugin
} from "./chunk-AKP52ERC.js";
import {
  UniverWatermarkPlugin
} from "./chunk-43SCT2CG.js";
import "./chunk-EKH7E37K.js";
import {
  loadDebuggerLocale
} from "./chunk-4M7XCCW7.js";
import "./chunk-UZZKNMBJ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-SW2AF2EK.js";
import "./chunk-PV767NNL.js";
import "./chunk-DCXULM53.js";
import "./chunk-YW4LVD5Y.js";
import "./chunk-Z62YTRJ2.js";
import "./chunk-CLCIF2ZI.js";
import "./chunk-3MKE4MBD.js";
import "./chunk-T44DWQTU.js";
import "./chunk-DSXI3R4L.js";
import "./chunk-AVV6LYFI.js";
import "./chunk-XY6TNQNM.js";
import "./chunk-DJVW44P3.js";
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
