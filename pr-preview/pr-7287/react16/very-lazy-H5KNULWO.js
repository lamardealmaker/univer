import {
  UniverActionRecorderPlugin
} from "./chunk-5NELMALL.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-AKDCEDR2.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-CELZIZ7N.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-OCTSHEQA.js";
import {
  UniverDebuggerPlugin
} from "./chunk-FVKDYP6G.js";
import {
  UniverWatermarkPlugin
} from "./chunk-2L5Y5P56.js";
import "./chunk-H4A3ZYZC.js";
import {
  loadDebuggerLocale
} from "./chunk-IFD5CX3O.js";
import "./chunk-DRNCCNCG.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-QMJQOJXQ.js";
import "./chunk-JWT242QM.js";
import "./chunk-CT3NRW2Y.js";
import "./chunk-2FTWYJBI.js";
import "./chunk-WOC376NZ.js";
import "./chunk-DYU5ITRL.js";
import "./chunk-T4UO3ZX3.js";
import "./chunk-FLBWAU7F.js";
import "./chunk-KEXS675W.js";
import "./chunk-4KLRZ754.js";
import "./chunk-JLS66HNK.js";
import "./chunk-2TEKAXEL.js";
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
