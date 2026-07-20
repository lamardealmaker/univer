import {
  UniverActionRecorderPlugin
} from "./chunk-R37SDYIU.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-DFFVTEER.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-5REKGYZO.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-EB4TKAMA.js";
import {
  UniverDebuggerPlugin
} from "./chunk-FWWXVR44.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ZVIMLFZG.js";
import "./chunk-6OOQYTX2.js";
import {
  loadDebuggerLocale
} from "./chunk-WHFCJ4ZD.js";
import "./chunk-U4LRDZ4G.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-EHQ4TIWW.js";
import "./chunk-KJB4CDPG.js";
import "./chunk-V7YI4T7X.js";
import "./chunk-W7VCB5UH.js";
import "./chunk-WXYUWY2D.js";
import "./chunk-Z3WZ4VF2.js";
import "./chunk-PREI6LBO.js";
import "./chunk-7ML65O4Y.js";
import "./chunk-CY6BQZUF.js";
import "./chunk-2E52FVOU.js";
import "./chunk-RQBF6JVW.js";
import "./chunk-KCBSKUX4.js";
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
