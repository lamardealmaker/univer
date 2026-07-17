import {
  UniverActionRecorderPlugin
} from "./chunk-MFM7HQKG.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-PTWNSQYX.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-3CVHMJDX.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-VJRYBBTG.js";
import {
  UniverDebuggerPlugin
} from "./chunk-3XD4YC7K.js";
import {
  UniverWatermarkPlugin
} from "./chunk-3YVRHPH7.js";
import "./chunk-DLXG5P5P.js";
import {
  loadDebuggerLocale
} from "./chunk-Z43WFFXW.js";
import "./chunk-TAYDO4L5.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-4NUI6NYT.js";
import "./chunk-VYOLSOVH.js";
import "./chunk-MJ5OYCOS.js";
import "./chunk-PT3A6ZRJ.js";
import "./chunk-LODJHY2U.js";
import "./chunk-TA533AUM.js";
import "./chunk-QSGH4I64.js";
import "./chunk-UEB57LIN.js";
import "./chunk-GZDWINUC.js";
import "./chunk-CJ6CRLJA.js";
import "./chunk-UFHBHMJG.js";
import "./chunk-AE3R7DH2.js";
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
