import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-CENPYPGL.js";
import {
  createUniver
} from "../chunk-UUZDHTLP.js";
import "../chunk-AOGYP6JO.js";
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
  mergeLocales
} from "../chunk-JAWHQSZK.js";
import "../chunk-EQ2B2W73.js";
import "../chunk-HECJ2TYE.js";

// ../presets/packages/preset-sheets-core/src/worker.ts
function UniverSheetsCoreWorkerPreset(config = {}) {
  const {
    formula
  } = config;
  return {
    plugins: [
      [UniverSheetsPlugin, { onlyRegisterFormulaRelatedMutations: true }],
      [UniverFormulaEnginePlugin, { function: formula == null ? void 0 : formula.function }],
      UniverRPCWorkerThreadPlugin,
      UniverRemoteSheetsFormulaPlugin
    ]
  };
}

// ../presets/packages/preset-sheets-filter/src/worker.ts
function UniverSheetsFilterWorkerPreset() {
  return {
    plugins: [
      UniverSheetsFilterPlugin
    ]
  };
}

// src/preset-sheets-core-with-worker/worker.ts
createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    zhCN: mergeLocales(
      zh_CN_default,
      zh_CN_default2
    )
  },
  presets: [
    UniverSheetsCoreWorkerPreset(),
    UniverSheetsFilterWorkerPreset()
  ]
});
