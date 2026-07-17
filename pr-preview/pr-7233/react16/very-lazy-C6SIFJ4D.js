import {
  UniverActionRecorderPlugin
} from "./chunk-TVZH2NPC.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-ZWW3F2DO.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-S3ZKDPX5.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-SPZ6TANO.js";
import {
  UniverDebuggerPlugin
} from "./chunk-MZZJ7ZGU.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ZDEFGDLW.js";
import "./chunk-C5DQ4VAI.js";
import {
  loadDebuggerLocale
} from "./chunk-N7XHVX4V.js";
import "./chunk-A42RNHCM.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-OVQUHMF6.js";
import "./chunk-YYQJ5QCL.js";
import "./chunk-KSNEDRGZ.js";
import "./chunk-R4F3IYPG.js";
import "./chunk-VLUBKWWO.js";
import "./chunk-65GFA2QT.js";
import "./chunk-2J43C5JD.js";
import "./chunk-FJ7LZHIQ.js";
import "./chunk-3FKRKIME.js";
import "./chunk-G7SXFZ34.js";
import "./chunk-7SRTVBCX.js";
import "./chunk-JKGF6EFW.js";
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
