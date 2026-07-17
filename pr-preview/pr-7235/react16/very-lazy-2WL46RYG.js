import {
  UniverActionRecorderPlugin
} from "./chunk-XDKQKSGH.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-OSTHJTJB.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-6CQUPK3B.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-6PR66E4C.js";
import {
  UniverDebuggerPlugin
} from "./chunk-RGEH7WD3.js";
import {
  UniverWatermarkPlugin
} from "./chunk-FUD5S5QA.js";
import "./chunk-QAVMF3BN.js";
import {
  loadDebuggerLocale
} from "./chunk-CXU3SQBS.js";
import "./chunk-3OETGUOU.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-SWHDWTA2.js";
import "./chunk-WBF63BZZ.js";
import "./chunk-ZENWD3RL.js";
import "./chunk-WM2NHLMK.js";
import "./chunk-2Q7LXA3Q.js";
import "./chunk-JE4OBOGU.js";
import "./chunk-T67UMXJD.js";
import "./chunk-LJWJTURH.js";
import "./chunk-MRAU7DSD.js";
import "./chunk-AJHNJVEY.js";
import "./chunk-PALYGNIK.js";
import "./chunk-SBUQW7IY.js";
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
