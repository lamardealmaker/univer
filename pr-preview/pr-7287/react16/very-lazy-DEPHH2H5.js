import {
  UniverActionRecorderPlugin
} from "./chunk-O5CZKETZ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-EUWBSDQG.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-5DE4P2UK.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-GIQW4UER.js";
import {
  UniverDebuggerPlugin
} from "./chunk-O2WKACFW.js";
import {
  UniverWatermarkPlugin
} from "./chunk-HMBAOH5F.js";
import "./chunk-Q2XUIPLH.js";
import {
  loadDebuggerLocale
} from "./chunk-VLXEOR6U.js";
import "./chunk-EWBYDSVK.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-6TRHWJNM.js";
import "./chunk-ILX2LUHI.js";
import "./chunk-N65GP37L.js";
import "./chunk-377V3BBM.js";
import "./chunk-GJLVDVVC.js";
import "./chunk-UVHCGEQY.js";
import "./chunk-OLNDOXYK.js";
import "./chunk-UI3JDZLA.js";
import "./chunk-IUA5HQYE.js";
import "./chunk-POGZILZG.js";
import "./chunk-Z4GVOVAB.js";
import "./chunk-3PCLVKGS.js";
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
