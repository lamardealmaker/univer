import {
  UniverActionRecorderPlugin
} from "./chunk-BKQBBVE7.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-QGZ7662Z.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-SMFUG6XB.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-DSGOSBML.js";
import {
  UniverDebuggerPlugin
} from "./chunk-F3AEUAV4.js";
import {
  UniverWatermarkPlugin
} from "./chunk-DLEFKCGJ.js";
import "./chunk-GDHHZCLI.js";
import {
  loadDebuggerLocale
} from "./chunk-4K6WKZAD.js";
import "./chunk-OKNKO5JP.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-XGEM27TV.js";
import "./chunk-QYN6GDJ4.js";
import "./chunk-BMAWUOUM.js";
import "./chunk-GYVSFUCF.js";
import "./chunk-S4XLBRHG.js";
import "./chunk-6MWSYICV.js";
import "./chunk-JSPE2R2S.js";
import "./chunk-2FSEQWPD.js";
import "./chunk-5NCSFO5U.js";
import "./chunk-PIYGBPYI.js";
import "./chunk-7FJVVP7M.js";
import "./chunk-UO46IVZK.js";
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
