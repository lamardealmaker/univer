import {
  UniverActionRecorderPlugin
} from "./chunk-ZP3MC2OM.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-UFJ62QDV.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-4BT55YG6.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-QYPFATEF.js";
import {
  UniverDebuggerPlugin
} from "./chunk-EMOHRUJN.js";
import {
  UniverWatermarkPlugin
} from "./chunk-DSOJ3R45.js";
import "./chunk-EJC2POJT.js";
import {
  loadDebuggerLocale
} from "./chunk-RQJXMRDP.js";
import "./chunk-4L23DBIU.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-TNX55SUN.js";
import "./chunk-QU7FBAMK.js";
import "./chunk-BZH5ARX5.js";
import "./chunk-WEJOILCA.js";
import "./chunk-JX2CEJDP.js";
import "./chunk-JLSCVAQZ.js";
import "./chunk-G7J5JI6Q.js";
import "./chunk-STR5WP3G.js";
import "./chunk-OMOUDXTN.js";
import "./chunk-ZACKK3AL.js";
import "./chunk-HIBANMIM.js";
import "./chunk-TBRD6MYV.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets/very-lazy.ts
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
