import {
  UniverActionRecorderPlugin
} from "./chunk-5JLEQYPI.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-M6CNNPMT.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-C4ZYX4BR.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-LUP67YEX.js";
import {
  UniverDebuggerPlugin
} from "./chunk-AOAXQHOW.js";
import {
  UniverWatermarkPlugin
} from "./chunk-TMFDKMIG.js";
import "./chunk-545MSGXF.js";
import {
  loadDebuggerLocale
} from "./chunk-N2JGUKS5.js";
import "./chunk-3YKWRRM3.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-73HIMY37.js";
import "./chunk-IHRYRAGV.js";
import "./chunk-YYYIVYNZ.js";
import "./chunk-XGIRKLWT.js";
import "./chunk-UWJKF6PE.js";
import "./chunk-UT72HRUS.js";
import "./chunk-33WBVZUA.js";
import "./chunk-P2DA4KTU.js";
import "./chunk-4HRHY67D.js";
import "./chunk-3T2J7QKX.js";
import "./chunk-BPQHTQJ4.js";
import "./chunk-SAVY66LP.js";
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
