System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./finn/widgets/parking-lot-widget/src/setting/translations/default.ts":
/*!*****************************************************************************!*\
  !*** ./finn/widgets/parking-lot-widget/src/setting/translations/default.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    parkingLotField: 'Parking Lot Field',
    utilizationField: 'Utilization Field',
    showUtilizationText: 'Show Utilization Text',
    allowNegatives: 'Allow Negative Values',
    fullThreshold: 'Full % Threshold',
    dataFormatExpected: 'Data Format Expected',
    dataFormatDescription: 'Your data source should contain fields for parking lot names and utilization percentages (0-100). The widget will display color-coded dots based on utilization levels. The widget automatically respects any filters applied to the layer/view in ArcGIS.',
    colorRanges: 'Color Ranges',
    addColorRange: 'Add Color Range',
    removeColorRange: 'Remove',
    minValue: 'Min Value',
    maxValue: 'Max Value',
    color: 'Color',
    label: 'Label',
    rangeOverlapWarning: 'Warning: Ranges should not overlap',
    invalidRangeWarning: 'Warning: Min value must be less than max value'
});


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*****************************************************************!*\
  !*** ./finn/widgets/parking-lot-widget/src/setting/setting.tsx ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translations/default */ "./finn/widgets/parking-lot-widget/src/setting/translations/default.ts");
/** @jsx jsx */






