import {
  UniverActionRecorderPlugin
} from "./chunk-DGBEOFNB.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-NG5AOQVK.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-V5KPGOJM.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SMEL5Z7P.js";
import {
  UniverDebuggerPlugin
} from "./chunk-B47YWALV.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3VYWMGDF.js";
import "./chunk-KY2HAXYK.js";
import {
  loadDebuggerLocale
} from "./chunk-X5DD7NCO.js";
import "./chunk-3LMQJO26.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-A46657O2.js";
import "./chunk-QGZQGIZ2.js";
import "./chunk-RLVTVZZU.js";
import "./chunk-AVVY4FL4.js";
import "./chunk-VAMRQPL7.js";
import "./chunk-VTI6APCV.js";
import "./chunk-QX73NBUB.js";
import "./chunk-IQMWKPZP.js";
import "./chunk-E5XWEU65.js";
import "./chunk-TI6U6U6U.js";
import "./chunk-E6DJCDTN.js";
import "./chunk-FD3JZH6D.js";
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
