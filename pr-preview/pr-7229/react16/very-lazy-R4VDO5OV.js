import {
  UniverActionRecorderPlugin
} from "./chunk-KMWYC62A.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-T3OMWUUB.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-56MXFRGN.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-R2XKVYP2.js";
import {
  UniverDebuggerPlugin
} from "./chunk-BNGDDJM6.js";
import {
  UniverWatermarkPlugin
} from "./chunk-QSXIRI2D.js";
import "./chunk-HHTHS7BM.js";
import {
  loadDebuggerLocale
} from "./chunk-46IHOGCA.js";
import "./chunk-QXNB3ADC.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5C3STTUV.js";
import "./chunk-OYEWOMRQ.js";
import "./chunk-67Q25QBV.js";
import "./chunk-WGRD5ZZN.js";
import "./chunk-HTHXZRIK.js";
import "./chunk-6NNCJEUZ.js";
import "./chunk-ALND7WPK.js";
import "./chunk-VUYV6U5L.js";
import "./chunk-ORYNE4VV.js";
import "./chunk-NC5A3MKJ.js";
import "./chunk-KN5XN4TJ.js";
import "./chunk-WTTGPGQK.js";
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
