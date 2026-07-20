import {
  UniverActionRecorderPlugin
} from "./chunk-SG5MU6RL.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-6MVHGHY2.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-HRHNNAZG.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-UTWXCY4Q.js";
import {
  UniverDebuggerPlugin
} from "./chunk-DDPMBXSO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3VYWMGDF.js";
import "./chunk-CEOF6PB5.js";
import {
  loadDebuggerLocale
} from "./chunk-X7V6F4W2.js";
import "./chunk-NR33WJUS.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-XAMVJRS3.js";
import "./chunk-QGFBYSYZ.js";
import "./chunk-RJBJA3ZB.js";
import "./chunk-3HKGRMLS.js";
import "./chunk-XEDSWTIW.js";
import "./chunk-4FEUQSM7.js";
import "./chunk-JUFLCNL6.js";
import "./chunk-Q24UB5PW.js";
import "./chunk-SKO3JANX.js";
import "./chunk-N7S5VYEO.js";
import "./chunk-Z4IK4AV3.js";
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
