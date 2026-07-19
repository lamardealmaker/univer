import {
  UniverActionRecorderPlugin
} from "./chunk-RBQOI6EG.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-UNVO6SFX.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-SR4OAAGK.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-ZJFV33CI.js";
import {
  UniverDebuggerPlugin
} from "./chunk-4GIRV5UN.js";
import {
  UniverWatermarkPlugin
} from "./chunk-W5UHK77D.js";
import "./chunk-6LQQTHPJ.js";
import {
  loadDebuggerLocale
} from "./chunk-YW4SQCWM.js";
import "./chunk-LX7LNAEK.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-UHH5ANH6.js";
import "./chunk-H4PZB2JA.js";
import "./chunk-VJYXYJC4.js";
import "./chunk-XC7VZYVD.js";
import "./chunk-BMXSIPEW.js";
import "./chunk-WWXZNS2Y.js";
import "./chunk-ZFXRHBTR.js";
import "./chunk-O5REJQTM.js";
import "./chunk-IGTAP655.js";
import "./chunk-IM332U3Z.js";
import "./chunk-YR3EBCJL.js";
import "./chunk-LWQF5CC6.js";
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
