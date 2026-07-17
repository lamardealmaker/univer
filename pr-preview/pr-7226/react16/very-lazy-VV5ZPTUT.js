import {
  UniverActionRecorderPlugin
} from "./chunk-VZAPZ3T7.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-5SGDZAZI.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GHLKDUFF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-UW4TUEXL.js";
import {
  UniverDebuggerPlugin
} from "./chunk-I665GP7N.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2GZU5HIB.js";
import "./chunk-M2P347PG.js";
import {
  loadDebuggerLocale
} from "./chunk-ITLA2DS7.js";
import "./chunk-YEGB5GOU.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-NVZXT2U6.js";
import "./chunk-QNCILETD.js";
import "./chunk-ASBJMGCQ.js";
import "./chunk-XXLJYHU4.js";
import "./chunk-VWEN55CD.js";
import "./chunk-GNDOLAJ7.js";
import "./chunk-DDRE5RJY.js";
import "./chunk-3BM76LJM.js";
import "./chunk-2OFXGP3A.js";
import "./chunk-MCZBJK6L.js";
import "./chunk-Q3HG77NM.js";
import "./chunk-M2MWB6U2.js";
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
