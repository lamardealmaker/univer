import {
  UniverActionRecorderPlugin
} from "./chunk-Z363I3TV.js";
import {
  UniverUniscriptPlugin
} from "./chunk-2BB54LEO.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-O3CCAYWV.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-KXGPXRFG.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-4UO4JEQF.js";
import {
  UniverDebuggerPlugin
} from "./chunk-2CXNLKVV.js";
import {
  UniverWatermarkPlugin
} from "./chunk-4ZWMBXIF.js";
import "./chunk-W7FX655M.js";
import {
  loadDebuggerLocale
} from "./chunk-2UKX323F.js";
import "./chunk-26HZVDNR.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-GQINOIMR.js";
import "./chunk-JCAPPKCA.js";
import "./chunk-DFMBMIS6.js";
import "./chunk-KYKA2PTJ.js";
import "./chunk-553M5LYJ.js";
import "./chunk-GISFGR5G.js";
import "./chunk-FDYQCRUB.js";
import "./chunk-4GOOIQ6L.js";
import "./chunk-QCUG2TSB.js";
import "./chunk-HGXCW6X5.js";
import "./chunk-KY3OPPOE.js";
import "./chunk-6VU3U6PO.js";
import "./chunk-BZ7UQADZ.js";
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
