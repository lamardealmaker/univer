import {
  zh_CN_default
} from "../chunk-TDLXI56F.js";
import "../chunk-DBRQB4K6.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-5NCSFO5U.js";
import "../chunk-RT67ICL6.js";
import "../chunk-6E3W7VDH.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-PIYGBPYI.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-7FJVVP7M.js";
import {
  Univer
} from "../chunk-UO46IVZK.js";
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
