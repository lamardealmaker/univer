import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-GF5UTAQD.js";
import {
  createUniver
} from "../chunk-KRZ7OLBS.js";
import "../chunk-WRYXDTJA.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-4HRHY67D.js";
import "../chunk-3BTKBUIM.js";
import "../chunk-6E3W7VDH.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-3T2J7QKX.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-BPQHTQJ4.js";
import {
  mergeLocales
} from "../chunk-SAVY66LP.js";
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
