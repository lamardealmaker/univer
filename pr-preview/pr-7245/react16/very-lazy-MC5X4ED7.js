import {
  UniverActionRecorderPlugin
} from "./chunk-B7QWQFPC.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-XQTXDYJV.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-LV47672S.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-7RRJYJJ4.js";
import {
  UniverDebuggerPlugin
} from "./chunk-7W4EXF2O.js";
import {
  UniverWatermarkPlugin
} from "./chunk-SEXPXYU5.js";
import "./chunk-7OQSISM6.js";
import {
  loadDebuggerLocale
} from "./chunk-Z4GUXYEB.js";
import "./chunk-SQVSQT7T.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-O7EFQKI6.js";
import "./chunk-BIVLMGT3.js";
import "./chunk-6RIJSM3K.js";
import "./chunk-OLGYSP7K.js";
import "./chunk-VJDAUND5.js";
import "./chunk-VZ7OGHVL.js";
import "./chunk-AZF3DKFC.js";
import "./chunk-23JPBHQA.js";
import "./chunk-C7PERF6S.js";
import "./chunk-SSB36RZY.js";
import "./chunk-QYILVMFA.js";
import "./chunk-SDQSMZKV.js";
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
