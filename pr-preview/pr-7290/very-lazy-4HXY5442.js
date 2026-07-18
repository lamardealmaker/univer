import {
  UniverActionRecorderPlugin
} from "./chunk-OGQQTUW2.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-LG6V22OL.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-WPD7MRYF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-LWZZ5WTB.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ASMQPENZ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-S37A22CF.js";
import "./chunk-ARO2QXZJ.js";
import {
  loadDebuggerLocale
} from "./chunk-4JEVOHNN.js";
import "./chunk-IJXA7PS2.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-U2XCSXR3.js";
import "./chunk-KVLBQ45J.js";
import "./chunk-LNNXF5VP.js";
import "./chunk-MZ7NAWAQ.js";
import "./chunk-GP37ZY3N.js";
import "./chunk-YPYMQJUV.js";
import "./chunk-7LULJTMH.js";
import "./chunk-TMTWLXFR.js";
import "./chunk-F6HYNG7A.js";
import "./chunk-KOL7QAKS.js";
import "./chunk-VPYMURTI.js";
import "./chunk-KDL4XP5H.js";
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
