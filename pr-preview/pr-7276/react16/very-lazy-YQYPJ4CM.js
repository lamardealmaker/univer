import {
  UniverActionRecorderPlugin
} from "./chunk-CK4NRTJ7.js";
import {
  UniverSheetsFindReplacePlugin
} from "./chunk-FAIXCKVD.js";
import {
  UniverSheetsSortUIPlugin
} from "./chunk-C65PFTGM.js";
import {
  UniverSheetsCrosshairHighlightPlugin
} from "./chunk-U34PT5DQ.js";
import {
  UniverDebuggerPlugin
} from "./chunk-NHLUDMXD.js";
import {
  UniverWatermarkPlugin
} from "./chunk-KABAHNNQ.js";
import "./chunk-U6GYMP4T.js";
import {
  loadDebuggerLocale
} from "./chunk-JFKSX4QH.js";
import "./chunk-RLFV7IGZ.js";
import {
  UniverSheetsHyperLinkUIPlugin
} from "./chunk-ZDSPEEB7.js";
import "./chunk-6YJ6DVO7.js";
import "./chunk-BRX4NJPW.js";
import "./chunk-2EU5TYJL.js";
import "./chunk-ZSK52PWR.js";
import "./chunk-3APMRQNE.js";
import "./chunk-YQ7TL2DI.js";
import "./chunk-CL3B2JWT.js";
import "./chunk-ZCI2FDXL.js";
import "./chunk-KVAY7V76.js";
import "./chunk-Z3BH4FVF.js";
import "./chunk-STB3OOUD.js";
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
