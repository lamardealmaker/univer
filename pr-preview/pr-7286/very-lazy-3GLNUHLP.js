import {
  UniverActionRecorderPlugin
} from "./chunk-WOBEEANR.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-TRPQWVCI.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-D6KCG3OE.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-7GUHRFIN.js";
import {
  UniverDebuggerPlugin
} from "./chunk-QIQS3QKG.js";
import {
  UniverWatermarkPlugin
} from "./chunk-NMCCDXDM.js";
import "./chunk-L4ORDE4T.js";
import {
  loadDebuggerLocale
} from "./chunk-YXVKFX3P.js";
import "./chunk-QDKAR6FZ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-6U2DQN7H.js";
import "./chunk-6V4PZWJR.js";
import "./chunk-BQPGACRL.js";
import "./chunk-P6IC5LHR.js";
import "./chunk-Y3F3JWSH.js";
import "./chunk-NGBROLQZ.js";
import "./chunk-AMAIQ53J.js";
import "./chunk-KJ3ZQ6XP.js";
import "./chunk-RJZLV6EI.js";
import "./chunk-BYQPA3KP.js";
import "./chunk-OGAOIOI3.js";
import "./chunk-K5ELNLYF.js";
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
