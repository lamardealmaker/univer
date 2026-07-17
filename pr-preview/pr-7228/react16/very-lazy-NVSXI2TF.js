import {
  UniverActionRecorderPlugin
} from "./chunk-L672L5PC.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-T4WSFZYB.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-QUNVNK7V.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SATQOTSI.js";
import {
  UniverDebuggerPlugin
} from "./chunk-5XBU55XJ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2GZU5HIB.js";
import "./chunk-KE2SZNZO.js";
import {
  loadDebuggerLocale
} from "./chunk-SELFOS3I.js";
import "./chunk-Q5F4Y3Q2.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-Q7QDLFWP.js";
import "./chunk-QNCILETD.js";
import "./chunk-VUGOXGHN.js";
import "./chunk-QHFWHD2E.js";
import "./chunk-GRDSFKNG.js";
import "./chunk-6GQHUJPJ.js";
import "./chunk-DVBRAQ4D.js";
import "./chunk-EHRDOIXG.js";
import "./chunk-2OFXGP3A.js";
import "./chunk-MCZBJK6L.js";
import "./chunk-Q3HG77NM.js";
import "./chunk-M2MWB6U2.js";
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
