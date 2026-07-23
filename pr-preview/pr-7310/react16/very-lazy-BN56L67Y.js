import {
  UniverActionRecorderPlugin
} from "./chunk-XYPET6SD.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-JV56K23S.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-KKSGQA6P.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-LGK6YRRD.js";
import {
  UniverDebuggerPlugin
} from "./chunk-VR7GZJYB.js";
import {
  UniverWatermarkPlugin
} from "./chunk-TMFDKMIG.js";
import "./chunk-ZHNX7ZVG.js";
import {
  loadDebuggerLocale
} from "./chunk-DMUQRR33.js";
import "./chunk-4C7KQKYZ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-VVWHRFZN.js";
import "./chunk-IHRYRAGV.js";
import "./chunk-JBL2WFD7.js";
import "./chunk-D7UM4Y4X.js";
import "./chunk-4QC57VYZ.js";
import "./chunk-IPMBU7QA.js";
import "./chunk-XEUCBHET.js";
import "./chunk-625XF3RN.js";
import "./chunk-4HRHY67D.js";
import "./chunk-3T2J7QKX.js";
import "./chunk-BPQHTQJ4.js";
import "./chunk-SAVY66LP.js";
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
  }
  return plugins;
}
export {
  getVeryLazyPlugins as default
};
