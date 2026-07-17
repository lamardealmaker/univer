import {
  UniverActionRecorderPlugin
} from "./chunk-HRBCONGR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-QOX7XTQW.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-JSBCPFU4.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-DDU2YWYE.js";
import {
  UniverDebuggerPlugin
} from "./chunk-2FUUH3EK.js";
import {
  UniverWatermarkPlugin
} from "./chunk-S4WYZOTQ.js";
import "./chunk-TW2AQMY4.js";
import {
  loadDebuggerLocale
} from "./chunk-UQCBVF7Y.js";
import "./chunk-5QNDM7Q5.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-HNTJWUQ7.js";
import "./chunk-MM6QQTMY.js";
import "./chunk-ZQVTSRNL.js";
import "./chunk-SCOCWE3G.js";
import "./chunk-DJ56KLBT.js";
import "./chunk-WMOUGJI7.js";
import "./chunk-ZRZVVOUC.js";
import "./chunk-LH3GFQJE.js";
import "./chunk-6LLP25PE.js";
import "./chunk-MYV6UH5V.js";
import "./chunk-GP5SU7I4.js";
import "./chunk-LAUCJFSS.js";
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
