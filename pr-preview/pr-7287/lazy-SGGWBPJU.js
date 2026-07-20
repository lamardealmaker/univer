import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-4TKRF5TJ.js";
import "./chunk-JV6Z7DOT.js";
import "./chunk-CIJRPV3L.js";
import "./chunk-4ANS6WEI.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-J4UA4L7Q.js";
import "./chunk-BKIR34HR.js";
import "./chunk-5GI44LH7.js";
import "./chunk-GLPPCME6.js";
import "./chunk-2CV4JNOO.js";
import "./chunk-BBOHSEUH.js";
import "./chunk-TDSPDX3L.js";
import "./chunk-CDLFIQUZ.js";
import "./chunk-UOL2OHAA.js";
import "./chunk-EQ2B2W73.js";
import "./chunk-HECJ2TYE.js";

// src/sheets-multi-units/lazy.ts
function getLazyPlugins() {
  return [
    [UniverSheetsDataValidationUIPlugin],
    [UniverSheetsConditionalFormattingUIPlugin],
    [UniverSheetsFilterUIPlugin, { useRemoteFilterValuesGenerator: false }],
    [UniverSheetsDrawingUIPlugin]
  ];
}
export {
  getLazyPlugins as default
};
