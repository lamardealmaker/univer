import {
  UniverActionRecorderPlugin
} from "./chunk-P7UCE6FU.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-WXVXVJEC.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-UF6W6RDN.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-IVWGSPWG.js";
import {
  UniverDebuggerPlugin
} from "./chunk-W52NYJET.js";
import {
  UniverWatermarkPlugin
} from "./chunk-HYGM3LYO.js";
import "./chunk-V25X7RUI.js";
import {
  loadDebuggerLocale
} from "./chunk-QGNWH3AL.js";
import "./chunk-QLPNPLDU.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-NTO3FRZ6.js";
import "./chunk-2YWOGR4N.js";
import "./chunk-XKQJW7PG.js";
import "./chunk-UHZPTQ3S.js";
import "./chunk-YVPRA6TP.js";
import "./chunk-TCS5DXJ7.js";
import "./chunk-UQUTRHPU.js";
import "./chunk-KU2XUV44.js";
import "./chunk-4FGQMKJL.js";
import "./chunk-7UDFNS2Y.js";
import "./chunk-4DYEZKTR.js";
import "./chunk-JSXMCQAF.js";
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
