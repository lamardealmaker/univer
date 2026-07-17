import {
  UniverActionRecorderPlugin
} from "./chunk-ZQHE2NUN.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-KJLSTJGJ.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-CCMSF4PG.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-RFV3TV37.js";
import {
  UniverDebuggerPlugin
} from "./chunk-JUIYVKHO.js";
import {
  UniverWatermarkPlugin
} from "./chunk-G32YUFU7.js";
import "./chunk-G5YPEBW5.js";
import {
  loadDebuggerLocale
} from "./chunk-YS7HGHTO.js";
import "./chunk-HUK7CIOA.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-HEU454NX.js";
import "./chunk-Z6UJHVDJ.js";
import "./chunk-34QRRYS3.js";
import "./chunk-O6PRRW7Z.js";
import "./chunk-FKIHEANL.js";
import "./chunk-MHBV4NGS.js";
import "./chunk-3322V2EV.js";
import "./chunk-AKJJ4FYL.js";
import "./chunk-EXSD3EBI.js";
import "./chunk-SX6XMEUY.js";
import "./chunk-QAGZHJGL.js";
import "./chunk-S3GUYQY5.js";
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
