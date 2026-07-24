import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-CNGJ6CU4.js";
import {
  createUniver
} from "../chunk-WMOYKJ5D.js";
import "../chunk-22BOW4EN.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-G2ZW2BDM.js";
import "../chunk-7RKWV2OH.js";
import "../chunk-O2N4YVYW.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-47MGLYD5.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-PW5H4QGM.js";
import {
  mergeLocales
} from "../chunk-UEDAY4IO.js";
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
