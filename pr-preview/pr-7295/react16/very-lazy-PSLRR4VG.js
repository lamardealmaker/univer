import {
  UniverActionRecorderPlugin
} from "./chunk-IYKUIOYK.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-27HSQ3IV.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-4Y7FWLBP.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-LPYF5D3P.js";
import {
  UniverDebuggerPlugin
} from "./chunk-DTFK55VT.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3VYWMGDF.js";
import "./chunk-NVGKV4QU.js";
import {
  loadDebuggerLocale
} from "./chunk-AEQA7HGJ.js";
import "./chunk-4XO72TYX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-KJZTQJJI.js";
import "./chunk-QGFBYSYZ.js";
import "./chunk-VHL45KXN.js";
import "./chunk-IFHZOFXD.js";
import "./chunk-ZQXTXLAM.js";
import "./chunk-XZLDA7KU.js";
import "./chunk-OT2A7JJT.js";
import "./chunk-N3TFKLQB.js";
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
