import {
  UniverActionRecorderPlugin
} from "./chunk-6D2DIL7I.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-KXJSEFWD.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-TUSFU7YJ.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-WPX7TGU5.js";
import {
  UniverDebuggerPlugin
} from "./chunk-FVSJ2KJJ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-IQDUQ4GY.js";
import "./chunk-C3UVYQQO.js";
import {
  loadDebuggerLocale
} from "./chunk-O5E3MWSX.js";
import "./chunk-47T32P7J.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-QAFPZOQI.js";
import "./chunk-GKOPRLVD.js";
import "./chunk-FWB76SBQ.js";
import "./chunk-EPF64CV7.js";
import "./chunk-CRFXJBEX.js";
import "./chunk-274MQYO6.js";
import "./chunk-EOQESUVA.js";
import "./chunk-WZRSDBHA.js";
import "./chunk-EXFLV3OL.js";
import "./chunk-PQNGZWJ6.js";
import "./chunk-4BVUHLOO.js";
import "./chunk-NOU3WR7A.js";
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
