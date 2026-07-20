import {
  UniverActionRecorderPlugin
} from "./chunk-Z2IS3OSK.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-62IWJYJL.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-LB65PRAR.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-HZVPWOPR.js";
import {
  UniverDebuggerPlugin
} from "./chunk-HPAJKBIO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3VYWMGDF.js";
import "./chunk-AREWIEUB.js";
import {
  loadDebuggerLocale
} from "./chunk-VYCYHXCJ.js";
import "./chunk-B24FC4JF.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-LUNSNCZM.js";
import "./chunk-QGFBYSYZ.js";
import "./chunk-MHKMSJCT.js";
import "./chunk-VV2M4XBG.js";
import "./chunk-A3QGOWU7.js";
import "./chunk-64XE5JND.js";
import "./chunk-NJUCPULC.js";
import "./chunk-MQT4NK3P.js";
import "./chunk-SKO3JANX.js";
import "./chunk-N7S5VYEO.js";
import "./chunk-Z4IK4AV3.js";
import "./chunk-FD3JZH6D.js";
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
