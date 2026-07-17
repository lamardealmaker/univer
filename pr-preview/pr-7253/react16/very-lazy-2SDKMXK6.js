import {
  UniverActionRecorderPlugin
} from "./chunk-HOJ4I2FC.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-5PAM4KBW.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-M4PABR5M.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-5LJN5UCM.js";
import {
  UniverDebuggerPlugin
} from "./chunk-USMFKOTW.js";
import {
  UniverWatermarkPlugin
} from "./chunk-43SCT2CG.js";
import "./chunk-KIFPDGOX.js";
import {
  loadDebuggerLocale
} from "./chunk-WT4W5P7Q.js";
import "./chunk-7FJX3F4Q.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-VOWM4RJR.js";
import "./chunk-SKBCKMMR.js";
import "./chunk-XBVP63BL.js";
import "./chunk-BM666JEA.js";
import "./chunk-EURSUFWT.js";
import "./chunk-S2GYUVVL.js";
import "./chunk-LZ4NLJXK.js";
import "./chunk-R3FURYVI.js";
import "./chunk-DVJ3ZZW2.js";
import "./chunk-EMNNNI6N.js";
import "./chunk-623UIBHA.js";
import "./chunk-DJVW44P3.js";
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
