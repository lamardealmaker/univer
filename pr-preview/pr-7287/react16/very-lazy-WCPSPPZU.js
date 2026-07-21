import {
  UniverActionRecorderPlugin
} from "./chunk-ZCQLKXXD.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-ULMLKTVQ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-DY6MPHOV.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-4QDUPNOR.js";
import {
  UniverDebuggerPlugin
} from "./chunk-NMEXA64N.js";
import {
  UniverWatermarkPlugin
} from "./chunk-N5ZEZC7X.js";
import "./chunk-GVLP3FW4.js";
import {
  loadDebuggerLocale
} from "./chunk-WCR2IDAH.js";
import "./chunk-CDETSGGG.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-MO5I6STJ.js";
import "./chunk-Q5BVY6ZY.js";
import "./chunk-EYS3QUF6.js";
import "./chunk-BDSLBBPJ.js";
import "./chunk-NVVLMKOI.js";
import "./chunk-3VCKAITY.js";
import "./chunk-TTOHCSDV.js";
import "./chunk-UP2CNROP.js";
import "./chunk-MIQDXCVC.js";
import "./chunk-LX2DEVI5.js";
import "./chunk-ON7MQNKU.js";
import "./chunk-V7YB6CU5.js";
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
