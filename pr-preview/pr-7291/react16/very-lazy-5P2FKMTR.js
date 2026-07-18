import {
  UniverActionRecorderPlugin
} from "./chunk-N6YKTPSG.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-IZ6OFY5O.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-3TDCR2FF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-LRJHZY26.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ALQNPN3Y.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3VYWMGDF.js";
import "./chunk-OJI4IYJX.js";
import {
  loadDebuggerLocale
} from "./chunk-LUTQ4ESN.js";
import "./chunk-3LMQJO26.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-4V4RFDLI.js";
import "./chunk-QGFBYSYZ.js";
import "./chunk-E6F5OJNJ.js";
import "./chunk-6ACXN3IF.js";
import "./chunk-JWYUVLZU.js";
import "./chunk-4PDAPJGR.js";
import "./chunk-QUM3JBTX.js";
import "./chunk-IQMWKPZP.js";
import "./chunk-SKO3JANX.js";
import "./chunk-N7S5VYEO.js";
import "./chunk-Z4IK4AV3.js";
import "./chunk-FD3JZH6D.js";
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
