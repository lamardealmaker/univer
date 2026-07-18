import {
  UniverActionRecorderPlugin
} from "./chunk-UKHTOEKI.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-OXZBB4QT.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-FPHIM5HC.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-32YZVFGG.js";
import {
  UniverDebuggerPlugin
} from "./chunk-CJ4GL44Q.js";
import {
  UniverWatermarkPlugin
} from "./chunk-S37A22CF.js";
import "./chunk-Y355RZLY.js";
import {
  loadDebuggerLocale
} from "./chunk-CBXCVNM7.js";
import "./chunk-MOLDK3VM.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-KI5CT7T4.js";
import "./chunk-ZTLYHSRM.js";
import "./chunk-YNBDU5X4.js";
import "./chunk-JSQU4NND.js";
import "./chunk-W5UJVDJW.js";
import "./chunk-TOUFNUKR.js";
import "./chunk-JGKDNRCW.js";
import "./chunk-IJ3IXJZK.js";
import "./chunk-3LBADK2S.js";
import "./chunk-JHNQBJPZ.js";
import "./chunk-ALOYUQOY.js";
import "./chunk-KDL4XP5H.js";
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
