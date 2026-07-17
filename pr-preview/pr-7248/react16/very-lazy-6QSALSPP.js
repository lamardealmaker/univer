import {
  UniverActionRecorderPlugin
} from "./chunk-WQXQTG7M.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-SDFN6N7T.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-MXUVCFNT.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-FODR5XJR.js";
import {
  UniverDebuggerPlugin
} from "./chunk-DPC2B36E.js";
import {
  UniverWatermarkPlugin
} from "./chunk-DVCCYMJ3.js";
import "./chunk-Y3WQ46UR.js";
import {
  loadDebuggerLocale
} from "./chunk-NIR3G7JM.js";
import "./chunk-JL5DMGE5.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5ZF2FC5J.js";
import "./chunk-J5H3AARC.js";
import "./chunk-4JNGIFBI.js";
import "./chunk-6XW5VZ7Z.js";
import "./chunk-HDKTJG76.js";
import "./chunk-3XNHCADX.js";
import "./chunk-WM4GRYXF.js";
import "./chunk-FB3AVI5Q.js";
import "./chunk-L4PYN4TJ.js";
import "./chunk-EY3JSFTH.js";
import "./chunk-SN56XSRC.js";
import "./chunk-LDL4QTZT.js";
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
