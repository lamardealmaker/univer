import {
  UniverActionRecorderPlugin
} from "./chunk-NMBHKYUU.js";
import {
  UniverUniscriptPlugin
} from "./chunk-3NCLXX5Z.js";
import "./chunk-R7EK2BG5.js";
import "./chunk-SQZXXC67.js";
import "./chunk-KV3ZS2HR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-7GDB5UNZ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-HXKJDV2A.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ZX3L4U3C.js";
import {
  UniverDebuggerPlugin
} from "./chunk-EI3QTCSM.js";
import {
  UniverWatermarkPlugin
} from "./chunk-4FBDVIOH.js";
import "./chunk-YP6QAHGE.js";
import {
  loadDebuggerLocale
} from "./chunk-GYUJDZL4.js";
import "./chunk-IREWMXI6.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-QHNIQ6VR.js";
import "./chunk-E4LHDMKA.js";
import "./chunk-4JJBFU2M.js";
import "./chunk-AIYWW2PP.js";
import "./chunk-2A52V36M.js";
import "./chunk-YGRGP2TI.js";
import "./chunk-UKSIMNEJ.js";
import "./chunk-AE2SMQJX.js";
import "./chunk-3VA4ORAS.js";
import "./chunk-WMVBWFQG.js";
import "./chunk-X6R3HG3L.js";
import "./chunk-JFITKU43.js";
import "./chunk-LT6FETEP.js";
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
