import {
  UniverActionRecorderPlugin
} from "./chunk-IICMKS7U.js";
import {
  UniverUniscriptPlugin
} from "./chunk-F2O33XAZ.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-Y75LUFK4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-5RAMGZVI.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-VLLCS2SR.js";
import {
  UniverDebuggerPlugin
} from "./chunk-OJ6GLDQ6.js";
import {
  UniverWatermarkPlugin
} from "./chunk-EUDJPADZ.js";
import "./chunk-R4STMMFE.js";
import {
  loadDebuggerLocale
} from "./chunk-7FYG62TC.js";
import "./chunk-GQPFIW6Y.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-6SQ7SG7D.js";
import "./chunk-QPMUETJU.js";
import "./chunk-OT3UYMPQ.js";
import "./chunk-VSVEC6ID.js";
import "./chunk-AL5EYF4N.js";
import "./chunk-TCIXXMIF.js";
import "./chunk-WLENLEPE.js";
import "./chunk-M2Y4C6XV.js";
import "./chunk-TYFBZFLI.js";
import "./chunk-GD36DX3J.js";
import "./chunk-JUQD2ZD4.js";
import "./chunk-ISOJK5GO.js";
import "./chunk-2NJBYRKH.js";
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
