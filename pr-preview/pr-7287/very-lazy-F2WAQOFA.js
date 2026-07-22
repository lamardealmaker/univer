import {
  UniverActionRecorderPlugin
} from "./chunk-HMW2UW53.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-Z5TZYYPR.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-NRKGKONY.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-4E7TBYBU.js";
import {
  UniverDebuggerPlugin
} from "./chunk-LGH5SI7X.js";
import {
  UniverWatermarkPlugin
} from "./chunk-N5ZEZC7X.js";
import "./chunk-GMPJW3LL.js";
import {
  loadDebuggerLocale
} from "./chunk-GSKGT27H.js";
import "./chunk-WIHOWG3M.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-DVRGY35T.js";
import "./chunk-Q5BVY6ZY.js";
import "./chunk-7YM7LGE7.js";
import "./chunk-ICLA44LH.js";
import "./chunk-JNYE2C6C.js";
import "./chunk-I5IWKWLY.js";
import "./chunk-LZ43PMWX.js";
import "./chunk-MEQYGXDL.js";
import "./chunk-MIQDXCVC.js";
import "./chunk-XOVZ3ENV.js";
import "./chunk-ON7MQNKU.js";
import "./chunk-V7YB6CU5.js";
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
