import {
  UniverActionRecorderPlugin
} from "./chunk-BO6CZZVL.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-DGNXPBOO.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-PEHRIIDN.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-TAJDONDE.js";
import {
  UniverDebuggerPlugin
} from "./chunk-EZAW6XH5.js";
import {
  UniverWatermarkPlugin
} from "./chunk-BZW3JMDG.js";
import "./chunk-GZDZAGZU.js";
import {
  loadDebuggerLocale
} from "./chunk-GBL3PDEY.js";
import "./chunk-JCL2EZMA.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-3IAP3AZ7.js";
import "./chunk-67SAKULC.js";
import "./chunk-MYLWSSFO.js";
import "./chunk-QF7C6WXX.js";
import "./chunk-WMI7TYEP.js";
import "./chunk-I36BEPXV.js";
import "./chunk-5RF6QEJE.js";
import "./chunk-3XYSHYJO.js";
import "./chunk-5FVFOJ5F.js";
import "./chunk-O7SFXNR4.js";
import "./chunk-ZUW5CMIO.js";
import "./chunk-5FNWWQ47.js";
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
