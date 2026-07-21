import {
  UniverActionRecorderPlugin
} from "./chunk-6OOLAACB.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-T3MI5V2M.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OXBI2SF2.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-2LRLDFQO.js";
import {
  UniverDebuggerPlugin
} from "./chunk-EUKHI4MZ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JOZWZ4BM.js";
import "./chunk-BHSRXA5N.js";
import {
  loadDebuggerLocale
} from "./chunk-ZT2LWEMD.js";
import "./chunk-7O7JON3Y.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-QBQGR3T3.js";
import "./chunk-PRWGWPE7.js";
import "./chunk-A4CGI55K.js";
import "./chunk-Q3OLG6W5.js";
import "./chunk-RLLRRRGG.js";
import "./chunk-RR7Q7XGK.js";
import "./chunk-GPIGWJPB.js";
import "./chunk-VEOKQKQZ.js";
import "./chunk-C3FJHTQU.js";
import "./chunk-3L7AA2MQ.js";
import "./chunk-S2JHE4EK.js";
import "./chunk-7UDGGJR5.js";
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
