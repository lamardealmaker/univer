import {
  UniverActionRecorderPlugin
} from "./chunk-UB2VW2BV.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-MYDNCVP4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-SFJH5IYU.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-3S53MYRH.js";
import {
  UniverDebuggerPlugin
} from "./chunk-NKMGPEUI.js";
import {
  UniverWatermarkPlugin
} from "./chunk-43SCT2CG.js";
import "./chunk-BRTCPLZ5.js";
import {
  loadDebuggerLocale
} from "./chunk-DAE7FFTX.js";
import "./chunk-7FJX3F4Q.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-NXDQYXEQ.js";
import "./chunk-PV767NNL.js";
import "./chunk-ZLHKM4LB.js";
import "./chunk-Z4V4SH7Q.js";
import "./chunk-EVFLLNMM.js";
import "./chunk-S2GYUVVL.js";
import "./chunk-OZI25QXK.js";
import "./chunk-R3FURYVI.js";
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
