import {
  UniverActionRecorderPlugin
} from "./chunk-ZBBMPSKS.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-GIDUKI5Z.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-7SOVRCQ3.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-EM5KDK7Z.js";
import {
  UniverDebuggerPlugin
} from "./chunk-E54SIL4D.js";
import {
  UniverWatermarkPlugin
} from "./chunk-BZ2QPXPM.js";
import "./chunk-BFQF3HPV.js";
import {
  loadDebuggerLocale
} from "./chunk-GS5EJQL7.js";
import "./chunk-OD6RBLDX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-QXRQSVXI.js";
import "./chunk-HOT5SNCA.js";
import "./chunk-KPFGYC3N.js";
import "./chunk-PN7TKNNN.js";
import "./chunk-E3EB6O3S.js";
import "./chunk-NCPGOBBL.js";
import "./chunk-BEQH3R6D.js";
import "./chunk-4CX7GQL6.js";
import "./chunk-XRZRRLSI.js";
import "./chunk-OMRVEMWW.js";
import "./chunk-62P57WM5.js";
import "./chunk-6QPW3C4R.js";
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
