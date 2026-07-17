import {
  UniverActionRecorderPlugin
} from "./chunk-Q36WEINR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-NU5DL6QC.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-DEREXEBR.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-5FDK4AZ7.js";
import {
  UniverDebuggerPlugin
} from "./chunk-3FMLSCN5.js";
import {
  UniverWatermarkPlugin
} from "./chunk-BHWPCLHT.js";
import "./chunk-6E7FPRY4.js";
import {
  loadDebuggerLocale
} from "./chunk-EEWOA4AK.js";
import "./chunk-AW3THQJC.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-7YGFGBQZ.js";
import "./chunk-JDG5Q7QM.js";
import "./chunk-LNWB5DY6.js";
import "./chunk-T7ZNNFUL.js";
import "./chunk-UR7FLBMG.js";
import "./chunk-VYHEGTXK.js";
import "./chunk-BV7LMME3.js";
import "./chunk-EK2C55KF.js";
import "./chunk-B3NIOS63.js";
import "./chunk-N6UCXEZB.js";
import "./chunk-3EG43LTZ.js";
import "./chunk-DOJ4S5IA.js";
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
