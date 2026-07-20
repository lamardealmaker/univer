import {
  UniverActionRecorderPlugin
} from "./chunk-DVOTXICQ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-CNHOG7HZ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ZRDTUE6D.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-YOKW3BV6.js";
import {
  UniverDebuggerPlugin
} from "./chunk-XRY66EUB.js";
import {
  UniverWatermarkPlugin
} from "./chunk-JOZWZ4BM.js";
import "./chunk-I3WQT2F6.js";
import {
  loadDebuggerLocale
} from "./chunk-ZDSHKITJ.js";
import "./chunk-5UQR2HFX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-YU67DCST.js";
import "./chunk-PRWGWPE7.js";
import "./chunk-QDGUZT7A.js";
import "./chunk-ACGOQJZI.js";
import "./chunk-3KTUCOBW.js";
import "./chunk-AF66R4M7.js";
import "./chunk-B5PLQ7ZK.js";
import "./chunk-OXIT4FXR.js";
import "./chunk-C3FJHTQU.js";
import "./chunk-3L7AA2MQ.js";
import "./chunk-S2JHE4EK.js";
import "./chunk-7UDGGJR5.js";
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
