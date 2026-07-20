import {
  UniverActionRecorderPlugin
} from "./chunk-LACMWJIP.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-SHSJYGR5.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-7ZV43N5O.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-X2PFE6P2.js";
import {
  UniverDebuggerPlugin
} from "./chunk-RZXNRWID.js";
import {
  UniverWatermarkPlugin
} from "./chunk-H6ISRPON.js";
import "./chunk-ZK5CQEQA.js";
import {
  loadDebuggerLocale
} from "./chunk-FBNBT237.js";
import "./chunk-QKIRY2RA.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-AXWBO7CZ.js";
import "./chunk-JC4REQEP.js";
import "./chunk-RM3DWPNN.js";
import "./chunk-WNH2ZYUY.js";
import "./chunk-VMIBYCYR.js";
import "./chunk-44FRZNN5.js";
import "./chunk-BMGP4575.js";
import "./chunk-H6XSKLCW.js";
import "./chunk-LKK342C3.js";
import "./chunk-BVJL2XEK.js";
import "./chunk-B6QBU7G3.js";
import "./chunk-I7JVIHX5.js";
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
