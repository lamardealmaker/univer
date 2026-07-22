import {
  UniverActionRecorderPlugin
} from "./chunk-X5HNGNEU.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-FQ275Y5T.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-TVYZPRES.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-JMNOMDHM.js";
import {
  UniverDebuggerPlugin
} from "./chunk-E2Z3XSUN.js";
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
} from "./chunk-ETMR3AZ4.js";
import "./chunk-HZVVG4ZG.js";
import "./chunk-U3KKUEI6.js";
import "./chunk-WLSA7ODV.js";
import "./chunk-V72LHEPZ.js";
import "./chunk-2JTXL7DQ.js";
import "./chunk-2EIRHLET.js";
import "./chunk-AOFVIMMN.js";
import "./chunk-VU33XQTF.js";
import "./chunk-LMPX2OTW.js";
import "./chunk-RKDQK3XP.js";
import "./chunk-7RPG6EBZ.js";
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
