import {
  UniverSheetsConditionalFormattingUIPlugin,
  UniverSheetsDataValidationUIPlugin,
  UniverSheetsFilterUIPlugin
} from "./chunk-NOIOPTK4.js";
import "./chunk-TTXYMXTZ.js";
import "./chunk-XVYHKR47.js";
import "./chunk-3LHD5PNH.js";
import {
  UniverSheetsDrawingUIPlugin
} from "./chunk-VKBHAS4H.js";
import "./chunk-4DQL7YD4.js";
import "./chunk-OT7B7OE4.js";
import "./chunk-OW4T4RYF.js";
import "./chunk-6WYNQIA3.js";
import "./chunk-URSPW5KK.js";
import "./chunk-D56GOLKC.js";
import "./chunk-LPTHD3KJ.js";
import "./chunk-BCDUMSPY.js";
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
