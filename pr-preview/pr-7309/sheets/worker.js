import {
  zh_CN_default
} from "../chunk-ATLWNXMT.js";
import "../chunk-DBRQB4K6.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-HI3S6XZW.js";
import "../chunk-3BTKBUIM.js";
import "../chunk-6E3W7VDH.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-W2IE7XAE.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-FV4IGQDG.js";
import {
  Univer
} from "../chunk-N4BCF5MH.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// src/sheets/worker.ts
var univer = new Univer({
  locale: "zhCN" /* ZH_CN */,
  logLevel: 4 /* VERBOSE */,
  locales: {
    ["zhCN" /* ZH_CN */]: zh_CN_default
  }
});
univer.registerPlugins([
  [UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true }],
  [UniverFormulaEnginePlugin],
  [UniverRPCWorkerThreadPlugin],
  [UniverRemoteSheetsFormulaPlugin],
  [UniverSheetsFilterPlugin]
]);
self.univer = univer;
