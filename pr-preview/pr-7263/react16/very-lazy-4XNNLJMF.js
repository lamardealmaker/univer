import {
  UniverActionRecorderPlugin
} from "./chunk-GQHLHKO6.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-5OI6KGAA.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-WXYEJTAP.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-VPMKP44P.js";
import {
  UniverDebuggerPlugin
} from "./chunk-RBR4HO3A.js";
import {
  UniverWatermarkPlugin
} from "./chunk-GN326NVW.js";
import "./chunk-DS6OYZM7.js";
import {
  loadDebuggerLocale
} from "./chunk-ICQNTAZF.js";
import "./chunk-4TJHFV5L.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-B6WJFSEF.js";
import "./chunk-HHW53KEB.js";
import "./chunk-HQTDXEAO.js";
import "./chunk-RJDF4YWH.js";
import "./chunk-E2GJZ76B.js";
import "./chunk-EHROH7XB.js";
import "./chunk-UWN2KQGM.js";
import "./chunk-DV6SGVPN.js";
import "./chunk-PUCENP4Z.js";
import "./chunk-U3HPYX3U.js";
import "./chunk-FGPXQBRL.js";
import "./chunk-RRAAZ522.js";
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
