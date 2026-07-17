import {
  UniverActionRecorderPlugin
} from "./chunk-FH2QW4WQ.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-OWV53Q2B.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-KHN3XPDB.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-S7UMNBWR.js";
import {
  UniverDebuggerPlugin
} from "./chunk-HEZJ52OB.js";
import {
  UniverWatermarkPlugin
} from "./chunk-ZXDJSSHB.js";
import "./chunk-EVZCJDKY.js";
import {
  loadDebuggerLocale
} from "./chunk-4KXCCCZM.js";
import "./chunk-MYIK6ZKX.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-BVB72G56.js";
import "./chunk-6B6ZSLV7.js";
import "./chunk-I5V7OOD4.js";
import "./chunk-W3HUSZAZ.js";
import "./chunk-I34ZMAPC.js";
import "./chunk-ZFUVZZV4.js";
import "./chunk-SI2HPRNT.js";
import "./chunk-MVZAHYFO.js";
import "./chunk-KFC6W3IV.js";
import "./chunk-2PLZSTXB.js";
import "./chunk-I7AO7NZF.js";
import "./chunk-2CS7RBBN.js";
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
