import {
  UniverActionRecorderPlugin
} from "./chunk-HS7OWNWP.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-PTVVP3J3.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OTC4GZ47.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-TPDUN34E.js";
import {
  UniverDebuggerPlugin
} from "./chunk-USQYZGSV.js";
import {
  UniverWatermarkPlugin
} from "./chunk-YBZPRJZX.js";
import "./chunk-A76BK7ZL.js";
import {
  loadDebuggerLocale
} from "./chunk-CX5NXXAO.js";
import "./chunk-BPQPEARQ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-KFX6SJSW.js";
import "./chunk-DUVAEDV5.js";
import "./chunk-GBY6LQAF.js";
import "./chunk-WIWZSY3O.js";
import "./chunk-253HEH7Q.js";
import "./chunk-AHHRULAS.js";
import "./chunk-KKSIKDPM.js";
import "./chunk-7V2XEAWA.js";
import "./chunk-G2ZW2BDM.js";
import "./chunk-47MGLYD5.js";
import "./chunk-PW5H4QGM.js";
import "./chunk-UEDAY4IO.js";
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
