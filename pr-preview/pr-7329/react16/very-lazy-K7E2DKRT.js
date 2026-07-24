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
} from "./chunk-HDNS6W35.js";
import {
  UniverWatermarkPlugin
} from "./chunk-7KTPFERY.js";
import "./chunk-YZ4N7B35.js";
import {
  loadDebuggerLocale
} from "./chunk-EZ3WFAMC.js";
import "./chunk-UV5S2NOY.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-VZ24ZHUE.js";
import "./chunk-ZZI2UBQV.js";
import "./chunk-7WQRXCNR.js";
import "./chunk-HCYLXCQ7.js";
import "./chunk-QW62UBVN.js";
import "./chunk-L5BHKJ4J.js";
import "./chunk-6X57MLET.js";
import "./chunk-XYTTYL24.js";
import "./chunk-L7QJLVG7.js";
import "./chunk-SWWNNEEA.js";
import "./chunk-KKQWNXAE.js";
import "./chunk-JD3KJOQJ.js";
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
