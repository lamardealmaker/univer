import {
  UniverActionRecorderPlugin
} from "./chunk-OECZVZA2.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-GT4UHNNC.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-GGXTTHJN.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-PXC3HUBI.js";
import {
  UniverDebuggerPlugin
} from "./chunk-T7LZ6UAC.js";
import {
  UniverWatermarkPlugin
} from "./chunk-BHWPCLHT.js";
import "./chunk-AD6TQ5ZH.js";
import {
  loadDebuggerLocale
} from "./chunk-U7OVB2LD.js";
import "./chunk-V7PUGVWY.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-A5U4PFZG.js";
import "./chunk-JDG5Q7QM.js";
import "./chunk-2FAZR6NI.js";
import "./chunk-APTA7ZOS.js";
import "./chunk-EU4GTUZY.js";
import "./chunk-A4ANDTQT.js";
import "./chunk-4EIOPILK.js";
import "./chunk-E6IF2FEV.js";
import "./chunk-B3NIOS63.js";
import "./chunk-N6UCXEZB.js";
import "./chunk-3EG43LTZ.js";
import "./chunk-DOJ4S5IA.js";
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
