import {
  UniverActionRecorderPlugin
} from "./chunk-E5IA3NWN.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-HRKISNIA.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-WT32CLTM.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-JX4YU3WF.js";
import {
  UniverDebuggerPlugin
} from "./chunk-QJ7LXJYW.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3YVRHPH7.js";
import "./chunk-DI65FKRP.js";
import {
  loadDebuggerLocale
} from "./chunk-TEWK2GWW.js";
import "./chunk-TAYDO4L5.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-4TKZQK6I.js";
import "./chunk-6FSECGKG.js";
import "./chunk-Q2E2ECAM.js";
import "./chunk-T6YW3JCV.js";
import "./chunk-TBKZ3TKR.js";
import "./chunk-TA533AUM.js";
import "./chunk-O6P4CNWQ.js";
import "./chunk-UEB57LIN.js";
import "./chunk-SYKVOUJC.js";
import "./chunk-4AAQ67CN.js";
import "./chunk-Z4HUTZZE.js";
import "./chunk-AE3R7DH2.js";
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