const Setting = (props) => {
    const { config, id, onSettingChange, useDataSources, useDataSourcesEnabled, useMapWidgetIds } = props;
    const supportedTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer, jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneLayer]);
    const onMapWidgetSelected = (useMapWidgetIds) => {
        onSettingChange({
            id: id,
            useMapWidgetIds: useMapWidgetIds
        });
    };
    const onDataSourceChange = (useDataSources) => {
        onSettingChange({
            id: id,
            useDataSources: useDataSources || []
        });
    };
    const onToggleUseDataEnabled = (useDataSourcesEnabled) => {
        onSettingChange({
            id: id,
            useDataSourcesEnabled: useDataSourcesEnabled
        });
    };
    const onFieldChange = (field, value) => {
        onSettingChange({
            id: id,
            config: config.set(field, value)
        });
    };
    const onShowUtilizationTextChange = (checked) => {
        onSettingChange({
            id: id,
            config: config.set('showUtilizationText', checked)
        });
    };
    const onAllowNegativesChange = (checked) => {
        onSettingChange({
            id: id,
            config: config.set('allowNegatives', checked)
        });
    };
    const onFullThresholdChange = (value) => {
        onSettingChange({
            id: id,
            config: config.set('fullThreshold', value)
        });
    };
    const addColorRange = () => {
        const newRange = {
            minValue: 0,
            maxValue: 100,
            color: '#666666',
            label: 'New Range'
        };
        const updatedRanges = [...config.colorRanges, newRange];
        onSettingChange({
            id: id,
            config: config.set('colorRanges', updatedRanges)
        });
    };
    const removeColorRange = (index) => {
        const updatedRanges = config.colorRanges.filter((_, i) => i !== index);
        onSettingChange({
            id: id,
            config: config.set('colorRanges', updatedRanges)
        });
    };
    const updateColorRange = (index, field, value) => {
        const updatedRanges = config.colorRanges.map((range, i) => i === index ? Object.assign(Object.assign({}, range), { [field]: value }) : range);
        onSettingChange({
            id: id,
            config: config.set('colorRanges', updatedRanges)
        });
    };
    const validateRanges = () => {
        const ranges = config.colorRanges;
        for (let i = 0; i < ranges.length; i++) {
            const range = ranges[i];
            if (range.minValue >= range.maxValue) {
                return false;
            }
            for (let j = i + 1; j < ranges.length; j++) {
                const otherRange = ranges[j];
                if (range.minValue <= otherRange.maxValue && range.maxValue >= otherRange.minValue) {
                    return false;
                }
            }
        }
        return true;
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "parking-lot-widget-setting p-2" },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "selectMap", defaultMessage: "Select Map" }) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { onSelect: onMapWidgetSelected, useMapWidgetIds: useMapWidgetIds }))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__.DataSourceSelector, { types: supportedTypes, mustUseDataSource: true, useDataSources: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(useDataSources || []), useDataSourcesEnabled: useDataSourcesEnabled, onToggleUseDataEnabled: onToggleUseDataEnabled, onChange: onDataSourceChange, widgetId: id }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mb-3" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "form-label" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "parkingLotField", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].parkingLotField })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", className: "form-control", value: config.parkingLotField, onChange: (e) => onFieldChange('parkingLotField', e.target.value), placeholder: "e.g., parking_lot, name, lot_id" })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mb-3" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "form-label" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "utilizationField", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].utilizationField })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", className: "form-control", value: config.utilizationField, onChange: (e) => onFieldChange('utilizationField', e.target.value), placeholder: "e.g., utilisationPercentage, utilization, percent_used" })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mb-3" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "form-label" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "showUtilizationText", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].showUtilizationText })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mt-1" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, { checked: config.showUtilizationText, onChange: (e) => onShowUtilizationTextChange(e.target.checked) }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mb-3" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "form-label" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "allowNegatives", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].allowNegatives })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mt-1" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, { checked: config.allowNegatives, onChange: (e) => onAllowNegativesChange(e.target.checked) }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mb-3" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "form-label", style: { display: 'block', marginBottom: '8px' } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "fullThreshold", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].fullThreshold })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "number", className: "form-control", value: config.fullThreshold, onChange: (e) => onFullThresholdChange(parseInt(e.target.value) || 95), min: "0", max: "100", placeholder: "e.g., 95" }))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "colorRanges", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].colorRanges }) },
            config.colorRanges.map((range, index) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: index, className: "color-range-item mb-3 p-3 border rounded" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "d-flex justify-content-between align-items-center mb-3" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("h6", { className: "mb-0" },
                        "Range ",
                        index + 1),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", className: "btn btn-sm", onClick: () => removeColorRange(index), disabled: config.colorRanges.length <= 1, style: {
                            width: '30px',
                            height: '30px',
                            padding: '0',
                            fontSize: '16px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px'
                        } }, "\u00D7")),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-12 mb-3" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "form-label", style: { display: 'block', marginBottom: '8px' } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "minValue", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].minValue })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "number", className: "form-control", value: range.minValue, onChange: (e) => updateColorRange(index, 'minValue', parseInt(e.target.value) || 0), min: "0", max: "100" })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-12 mb-3" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "form-label", style: { display: 'block', marginBottom: '8px' } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "maxValue", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].maxValue })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "number", className: "form-control", value: range.maxValue, onChange: (e) => updateColorRange(index, 'maxValue', parseInt(e.target.value) || 100), min: "0", max: "100" })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-12" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "form-label", style: { display: 'block', marginBottom: '8px' } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "color", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].color })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "color", className: "form-control", value: range.color, onChange: (e) => updateColorRange(index, 'color', e.target.value) })))))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "text-center" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { type: "primary", onClick: addColorRange },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "addColorRange", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].addColorRange }))),
            !validateRanges() && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "alert alert-warning mt-3" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("small", null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "rangeOverlapWarning", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].rangeOverlapWarning }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "invalidRangeWarning", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].invalidRangeWarning }))))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "setting-section mt-3" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "alert alert-info" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("small", null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "dataFormatExpected", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].dataFormatExpected })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "dataFormatDescription", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].dataFormatDescription }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9wYXJraW5nLWxvdC13aWRnZXQvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7SUFDYixlQUFlLEVBQUUsbUJBQW1CO0lBQ3BDLGdCQUFnQixFQUFFLG1CQUFtQjtJQUNyQyxtQkFBbUIsRUFBRSx1QkFBdUI7SUFDNUMsY0FBYyxFQUFFLHVCQUF1QjtJQUN2QyxhQUFhLEVBQUUsa0JBQWtCO0lBQ2pDLGtCQUFrQixFQUFFLHNCQUFzQjtJQUMxQyxxQkFBcUIsRUFBRSw0UEFBNFA7SUFDblIsV0FBVyxFQUFFLGNBQWM7SUFDM0IsYUFBYSxFQUFFLGlCQUFpQjtJQUNoQyxnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLFFBQVEsRUFBRSxXQUFXO0lBQ3JCLFFBQVEsRUFBRSxXQUFXO0lBQ3JCLEtBQUssRUFBRSxPQUFPO0lBQ2QsS0FBSyxFQUFFLE9BQU87SUFDZCxtQkFBbUIsRUFBRSxvQ0FBb0M7SUFDekQsbUJBQW1CLEVBQUUsZ0RBQWdEO0NBQ3RFOzs7Ozs7Ozs7Ozs7QUNqQkQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7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LENBQUMsY0FBYyxFQUFFLElBQUksQ0FDcEIsd0RBQUssU0FBUyxFQUFDLDBCQUEwQjtnQkFDdkM7b0JBQ0UsK0NBQUMsdURBQWdCLElBQUMsRUFBRSxFQUFDLHFCQUFxQixFQUFDLGNBQWMsRUFBRSw2REFBbUIsQ0FBQyxtQkFBbUIsR0FBRztvQkFDckcsMERBQUs7b0JBQ0wsK0NBQUMsdURBQWdCLElBQUMsRUFBRSxFQUFDLHFCQUFxQixFQUFDLGNBQWMsRUFBRSw2REFBbUIsQ0FBQyxtQkFBbUIsR0FBRyxDQUMvRixDQUNKLENBQ1AsQ0FDYztRQUVqQix3REFBSyxTQUFTLEVBQUMsc0JBQXNCO1lBQ25DLHdEQUFLLFNBQVMsRUFBQyxrQkFBa0I7Z0JBQy9CO29CQUNFO3dCQUFRLCtDQUFDLHVEQUFnQixJQUFDLEVBQUUsRUFBQyxvQkFBb0IsRUFBQyxjQUFjLEVBQUUsNkRBQW1CLENBQUMsa0JBQWtCLEdBQUcsQ0FBUztvQkFBQSwwREFBSztvQkFDekgsK0NBQUMsdURBQWdCLElBQUMsRUFBRSxFQUFDLHVCQUF1QixFQUFDLGNBQWMsRUFBRSw2REFBbUIsQ0FBQyxxQkFBcUIsR0FBRyxDQUNuRyxDQUNKLENBQ0YsQ0FDRixDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE9BQU87QUFFZCxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9maW5uL3dpZGdldHMvcGFya2luZy1sb3Qtd2lkZ2V0L3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZmlubi93aWRnZXRzL3BhcmtpbmctbG90LXdpZGdldC9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHBhcmtpbmdMb3RGaWVsZDogJ1BhcmtpbmcgTG90IEZpZWxkJyxcbiAgdXRpbGl6YXRpb25GaWVsZDogJ1V0aWxpemF0aW9uIEZpZWxkJyxcbiAgc2hvd1V0aWxpemF0aW9uVGV4dDogJ1Nob3cgVXRpbGl6YXRpb24gVGV4dCcsXG4gIGFsbG93TmVnYXRpdmVzOiAnQWxsb3cgTmVnYXRpdmUgVmFsdWVzJyxcbiAgZnVsbFRocmVzaG9sZDogJ0Z1bGwgJSBUaHJlc2hvbGQnLFxuICBkYXRhRm9ybWF0RXhwZWN0ZWQ6ICdEYXRhIEZvcm1hdCBFeHBlY3RlZCcsXG4gIGRhdGFGb3JtYXREZXNjcmlwdGlvbjogJ1lvdXIgZGF0YSBzb3VyY2Ugc2hvdWxkIGNvbnRhaW4gZmllbGRzIGZvciBwYXJraW5nIGxvdCBuYW1lcyBhbmQgdXRpbGl6YXRpb24gcGVyY2VudGFnZXMgKDAtMTAwKS4gVGhlIHdpZGdldCB3aWxsIGRpc3BsYXkgY29sb3ItY29kZWQgZG90cyBiYXNlZCBvbiB1dGlsaXphdGlvbiBsZXZlbHMuIFRoZSB3aWRnZXQgYXV0b21hdGljYWxseSByZXNwZWN0cyBhbnkgZmlsdGVycyBhcHBsaWVkIHRvIHRoZSBsYXllci92aWV3IGluIEFyY0dJUy4nLFxuICBjb2xvclJhbmdlczogJ0NvbG9yIFJhbmdlcycsXG4gIGFkZENvbG9yUmFuZ2U6ICdBZGQgQ29sb3IgUmFuZ2UnLFxuICByZW1vdmVDb2xvclJhbmdlOiAnUmVtb3ZlJyxcbiAgbWluVmFsdWU6ICdNaW4gVmFsdWUnLFxuICBtYXhWYWx1ZTogJ01heCBWYWx1ZScsXG4gIGNvbG9yOiAnQ29sb3InLFxuICBsYWJlbDogJ0xhYmVsJyxcbiAgcmFuZ2VPdmVybGFwV2FybmluZzogJ1dhcm5pbmc6IFJhbmdlcyBzaG91bGQgbm90IG92ZXJsYXAnLFxuICBpbnZhbGlkUmFuZ2VXYXJuaW5nOiAnV2FybmluZzogTWluIHZhbHVlIG11c3QgYmUgbGVzcyB0aGFuIG1heCB2YWx1ZSdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwgSW1tdXRhYmxlLCBGb3JtYXR0ZWRNZXNzYWdlLCBqc3gsIERhdGFTb3VyY2VUeXBlcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcbmltcG9ydCB7IFNldHRpbmdTZWN0aW9uLCBTZXR0aW5nUm93IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBEYXRhU291cmNlU2VsZWN0b3IgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yJ1xuaW1wb3J0IHsgTWFwV2lkZ2V0U2VsZWN0b3IgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcbmltcG9ydCB7IFN3aXRjaCwgQnV0dG9uIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IHR5cGUgSU1Db25maWcsIHR5cGUgQ29sb3JSYW5nZSB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBkZWZhdWx0STE4bk1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5cbmNvbnN0IFNldHRpbmcgPSAocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4pID0+IHtcbiAgY29uc3QgeyBjb25maWcsIGlkLCBvblNldHRpbmdDaGFuZ2UsIHVzZURhdGFTb3VyY2VzLCB1c2VEYXRhU291cmNlc0VuYWJsZWQsIHVzZU1hcFdpZGdldElkcyB9ID0gcHJvcHNcblxuICBjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IEltbXV0YWJsZShbRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllciwgRGF0YVNvdXJjZVR5cGVzLlNjZW5lTGF5ZXJdKVxuXG4gIGNvbnN0IG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSkgPT4ge1xuICAgIG9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogaWQsXG4gICAgICB1c2VNYXBXaWRnZXRJZHM6IHVzZU1hcFdpZGdldElkc1xuICAgIH0pXG4gIH1cblxuICBjb25zdCBvbkRhdGFTb3VyY2VDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IGFueVtdKSA9PiB7XG4gICAgb25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlcyB8fCBbXVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBvblRvZ2dsZVVzZURhdGFFbmFibGVkID0gKHVzZURhdGFTb3VyY2VzRW5hYmxlZDogYm9vbGVhbikgPT4ge1xuICAgIG9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogaWQsXG4gICAgICB1c2VEYXRhU291cmNlc0VuYWJsZWQ6IHVzZURhdGFTb3VyY2VzRW5hYmxlZFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBvbkZpZWxkQ2hhbmdlID0gKGZpZWxkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBvblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IGlkLFxuICAgICAgY29uZmlnOiBjb25maWcuc2V0KGZpZWxkLCB2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb25TaG93VXRpbGl6YXRpb25UZXh0Q2hhbmdlID0gKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBvblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IGlkLFxuICAgICAgY29uZmlnOiBjb25maWcuc2V0KCdzaG93VXRpbGl6YXRpb25UZXh0JywgY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb25BbGxvd05lZ2F0aXZlc0NoYW5nZSA9IChjaGVja2VkOiBib29sZWFuKSA9PiB7XG4gICAgb25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIGNvbmZpZzogY29uZmlnLnNldCgnYWxsb3dOZWdhdGl2ZXMnLCBjaGVja2VkKVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBvbkZ1bGxUaHJlc2hvbGRDaGFuZ2UgPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgIG9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogaWQsXG4gICAgICBjb25maWc6IGNvbmZpZy5zZXQoJ2Z1bGxUaHJlc2hvbGQnLCB2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgYWRkQ29sb3JSYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdSYW5nZTogQ29sb3JSYW5nZSA9IHtcbiAgICAgIG1pblZhbHVlOiAwLFxuICAgICAgbWF4VmFsdWU6IDEwMCxcbiAgICAgIGNvbG9yOiAnIzY2NjY2NicsXG4gICAgICBsYWJlbDogJ05ldyBSYW5nZSdcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdXBkYXRlZFJhbmdlcyA9IFsuLi5jb25maWcuY29sb3JSYW5nZXMsIG5ld1JhbmdlXVxuICAgIG9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogaWQsXG4gICAgICBjb25maWc6IGNvbmZpZy5zZXQoJ2NvbG9yUmFuZ2VzJywgdXBkYXRlZFJhbmdlcylcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlQ29sb3JSYW5nZSA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZFJhbmdlcyA9IGNvbmZpZy5jb2xvclJhbmdlcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KVxuICAgIG9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogaWQsXG4gICAgICBjb25maWc6IGNvbmZpZy5zZXQoJ2NvbG9yUmFuZ2VzJywgdXBkYXRlZFJhbmdlcylcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgdXBkYXRlQ29sb3JSYW5nZSA9IChpbmRleDogbnVtYmVyLCBmaWVsZDoga2V5b2YgQ29sb3JSYW5nZSwgdmFsdWU6IHN0cmluZyB8IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRSYW5nZXMgPSBjb25maWcuY29sb3JSYW5nZXMubWFwKChyYW5nZSwgaSkgPT4gXG4gICAgICBpID09PSBpbmRleCA/IHsgLi4ucmFuZ2UsIFtmaWVsZF06IHZhbHVlIH0gOiByYW5nZVxuICAgIClcbiAgICBvblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IGlkLFxuICAgICAgY29uZmlnOiBjb25maWcuc2V0KCdjb2xvclJhbmdlcycsIHVwZGF0ZWRSYW5nZXMpXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHZhbGlkYXRlUmFuZ2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IHJhbmdlcyA9IGNvbmZpZy5jb2xvclJhbmdlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCByYW5nZSA9IHJhbmdlc1tpXVxuICAgICAgaWYgKHJhbmdlLm1pblZhbHVlID49IHJhbmdlLm1heFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCByYW5nZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3Qgb3RoZXJSYW5nZSA9IHJhbmdlc1tqXVxuICAgICAgICBpZiAocmFuZ2UubWluVmFsdWUgPD0gb3RoZXJSYW5nZS5tYXhWYWx1ZSAmJiByYW5nZS5tYXhWYWx1ZSA+PSBvdGhlclJhbmdlLm1pblZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYXJraW5nLWxvdC13aWRnZXQtc2V0dGluZyBwLTJcIj5cbiAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJzZWxlY3RNYXBcIiBkZWZhdWx0TWVzc2FnZT1cIlNlbGVjdCBNYXBcIi8+fT5cbiAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXG4gICAgICAgICAgICBvblNlbGVjdD17b25NYXBXaWRnZXRTZWxlY3RlZH1cbiAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17dXNlTWFwV2lkZ2V0SWRzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcbiAgICAgICAgdHlwZXM9e3N1cHBvcnRlZFR5cGVzfVxuICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxuICAgICAgICB1c2VEYXRhU291cmNlcz17SW1tdXRhYmxlKHVzZURhdGFTb3VyY2VzIHx8IFtdKX1cbiAgICAgICAgdXNlRGF0YVNvdXJjZXNFbmFibGVkPXt1c2VEYXRhU291cmNlc0VuYWJsZWR9XG4gICAgICAgIG9uVG9nZ2xlVXNlRGF0YUVuYWJsZWQ9e29uVG9nZ2xlVXNlRGF0YUVuYWJsZWR9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkRhdGFTb3VyY2VDaGFuZ2V9XG4gICAgICAgIHdpZGdldElkPXtpZH1cbiAgICAgIC8+XG4gICAgICBcbiAgICAgIDxTZXR0aW5nU2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwicGFya2luZ0xvdEZpZWxkXCIgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRJMThuTWVzc2FnZXMucGFya2luZ0xvdEZpZWxkfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB2YWx1ZT17Y29uZmlnLnBhcmtpbmdMb3RGaWVsZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25GaWVsZENoYW5nZSgncGFya2luZ0xvdEZpZWxkJywgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuLCBwYXJraW5nX2xvdCwgbmFtZSwgbG90X2lkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInV0aWxpemF0aW9uRmllbGRcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy51dGlsaXphdGlvbkZpZWxkfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB2YWx1ZT17Y29uZmlnLnV0aWxpemF0aW9uRmllbGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRmllbGRDaGFuZ2UoJ3V0aWxpemF0aW9uRmllbGQnLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4sIHV0aWxpc2F0aW9uUGVyY2VudGFnZSwgdXRpbGl6YXRpb24sIHBlcmNlbnRfdXNlZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJzaG93VXRpbGl6YXRpb25UZXh0XCIgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRJMThuTWVzc2FnZXMuc2hvd1V0aWxpemF0aW9uVGV4dH0vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5zaG93VXRpbGl6YXRpb25UZXh0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uU2hvd1V0aWxpemF0aW9uVGV4dENoYW5nZShlLnRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiYWxsb3dOZWdhdGl2ZXNcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5hbGxvd05lZ2F0aXZlc30vPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5hbGxvd05lZ2F0aXZlc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkFsbG93TmVnYXRpdmVzQ2hhbmdlKGUudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbkJvdHRvbTogJzhweCcgfX0+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImZ1bGxUaHJlc2hvbGRcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5mdWxsVGhyZXNob2xkfS8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHZhbHVlPXtjb25maWcuZnVsbFRocmVzaG9sZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25GdWxsVGhyZXNob2xkQ2hhbmdlKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSB8fCA5NSl9XG4gICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgIG1heD1cIjEwMFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4sIDk1XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJjb2xvclJhbmdlc1wiIGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0STE4bk1lc3NhZ2VzLmNvbG9yUmFuZ2VzfS8+fT5cbiAgICAgICAge2NvbmZpZy5jb2xvclJhbmdlcy5tYXAoKHJhbmdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sb3ItcmFuZ2UtaXRlbSBtYi0zIHAtMyBib3JkZXIgcm91bmRlZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTBcIj5SYW5nZSB7aW5kZXggKyAxfTwvaDY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVDb2xvclJhbmdlKGluZGV4KX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y29uZmlnLmNvbG9yUmFuZ2VzLmxlbmd0aCA8PSAxfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IFxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICczMHB4JywgXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczMHB4JywgXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCcsIFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2Yzc1N2QnLFxuICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCdcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCIgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luQm90dG9tOiAnOHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwibWluVmFsdWVcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5taW5WYWx1ZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmFuZ2UubWluVmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZUNvbG9yUmFuZ2UoaW5kZXgsICdtaW5WYWx1ZScsIHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSB8fCAwKX1cbiAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbkJvdHRvbTogJzhweCcgfX0+XG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cIm1heFZhbHVlXCIgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRJMThuTWVzc2FnZXMubWF4VmFsdWV9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3JhbmdlLm1heFZhbHVlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVDb2xvclJhbmdlKGluZGV4LCAnbWF4VmFsdWUnLCBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgfHwgMTAwKX1cbiAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW5Cb3R0b206ICc4cHgnIH19PlxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJjb2xvclwiIGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0STE4bk1lc3NhZ2VzLmNvbG9yfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3JhbmdlLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVDb2xvclJhbmdlKGluZGV4LCAnY29sb3InLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgb25DbGljaz17YWRkQ29sb3JSYW5nZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImFkZENvbG9yUmFuZ2VcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5hZGRDb2xvclJhbmdlfS8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgeyF2YWxpZGF0ZVJhbmdlcygpICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmcgbXQtM1wiPlxuICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInJhbmdlT3ZlcmxhcFdhcm5pbmdcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5yYW5nZU92ZXJsYXBXYXJuaW5nfS8+XG4gICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiaW52YWxpZFJhbmdlV2FybmluZ1wiIGRlZmF1bHRNZXNzYWdlPXtkZWZhdWx0STE4bk1lc3NhZ2VzLmludmFsaWRSYW5nZVdhcm5pbmd9Lz5cbiAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2VjdGlvbiBtdC0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPlxuICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgIDxzdHJvbmc+PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJkYXRhRm9ybWF0RXhwZWN0ZWRcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5kYXRhRm9ybWF0RXhwZWN0ZWR9Lz48L3N0cm9uZz48YnIvPlxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJkYXRhRm9ybWF0RGVzY3JpcHRpb25cIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdEkxOG5NZXNzYWdlcy5kYXRhRm9ybWF0RGVzY3JpcHRpb259Lz5cbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=