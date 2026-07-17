import {
  UniverActionRecorderPlugin
} from "./chunk-ADTLNECM.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-BK4KRPNY.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-AH6DUQCQ.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-I5HSKOZR.js";
import {
  UniverDebuggerPlugin
} from "./chunk-AWA5QAG3.js";
import {
  UniverWatermarkPlugin
} from "./chunk-PK4RPPMZ.js";
import "./chunk-C3YEIM6M.js";
import {
  loadDebuggerLocale
} from "./chunk-EDODSYIK.js";
import "./chunk-LYBBAYGA.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ERFSPJX6.js";
import "./chunk-6JEQMIBG.js";
import "./chunk-IRNUT3BQ.js";
import "./chunk-4TWTP4ZV.js";
import "./chunk-YKNGE33L.js";
import "./chunk-QBN7ANOM.js";
import "./chunk-FZSWXIJC.js";
import "./chunk-GORRU5NH.js";
import "./chunk-VB5TTCGB.js";
import "./chunk-XQM2BAYI.js";
import "./chunk-KJTB5QCX.js";
import "./chunk-KBPXUGTM.js";
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
