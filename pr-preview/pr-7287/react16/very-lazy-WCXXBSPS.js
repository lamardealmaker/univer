import {
  UniverActionRecorderPlugin
} from "./chunk-ZX66ARYS.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-3WI6SC5T.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-LNO335K7.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-K6FDH2IE.js";
import {
  UniverDebuggerPlugin
} from "./chunk-AFZUDQ2T.js";
import {
  UniverWatermarkPlugin
} from "./chunk-PUWXITZN.js";
import "./chunk-AWJSW3WJ.js";
import {
  loadDebuggerLocale
} from "./chunk-OOJSOVBS.js";
import "./chunk-22KNQBMH.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-R4PS4SID.js";
import "./chunk-EQYEF7TE.js";
import "./chunk-TNYKZBXZ.js";
import "./chunk-4F2ARLJP.js";
import "./chunk-MZHLRYLD.js";
import "./chunk-CK2AJVH4.js";
import "./chunk-CAPRATJL.js";
import "./chunk-SSLJNNLM.js";
import "./chunk-KORVF2GC.js";
import "./chunk-TGILKA5V.js";
import "./chunk-6H5IIH26.js";
import "./chunk-EWDDTFQR.js";
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
