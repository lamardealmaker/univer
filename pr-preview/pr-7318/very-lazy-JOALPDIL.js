import {
  UniverActionRecorderPlugin
} from "./chunk-LYIRYTYG.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-THAK7MMI.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-TKCG7XN4.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-EJVM5IZ2.js";
import {
  UniverDebuggerPlugin
} from "./chunk-TCCJCKSH.js";
import {
  UniverWatermarkPlugin
} from "./chunk-YBZPRJZX.js";
import "./chunk-7DL7W6MO.js";
import {
  loadDebuggerLocale
} from "./chunk-AHEK54FL.js";
import "./chunk-BPQPEARQ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-TQKPNQJQ.js";
import "./chunk-DUVAEDV5.js";
import "./chunk-AT46DNCI.js";
import "./chunk-MIPUQYNP.js";
import "./chunk-GFPKZI7F.js";
import "./chunk-AHHRULAS.js";
import "./chunk-AMXUHILZ.js";
import "./chunk-7V2XEAWA.js";
import "./chunk-G2ZW2BDM.js";
import "./chunk-47MGLYD5.js";
import "./chunk-PW5H4QGM.js";
import "./chunk-UEDAY4IO.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-no-worker/very-lazy.ts
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
