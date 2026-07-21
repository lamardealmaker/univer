import {
  UniverActionRecorderPlugin
} from "./chunk-LXG5IMRT.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-23T2KVP4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-QGBCIZBW.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-UCUBEY2P.js";
import {
  UniverDebuggerPlugin
} from "./chunk-PG7FPZPZ.js";
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
} from "./chunk-P2FKPXH4.js";
import "./chunk-QYN6GDJ4.js";
import "./chunk-UBKFDUDO.js";
import "./chunk-PD5UZWNY.js";
import "./chunk-NW6FLDF6.js";
import "./chunk-6MWSYICV.js";
import "./chunk-JSPE2R2S.js";
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
