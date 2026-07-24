import {
  UniverActionRecorderPlugin
} from "./chunk-5MYLJY54.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-YWV4NTUP.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-YXWAVICS.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ELFYHLUL.js";
import {
  UniverDebuggerPlugin
} from "./chunk-D3BDXOSO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Q5KJPGU6.js";
import "./chunk-ZC4SCVDZ.js";
import {
  loadDebuggerLocale
} from "./chunk-GKIQ5GWH.js";
import "./chunk-SXUNVQYN.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-MTPN3FDE.js";
import "./chunk-OUAO32Y6.js";
import "./chunk-G64QXZJY.js";
import "./chunk-VJOPFSNF.js";
import "./chunk-HN6XBBWJ.js";
import "./chunk-TKWFBVT2.js";
import "./chunk-URJDLYLM.js";
import "./chunk-KWSI3CYQ.js";
import "./chunk-DVPFJYEU.js";
import "./chunk-FBTXTQTX.js";
import "./chunk-T3ZF4P6J.js";
import "./chunk-MIK4BD7H.js";
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
