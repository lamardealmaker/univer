import {
  UniverActionRecorderPlugin
} from "./chunk-KYB4AJG2.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-GSWEWIJ4.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-FLLSO4W7.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-6VNBIIL2.js";
import {
  UniverDebuggerPlugin
} from "./chunk-4TNAJIZR.js";
import {
  UniverWatermarkPlugin
} from "./chunk-NMCCDXDM.js";
import "./chunk-N7VXNTYW.js";
import {
  loadDebuggerLocale
} from "./chunk-UZMIA3ZM.js";
import "./chunk-PUG6ZFBK.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-JUYLX247.js";
import "./chunk-6V4PZWJR.js";
import "./chunk-4K2AEDE2.js";
import "./chunk-7LYNUWZC.js";
import "./chunk-R6L53KVG.js";
import "./chunk-ZW6ILKPP.js";
import "./chunk-FHUBYM4F.js";
import "./chunk-JR6K7VYA.js";
import "./chunk-RJZLV6EI.js";
import "./chunk-BYQPA3KP.js";
import "./chunk-OGAOIOI3.js";
import "./chunk-K5ELNLYF.js";
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
