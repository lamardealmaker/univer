import {
  UniverActionRecorderPlugin
} from "./chunk-C6MM34NR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-WUJTYW2R.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-J5PVRKYB.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-GENS3IXR.js";
import {
  UniverDebuggerPlugin
} from "./chunk-Z5OEOW26.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3YVRHPH7.js";
import "./chunk-WYRIQ4HD.js";
import {
  loadDebuggerLocale
} from "./chunk-ZJ6UCU7X.js";
import "./chunk-TAYDO4L5.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-7AFTDK4N.js";
import "./chunk-Q7QIMPSL.js";
import "./chunk-2KXTOOVM.js";
import "./chunk-UXAVM3YE.js";
import "./chunk-E4DEPHF7.js";
import "./chunk-TA533AUM.js";
import "./chunk-RGIQILDK.js";
import "./chunk-UEB57LIN.js";
import "./chunk-HINQTSXY.js";
import "./chunk-JBTX5AZD.js";
import "./chunk-MZIIE37M.js";
import "./chunk-AE3R7DH2.js";
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
