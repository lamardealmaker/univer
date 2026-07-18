import {
  UniverActionRecorderPlugin
} from "./chunk-55ZYYINZ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-Z7WHC7WA.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-W3QPLB5V.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-YE3376HO.js";
import {
  UniverDebuggerPlugin
} from "./chunk-XIVIJFFT.js";
import {
  UniverWatermarkPlugin
} from "./chunk-S37A22CF.js";
import "./chunk-HZOMVSPU.js";
import {
  loadDebuggerLocale
} from "./chunk-JPOSKCDG.js";
import "./chunk-2O47C7IX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-W7VM65U7.js";
import "./chunk-KVLBQ45J.js";
import "./chunk-6DVCHJTL.js";
import "./chunk-ZIZKR5OK.js";
import "./chunk-XQMJNEPX.js";
import "./chunk-YNGIMNN2.js";
import "./chunk-6ANE5F2C.js";
import "./chunk-UEXZFSJ7.js";
import "./chunk-F6HYNG7A.js";
import "./chunk-KOL7QAKS.js";
import "./chunk-VPYMURTI.js";
import "./chunk-KDL4XP5H.js";
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
