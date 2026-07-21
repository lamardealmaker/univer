import {
  UniverActionRecorderPlugin
} from "./chunk-OAC7ENWV.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-VGXM525U.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-EN4OPHUY.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-DUMQ2X3I.js";
import {
  UniverDebuggerPlugin
} from "./chunk-3X4WMJXY.js";
import {
  UniverWatermarkPlugin
} from "./chunk-DLEFKCGJ.js";
import "./chunk-QFSCELHM.js";
import {
  loadDebuggerLocale
} from "./chunk-QVSNHHIY.js";
import "./chunk-OKNKO5JP.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-MREI3WT6.js";
import "./chunk-QYN6GDJ4.js";
import "./chunk-WTD6X2JB.js";
import "./chunk-DXHGZOHR.js";
import "./chunk-3KFXFRN6.js";
import "./chunk-6MWSYICV.js";
import "./chunk-TCZIGRXH.js";
import "./chunk-2FSEQWPD.js";
import "./chunk-5NCSFO5U.js";
import "./chunk-PIYGBPYI.js";
import "./chunk-7FJVVP7M.js";
import "./chunk-UO46IVZK.js";
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
