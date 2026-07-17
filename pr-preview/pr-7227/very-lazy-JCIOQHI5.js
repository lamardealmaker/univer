import {
  UniverActionRecorderPlugin
} from "./chunk-U2TLWOSG.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-VTHOKKTL.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-KVHTJ2N5.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-E5HDOJEE.js";
import {
  UniverDebuggerPlugin
} from "./chunk-F35GONV7.js";
import {
  UniverWatermarkPlugin
} from "./chunk-QSXIRI2D.js";
import "./chunk-FT5C5DRB.js";
import {
  loadDebuggerLocale
} from "./chunk-UYHCGXSW.js";
import "./chunk-WCKZ36S6.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-UL5XTOJG.js";
import "./chunk-OYEWOMRQ.js";
import "./chunk-BM3OTM4R.js";
import "./chunk-MFV6DFJH.js";
import "./chunk-U3BXGKHY.js";
import "./chunk-6NQTIW2J.js";
import "./chunk-23VYIF3M.js";
import "./chunk-GA5VID6A.js";
import "./chunk-ORYNE4VV.js";
import "./chunk-NC5A3MKJ.js";
import "./chunk-KN5XN4TJ.js";
import "./chunk-WTTGPGQK.js";
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
