import {
  UniverActionRecorderPlugin
} from "./chunk-FH26S2IO.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-6ULBITCK.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-HF6ZMWZS.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-Z6EF7I3H.js";
import {
  UniverDebuggerPlugin
} from "./chunk-2NKCV5QW.js";
import {
  UniverWatermarkPlugin
} from "./chunk-T6M62VE2.js";
import "./chunk-JCRHNSLP.js";
import {
  loadDebuggerLocale
} from "./chunk-XX5SOVYM.js";
import "./chunk-PK2T7OTC.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-JNQHMV7W.js";
import "./chunk-4UQWQTXY.js";
import "./chunk-TGLDH3ZQ.js";
import "./chunk-7FR4UL6G.js";
import "./chunk-FURGFDHX.js";
import "./chunk-WQ6A4BAN.js";
import "./chunk-B7WTVZJN.js";
import "./chunk-4TZYBZA3.js";
import "./chunk-EYXLHBFO.js";
import "./chunk-FSBNILI5.js";
import "./chunk-EBG4Y6CA.js";
import "./chunk-HO2OWOV7.js";
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
