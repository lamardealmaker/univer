import {
  UniverActionRecorderPlugin
} from "./chunk-KAAM76N2.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-72EZWUZY.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-6WX2DXIP.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-2NZMXAM7.js";
import {
  UniverDebuggerPlugin
} from "./chunk-UWTGYFSM.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ZDEFGDLW.js";
import "./chunk-OP5H6M3X.js";
import {
  loadDebuggerLocale
} from "./chunk-5HCWYW74.js";
import "./chunk-HNDQGQ2Y.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-FECCBKGH.js";
import "./chunk-YYQJ5QCL.js";
import "./chunk-ISQFSPNJ.js";
import "./chunk-FHMDFG6E.js";
import "./chunk-XOAR4XWD.js";
import "./chunk-XP3Q3NXY.js";
import "./chunk-CWSGPU2L.js";
import "./chunk-N7X4PJ3A.js";
import "./chunk-3FKRKIME.js";
import "./chunk-G7SXFZ34.js";
import "./chunk-7SRTVBCX.js";
import "./chunk-JKGF6EFW.js";
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
