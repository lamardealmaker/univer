import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-JMZJQV3F.js";
import {
  createUniver
} from "../chunk-YU6HQYML.js";
import "../chunk-W25FCP6C.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-DVPFJYEU.js";
import "../chunk-7RKWV2OH.js";
import "../chunk-GNL7T4QS.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-FBTXTQTX.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-T3ZF4P6J.js";
import {
  mergeLocales
} from "../chunk-MIK4BD7H.js";
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
