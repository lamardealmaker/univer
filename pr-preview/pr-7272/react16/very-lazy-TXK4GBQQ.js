import {
  UniverActionRecorderPlugin
} from "./chunk-GYIOWXPG.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-YXQN4QO5.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-KKNCZSCM.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-PL2BHKCL.js";
import {
  UniverDebuggerPlugin
} from "./chunk-Q5CIDUZN.js";
import {
  UniverWatermarkPlugin
} from "./chunk-KABAHNNQ.js";
import "./chunk-JERDD57L.js";
import {
  loadDebuggerLocale
} from "./chunk-TZMJLZJG.js";
import "./chunk-RLFV7IGZ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-FUA2GNUH.js";
import "./chunk-6YJ6DVO7.js";
import "./chunk-M6D7U77W.js";
import "./chunk-TFHZQICT.js";
import "./chunk-MTXYDNTT.js";
import "./chunk-3SEI2WAI.js";
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
