import {
  UniverActionRecorderPlugin
} from "./chunk-XZGNPQF6.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-HNHFG5E7.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-LZNO7XNG.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-FH4J3JAL.js";
import {
  UniverDebuggerPlugin
} from "./chunk-TCUBO7JU.js";
import {
  UniverWatermarkPlugin
} from "./chunk-VD4AIXIW.js";
import "./chunk-ULVYB5AG.js";
import {
  loadDebuggerLocale
} from "./chunk-W2IPK4JO.js";
import "./chunk-WQG2BVGK.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-NYHMWKFO.js";
import "./chunk-ZUX2FETO.js";
import "./chunk-WRLVC2BQ.js";
import "./chunk-VAVZOLQ5.js";
import "./chunk-4W5TOARO.js";
import "./chunk-WLGHV6AH.js";
import "./chunk-2XISZNLI.js";
import "./chunk-6AM74UQX.js";
import "./chunk-JTCGG6PX.js";
import "./chunk-BCAS46ZI.js";
import "./chunk-CFJENZU7.js";
import "./chunk-QO3C2C2Z.js";
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
