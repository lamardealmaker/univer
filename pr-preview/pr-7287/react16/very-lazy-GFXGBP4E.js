import {
  UniverActionRecorderPlugin
} from "./chunk-CKW5CSKA.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-ABYKJ3SD.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-JTS3APP5.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-EMD2FMAI.js";
import {
  UniverDebuggerPlugin
} from "./chunk-A7LXL2D7.js";
import {
  UniverWatermarkPlugin
} from "./chunk-T7EHYEZA.js";
import "./chunk-P5MBUWV4.js";
import {
  loadDebuggerLocale
} from "./chunk-7O5UXBQD.js";
import "./chunk-NSCR7O4G.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-6J3DMEHY.js";
import "./chunk-H6QXK5AJ.js";
import "./chunk-GXWYHDOM.js";
import "./chunk-2FP7O2U6.js";
import "./chunk-BIZNHCRU.js";
import "./chunk-7FIJQL3C.js";
import "./chunk-QFEKDUAF.js";
import "./chunk-2LDOLTZK.js";
import "./chunk-APONP5I3.js";
import "./chunk-DYS3SBAV.js";
import "./chunk-TDM22U6Q.js";
import "./chunk-IIRVF2HV.js";
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
