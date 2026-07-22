import {
  UniverActionRecorderPlugin
} from "./chunk-OFSIALC4.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-MB43L4ZN.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-KEZR5HAL.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-THQLQ7ZY.js";
import {
  UniverDebuggerPlugin
} from "./chunk-SKTS44VG.js";
import {
  UniverWatermarkPlugin
} from "./chunk-BZ2QPXPM.js";
import "./chunk-BFQF3HPV.js";
import {
  loadDebuggerLocale
} from "./chunk-GS5EJQL7.js";
import "./chunk-OD6RBLDX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-7G26QZSM.js";
import "./chunk-HOT5SNCA.js";
import "./chunk-2KAUVM2E.js";
import "./chunk-V63XZ5XN.js";
import "./chunk-KS6WXDEM.js";
import "./chunk-NCPGOBBL.js";
import "./chunk-BEQH3R6D.js";
import "./chunk-4CX7GQL6.js";
import "./chunk-XRZRRLSI.js";
import "./chunk-OMRVEMWW.js";
import "./chunk-62P57WM5.js";
import "./chunk-6QPW3C4R.js";
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
