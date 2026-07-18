import {
  UniverActionRecorderPlugin
} from "./chunk-FHM7MZAA.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-KHDORJDU.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ZUCMGHXM.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-FNZ42VSB.js";
import {
  UniverDebuggerPlugin
} from "./chunk-424WPZPQ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-S37A22CF.js";
import "./chunk-3W2WN5WQ.js";
import {
  loadDebuggerLocale
} from "./chunk-7RTTL5M4.js";
import "./chunk-MOLDK3VM.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-MRGCIXIC.js";
import "./chunk-KVLBQ45J.js";
import "./chunk-3ZZGYV5P.js";
import "./chunk-TDEZR4AB.js";
import "./chunk-H6XIA66P.js";
import "./chunk-L6HGHUOF.js";
import "./chunk-IKDOVPVV.js";
import "./chunk-IJ3IXJZK.js";
import "./chunk-F6HYNG7A.js";
import "./chunk-KOL7QAKS.js";
import "./chunk-VPYMURTI.js";
import "./chunk-KDL4XP5H.js";
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
