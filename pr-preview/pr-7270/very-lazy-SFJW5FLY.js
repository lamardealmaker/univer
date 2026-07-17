import {
  UniverActionRecorderPlugin
} from "./chunk-EUDESTFC.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-Y3DILMPJ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ABAFB27S.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-EN2W2SIQ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-OQGL2LJW.js";
import {
  UniverWatermarkPlugin
} from "./chunk-CFJ2HLZ3.js";
import "./chunk-55OVLL7E.js";
import {
  loadDebuggerLocale
} from "./chunk-HGXWW44N.js";
import "./chunk-TJBWAVBF.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-NW3J2ZAQ.js";
import "./chunk-5RAVYVE7.js";
import "./chunk-SCZNWHG3.js";
import "./chunk-ZN57JV22.js";
import "./chunk-6XHHIWPX.js";
import "./chunk-UICQ6I7F.js";
import "./chunk-QEEZAS5D.js";
import "./chunk-CXKDTK37.js";
import "./chunk-NSTTH4CN.js";
import "./chunk-RBYPFHCX.js";
import "./chunk-IOSPCB23.js";
import "./chunk-EYIJFNJM.js";
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
