import {
  UniverActionRecorderPlugin
} from "./chunk-SG5D2MM4.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-J7I5LXEN.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OKABXPZD.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-NAFVM2J5.js";
import {
  UniverDebuggerPlugin
} from "./chunk-5B4T4JUL.js";
import {
  UniverWatermarkPlugin
} from "./chunk-7KTPFERY.js";
import "./chunk-J73FLJOH.js";
import {
  loadDebuggerLocale
} from "./chunk-EZ3WFAMC.js";
import "./chunk-UV5S2NOY.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-VZ24ZHUE.js";
import "./chunk-ZZI2UBQV.js";
import "./chunk-7WQRXCNR.js";
import "./chunk-OQWO2XHG.js";
import "./chunk-QW62UBVN.js";
import "./chunk-SSGJVDJE.js";
import "./chunk-6X57MLET.js";
import "./chunk-XYTTYL24.js";
import "./chunk-L7QJLVG7.js";
import "./chunk-SWWNNEEA.js";
import "./chunk-KKQWNXAE.js";
import "./chunk-JD3KJOQJ.js";
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
