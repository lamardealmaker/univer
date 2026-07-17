import {
  UniverActionRecorderPlugin
} from "./chunk-GTI4VJR2.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-IWZQHPYX.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-IPPRQXXN.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-TJW3XKCI.js";
import {
  UniverDebuggerPlugin
} from "./chunk-42ACP7CH.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ZQX3JXKJ.js";
import "./chunk-OT2BANYZ.js";
import {
  loadDebuggerLocale
} from "./chunk-GWTHLISD.js";
import "./chunk-FBBMH5LO.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-COB34VZM.js";
import "./chunk-QYD3IDR3.js";
import "./chunk-IOIJEPSD.js";
import "./chunk-AJCGR6FF.js";
import "./chunk-7IAGYJ7F.js";
import "./chunk-VTS6GCC7.js";
import "./chunk-WECBJNMR.js";
import "./chunk-4S6YNTII.js";
import "./chunk-N4MCUC7X.js";
import "./chunk-7SCTSQ5Z.js";
import "./chunk-ZB2EG2DN.js";
import "./chunk-V2SQB4ZF.js";
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
