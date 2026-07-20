import {
  UniverActionRecorderPlugin
} from "./chunk-4NZ446QV.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-PVHWTSI5.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-BUTK7ORK.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-NLLKPE7T.js";
import {
  UniverDebuggerPlugin
} from "./chunk-ZZQW26FW.js";
import {
  UniverWatermarkPlugin
} from "./chunk-SXJ7DER7.js";
import "./chunk-3EPZEXMY.js";
import {
  loadDebuggerLocale
} from "./chunk-2RXPX2SH.js";
import "./chunk-G766MR7I.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-GP64PMHW.js";
import "./chunk-NYVKN5WT.js";
import "./chunk-GBHXLN3S.js";
import "./chunk-A4MVUHOM.js";
import "./chunk-RX3KVBNS.js";
import "./chunk-G5LZZDCW.js";
import "./chunk-OOPSYHJ4.js";
import "./chunk-QR4IXNRE.js";
import "./chunk-EL2MA4WM.js";
import "./chunk-JYVQTEKH.js";
import "./chunk-CSXRQ456.js";
import "./chunk-EIUQN72C.js";
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
