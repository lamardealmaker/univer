import {
  UniverActionRecorderPlugin
} from "./chunk-5AIFFOFJ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-6KUUYGLZ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-ESOSH4HM.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-GV4C2Q24.js";
import {
  UniverDebuggerPlugin
} from "./chunk-LTTR6PN4.js";
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
} from "./chunk-DDKN6FED.js";
import "./chunk-WBF63BZZ.js";
import "./chunk-3F7B55ZW.js";
import "./chunk-T7OQEU2S.js";
import "./chunk-3ZCCSKSD.js";
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
