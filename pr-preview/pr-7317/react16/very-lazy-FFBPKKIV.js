import {
  UniverActionRecorderPlugin
} from "./chunk-GWV3XLPH.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-G6WHJG2W.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-DQOHAWRI.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-L6AJM7Q5.js";
import {
  UniverDebuggerPlugin
} from "./chunk-M5K4YVQJ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-L6DUULAW.js";
import "./chunk-I6HSR4RY.js";
import {
  loadDebuggerLocale
} from "./chunk-SKIEW3ZJ.js";
import "./chunk-3MGSOXMQ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-JKKYTCGC.js";
import "./chunk-WB6AT7VP.js";
import "./chunk-NT27HNAM.js";
import "./chunk-L5N6EK44.js";
import "./chunk-ORNCECME.js";
import "./chunk-K3ZG63JY.js";
import "./chunk-NDLZPOUP.js";
import "./chunk-ISCJ2R73.js";
import "./chunk-MTLRNOSN.js";
import "./chunk-QDZX4RLS.js";
import "./chunk-XFNITGGT.js";
import "./chunk-JAWHQSZK.js";
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
