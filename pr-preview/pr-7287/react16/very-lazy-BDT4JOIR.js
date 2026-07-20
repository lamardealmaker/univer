import {
  UniverActionRecorderPlugin
} from "./chunk-EFZQE6FD.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-JL4IVHVO.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GFZJ6F3K.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-DORWGTDJ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ANIHH632.js";
import {
  UniverWatermarkPlugin
} from "./chunk-7IDNIRUE.js";
import "./chunk-7XLFYIKQ.js";
import {
  loadDebuggerLocale
} from "./chunk-CYQR5GET.js";
import "./chunk-SKX7OZPQ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-S6CHBRCY.js";
import "./chunk-OD5JULIN.js";
import "./chunk-OAMAUPJX.js";
import "./chunk-IBCIDPS3.js";
import "./chunk-7LDHFNZ4.js";
import "./chunk-IXEHVME3.js";
import "./chunk-W72J2EQD.js";
import "./chunk-HOJE6KZL.js";
import "./chunk-WNY25Z7C.js";
import "./chunk-XAJLTAUM.js";
import "./chunk-6OBE5I5L.js";
import "./chunk-RJIFU6SG.js";
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
