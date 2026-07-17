import {
  UniverActionRecorderPlugin
} from "./chunk-KKEHOXHS.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-5GP5ISA7.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-BM43V3OA.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-VENZACBT.js";
import {
  UniverDebuggerPlugin
} from "./chunk-N3BOSGCO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-5LUO53YS.js";
import "./chunk-55UMFYYO.js";
import {
  loadDebuggerLocale
} from "./chunk-TAAVBZ72.js";
import "./chunk-SZC5QZIV.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-75PA6RME.js";
import "./chunk-IVZBQVQ4.js";
import "./chunk-EA5XJEOX.js";
import "./chunk-GDLQKIFN.js";
import "./chunk-VCITGCDQ.js";
import "./chunk-4OO4Y65L.js";
import "./chunk-TGV5SZHH.js";
import "./chunk-RR34ERDM.js";
import "./chunk-7ZGN2HKJ.js";
import "./chunk-FGYNDRR7.js";
import "./chunk-THSFYI7A.js";
import "./chunk-L2YDHVS3.js";
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
