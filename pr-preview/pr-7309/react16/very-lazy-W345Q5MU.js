import {
  UniverActionRecorderPlugin
} from "./chunk-BLTKXS47.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-F25XGY7Y.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-M7PPNR3F.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-QF56CNYA.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ZUIXFWYS.js";
import {
  UniverWatermarkPlugin
} from "./chunk-SDR46FT5.js";
import "./chunk-ZMWLLNTC.js";
import {
  loadDebuggerLocale
} from "./chunk-VFO3RGN6.js";
import "./chunk-ESSFEXQT.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-HJ2XXE5D.js";
import "./chunk-VUOFGFFP.js";
import "./chunk-TLDW2BE4.js";
import "./chunk-BLJKDDIV.js";
import "./chunk-VWB4YFLH.js";
import "./chunk-LJDSQID3.js";
import "./chunk-IGM2PDFK.js";
import "./chunk-5ZVYOOOJ.js";
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
