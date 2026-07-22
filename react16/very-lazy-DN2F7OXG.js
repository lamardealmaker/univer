import {
  UniverActionRecorderPlugin
} from "./chunk-LOT2LUKA.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-5GECAPU4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-6GYZGIM4.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-NJMGFXJA.js";
import {
  UniverDebuggerPlugin
} from "./chunk-52MBW722.js";
import {
  UniverWatermarkPlugin
} from "./chunk-SDR46FT5.js";
import "./chunk-VSRJGQ4N.js";
import {
  loadDebuggerLocale
} from "./chunk-J4N6JNOG.js";
import "./chunk-6A7KCLIZ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-PZIWC45M.js";
import "./chunk-VUOFGFFP.js";
import "./chunk-NNBYBS6M.js";
import "./chunk-HIOGFRM4.js";
import "./chunk-Z5HOA35Q.js";
import "./chunk-HEIKB7AI.js";
import "./chunk-36HE7BQM.js";
import "./chunk-VI2WI6CP.js";
import "./chunk-HI3S6XZW.js";
import "./chunk-GC6NIMO6.js";
import "./chunk-FV4IGQDG.js";
import "./chunk-N4BCF5MH.js";
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
