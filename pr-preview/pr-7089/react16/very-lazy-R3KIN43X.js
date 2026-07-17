import {
  UniverActionRecorderPlugin
} from "./chunk-JRXZX7AT.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-UJGITABR.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-45QIFBM6.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-6244CFB6.js";
import {
  UniverDebuggerPlugin
} from "./chunk-JYLGTDBP.js";
import {
  UniverWatermarkPlugin
} from "./chunk-NOLI233N.js";
import "./chunk-2OVD2USU.js";
import {
  loadDebuggerLocale
} from "./chunk-NFSMWVW7.js";
import "./chunk-DLJRCYJE.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-4BJIOKDU.js";
import "./chunk-XBJYBWPF.js";
import "./chunk-3LHD5PNH.js";
import "./chunk-VKBHAS4H.js";
import "./chunk-4DQL7YD4.js";
import "./chunk-OT7B7OE4.js";
import "./chunk-OW4T4RYF.js";
import "./chunk-6WYNQIA3.js";
import "./chunk-URSPW5KK.js";
import "./chunk-D56GOLKC.js";
import "./chunk-LPTHD3KJ.js";
import "./chunk-BCDUMSPY.js";
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
