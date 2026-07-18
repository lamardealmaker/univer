import {
  UniverActionRecorderPlugin
} from "./chunk-4OWGRINR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-ARVSHVT4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-2LJQEOHF.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-VINJ5THP.js";
import {
  UniverDebuggerPlugin
} from "./chunk-FF4PSFIN.js";
import {
  UniverWatermarkPlugin
} from "./chunk-S37A22CF.js";
import "./chunk-5ZWQ3JU4.js";
import {
  loadDebuggerLocale
} from "./chunk-IZ5KQSYM.js";
import "./chunk-XPCXPRTU.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-TOMOOGFZ.js";
import "./chunk-KVLBQ45J.js";
import "./chunk-EEQXJFHT.js";
import "./chunk-J2PEVNYA.js";
import "./chunk-LVYBOB7R.js";
import "./chunk-PZEGEJ3B.js";
import "./chunk-ZX25COXL.js";
import "./chunk-ZDWV6DZP.js";
import "./chunk-F6HYNG7A.js";
import "./chunk-KOL7QAKS.js";
import "./chunk-VPYMURTI.js";
import "./chunk-KDL4XP5H.js";
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
