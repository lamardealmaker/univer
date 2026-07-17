import {
  UniverActionRecorderPlugin
} from "./chunk-YWPND75E.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-5OJRCUD6.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-R5QWCF2N.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ISXOUE65.js";
import {
  UniverDebuggerPlugin
} from "./chunk-T42SOBRW.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ZXDJSSHB.js";
import "./chunk-E4TQBIRB.js";
import {
  loadDebuggerLocale
} from "./chunk-6QH6TSED.js";
import "./chunk-MYIK6ZKX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-THTNDZWK.js";
import "./chunk-5PNUBHZC.js";
import "./chunk-MVWKHD6A.js";
import "./chunk-52FGCKD6.js";
import "./chunk-GVSNZEWZ.js";
import "./chunk-ZFUVZZV4.js";
import "./chunk-AXY444OX.js";
import "./chunk-MVZAHYFO.js";
import "./chunk-I7VZJZMU.js";
import "./chunk-PCUUUZAN.js";
import "./chunk-IQR62XS7.js";
import "./chunk-2CS7RBBN.js";
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
