import {
  UniverActionRecorderPlugin
} from "./chunk-OGUTUSKW.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-E4RO4G7H.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-5IPTVQ4T.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-G7EX4C5D.js";
import {
  UniverDebuggerPlugin
} from "./chunk-PGIX3XPX.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JOZWZ4BM.js";
import "./chunk-RKRSIKMW.js";
import {
  loadDebuggerLocale
} from "./chunk-JUALPVCB.js";
import "./chunk-YO43H3OI.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-RXTDZUBB.js";
import "./chunk-PRWGWPE7.js";
import "./chunk-QPC36KIP.js";
import "./chunk-TXONSSOW.js";
import "./chunk-GC5TIPZA.js";
import "./chunk-HHFW36YX.js";
import "./chunk-GV7BDRSR.js";
import "./chunk-USNZHLNV.js";
import "./chunk-C3FJHTQU.js";
import "./chunk-3L7AA2MQ.js";
import "./chunk-S2JHE4EK.js";
import "./chunk-7UDGGJR5.js";
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
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
