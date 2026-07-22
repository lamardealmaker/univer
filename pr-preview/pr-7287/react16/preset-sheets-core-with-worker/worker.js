import {
  zh_CN_default,
  zh_CN_default2
} from "../chunk-GNXEBRMD.js";
import {
  createUniver
} from "../chunk-W3O7664Y.js";
import "../chunk-KOO7MV2Y.js";
import {
  UniverSheetsFilterPlugin
} from "../chunk-MIQDXCVC.js";
import "../chunk-RT67ICL6.js";
import "../chunk-R7KLXWDQ.js";
import {
  UniverRemoteSheetsFormulaPlugin
} from "../chunk-XOVZ3ENV.js";
import {
  UniverFormulaEnginePlugin,
  UniverRPCWorkerThreadPlugin,
  UniverSheetsPlugin
} from "../chunk-ON7MQNKU.js";
import {
  mergeLocales
} from "../chunk-V7YB6CU5.js";
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
