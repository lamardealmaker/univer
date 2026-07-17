import {
  UniverActionRecorderPlugin
} from "./chunk-UN2KDT2G.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-7PJ2CUO2.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-WCIWVAD7.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SGHEEN4Y.js";
import {
  UniverDebuggerPlugin
} from "./chunk-LSVISWPN.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ZXDJSSHB.js";
import "./chunk-TQ43FG6H.js";
import {
  loadDebuggerLocale
} from "./chunk-NVTGXAQL.js";
import "./chunk-MYIK6ZKX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-CKZ33EWB.js";
import "./chunk-6B6ZSLV7.js";
import "./chunk-QMQR5CDV.js";
import "./chunk-A33UBOND.js";
import "./chunk-ACGNN5DC.js";
import "./chunk-ZFUVZZV4.js";
import "./chunk-FLZJBOXA.js";
import "./chunk-MVZAHYFO.js";
import "./chunk-KFC6W3IV.js";
import "./chunk-H2PZ3C73.js";
import "./chunk-I7AO7NZF.js";
import "./chunk-2CS7RBBN.js";
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
