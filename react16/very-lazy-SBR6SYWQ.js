import {
  UniverActionRecorderPlugin
} from "./chunk-HHHCECEZ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-B4WEA4WP.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-INJYHJK2.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-VOQYF4IM.js";
import {
  UniverDebuggerPlugin
} from "./chunk-OZLLMNRO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-VD4AIXIW.js";
import "./chunk-XAU4ALB2.js";
import {
  loadDebuggerLocale
} from "./chunk-HS75KBFA.js";
import "./chunk-WQG2BVGK.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-6V4QVG2G.js";
import "./chunk-ZY225B4L.js";
import "./chunk-NL3XBNZS.js";
import "./chunk-CNVKYC6C.js";
import "./chunk-JWWKPC7Q.js";
import "./chunk-BONJDQ7T.js";
import "./chunk-XXJAVF5O.js";
import "./chunk-6AM74UQX.js";
import "./chunk-4GAKH6J2.js";
import "./chunk-WZUQ6F4L.js";
import "./chunk-OR7UCNP7.js";
import "./chunk-QO3C2C2Z.js";
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
