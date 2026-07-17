import {
  UniverActionRecorderPlugin
} from "./chunk-IIZ744GB.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-IJDGFTAD.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-DMEHONQ4.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SOWM3PSE.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ETTDAPW5.js";
import {
  UniverWatermarkPlugin
} from "./chunk-YZDFCOMY.js";
import "./chunk-4KL24O2R.js";
import {
  loadDebuggerLocale
} from "./chunk-II6IZGLH.js";
import "./chunk-4LKHWZU5.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ZU6R2DLO.js";
import "./chunk-ZXCF2ITU.js";
import "./chunk-R4LDZ63N.js";
import "./chunk-6FWJQAIA.js";
import "./chunk-UAA6KEXQ.js";
import "./chunk-2H4OG5YB.js";
import "./chunk-TTERHTD7.js";
import "./chunk-NDOVT6LF.js";
import "./chunk-APCJKRSX.js";
import "./chunk-V52KZQ22.js";
import "./chunk-VTGKT7HG.js";
import "./chunk-B5BSMKXI.js";
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
