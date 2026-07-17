import {
  UniverActionRecorderPlugin
} from "./chunk-26J6WAA4.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-OTJQPQX4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-YXCVP4HN.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-3RHSHWMQ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-4JRO73KD.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JY6ERGMQ.js";
import "./chunk-UC37NWPI.js";
import {
  loadDebuggerLocale
} from "./chunk-67WVEPC5.js";
import "./chunk-XGM4L36K.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-CKB3PHQ5.js";
import "./chunk-TLWPZ2NA.js";
import "./chunk-RRM46BNB.js";
import "./chunk-3GQFV2LS.js";
import "./chunk-76NPPZRE.js";
import "./chunk-7WJRNT6B.js";
import "./chunk-5BR3VP6J.js";
import "./chunk-VCS4X2P7.js";
import "./chunk-BVZP7GFD.js";
import "./chunk-FKTMHZJQ.js";
import "./chunk-DGF75S3T.js";
import "./chunk-APFVPCK4.js";
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
