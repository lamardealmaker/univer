import {
  UniverActionRecorderPlugin
} from "./chunk-BV7EVSTZ.js";
import {
  UniverUniscriptPlugin
} from "./chunk-TDL3SLHJ.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-U464P4MX.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-453ZXRRO.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-323OPZLD.js";
import {
  UniverDebuggerPlugin
} from "./chunk-W42RANMD.js";
import {
  UniverWatermarkPlugin
} from "./chunk-IGIMUNTM.js";
import "./chunk-5RH7KFZ4.js";
import {
  loadDebuggerLocale
} from "./chunk-TUHWYDIL.js";
import "./chunk-35VRRE6Y.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-TKRXW5GW.js";
import "./chunk-IOI6MC44.js";
import "./chunk-V2QKBXES.js";
import "./chunk-26UHMP6F.js";
import "./chunk-YWBWRFZC.js";
import "./chunk-LR5HIO4Y.js";
import "./chunk-XKO3JW3B.js";
import "./chunk-63DFZAS2.js";
import "./chunk-PDNVFZC7.js";
import "./chunk-JCXM4SWU.js";
import "./chunk-POXKYJUQ.js";
import "./chunk-XF4LYEKE.js";
import "./chunk-OVV7GT3M.js";
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
