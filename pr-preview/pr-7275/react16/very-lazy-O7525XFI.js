import {
  UniverActionRecorderPlugin
} from "./chunk-5LYO5QII.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-V7DKAW36.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-2NY2MVUF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-QNCWB5UA.js";
import {
  UniverDebuggerPlugin
} from "./chunk-KDKZFORT.js";
import {
  UniverWatermarkPlugin
} from "./chunk-KABAHNNQ.js";
import "./chunk-KWWN2IMZ.js";
import {
  loadDebuggerLocale
} from "./chunk-TZMJLZJG.js";
import "./chunk-RLFV7IGZ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-Q7EXQUBK.js";
import "./chunk-6YJ6DVO7.js";
import "./chunk-XL2Z5LQD.js";
import "./chunk-Y255HRBH.js";
import "./chunk-4HXKLS73.js";
import "./chunk-3APMRQNE.js";
import "./chunk-5WO5ODMW.js";
import "./chunk-CL3B2JWT.js";
import "./chunk-ZCI2FDXL.js";
import "./chunk-KVAY7V76.js";
import "./chunk-Z3BH4FVF.js";
import "./chunk-STB3OOUD.js";
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
