"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/layout.tsx":
/*!************************!*\
  !*** ./app/layout.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_local_target_css_path_app_layout_tsx_import_arguments_src_path_RTBasis_Light_woff2_weight_200_style_normal_path_RTBasis_Regular_woff2_weight_400_style_normal_path_RTBasis_Medium_woff2_weight_500_style_normal_path_RTBasis_Bold_woff2_weight_700_style_normal_variableName_RTBasis___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/font/local/target.css?{\"path\":\"app\\\\layout.tsx\",\"import\":\"\",\"arguments\":[{\"src\":[{\"path\":\"./RTBasis-Light.woff2\",\"weight\":\"200\",\"style\":\"normal\"},{\"path\":\"./RTBasis-Regular.woff2\",\"weight\":\"400\",\"style\":\"normal\"},{\"path\":\"./RTBasis-Medium.woff2\",\"weight\":\"500\",\"style\":\"normal\"},{\"path\":\"./RTBasis-Bold.woff2\",\"weight\":\"700\",\"style\":\"normal\"}]}],\"variableName\":\"RTBasis\"} */ \"(app-pages-browser)/./node_modules/next/font/local/target.css?{\\\"path\\\":\\\"app\\\\\\\\layout.tsx\\\",\\\"import\\\":\\\"\\\",\\\"arguments\\\":[{\\\"src\\\":[{\\\"path\\\":\\\"./RTBasis-Light.woff2\\\",\\\"weight\\\":\\\"200\\\",\\\"style\\\":\\\"normal\\\"},{\\\"path\\\":\\\"./RTBasis-Regular.woff2\\\",\\\"weight\\\":\\\"400\\\",\\\"style\\\":\\\"normal\\\"},{\\\"path\\\":\\\"./RTBasis-Medium.woff2\\\",\\\"weight\\\":\\\"500\\\",\\\"style\\\":\\\"normal\\\"},{\\\"path\\\":\\\"./RTBasis-Bold.woff2\\\",\\\"weight\\\":\\\"700\\\",\\\"style\\\":\\\"normal\\\"}]}],\\\"variableName\\\":\\\"RTBasis\\\"}\");\n/* harmony import */ var next_font_local_target_css_path_app_layout_tsx_import_arguments_src_path_RTBasis_Light_woff2_weight_200_style_normal_path_RTBasis_Regular_woff2_weight_400_style_normal_path_RTBasis_Medium_woff2_weight_500_style_normal_path_RTBasis_Bold_woff2_weight_700_style_normal_variableName_RTBasis___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_app_layout_tsx_import_arguments_src_path_RTBasis_Light_woff2_weight_200_style_normal_path_RTBasis_Regular_woff2_weight_400_style_normal_path_RTBasis_Medium_woff2_weight_500_style_normal_path_RTBasis_Bold_woff2_weight_700_style_normal_variableName_RTBasis___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/createTheme.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/ThemeProvider.js\");\n/* harmony import */ var _app_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-bar */ \"(app-pages-browser)/./app/app-bar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    palette: {\n        mode: \"light\",\n        primary: {\n            main: \"#580720\",\n            contrastText: \"#ffffff\"\n        },\n        secondary: {\n            main: \"#ae002f\"\n        },\n        text: {\n            primary: \"#4d4d4d\",\n            secondary: \"#757575\",\n            hint: \"#2a00ff\",\n            disabled: \"#666666\"\n        },\n        background: {\n            default: \"#f8f8f9\",\n            paper: \"#ffffff\"\n        },\n        success: {\n            main: \"#007461\",\n            color: \"#ffffff\"\n        },\n        error: {\n            main: \"#ca2320\"\n        },\n        info: {\n            main: \"#1a6ad6\"\n        },\n        warning: {\n            main: \"#bf4d00\"\n        }\n    },\n    typography: {\n        fontFamily: \"__RTBasis_b7f8e6, fantasy\",\n        fontWeightLight: 200,\n        fontSize: 16,\n        fontWeightRegular: 400,\n        body1: {\n            lineHeight: 1.3,\n            fontWeight: 400,\n            fontSize: 16,\n            paddingBottom: 8,\n            paddingTop: 8,\n            fontVariant: \"tabular-nums slashed-zero\"\n        },\n        h1: {\n            fontWeight: 700,\n            lineHeight: 1.2,\n            fontSize: 48,\n            color: \"#333333\",\n            paddingBottom: 8,\n            fontVariant: \"tabular-nums slashed-zero\",\n            fontFeatureSettings: \"ss01\",\n            fontVariationSettings: \"ss01\"\n        },\n        h2: {\n            fontWeight: 700,\n            lineHeight: 1.2,\n            fontSize: 32,\n            color: \"#333333\",\n            paddingBottom: 8,\n            fontVariant: \"tabular-nums slashed-zero\",\n            fontFeatureSettings: \"ss01\",\n            fontVariationSettings: \"ss01\"\n        },\n        h3: {\n            fontWeight: 700,\n            lineHeight: 1.2,\n            fontSize: 24,\n            color: \"#333333\",\n            paddingBottom: 8,\n            fontVariant: \"tabular-nums slashed-zero\",\n            fontFeatureSettings: \"ss01\",\n            fontVariationSettings: \"ss01\"\n        },\n        h4: {\n            fontWeight: 700,\n            fontSize: 20,\n            lineHeight: 1.2,\n            color: \"#333333\",\n            paddingBottom: 8,\n            fontVariant: \"tabular-nums slashed-zero\",\n            fontFeatureSettings: \"ss01\",\n            fontVariationSettings: \"ss01\"\n        },\n        h5: {\n            fontWeight: 700,\n            lineHeight: 1.2,\n            fontSize: 18,\n            color: \"#333333\",\n            paddingBottom: 8,\n            fontVariant: \"tabular-nums slashed-zero\",\n            fontFeatureSettings: \"ss01\",\n            fontVariationSettings: \"ss01\"\n        },\n        h6: {\n            fontWeight: 700,\n            lineHeight: 1.2,\n            fontSize: 16,\n            color: \"#333333\",\n            paddingBottom: 8,\n            fontVariant: \"tabular-nums slashed-zero\",\n            fontFeatureSettings: \"ss01\",\n            fontVariationSettings: \"ss01\"\n        },\n        subtitle1: {\n            fontWeight: 500,\n            lineHeight: 1.2,\n            fontSize: 16,\n            color: \"#4d4d4d\"\n        },\n        subtitle2: {\n            fontWeight: 500,\n            lineHeight: 1.2,\n            fontSize: 12.8,\n            color: \"#4d4d4d\"\n        },\n        button: {\n            fontWeight: 700,\n            lineHeight: 1.4,\n            textTransform: \"none\",\n            fontSize: 16\n        },\n        body2: {\n            fontSize: 14,\n            lineHeight: 1.2,\n            paddingTop: 8,\n            paddingBottom: 8\n        },\n        caption: {\n            fontSize: 12,\n            lineHeight: 1.2,\n            paddingBottom: 8,\n            paddingTop: 8,\n            letterSpacing: 0.24\n        },\n        overline: {\n            fontSize: 12,\n            lineHeight: 1.2,\n            letterSpacing: 0.5,\n            fontWeight: 500\n        }\n    },\n    props: {\n        MuiAppBar: {\n            color: \"inherit\"\n        },\n        MuiInputLabel: {\n            color: \"primary\"\n        }\n    },\n    overrides: {\n        MuiAppBar: {\n            colorInherit: {\n                backgroundColor: \"#689f38\",\n                color: \"#fff\"\n            }\n        }\n    },\n    shape: {\n        borderRadius: 8\n    },\n    components: {\n        MuiInputLabel: {\n            defaultProps: {\n                fontWeight: 700\n            }\n        },\n        MuiInput: {\n            defaultProps: {\n                classes: \"test\"\n            }\n        }\n    },\n    spacing: 8\n});\nfunction RootLayout(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n            lang: \"en\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                sx: {\n                    m: 0\n                },\n                className: (next_font_local_target_css_path_app_layout_tsx_import_arguments_src_path_RTBasis_Light_woff2_weight_200_style_normal_path_RTBasis_Regular_woff2_weight_400_style_normal_path_RTBasis_Medium_woff2_weight_500_style_normal_path_RTBasis_Bold_woff2_weight_700_style_normal_variableName_RTBasis___WEBPACK_IMPORTED_MODULE_5___default().className),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_bar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\David.Newman\\\\Desktop\\\\repos\\\\Material-UI\\\\my-app\\\\app\\\\layout.tsx\",\n                        lineNumber: 222,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\David.Newman\\\\Desktop\\\\repos\\\\Material-UI\\\\my-app\\\\app\\\\layout.tsx\",\n                        lineNumber: 223,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\David.Newman\\\\Desktop\\\\repos\\\\Material-UI\\\\my-app\\\\app\\\\layout.tsx\",\n                lineNumber: 221,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\David.Newman\\\\Desktop\\\\repos\\\\Material-UI\\\\my-app\\\\app\\\\layout.tsx\",\n            lineNumber: 219,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\David.Newman\\\\Desktop\\\\repos\\\\Material-UI\\\\my-app\\\\app\\\\layout.tsx\",\n        lineNumber: 218,\n        columnNumber: 5\n    }, this);\n}\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTztRQUNMQyxjQUFjO0lBQ2hCO0lBQ0FDLFlBQVk7UUFDVk4sZUFBZTtZQUNiTyxjQUFjO2dCQUNaN0IsWUFBWTtZQUNkO1FBQ0Y7UUFDQThCLFVBQVU7WUFDUkQsY0FBYztnQkFDWkUsU0FBUztZQUNYO1FBQ0Y7SUFDRjtJQUNBQyxTQUFTO0FBQ1g7QUFHZSxTQUFTQyxXQUFXLEtBSWxDO1FBSmtDLEVBQ2pDQyxRQUFRLEVBR1QsR0FKa0M7SUFLakMscUJBQ0UsOERBQUM3RCw0REFBYUE7UUFBQ0UsT0FBT0E7a0JBQ3RCLDRFQUFDNEQ7WUFBS0MsTUFBSztzQkFFUCw0RUFBQ0M7Z0JBQUtDLElBQUk7b0JBQUVDLEdBQUc7Z0JBQUU7Z0JBQUVDLFdBQVdyRSxrVkFBaUI7O2tDQUM3Qyw4REFBQ0csZ0RBQVNBOzs7OztrQ0FDUiw4REFBQ0s7a0NBQ0V1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mO0tBbkJ3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xheW91dC50c3g/OTk4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCAnLi9nbG9iYWxzLmNzcydcbmltcG9ydCBsb2NhbEZvbnQgZnJvbSAnbmV4dC9mb250L2xvY2FsJ1xuaW1wb3J0IHsgY3JlYXRlVGhlbWUsIFRoZW1lUHJvdmlkZXIsIHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCBSaW9BcHBCYXIgZnJvbSAnLi9hcHAtYmFyJztcbmltcG9ydCBSaW9UaGVtZSBmcm9tICcuL3Jpby10aGVtZSc7XG5jb25zdCBSVEJhc2lzID0gbG9jYWxGb250KHtcbiAgc3JjOiBbXG4gICAge1xuICAgICAgcGF0aDogJy4vUlRCYXNpcy1MaWdodC53b2ZmMicsXG4gICAgICB3ZWlnaHQ6ICcyMDAnLFxuICAgICAgc3R5bGU6ICdub3JtYWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy4vUlRCYXNpcy1SZWd1bGFyLndvZmYyJyxcbiAgICAgIHdlaWdodDogJzQwMCcsXG4gICAgICBzdHlsZTogJ25vcm1hbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnLi9SVEJhc2lzLU1lZGl1bS53b2ZmMicsXG4gICAgICB3ZWlnaHQ6ICc1MDAnLFxuICAgICAgc3R5bGU6ICdub3JtYWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy4vUlRCYXNpcy1Cb2xkLndvZmYyJyxcbiAgICAgIHdlaWdodDogJzcwMCcsXG4gICAgICBzdHlsZTogJ25vcm1hbCcsXG4gICAgfSxcbiAgXVxufSlcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBtb2RlOiAnbGlnaHQnLFxuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjNTgwNzIwJyxcbiAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnI2FlMDAyZicsXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICBwcmltYXJ5OiAnIzRkNGQ0ZCcsXG4gICAgICBzZWNvbmRhcnk6ICcjNzU3NTc1JyxcbiAgICAgIGhpbnQ6ICcjMmEwMGZmJyxcbiAgICAgIGRpc2FibGVkOiAnIzY2NjY2NicsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBkZWZhdWx0OiAnI2Y4ZjhmOScsXG4gICAgICBwYXBlcjogJyNmZmZmZmYnLFxuICAgIH0sXG4gICAgc3VjY2Vzczoge1xuICAgICAgbWFpbjogJyMwMDc0NjEnLFxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiAnI2NhMjMyMCcsXG4gICAgfSxcbiAgICBpbmZvOiB7XG4gICAgICBtYWluOiAnIzFhNmFkNicsXG4gICAgfSxcbiAgICB3YXJuaW5nOiB7XG4gICAgICBtYWluOiAnI2JmNGQwMCcsXG4gICAgfSxcbiAgfSxcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6ICdfX1JUQmFzaXNfYjdmOGU2LCBmYW50YXN5JyxcbiAgICBmb250V2VpZ2h0TGlnaHQ6IDIwMCxcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udFdlaWdodFJlZ3VsYXI6IDQwMCxcbiAgICBib2R5MToge1xuICAgICAgbGluZUhlaWdodDogMS4zLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgcGFkZGluZ0JvdHRvbTogOCxcbiAgICAgIHBhZGRpbmdUb3A6IDgsXG4gICAgICBmb250VmFyaWFudDogJ3RhYnVsYXItbnVtcyBzbGFzaGVkLXplcm8nLFxuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIGZvbnRTaXplOiA0OCxcbiAgICAgIGNvbG9yOiAnIzMzMzMzMycsXG4gICAgICBwYWRkaW5nQm90dG9tOiA4LFxuICAgICAgZm9udFZhcmlhbnQ6ICd0YWJ1bGFyLW51bXMgc2xhc2hlZC16ZXJvJyxcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6ICdzczAxJyxcbiAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogJ3NzMDEnLFxuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgIGNvbG9yOiAnIzMzMzMzMycsXG4gICAgICBwYWRkaW5nQm90dG9tOiA4LFxuICAgICAgZm9udFZhcmlhbnQ6ICd0YWJ1bGFyLW51bXMgc2xhc2hlZC16ZXJvJyxcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6ICdzczAxJyxcbiAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogJ3NzMDEnLFxuICAgIH0sXG4gICAgaDM6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgIGNvbG9yOiAnIzMzMzMzMycsXG4gICAgICBwYWRkaW5nQm90dG9tOiA4LFxuICAgICAgZm9udFZhcmlhbnQ6ICd0YWJ1bGFyLW51bXMgc2xhc2hlZC16ZXJvJyxcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6ICdzczAxJyxcbiAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogJ3NzMDEnLFxuICAgIH0sXG4gICAgaDQ6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIGNvbG9yOiAnIzMzMzMzMycsXG4gICAgICBwYWRkaW5nQm90dG9tOiA4LFxuICAgICAgZm9udFZhcmlhbnQ6ICd0YWJ1bGFyLW51bXMgc2xhc2hlZC16ZXJvJyxcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6ICdzczAxJyxcbiAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogJ3NzMDEnLFxuICAgIH0sXG4gICAgaDU6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIGZvbnRTaXplOiAxOCxcbiAgICAgIGNvbG9yOiAnIzMzMzMzMycsXG4gICAgICBwYWRkaW5nQm90dG9tOiA4LFxuICAgICAgZm9udFZhcmlhbnQ6ICd0YWJ1bGFyLW51bXMgc2xhc2hlZC16ZXJvJyxcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6ICdzczAxJyxcbiAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogJ3NzMDEnLFxuICAgIH0sXG4gICAgaDY6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgIGNvbG9yOiAnIzMzMzMzMycsXG4gICAgICBwYWRkaW5nQm90dG9tOiA4LFxuICAgICAgZm9udFZhcmlhbnQ6ICd0YWJ1bGFyLW51bXMgc2xhc2hlZC16ZXJvJyxcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6ICdzczAxJyxcbiAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogJ3NzMDEnLFxuICAgIH0sXG4gICAgc3VidGl0bGUxOiB7XG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBjb2xvcjogJyM0ZDRkNGQnLFxuICAgIH0sXG4gICAgc3VidGl0bGUyOiB7XG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgICBmb250U2l6ZTogMTIuOCxcbiAgICAgIGNvbG9yOiAnIzRkNGQ0ZCcsXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICB9LFxuICAgIGJvZHkyOiB7XG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgICBwYWRkaW5nVG9wOiA4LFxuICAgICAgcGFkZGluZ0JvdHRvbTogOCxcbiAgICB9LFxuICAgIGNhcHRpb246IHtcbiAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgIHBhZGRpbmdCb3R0b206IDgsXG4gICAgICBwYWRkaW5nVG9wOiA4LFxuICAgICAgbGV0dGVyU3BhY2luZzogMC4yNCxcbiAgICB9LFxuICAgIG92ZXJsaW5lOiB7XG4gICAgICBmb250U2l6ZTogMTIsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLjUsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgfSxcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBNdWlBcHBCYXI6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgfSxcbiAgICBNdWlJbnB1dExhYmVsOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIH0sXG4gIH0sXG4gIG92ZXJyaWRlczoge1xuICAgIE11aUFwcEJhcjoge1xuICAgICAgY29sb3JJbmhlcml0OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2ODlmMzgnLFxuICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBzaGFwZToge1xuICAgIGJvcmRlclJhZGl1czogOCxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIE11aUlucHV0TGFiZWw6IHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICB9XG4gICAgfSxcbiAgICBNdWlJbnB1dDoge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNsYXNzZXM6ICd0ZXN0JyxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBzcGFjaW5nOiA4LFxufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7XG4gIGNoaWxkcmVuLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59KSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIHtcbiAgICAgICAgPGJvZHkgc3g9e3sgbTogMCB9fWNsYXNzTmFtZT17UlRCYXNpcy5jbGFzc05hbWV9PlxuICAgICAgICAgIDxSaW9BcHBCYXIgLz5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIH1cbiAgICA8L2h0bWw+XG4gICA8L1RoZW1lUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSVEJhc2lzIiwiY3JlYXRlVGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiUmlvQXBwQmFyIiwidGhlbWUiLCJwYWxldHRlIiwibW9kZSIsInByaW1hcnkiLCJtYWluIiwiY29udHJhc3RUZXh0Iiwic2Vjb25kYXJ5IiwidGV4dCIsImhpbnQiLCJkaXNhYmxlZCIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicGFwZXIiLCJzdWNjZXNzIiwiY29sb3IiLCJlcnJvciIsImluZm8iLCJ3YXJuaW5nIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0TGlnaHQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHRSZWd1bGFyIiwiYm9keTEiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwiZm9udFZhcmlhbnQiLCJoMSIsImZvbnRGZWF0dXJlU2V0dGluZ3MiLCJmb250VmFyaWF0aW9uU2V0dGluZ3MiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2Iiwic3VidGl0bGUxIiwic3VidGl0bGUyIiwiYnV0dG9uIiwidGV4dFRyYW5zZm9ybSIsImJvZHkyIiwiY2FwdGlvbiIsImxldHRlclNwYWNpbmciLCJvdmVybGluZSIsInByb3BzIiwiTXVpQXBwQmFyIiwiTXVpSW5wdXRMYWJlbCIsIm92ZXJyaWRlcyIsImNvbG9ySW5oZXJpdCIsImJhY2tncm91bmRDb2xvciIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwiY29tcG9uZW50cyIsImRlZmF1bHRQcm9wcyIsIk11aUlucHV0IiwiY2xhc3NlcyIsInNwYWNpbmciLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJodG1sIiwibGFuZyIsImJvZHkiLCJzeCIsIm0iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.tsx\n"));

/***/ })

});