import {
  UniverActionRecorderPlugin
} from "./chunk-SDMVUHB7.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-C5REWIAB.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-WH4BM4GL.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-6ESRBAEL.js";
import {
  UniverDebuggerPlugin
} from "./chunk-K53VUIWC.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ASUUKWLL.js";
import "./chunk-Y274LFPF.js";
import {
  loadDebuggerLocale
} from "./chunk-CI42JLZM.js";
import "./chunk-57CHML7Z.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-6UWY6G4O.js";
import "./chunk-CYMQDOOF.js";
import "./chunk-54PFHOII.js";
import "./chunk-VYUSG6PR.js";
import "./chunk-4UI5G7GT.js";
import "./chunk-7BSR2VVD.js";
import "./chunk-LKQHL32Y.js";
import "./chunk-L4PCTLJZ.js";
import "./chunk-CQ7UYAIQ.js";
import "./chunk-7QDY2TDF.js";
import "./chunk-5BWHODX4.js";
import "./chunk-7X4H4BYU.js";
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
