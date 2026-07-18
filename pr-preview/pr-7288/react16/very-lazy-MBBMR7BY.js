import {
  UniverActionRecorderPlugin
} from "./chunk-HNGDDB7D.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-XESHOLML.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GDT5Z5YE.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-2VNGH4X6.js";
import {
  UniverDebuggerPlugin
} from "./chunk-GT7WP2XX.js";
import {
  UniverWatermarkPlugin
} from "./chunk-NMCCDXDM.js";
import "./chunk-3SKDT2VP.js";
import {
  loadDebuggerLocale
} from "./chunk-ZXMSVVYU.js";
import "./chunk-K7SKDB2T.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-QIEXBXC2.js";
import "./chunk-6V4PZWJR.js";
import "./chunk-WE6HI56M.js";
import "./chunk-5P2XEI2X.js";
import "./chunk-2Q6NNA3D.js";
import "./chunk-VCMLRY5N.js";
import "./chunk-47ZALXF7.js";
import "./chunk-7TPDZYFV.js";
import "./chunk-RJZLV6EI.js";
import "./chunk-BYQPA3KP.js";
import "./chunk-OGAOIOI3.js";
import "./chunk-K5ELNLYF.js";
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
