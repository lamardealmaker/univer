import {
  UniverActionRecorderPlugin
} from "./chunk-2W6FMNUD.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-Z4HIUOSL.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-7LUQNLG7.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-55IAYIUA.js";
import {
  UniverDebuggerPlugin
} from "./chunk-CVK6JJLW.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ZXDJSSHB.js";
import "./chunk-PBJI6Q3F.js";
import {
  loadDebuggerLocale
} from "./chunk-BFOUWPHN.js";
import "./chunk-MYIK6ZKX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-YO5V7LFO.js";
import "./chunk-6B6ZSLV7.js";
import "./chunk-NQ6GFYDH.js";
import "./chunk-4F7RKLLQ.js";
import "./chunk-4QZ374LK.js";
import "./chunk-ZFUVZZV4.js";
import "./chunk-P5O3JYY7.js";
import "./chunk-MVZAHYFO.js";
import "./chunk-KFC6W3IV.js";
import "./chunk-MXZAKXJ2.js";
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
