import {
  UniverActionRecorderPlugin
} from "./chunk-Y6HRILRQ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-5D5NDXOF.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-N4TSAYG6.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-FEQ4VXRC.js";
import {
  UniverDebuggerPlugin
} from "./chunk-F5HYFZSO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-LXQFCS33.js";
import "./chunk-FBUMZR3V.js";
import {
  loadDebuggerLocale
} from "./chunk-KJUELBR2.js";
import "./chunk-GFGPRFYL.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-C547RORS.js";
import "./chunk-6AEMDDBA.js";
import "./chunk-WLT3XFS7.js";
import "./chunk-H46OVIQG.js";
import "./chunk-BJWTFBI2.js";
import "./chunk-CU2EDUDJ.js";
import "./chunk-JRNM2EKZ.js";
import "./chunk-ULZVYSIP.js";
import "./chunk-6Q2GSEQ3.js";
import "./chunk-5O7RVKHK.js";
import "./chunk-ZQDF6DXU.js";
import "./chunk-IOWTIYQR.js";
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
