import {
  UniverActionRecorderPlugin
} from "./chunk-YRPN2M2Y.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-WTFGW7C5.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-2V52KXOV.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-JHTQYZOT.js";
import {
  UniverDebuggerPlugin
} from "./chunk-D3P3MPIQ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-OVCFMYMG.js";
import "./chunk-3NNFS3M7.js";
import {
  loadDebuggerLocale
} from "./chunk-IQNCGZA2.js";
import "./chunk-BU2IDZJI.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ZHRIRNPC.js";
import "./chunk-IML2UZU3.js";
import "./chunk-EHRAJES3.js";
import "./chunk-SP4ESVGI.js";
import "./chunk-VR5LMJTG.js";
import "./chunk-35YA4EBZ.js";
import "./chunk-OLWLRXHV.js";
import "./chunk-RR54J243.js";
import "./chunk-DQIYATOD.js";
import "./chunk-ZAFX2KIK.js";
import "./chunk-OP5GA72W.js";
import "./chunk-CQ7Q36VO.js";
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
