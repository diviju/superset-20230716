"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([["src_filters_components_TimeColumn_TimeColumnFilterPlugin_tsx"],{

/***/ "./src/filters/components/TimeColumn/TimeColumnFilterPlugin.tsx":
/*!**********************************************************************!*\
  !*** ./src/filters/components/TimeColumn/TimeColumnFilterPlugin.tsx ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PluginFilterTimeColumn)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ \"./node_modules/@babel/runtime-corejs3/helpers/esm/extends.js\");\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ \"./packages/superset-ui-core/src/utils/ensureIsArray.ts\");\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ \"./packages/superset-ui-core/src/query/types/QueryResponse.ts\");\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ \"./packages/superset-ui-core/src/translation/TranslatorSingleton.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components */ \"./src/components/index.ts\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ \"./src/filters/components/common.ts\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\nfunction PluginFilterTimeColumn(props) {\n  const { data, formData, height, width, setDataMask, setHoveredFilter, unsetHoveredFilter, setFocusedFilter, unsetFocusedFilter, setFilterActive, filterState, inputRef } = props;\n  const { defaultValue } = formData;\n  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue != null ? defaultValue : []);\n  const handleChange = (value) => {\n    const resultValue = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(value);\n    setValue(resultValue);\n    const extraFormData = {};\n    if (resultValue.length) {\n      extraFormData.granularity_sqla = resultValue[0];\n    }\n    setDataMask({\n      extraFormData,\n      filterState: {\n        value: resultValue.length ? resultValue : null\n      }\n    });\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    handleChange(defaultValue != null ? defaultValue : null);\n    // I think after Config Modal update some filter it re-creates default value for all other filters\n    // so we can process it like this `JSON.stringify` or start to use `Immer`\n  }, [JSON.stringify(defaultValue)]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {var _filterState$value;\n    handleChange((_filterState$value = filterState.value) != null ? _filterState$value : null);\n  }, [JSON.stringify(filterState.value)]);\n  const timeColumns = (data || []).filter((row) => row.dtype === _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.GenericDataType.TEMPORAL);\n  const placeholderText = timeColumns.length === 0 ?\n  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.t)('No time columns') :\n  (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.tn)('%s option', '%s options', timeColumns.length, timeColumns.length);\n  const formItemData = {};\n  if (filterState.validateMessage) {\n    formItemData.extra = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common__WEBPACK_IMPORTED_MODULE_2__.StatusMessage, { status: filterState.validateStatus },\n    filterState.validateMessage\n    );\n  }\n  const options = timeColumns.map((row) => {\n    const { column_name: columnName, verbose_name: verboseName } = row;\n    return {\n      label: verboseName != null ? verboseName : columnName,\n      value: columnName\n    };\n  });\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common__WEBPACK_IMPORTED_MODULE_2__.FilterPluginStyle, { height: height, width: width },\n  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common__WEBPACK_IMPORTED_MODULE_2__.StyledFormItem, (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ validateStatus: filterState.validateStatus }, formItemData),\n  (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(src_components__WEBPACK_IMPORTED_MODULE_1__.Select, { allowClear: true, value: value, placeholder: placeholderText\n    // @ts-ignore\n    , onChange: handleChange, onBlur: unsetFocusedFilter, onFocus: setFocusedFilter, onMouseEnter: setHoveredFilter, onMouseLeave: unsetHoveredFilter, ref: inputRef, options: options, onDropdownVisibleChange: setFilterActive })\n  )\n  );\n}__signature__(PluginFilterTimeColumn, \"useState{[value, setValue](defaultValue ?? [])}\\nuseEffect{}\\nuseEffect{}\");;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(PluginFilterTimeColumn, \"PluginFilterTimeColumn\", \"/app/superset-frontend/src/filters/components/TimeColumn/TimeColumnFilterPlugin.tsx\");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlsdGVycy9jb21wb25lbnRzL1RpbWVDb2x1bW4vVGltZUNvbHVtbkZpbHRlclBsdWdpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFPQTtBQUNBO0FBRUE7QUFHQTtBQUdBO0FBY0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFJQTtBQUlBO0FBQUE7QUFVQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcnNldC8uL3NyYy9maWx0ZXJzL2NvbXBvbmVudHMvVGltZUNvbHVtbi9UaW1lQ29sdW1uRmlsdGVyUGx1Z2luLnRzeD8xNjU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7XG4gIGVuc3VyZUlzQXJyYXksXG4gIEV4dHJhRm9ybURhdGEsXG4gIEdlbmVyaWNEYXRhVHlwZSxcbiAgdCxcbiAgdG4sXG59IGZyb20gJ0BzdXBlcnNldC11aS9jb3JlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnc3JjL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRm9ybUl0ZW1Qcm9wcyB9IGZyb20gJ2FudGQvbGliL2Zvcm0nO1xuaW1wb3J0IHsgRmlsdGVyUGx1Z2luU3R5bGUsIFN0eWxlZEZvcm1JdGVtLCBTdGF0dXNNZXNzYWdlIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IFBsdWdpbkZpbHRlclRpbWVDb2x1bW5Qcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbHVnaW5GaWx0ZXJUaW1lQ29sdW1uKFxuICBwcm9wczogUGx1Z2luRmlsdGVyVGltZUNvbHVtblByb3BzLFxuKSB7XG4gIGNvbnN0IHtcbiAgICBkYXRhLFxuICAgIGZvcm1EYXRhLFxuICAgIGhlaWdodCxcbiAgICB3aWR0aCxcbiAgICBzZXREYXRhTWFzayxcbiAgICBzZXRIb3ZlcmVkRmlsdGVyLFxuICAgIHVuc2V0SG92ZXJlZEZpbHRlcixcbiAgICBzZXRGb2N1c2VkRmlsdGVyLFxuICAgIHVuc2V0Rm9jdXNlZEZpbHRlcixcbiAgICBzZXRGaWx0ZXJBY3RpdmUsXG4gICAgZmlsdGVyU3RhdGUsXG4gICAgaW5wdXRSZWYsXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgeyBkZWZhdWx0VmFsdWUgfSA9IGZvcm1EYXRhO1xuXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nW10+KGRlZmF1bHRWYWx1ZSA/PyBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbHVlPzogc3RyaW5nW10gfCBzdHJpbmcgfCBudWxsKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0VmFsdWU6IHN0cmluZ1tdID0gZW5zdXJlSXNBcnJheTxzdHJpbmc+KHZhbHVlKTtcbiAgICBzZXRWYWx1ZShyZXN1bHRWYWx1ZSk7XG4gICAgY29uc3QgZXh0cmFGb3JtRGF0YTogRXh0cmFGb3JtRGF0YSA9IHt9O1xuICAgIGlmIChyZXN1bHRWYWx1ZS5sZW5ndGgpIHtcbiAgICAgIGV4dHJhRm9ybURhdGEuZ3JhbnVsYXJpdHlfc3FsYSA9IHJlc3VsdFZhbHVlWzBdO1xuICAgIH1cblxuICAgIHNldERhdGFNYXNrKHtcbiAgICAgIGV4dHJhRm9ybURhdGEsXG4gICAgICBmaWx0ZXJTdGF0ZToge1xuICAgICAgICB2YWx1ZTogcmVzdWx0VmFsdWUubGVuZ3RoID8gcmVzdWx0VmFsdWUgOiBudWxsLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZUNoYW5nZShkZWZhdWx0VmFsdWUgPz8gbnVsbCk7XG4gICAgLy8gSSB0aGluayBhZnRlciBDb25maWcgTW9kYWwgdXBkYXRlIHNvbWUgZmlsdGVyIGl0IHJlLWNyZWF0ZXMgZGVmYXVsdCB2YWx1ZSBmb3IgYWxsIG90aGVyIGZpbHRlcnNcbiAgICAvLyBzbyB3ZSBjYW4gcHJvY2VzcyBpdCBsaWtlIHRoaXMgYEpTT04uc3RyaW5naWZ5YCBvciBzdGFydCB0byB1c2UgYEltbWVyYFxuICB9LCBbSlNPTi5zdHJpbmdpZnkoZGVmYXVsdFZhbHVlKV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlQ2hhbmdlKGZpbHRlclN0YXRlLnZhbHVlID8/IG51bGwpO1xuICB9LCBbSlNPTi5zdHJpbmdpZnkoZmlsdGVyU3RhdGUudmFsdWUpXSk7XG5cbiAgY29uc3QgdGltZUNvbHVtbnMgPSAoZGF0YSB8fCBbXSkuZmlsdGVyKFxuICAgIHJvdyA9PiByb3cuZHR5cGUgPT09IEdlbmVyaWNEYXRhVHlwZS5URU1QT1JBTCxcbiAgKTtcblxuICBjb25zdCBwbGFjZWhvbGRlclRleHQgPVxuICAgIHRpbWVDb2x1bW5zLmxlbmd0aCA9PT0gMFxuICAgICAgPyB0KCdObyB0aW1lIGNvbHVtbnMnKVxuICAgICAgOiB0bignJXMgb3B0aW9uJywgJyVzIG9wdGlvbnMnLCB0aW1lQ29sdW1ucy5sZW5ndGgsIHRpbWVDb2x1bW5zLmxlbmd0aCk7XG5cbiAgY29uc3QgZm9ybUl0ZW1EYXRhOiBGb3JtSXRlbVByb3BzID0ge307XG4gIGlmIChmaWx0ZXJTdGF0ZS52YWxpZGF0ZU1lc3NhZ2UpIHtcbiAgICBmb3JtSXRlbURhdGEuZXh0cmEgPSAoXG4gICAgICA8U3RhdHVzTWVzc2FnZSBzdGF0dXM9e2ZpbHRlclN0YXRlLnZhbGlkYXRlU3RhdHVzfT5cbiAgICAgICAge2ZpbHRlclN0YXRlLnZhbGlkYXRlTWVzc2FnZX1cbiAgICAgIDwvU3RhdHVzTWVzc2FnZT5cbiAgICApO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHRpbWVDb2x1bW5zLm1hcChcbiAgICAocm93OiB7IGNvbHVtbl9uYW1lOiBzdHJpbmc7IHZlcmJvc2VfbmFtZTogc3RyaW5nIHwgbnVsbCB9KSA9PiB7XG4gICAgICBjb25zdCB7IGNvbHVtbl9uYW1lOiBjb2x1bW5OYW1lLCB2ZXJib3NlX25hbWU6IHZlcmJvc2VOYW1lIH0gPSByb3c7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYWJlbDogdmVyYm9zZU5hbWUgPz8gY29sdW1uTmFtZSxcbiAgICAgICAgdmFsdWU6IGNvbHVtbk5hbWUsXG4gICAgICB9O1xuICAgIH0sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8RmlsdGVyUGx1Z2luU3R5bGUgaGVpZ2h0PXtoZWlnaHR9IHdpZHRoPXt3aWR0aH0+XG4gICAgICA8U3R5bGVkRm9ybUl0ZW1cbiAgICAgICAgdmFsaWRhdGVTdGF0dXM9e2ZpbHRlclN0YXRlLnZhbGlkYXRlU3RhdHVzfVxuICAgICAgICB7Li4uZm9ybUl0ZW1EYXRhfVxuICAgICAgPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgYWxsb3dDbGVhclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJUZXh0fVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uQmx1cj17dW5zZXRGb2N1c2VkRmlsdGVyfVxuICAgICAgICAgIG9uRm9jdXM9e3NldEZvY3VzZWRGaWx0ZXJ9XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtzZXRIb3ZlcmVkRmlsdGVyfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17dW5zZXRIb3ZlcmVkRmlsdGVyfVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZT17c2V0RmlsdGVyQWN0aXZlfVxuICAgICAgICAvPlxuICAgICAgPC9TdHlsZWRGb3JtSXRlbT5cbiAgICA8L0ZpbHRlclBsdWdpblN0eWxlPlxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/filters/components/TimeColumn/TimeColumnFilterPlugin.tsx\n");

