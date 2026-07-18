import {
  UniverActionRecorderPlugin
} from "./chunk-FHYLNVLM.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-PR7ENTYH.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-3DXQRXJF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-UOGHFYE2.js";
import {
  UniverDebuggerPlugin
} from "./chunk-Z5EJZEKY.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3VYWMGDF.js";
import "./chunk-EJSPDCE4.js";
import {
  loadDebuggerLocale
} from "./chunk-5P62HQWY.js";
import "./chunk-WOLL6NEA.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-XSYD26PR.js";
import "./chunk-QGFBYSYZ.js";
import "./chunk-YMWVEMOA.js";
import "./chunk-FVR3T2BW.js";
import "./chunk-FRPQKBYL.js";
import "./chunk-XHUWJPWL.js";
import "./chunk-I5GDLIYL.js";
import "./chunk-XZJWC6FO.js";
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
