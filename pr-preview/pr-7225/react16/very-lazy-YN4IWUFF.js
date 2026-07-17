import {
  UniverActionRecorderPlugin
} from "./chunk-ROIJ5UPU.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-LUG4CDQ5.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-Y4DZPH4M.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-TAVSJNG7.js";
import {
  UniverDebuggerPlugin
} from "./chunk-GKDZSWVN.js";
import {
  UniverWatermarkPlugin
} from "./chunk-K6REBI5O.js";
import "./chunk-R6IKSA6M.js";
import {
  loadDebuggerLocale
} from "./chunk-II2AZQAX.js";
import "./chunk-TNWA7WS4.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5W6AO4UR.js";
import "./chunk-5RDHIJMY.js";
import "./chunk-OP6SLV3A.js";
import "./chunk-AOD4WHEL.js";
import "./chunk-V52OQNKK.js";
import "./chunk-ND7BG4VI.js";
import "./chunk-DJK32BKN.js";
import "./chunk-5WPUL4JN.js";
import "./chunk-QNDLTLR6.js";
import "./chunk-MESKVJUQ.js";
import "./chunk-JZ2LFV55.js";
import "./chunk-YAGO4HXX.js";
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
