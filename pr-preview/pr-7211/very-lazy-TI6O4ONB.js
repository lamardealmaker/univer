import {
  UniverActionRecorderPlugin
} from "./chunk-PGGYVRDM.js";
import {
  UniverUniscriptPlugin
} from "./chunk-WK3B2EOT.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-5OM5CPVB.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-5LAKMYNT.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-EL3LVFCB.js";
import {
  UniverDebuggerPlugin
} from "./chunk-XEJ5DDFV.js";
import {
  UniverWatermarkPlugin
} from "./chunk-FVYYILXI.js";
import "./chunk-DPEJPXLB.js";
import {
  loadDebuggerLocale
} from "./chunk-NUOIMOCE.js";
import "./chunk-B5Z3ULVJ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-A7NFDYBO.js";
import "./chunk-ZQ65Q5TK.js";
import "./chunk-USR2KQ5X.js";
import "./chunk-WMT7DRVA.js";
import "./chunk-RWD2CR44.js";
import "./chunk-7BZAPDYT.js";
import "./chunk-YROKCJXB.js";
import "./chunk-66F6IXH3.js";
import "./chunk-W2CQHLHX.js";
import "./chunk-AEYG3EZL.js";
import "./chunk-DHOPL66F.js";
import "./chunk-BG7SGHYA.js";
import "./chunk-II7REV6J.js";
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
    plugins.push([UniverUniscriptPlugin, {
      getWorkerUrl(_, label) {
        if (label === "json") {
          return "/vs/language/json/json.worker.js";
        }
        if (label === "css" || label === "scss" || label === "less") {
          return "/vs/language/css/css.worker.js";
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return "/vs/language/html/html.worker.js";
        }
        if (label === "typescript" || label === "javascript") {
          return "/vs/language/typescript/ts.worker.js";
        }
        return "/vs/editor/editor.worker.js";
      }
    }]);
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
