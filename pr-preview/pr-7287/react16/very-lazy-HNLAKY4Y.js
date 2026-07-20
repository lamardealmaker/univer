import {
  UniverActionRecorderPlugin
} from "./chunk-YRYN6QXW.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-MSVOTWZF.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-YMH337OL.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-Z43KHFN3.js";
import {
  UniverDebuggerPlugin
} from "./chunk-GLGCPPE7.js";
import {
  UniverWatermarkPlugin
} from "./chunk-RKI3BS7M.js";
import "./chunk-5MNA6C6P.js";
import {
  loadDebuggerLocale
} from "./chunk-6EQUQCP2.js";
import "./chunk-Y2ZKW3ZZ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-LMCZNNAV.js";
import "./chunk-TGKQJ2YD.js";
import "./chunk-4ANS6WEI.js";
import "./chunk-J4UA4L7Q.js";
import "./chunk-BKIR34HR.js";
import "./chunk-5GI44LH7.js";
import "./chunk-GLPPCME6.js";
import "./chunk-2CV4JNOO.js";
import "./chunk-BBOHSEUH.js";
import "./chunk-TDSPDX3L.js";
import "./chunk-CDLFIQUZ.js";
import "./chunk-UOL2OHAA.js";
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
