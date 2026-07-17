import {
  UniverActionRecorderPlugin
} from "./chunk-3NLEFITF.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-6MPJABPT.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-7H6QHIIE.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-W6WRL74R.js";
import {
  UniverDebuggerPlugin
} from "./chunk-Q6BIVC5O.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ZDEFGDLW.js";
import "./chunk-7ZBCAFY2.js";
import {
  loadDebuggerLocale
} from "./chunk-45XPEZVE.js";
import "./chunk-AX4ED444.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-WOCJR6SE.js";
import "./chunk-YYQJ5QCL.js";
import "./chunk-IE6GLFSW.js";
import "./chunk-BTRJGKKP.js";
import "./chunk-5Y32QPUW.js";
import "./chunk-O5T7UNDA.js";
import "./chunk-ZNKYSGF6.js";
import "./chunk-FOCWDXCV.js";
import "./chunk-3FKRKIME.js";
import "./chunk-G7SXFZ34.js";
import "./chunk-7SRTVBCX.js";
import "./chunk-JKGF6EFW.js";
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
