import {
  UniverActionRecorderPlugin
} from "./chunk-KBNEN63A.js";
import {
  UniverUniscriptPlugin
} from "./chunk-KF2AAAKD.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-V4QBOCIK.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-MKZN3GPU.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-4I32ZCZ2.js";
import {
  UniverDebuggerPlugin
} from "./chunk-XYMRAG4X.js";
import {
  UniverWatermarkPlugin
} from "./chunk-4FBDVIOH.js";
import "./chunk-GJZ37RT2.js";
import {
  loadDebuggerLocale
} from "./chunk-S72FU5HF.js";
import "./chunk-IREWMXI6.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-WD7AV5PB.js";
import "./chunk-7BBPEWH7.js";
import "./chunk-QTBTVSHV.js";
import "./chunk-E7UIGV4Q.js";
import "./chunk-QYYOQ5CI.js";
import "./chunk-OARRDGON.js";
import "./chunk-WV2BWNAK.js";
import "./chunk-AE2SMQJX.js";
import "./chunk-N7L354MO.js";
import "./chunk-WMVBWFQG.js";
import "./chunk-VYIAE3OT.js";
import "./chunk-4FXSDHB6.js";
import "./chunk-LT6FETEP.js";
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
