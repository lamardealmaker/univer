import {
  UniverActionRecorderPlugin
} from "./chunk-KNSBWNLP.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-IA4HFNGW.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-KISUGCOE.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-IH7Y35K2.js";
import {
  UniverDebuggerPlugin
} from "./chunk-3VDOE3V3.js";
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
} from "./chunk-SARAV6AK.js";
import "./chunk-KVLBQ45J.js";
import "./chunk-WN5HJPPH.js";
import "./chunk-Z55LZNQ5.js";
import "./chunk-MB5EUFI3.js";
import "./chunk-YNGIMNN2.js";
import "./chunk-6ANE5F2C.js";
import "./chunk-UEXZFSJ7.js";
import "./chunk-F6HYNG7A.js";
import "./chunk-KOL7QAKS.js";
import "./chunk-VPYMURTI.js";
import "./chunk-KDL4XP5H.js";
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
