import {
  UniverActionRecorderPlugin
} from "./chunk-SWEQ4IAH.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-YQN42EN2.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-KK6JTCH2.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SI5ELRFA.js";
import {
  UniverDebuggerPlugin
} from "./chunk-Y2RCY3BZ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ERYW5I4D.js";
import "./chunk-QIOLARSJ.js";
import {
  loadDebuggerLocale
} from "./chunk-GC7WOAPH.js";
import "./chunk-UTN2DPOU.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-YKP4BCDG.js";
import "./chunk-HZVVG4ZG.js";
import "./chunk-LLBM76KA.js";
import "./chunk-LSB7NQWY.js";
import "./chunk-UBVKEMWY.js";
import "./chunk-2JTXL7DQ.js";
import "./chunk-2EIRHLET.js";
import "./chunk-AOFVIMMN.js";
import "./chunk-VU33XQTF.js";
import "./chunk-LMPX2OTW.js";
import "./chunk-RKDQK3XP.js";
import "./chunk-7RPG6EBZ.js";
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
