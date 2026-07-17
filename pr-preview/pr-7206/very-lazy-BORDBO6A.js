import {
  UniverActionRecorderPlugin
} from "./chunk-4Q4N6HFV.js";
import {
  UniverUniscriptPlugin
} from "./chunk-46W4UHNM.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-EHS4Y2YX.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-IWSCDMZZ.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-G65ZUCCS.js";
import {
  UniverDebuggerPlugin
} from "./chunk-PYBMWXEF.js";
import {
  UniverWatermarkPlugin
} from "./chunk-PXNCLMC7.js";
import "./chunk-LMKYHVJ6.js";
import {
  loadDebuggerLocale
} from "./chunk-AYD3GOKD.js";
import "./chunk-PQUKJF4G.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-HIXKQD4O.js";
import "./chunk-6SJSSRNL.js";
import "./chunk-VZPC23BU.js";
import "./chunk-ZOOJRDZ5.js";
import "./chunk-TOHHES4V.js";
import "./chunk-XCPOR4FC.js";
import "./chunk-BZFCRYR3.js";
import "./chunk-5QZWK5BE.js";
import "./chunk-UUXCCQDN.js";
import "./chunk-XRSVWX6F.js";
import "./chunk-YGL77P23.js";
import "./chunk-UZB6LHUM.js";
import "./chunk-QJESARYQ.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-no-worker/very-lazy.ts
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
