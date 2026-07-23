import {
  zh_CN_default
} from "../chunk-4QJTZQOR.js";
import "../chunk-DBRQB4K6.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-MTLRNOSN.js";
import "../chunk-3BTKBUIM.js";
import "../chunk-W7SCD2GT.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-QDZX4RLS.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-XFNITGGT.js";
import {
  Univer
} from "../chunk-JAWHQSZK.js";
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
