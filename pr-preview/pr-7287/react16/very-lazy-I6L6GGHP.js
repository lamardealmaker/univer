import {
  UniverActionRecorderPlugin
} from "./chunk-7FNGN7CM.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-AJKBJVRM.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-QBL5MTEN.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-WNUUVK7D.js";
import {
  UniverDebuggerPlugin
} from "./chunk-IYKN2BBT.js";
import {
  UniverWatermarkPlugin
} from "./chunk-G75FYNCW.js";
import "./chunk-O3WZYVWJ.js";
import {
  loadDebuggerLocale
} from "./chunk-NLE2KDFI.js";
import "./chunk-7EW5C7MR.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-5LETJDU7.js";
import "./chunk-LRNFZAEF.js";
import "./chunk-LMJ4IFK3.js";
import "./chunk-JFFKTPOY.js";
import "./chunk-HP2WEK2B.js";
import "./chunk-MVOWOER3.js";
import "./chunk-WIWKXDD7.js";
import "./chunk-756NKHGC.js";
import "./chunk-KZJMUOYO.js";
import "./chunk-ZEDWP55C.js";
import "./chunk-6KFG42LC.js";
import "./chunk-MRUZHKXB.js";
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
