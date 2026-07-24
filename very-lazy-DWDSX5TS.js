import {
  UniverActionRecorderPlugin
} from "./chunk-CZMFIA3U.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-G3DPANEG.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-CLAQUZ7S.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SHH5ORMO.js";
import {
  UniverDebuggerPlugin
} from "./chunk-SWYJP67L.js";
import {
  UniverWatermarkPlugin
} from "./chunk-DBJ5WYJ5.js";
import "./chunk-XMIHXRTA.js";
import {
  loadDebuggerLocale
} from "./chunk-COQ3A3WR.js";
import "./chunk-JX7M23K3.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-E62ISRY7.js";
import "./chunk-TVZ5VKXG.js";
import "./chunk-DCMZMYG3.js";
import "./chunk-EC5SJWCG.js";
import "./chunk-GQSEG75L.js";
import "./chunk-W6GY7QZO.js";
import "./chunk-LVZALIE5.js";
import "./chunk-GAR7NJMN.js";
import "./chunk-2PZVU6UA.js";
import "./chunk-DPZUWCWC.js";
import "./chunk-X3HPZGMT.js";
import "./chunk-RLTCIETE.js";
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
