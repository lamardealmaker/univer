import {
  UniverActionRecorderPlugin
} from "./chunk-ERWXIBT5.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-I7D5NLVH.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-7GHWLFFJ.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ODHFIMRI.js";
import {
  UniverDebuggerPlugin
} from "./chunk-BRXC7IF6.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ER2IPE56.js";
import "./chunk-OLSDACKK.js";
import {
  loadDebuggerLocale
} from "./chunk-XOLFHXLN.js";
import "./chunk-T7I3D4VX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5ZK4LBSY.js";
import "./chunk-LWZEJZFI.js";
import "./chunk-UANBNWAU.js";
import "./chunk-PNJIYUZM.js";
import "./chunk-BDS5PPVC.js";
import "./chunk-DLVYVF5V.js";
import "./chunk-OSIUONFY.js";
import "./chunk-BD4AZUYQ.js";
import "./chunk-C772RFFN.js";
import "./chunk-7U53J3FY.js";
import "./chunk-7UTO6AD7.js";
import "./chunk-JDLKIM3V.js";
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
