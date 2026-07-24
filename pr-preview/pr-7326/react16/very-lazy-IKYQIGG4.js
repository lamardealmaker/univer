import {
  UniverActionRecorderPlugin
} from "./chunk-EFWBT7RE.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-QJ2HFBGP.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-QL7H55F6.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-QDFLWD5G.js";
import {
  UniverDebuggerPlugin
} from "./chunk-FJ6AZFA5.js";
import {
  UniverWatermarkPlugin
} from "./chunk-YBZPRJZX.js";
import "./chunk-SY27IN4L.js";
import {
  loadDebuggerLocale
} from "./chunk-5HOTS2TM.js";
import "./chunk-BPQPEARQ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-OTP2E3J6.js";
import "./chunk-DUVAEDV5.js";
import "./chunk-2FC7ABTG.js";
import "./chunk-TLBWQULZ.js";
import "./chunk-N4XH5WKY.js";
import "./chunk-AHHRULAS.js";
import "./chunk-JWN5VN3B.js";
import "./chunk-7V2XEAWA.js";
import "./chunk-G2ZW2BDM.js";
import "./chunk-47MGLYD5.js";
import "./chunk-PW5H4QGM.js";
import "./chunk-UEDAY4IO.js";
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
