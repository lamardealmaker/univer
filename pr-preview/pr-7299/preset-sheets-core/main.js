import {
  UniverSheetsConditionalFormattingPreset,
  UniverSheetsCorePreset,
  UniverSheetsDataValidationPreset,
  UniverSheetsDrawingPreset,
  UniverSheetsFilterPreset,
  UniverSheetsFindReplacePreset,
  UniverSheetsHyperLinkPreset,
  UniverSheetsNotePreset,
  UniverSheetsSortPreset,
  UniverSheetsTablePreset,
  UniverSheetsThreadCommentPreset,
  zh_CN_default,
  zh_CN_default2 as zh_CN_default3,
  zh_CN_default3 as zh_CN_default4,
  zh_CN_default4 as zh_CN_default6,
  zh_CN_default5 as zh_CN_default7,
  zh_CN_default6 as zh_CN_default8,
  zh_CN_default7 as zh_CN_default9,
  zh_CN_default8 as zh_CN_default10,
  zh_CN_default9 as zh_CN_default11
} from "../chunk-XDMUELR4.js";
import "../chunk-DGNXPBOO.js";
import "../chunk-BAD2INHV.js";
import "../chunk-XZ5VIRML.js";
import "../chunk-PEHRIIDN.js";
import "../chunk-QLA67DFJ.js";
import "../chunk-MO7ANF65.js";
import "../chunk-4DS7Q5YJ.js";
import {
  zh_CN_default as zh_CN_default2,
  zh_CN_default2 as zh_CN_default5
} from "../chunk-63PUBAAR.js";
import {
  createUniver
} from "../chunk-VH7M5EOK.js";
import "../chunk-HEBJZYU6.js";
import "../chunk-LICFVG4T.js";
import "../chunk-2C3KMU27.js";
import "../chunk-I3HNE6OK.js";
import "../chunk-JCL2EZMA.js";
import "../chunk-WL4TCTFA.js";
import "../chunk-3IAP3AZ7.js";
import "../chunk-67SAKULC.js";
import "../chunk-YUQEJC7N.js";
import "../chunk-BL4KLOAB.js";
import "../chunk-MYLWSSFO.js";
import "../chunk-QF7C6WXX.js";
import "../chunk-WMI7TYEP.js";
import "../chunk-7V7O7R7T.js";
import "../chunk-XR64V7IG.js";
import "../chunk-YY3CB3JX.js";
import "../chunk-UY626MVT.js";
import "../chunk-I36BEPXV.js";
import "../chunk-5RF6QEJE.js";
import "../chunk-LI6UXASZ.js";
import {
  FolderIcon,
  IMenuManagerService,
  IconManager
} from "../chunk-3XYSHYJO.js";
import "../chunk-52QD5ZOZ.js";
import "../chunk-NUA2Z7NC.js";
import "../chunk-SNSWR7JB.js";
import "../chunk-5FVFOJ5F.js";
import "../chunk-RT67ICL6.js";
import "../chunk-6E3W7VDH.js";
import "../chunk-O7SFXNR4.js";
import {
  SetRangeValuesMutation,
  SetRangeValuesUndoMutationFactory,
  SetWorksheetColumnCountMutation,
  SetWorksheetColumnCountUndoMutationFactory,
  SetWorksheetRowCountMutation,
  SetWorksheetRowCountUndoMutationFactory
} from "../chunk-ZUW5CMIO.js";
import {
  ICommandService,
  IUndoRedoService,
  IUniverInstanceService,
  Inject,
  Injector,
  Plugin,
  covertCellValues,
  default_default,
  mergeLocales,
  sequenceExecute
} from "../chunk-5FNWWQ47.js";
import "../chunk-EQ2B2W73.js";
import {
  __decorateClass,
  __decorateParam,
  __publicField
} from "../chunk-HECJ2TYE.js";

