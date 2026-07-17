import {
  UniverActionRecorderPlugin
} from "./chunk-CSMN2QMM.js";
import {
  UniverUniscriptPlugin
} from "./chunk-CPYPT7K7.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-NPZM4SHQ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-R6DQAJ23.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-DTVTVIYW.js";
import {
  UniverDebuggerPlugin
} from "./chunk-6EB5NDAC.js";
import {
  UniverWatermarkPlugin
} from "./chunk-GQHAKD4U.js";
import "./chunk-MESIPSED.js";
import {
  loadDebuggerLocale
} from "./chunk-GQJ7SHOV.js";
import "./chunk-V5MOZLBT.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-CZBIW7MO.js";
import "./chunk-EBAV7YSL.js";
import "./chunk-N3H7YJXI.js";
import "./chunk-SRC5WBJI.js";
import "./chunk-RZJRHFVN.js";
import "./chunk-USURWJAH.js";
import "./chunk-UKNH5LUD.js";
import "./chunk-7OQM37ST.js";
import "./chunk-SCJRDX4C.js";
import "./chunk-ZQQO54J6.js";
import "./chunk-FMWTNRSJ.js";
import "./chunk-UNYIH6OF.js";
import "./chunk-AYWINPRX.js";
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
