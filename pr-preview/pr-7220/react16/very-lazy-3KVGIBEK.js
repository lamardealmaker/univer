import {
  UniverActionRecorderPlugin
} from "./chunk-N4XOEHOM.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-DFASVMOI.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-TGTSCIDV.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-CMEQTCWA.js";
import {
  UniverDebuggerPlugin
} from "./chunk-OEEYWJUJ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-K6REBI5O.js";
import "./chunk-W5JWBBJZ.js";
import {
  loadDebuggerLocale
} from "./chunk-WM7W2Z5N.js";
import "./chunk-3YA4CGZS.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-2ZWZKGD4.js";
import "./chunk-5RDHIJMY.js";
import "./chunk-RFNRLHMJ.js";
import "./chunk-KVTYVSIH.js";
import "./chunk-3TDTMNGA.js";
import "./chunk-EX3OTKVK.js";
import "./chunk-7U37L6BW.js";
import "./chunk-SBOM7SOI.js";
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
