import {
  UniverActionRecorderPlugin
} from "./chunk-6DTRCUHD.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-EBJHWKT5.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-3XZZTN57.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-EUZAWZGY.js";
import {
  UniverDebuggerPlugin
} from "./chunk-A7CIK5NK.js";
import {
  UniverWatermarkPlugin
} from "./chunk-DLEFKCGJ.js";
import "./chunk-YWSSYVAX.js";
import {
  loadDebuggerLocale
} from "./chunk-ZF3575OJ.js";
import "./chunk-OKNKO5JP.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-YFURGUFD.js";
import "./chunk-QYN6GDJ4.js";
import "./chunk-T2WPJPJ6.js";
import "./chunk-FLUE6P6D.js";
import "./chunk-DV3Y5AAS.js";
import "./chunk-6MWSYICV.js";
import "./chunk-XYIUNZZX.js";
import "./chunk-2FSEQWPD.js";
import "./chunk-5NCSFO5U.js";
import "./chunk-PIYGBPYI.js";
import "./chunk-7FJVVP7M.js";
import "./chunk-UO46IVZK.js";
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
