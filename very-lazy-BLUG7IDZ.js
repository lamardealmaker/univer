import {
  UniverActionRecorderPlugin
} from "./chunk-JI5JCYUR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-JJE3XM7Y.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-WTQNY3Z5.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-NB7KGDXW.js";
import {
  UniverDebuggerPlugin
} from "./chunk-W4MZQLAJ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-L6DUULAW.js";
import "./chunk-7RRG232U.js";
import {
  loadDebuggerLocale
} from "./chunk-OLFC366I.js";
import "./chunk-BMRBFE25.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-KM5RRPWO.js";
import "./chunk-WB6AT7VP.js";
import "./chunk-A73TK6BQ.js";
import "./chunk-FZRUTRIY.js";
import "./chunk-GE5ZFGQN.js";
import "./chunk-7NQHI6ZF.js";
import "./chunk-BJHPWHFO.js";
import "./chunk-WDOGA3AR.js";
import "./chunk-MTLRNOSN.js";
import "./chunk-QDZX4RLS.js";
import "./chunk-XFNITGGT.js";
import "./chunk-JAWHQSZK.js";
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
