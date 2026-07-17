import {
  UniverActionRecorderPlugin
} from "./chunk-C2VCG5XY.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-42R3OHAF.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-X74JAVES.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-YRO2IMJS.js";
import {
  UniverDebuggerPlugin
} from "./chunk-RA7FTORS.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2UY62IDI.js";
import "./chunk-SEPQXCFZ.js";
import {
  loadDebuggerLocale
} from "./chunk-2RDYHF7V.js";
import "./chunk-WQEPLWET.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-BBHWOLJZ.js";
import "./chunk-NFNYEJ4L.js";
import "./chunk-C3GRK3JN.js";
import "./chunk-3J4AFXWB.js";
import "./chunk-OPJZR7GP.js";
import "./chunk-MUR5TKJK.js";
import "./chunk-2I3MX5JU.js";
import "./chunk-K4JVPNG6.js";
import "./chunk-HKK367X4.js";
import "./chunk-4LPILMGO.js";
import "./chunk-M56I3X25.js";
import "./chunk-QEB532PW.js";
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
