import {
  UniverActionRecorderPlugin
} from "./chunk-JSVWSVH4.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-ELKPHZ62.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-OFCUKA75.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-OQEQE2SG.js";
import {
  UniverDebuggerPlugin
} from "./chunk-63E3DWOY.js";
import {
  UniverWatermarkPlugin
} from "./chunk-CFJ2HLZ3.js";
import "./chunk-WZE6S77I.js";
import {
  loadDebuggerLocale
} from "./chunk-JZEBFXA4.js";
import "./chunk-7NU5UX2I.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-DGBZEOYT.js";
import "./chunk-5RAVYVE7.js";
import "./chunk-EJY34MXJ.js";
import "./chunk-PDA5QUAT.js";
import "./chunk-FT7X6IJR.js";
import "./chunk-FDGKLKNF.js";
import "./chunk-XH44RUDB.js";
import "./chunk-65EMFKCV.js";
import "./chunk-NSTTH4CN.js";
import "./chunk-TBQYTQ7Q.js";
import "./chunk-IOSPCB23.js";
import "./chunk-EYIJFNJM.js";
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
