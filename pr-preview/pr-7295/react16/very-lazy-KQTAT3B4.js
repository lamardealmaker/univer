import {
  UniverActionRecorderPlugin
} from "./chunk-NBS3JAMQ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-4V3COVLF.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ZCMLVGHZ.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-XOWX7UMZ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-Z77CTAUB.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3VYWMGDF.js";
import "./chunk-ZAUJO4VF.js";
import {
  loadDebuggerLocale
} from "./chunk-6QWBIRYQ.js";
import "./chunk-NR33WJUS.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-75INGLUY.js";
import "./chunk-QGFBYSYZ.js";
import "./chunk-5HWRN3J7.js";
import "./chunk-EVUV6CJL.js";
import "./chunk-NZQRU55Q.js";
import "./chunk-4FEUQSM7.js";
import "./chunk-UAOUR7EN.js";
import "./chunk-Q24UB5PW.js";
import "./chunk-SKO3JANX.js";
import "./chunk-N7S5VYEO.js";
import "./chunk-Z4IK4AV3.js";
import "./chunk-FD3JZH6D.js";
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
