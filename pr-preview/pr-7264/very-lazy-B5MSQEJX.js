import {
  UniverActionRecorderPlugin
} from "./chunk-56XY7KQK.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-3AQVMLAW.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-4OJLQW4K.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-W5SNT6MO.js";
import {
  UniverDebuggerPlugin
} from "./chunk-BNJWMZYR.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ZXDJSSHB.js";
import "./chunk-BAUNKREC.js";
import {
  loadDebuggerLocale
} from "./chunk-QRXF5N6T.js";
import "./chunk-MYIK6ZKX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-S4P4F45X.js";
import "./chunk-5PNUBHZC.js";
import "./chunk-PGJL75VV.js";
import "./chunk-P2I5HKIR.js";
import "./chunk-APBWMNOX.js";
import "./chunk-ZFUVZZV4.js";
import "./chunk-CTCLZJJS.js";
import "./chunk-MVZAHYFO.js";
import "./chunk-I7VZJZMU.js";
import "./chunk-7HAHH2CT.js";
import "./chunk-IQR62XS7.js";
import "./chunk-2CS7RBBN.js";
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
