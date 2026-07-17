import {
  UniverActionRecorderPlugin
} from "./chunk-CGH44QFV.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-E6NUOOPS.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-LUA633G4.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-VNMYAQTS.js";
import {
  UniverDebuggerPlugin
} from "./chunk-FNOUPBS6.js";
import {
  UniverWatermarkPlugin
} from "./chunk-C2QZAUJL.js";
import "./chunk-2SEAN3UP.js";
import {
  loadDebuggerLocale
} from "./chunk-YWIGRTDJ.js";
import "./chunk-ZLDNRMZ5.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-BDRUAMNY.js";
import "./chunk-INYOQ74Z.js";
import "./chunk-B4EGCEYD.js";
import "./chunk-C5QTTVBO.js";
import "./chunk-N46QPJFB.js";
import "./chunk-TCDTP3ZT.js";
import "./chunk-VR6ZIYZ6.js";
import "./chunk-AY63UQCZ.js";
import "./chunk-F4VJL6FP.js";
import "./chunk-NSFKJQN7.js";
import "./chunk-X6CE6G36.js";
import "./chunk-SEOZDTQ5.js";
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
