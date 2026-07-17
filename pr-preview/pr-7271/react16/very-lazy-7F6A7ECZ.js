import {
  UniverActionRecorderPlugin
} from "./chunk-YUZXEUHF.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-WYDNBZ5R.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-BSL4WAD4.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-75NPFAQQ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-4PQWCPNG.js";
import {
  UniverWatermarkPlugin
} from "./chunk-KABAHNNQ.js";
import "./chunk-SESMBVBQ.js";
import {
  loadDebuggerLocale
} from "./chunk-IMFUVKXP.js";
import "./chunk-RLFV7IGZ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-VWNC5D6S.js";
import "./chunk-ZIINSQ7M.js";
import "./chunk-M6YB4FOQ.js";
import "./chunk-ZXSS252V.js";
import "./chunk-MJISJWUU.js";
import "./chunk-3SEI2WAI.js";
import "./chunk-FKIS4BWF.js";
import "./chunk-CL3B2JWT.js";
import "./chunk-UEPGKXGM.js";
import "./chunk-AZVAWBBB.js";
import "./chunk-GAGIXZW5.js";
import "./chunk-STB3OOUD.js";
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