// src/preset-sheets-core/custom-plugin/import-csv-button.ts
function waitUserSelectCSVFile(onSelect) {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv";
    input.click();
    input.onchange = () => {
      var _a;
      const file = (_a = input.files) == null ? void 0 : _a[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result;
        if (typeof text !== "string") {
          return;
        }
        const rows = text.split(/\r\n|\n/);
        const data = rows.map((line) => line.split(","));
        const colsCount = data.reduce((max, row) => Math.max(max, row.length), 0);
        const result = onSelect({
          data,
          colsCount,
          rowsCount: data.length
        });
        resolve(result);
      };
      reader.readAsText(file);
    };
  });
}
var ImportCSVButtonPlugin = class extends Plugin {
  constructor(_config, _injector, _menuManagerService, _commandService, _iconManager) {
    super();
    __publicField(this, "_injector", _injector);
    __publicField(this, "_menuManagerService", _menuManagerService);
    __publicField(this, "_commandService", _commandService);
    __publicField(this, "_iconManager", _iconManager);
  }
  /**
   * The first lifecycle of the plugin mounted on the Univer instance,
   * the Univer business instance has not been created at this time.
   * The plugin should add its own module to the dependency injection system at this lifecycle.
   * It is not recommended to initialize the internal module of the plugin outside this lifecycle.
   */
  onStarting() {
    this.disposeWithMe(
      this._iconManager.register("FolderIcon2", FolderIcon)
    );
    const buttonId = "import-csv-button";
    const command = {
      type: 1 /* OPERATION */,
      id: buttonId,
      handler: (accessor) => {
        const univerInstanceService = accessor.get(IUniverInstanceService);
        const commandService = accessor.get(ICommandService);
        const undoRedoService = accessor.get(IUndoRedoService);
        const worksheet = univerInstanceService.getCurrentUnitOfType(2 /* UNIVER_SHEET */).getActiveSheet();
        const unitId = worksheet.getUnitId();
        const subUnitId = worksheet.getSheetId();
        return waitUserSelectCSVFile(({ data, rowsCount, colsCount }) => {
          const redoMutations = [];
          const undoMutations = [];
          const setRowCountMutationRedoParams = {
            unitId,
            subUnitId,
            rowCount: rowsCount
          };
          const setRowCountMutationUndoParams = SetWorksheetRowCountUndoMutationFactory(
            accessor,
            setRowCountMutationRedoParams
          );
          redoMutations.push({ id: SetWorksheetRowCountMutation.id, params: setRowCountMutationRedoParams });
          undoMutations.push({ id: SetWorksheetRowCountMutation.id, params: setRowCountMutationUndoParams });
          const setColumnCountMutationRedoParams = {
            unitId,
            subUnitId,
            columnCount: colsCount
          };
          const setColumnCountMutationUndoParams = SetWorksheetColumnCountUndoMutationFactory(
            accessor,
            setColumnCountMutationRedoParams
          );
          redoMutations.push({ id: SetWorksheetColumnCountMutation.id, params: setColumnCountMutationRedoParams });
          undoMutations.unshift({ id: SetWorksheetColumnCountMutation.id, params: setColumnCountMutationUndoParams });
          const cellValue = covertCellValues(data, {
            startColumn: 0,
            // start column index
            startRow: 0,
            // start row index
            endColumn: colsCount - 1,
            // end column index
            endRow: rowsCount - 1
            // end row index
          });
          const setRangeValuesMutationRedoParams = {
            unitId,
            subUnitId,
            cellValue
          };
          const setRangeValuesMutationUndoParams = SetRangeValuesUndoMutationFactory(
            accessor,
            setRangeValuesMutationRedoParams
          );
          redoMutations.push({ id: SetRangeValuesMutation.id, params: setRangeValuesMutationRedoParams });
          undoMutations.unshift({ id: SetRangeValuesMutation.id, params: setRangeValuesMutationUndoParams });
          const result = sequenceExecute(redoMutations, commandService);
          if (result.result) {
            undoRedoService.pushUndoRedo({
              unitID: unitId,
              undoMutations,
              redoMutations
            });
            return true;
          }
          return false;
        });
      }
    };
    const menuItemFactory = () => ({
      id: buttonId,
      title: "Import CSV",
      tooltip: "Import CSV",
      icon: "FolderIcon2",
      // icon name
      type: 0 /* BUTTON */
    });
    this._menuManagerService.mergeMenu({
      ["ribbon.start.others" /* OTHERS */]: {
        [buttonId]: {
          order: 10,
          menuItemFactory
        }
      }
    });
    this._commandService.registerCommand(command);
  }
};
__publicField(ImportCSVButtonPlugin, "pluginName", "import-csv-plugin");
ImportCSVButtonPlugin = __decorateClass([
  __decorateParam(1, Inject(Injector)),
  __decorateParam(2, Inject(IMenuManagerService)),
  __decorateParam(3, Inject(ICommandService)),
  __decorateParam(4, Inject(IconManager))
], ImportCSVButtonPlugin);
var import_csv_button_default = ImportCSVButtonPlugin;

// src/preset-sheets-core/main.ts
var { univer, univerAPI } = createUniver({
  locale: "zhCN" /* ZH_CN */,
  locales: {
    zhCN: mergeLocales(
      zh_CN_default2,
      zh_CN_default4,
      zh_CN_default,
      zh_CN_default3,
      zh_CN_default5,
      zh_CN_default6,
      zh_CN_default7,
      zh_CN_default8,
      zh_CN_default9,
      zh_CN_default10,
      zh_CN_default11
    )
  },
  theme: default_default,
  presets: [
    UniverSheetsCorePreset(),
    UniverSheetsDrawingPreset(),
    UniverSheetsConditionalFormattingPreset(),
    UniverSheetsFilterPreset(),
    UniverSheetsHyperLinkPreset(),
    UniverSheetsDataValidationPreset(),
    UniverSheetsFindReplacePreset(),
    UniverSheetsNotePreset(),
    UniverSheetsSortPreset(),
    UniverSheetsTablePreset(),
    UniverSheetsThreadCommentPreset()
  ],
  plugins: [
    import_csv_button_default
  ]
});
univerAPI.createWorkbook({ name: "Test Sheet" });
window.univer = univer;
window.univerAPI = univerAPI;
