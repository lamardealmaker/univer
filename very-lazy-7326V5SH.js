import {
  UniverActionRecorderPlugin
} from "./chunk-WQG5OXIK.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-K7FAPDGI.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-P7BFBQVY.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-XB5KG4MM.js";
import {
  UniverDebuggerPlugin
} from "./chunk-6YBO2SV5.js";
import {
  UniverWatermarkPlugin
} from "./chunk-S37A22CF.js";
import "./chunk-3AG7QDDQ.js";
import {
  loadDebuggerLocale
} from "./chunk-UKM2FYDE.js";
import "./chunk-VWAKZUN4.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-L3XAGDM3.js";
import "./chunk-ZTLYHSRM.js";
import "./chunk-VMARFF56.js";
import "./chunk-CIBQEK3L.js";
import "./chunk-GQ4VPMLK.js";
import "./chunk-Y5G2OXH6.js";
import "./chunk-HC4V5NKS.js";
import "./chunk-N3KJJFOF.js";
import "./chunk-3LBADK2S.js";
import "./chunk-JHNQBJPZ.js";
import "./chunk-ALOYUQOY.js";
import "./chunk-KDL4XP5H.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets/very-lazy.ts
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
