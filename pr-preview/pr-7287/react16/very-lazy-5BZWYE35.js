import {
  UniverActionRecorderPlugin
} from "./chunk-DTSVB7A2.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-ZDVS5OM4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-YLXFPYV3.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-4YPXYZXN.js";
import {
  UniverDebuggerPlugin
} from "./chunk-FHTMGLXP.js";
import {
  UniverWatermarkPlugin
} from "./chunk-TV5IZDL2.js";
import "./chunk-V32GPT4L.js";
import {
  loadDebuggerLocale
} from "./chunk-2KLHKDEV.js";
import "./chunk-HIRNYZUS.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-DRF5FT4D.js";
import "./chunk-NQT6WNFH.js";
import "./chunk-HILEPQAU.js";
import "./chunk-ADAHA7HX.js";
import "./chunk-T5RVU3KX.js";
import "./chunk-T6XN4F5H.js";
import "./chunk-5X5VM2J5.js";
import "./chunk-EZPYXFOP.js";
import "./chunk-PHXA7DTN.js";
import "./chunk-7T2XFBQ7.js";
import "./chunk-6EUTIKVY.js";
import "./chunk-YZCASKU5.js";
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
