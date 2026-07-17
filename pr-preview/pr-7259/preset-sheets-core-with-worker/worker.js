import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-BNUP2FQV.js";
import {
  createUniver
} from "../chunk-EVXRPISL.js";
import "../chunk-GIXTJOYT.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-DSXI3R4L.js";
import "../chunk-5OGCV4NR.js";
import "../chunk-CKXFPMES.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-AVV6LYFI.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-XY6TNQNM.js";
import {
  mergeLocales
} from "../chunk-DJVW44P3.js";
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
