import {
  UniverActionRecorderPlugin
} from "./chunk-GYYEFUGC.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-HF3VXYT5.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-Y6GY2SDS.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-IITUWZSX.js";
import {
  UniverDebuggerPlugin
} from "./chunk-HVSLTUQQ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-SDR46FT5.js";
import "./chunk-DR7EZ5B4.js";
import {
  loadDebuggerLocale
} from "./chunk-6MMQXC5F.js";
import "./chunk-6A7KCLIZ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-WA7NHIML.js";
import "./chunk-VUOFGFFP.js";
import "./chunk-WMJOI7QH.js";
import "./chunk-YRKMWVU6.js";
import "./chunk-R5ONU2Q2.js";
import "./chunk-EEVABD7L.js";
import "./chunk-MEZUJHUE.js";
import "./chunk-VI2WI6CP.js";
import "./chunk-HI3S6XZW.js";
import "./chunk-W2IE7XAE.js";
import "./chunk-FV4IGQDG.js";
import "./chunk-N4BCF5MH.js";
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
