import {
  UniverActionRecorderPlugin
} from "./chunk-VPW75VQS.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-KDEYGIWS.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-DL2VTQVX.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-L4OBBL4R.js";
import {
  UniverDebuggerPlugin
} from "./chunk-AMRI2HJQ.js";
import {
  UniverWatermarkPlugin
} from "./chunk-Z666CLDT.js";
import "./chunk-E52IRQ5F.js";
import {
  loadDebuggerLocale
} from "./chunk-C4ZBMQOC.js";
import "./chunk-RKJFB6P3.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-4VFIRBZG.js";
import "./chunk-LWA22SRD.js";
import "./chunk-LIILBURA.js";
import "./chunk-J4UA2YWF.js";
import "./chunk-GGRT3HJ6.js";
import "./chunk-JCLKBUN7.js";
import "./chunk-2NOALENK.js";
import "./chunk-KGQPEUSI.js";
import "./chunk-J4SJ2JVM.js";
import "./chunk-HWBBMCPW.js";
import "./chunk-2ZHNGVC5.js";
import "./chunk-6Z6YV3AU.js";
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
