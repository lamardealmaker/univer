import {
  UniverActionRecorderPlugin
} from "./chunk-QM2GXJ7B.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-WXMTHHVF.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-D4P7TFLG.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-LZDSEGKY.js";
import {
  UniverDebuggerPlugin
} from "./chunk-5HGTQGBJ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-43SCT2CG.js";
import "./chunk-YO4VLBT7.js";
import {
  loadDebuggerLocale
} from "./chunk-GEJCCDYE.js";
import "./chunk-7FJX3F4Q.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-4R2SPUCS.js";
import "./chunk-PV767NNL.js";
import "./chunk-QLEO5UVG.js";
import "./chunk-YQOZJN5B.js";
import "./chunk-EAJSHDRG.js";
import "./chunk-S2GYUVVL.js";
import "./chunk-AMB7G3AC.js";
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