/***/ }),

/***/ "./src/filters/components/common.ts":
/*!******************************************!*\
  !*** ./src/filters/components/common.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FilterPluginStyle: () => (/* binding */ FilterPluginStyle),\n/* harmony export */   StatusMessage: () => (/* binding */ StatusMessage),\n/* harmony export */   StyledFormItem: () => (/* binding */ StyledFormItem)\n/* harmony export */ });\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @superset-ui/core */ \"./packages/superset-ui-core/src/style/index.tsx\");\n/* harmony import */ var _components_Form_FormItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Form/FormItem */ \"./src/components/Form/FormItem.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\nconst FilterPluginStyle = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__.styled.div`\n  min-height: ${(_ref) => {let { height } = _ref;return height;}}px;\n  width: ${(_ref2) => {let { width } = _ref2;return width;}}px;\n`;\nconst StyledFormItem = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__.styled)((0,_components_Form_FormItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"]))`\n  &.ant-row.ant-form-item {\n    margin: 0;\n  }\n`;\nconst StatusMessage = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__.styled.div`\n  color: ${(_ref3) => {var _theme$colors$status;let { theme, status = 'error' } = _ref3;return (_theme$colors$status = theme.colors[status]) == null ? void 0 : _theme$colors$status.base;}};\n`;;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(FilterPluginStyle, \"FilterPluginStyle\", \"/app/superset-frontend/src/filters/components/common.ts\");reactHotLoader.register(StyledFormItem, \"StyledFormItem\", \"/app/superset-frontend/src/filters/components/common.ts\");reactHotLoader.register(StatusMessage, \"StatusMessage\", \"/app/superset-frontend/src/filters/components/common.ts\");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlsdGVycy9jb21wb25lbnRzL2NvbW1vbi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUVBO0FBR0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N1cGVyc2V0Ly4vc3JjL2ZpbHRlcnMvY29tcG9uZW50cy9jb21tb24udHM/NGM4OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAc3VwZXJzZXQtdWkvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW5GaWx0ZXJTdHlsZXNQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IEZvcm1JdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9ybS9Gb3JtSXRlbSc7XG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJQbHVnaW5TdHlsZSA9IHN0eWxlZC5kaXY8UGx1Z2luRmlsdGVyU3R5bGVzUHJvcHM+YFxuICBtaW4taGVpZ2h0OiAkeyh7IGhlaWdodCB9KSA9PiBoZWlnaHR9cHg7XG4gIHdpZHRoOiAkeyh7IHdpZHRoIH0pID0+IHdpZHRofXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZvcm1JdGVtID0gc3R5bGVkKEZvcm1JdGVtKWBcbiAgJi5hbnQtcm93LmFudC1mb3JtLWl0ZW0ge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0YXR1c01lc3NhZ2UgPSBzdHlsZWQuZGl2PHtcbiAgc3RhdHVzPzogJ2Vycm9yJyB8ICd3YXJuaW5nJyB8ICdpbmZvJztcbn0+YFxuICBjb2xvcjogJHsoeyB0aGVtZSwgc3RhdHVzID0gJ2Vycm9yJyB9KSA9PiB0aGVtZS5jb2xvcnNbc3RhdHVzXT8uYmFzZX07XG5gO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/filters/components/common.ts\n");

/***/ })

}]);