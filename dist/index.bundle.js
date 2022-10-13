"use strict";
(self["webpackChunkpokemon_game"] = self["webpackChunkpokemon_game"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Press Start 2P', cursive;\n}\n\nbody {\n    background-color: black;\n    display: flex;\n    justify-content: center;\n}\n\n#siteWrap {\n    display: inline-block;\n    position: relative;\n    margin: .5rem;\n}\n\n#overlapWrap {\n    position: absolute;\n    background-color: black;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n    opacity: 0;\n    z-index: 10;\n}\n\n#battleWrap {\n    display: none\n}\n\n#battleInterface {\n    position: absolute;\n    background-color: white;\n    height: 140px;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border-top: 4px black solid;\n    display: flex;\n}\n\n#battleContent {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: white;\n    padding: 12px;\n    display: none;\n    cursor: pointer;\n}\n\n#attacks {\n    width: 66.66%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n}\n\n#attacks button {\n    border: 1px solid black;\n    font-size: 16px;\n}\n#attacks button:hover {\n    background-color: #ddd;\n    cursor: pointer;\n}\n\n#attackType {\n    width: 33.33%;\n    border-left: 4px black solid;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#attackType h1 {\n    font-size: 16px;\n}\n\n.health {\n    position: absolute;\n    background-color: white;\n    width: 250px;\n    border: 4px solid black;\n    padding: 12px;\n}\n#healthMon1 {\n    top: 50px;\n    left: 50px;\n}\n#healthMon2 {\n    bottom: 190px;\n    right: 50px;\n}\n.health h2 {\n    font-size: 16px;\n}\n\n.healthBarWrap {\n    position: relative;\n}\n\n.healthBar {\n    height: 5px;\n}\n.fullHealth {\n    margin-top: 10px;\n    background-color: #ccc;\n}\n.currHealth {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: green;\n}\n#currHealthEnemy {\n    width: 100%;\n}\n#currHealthPlayer {\n    width: 100%;\n}\n\n#gameInstructions {\n    color: white;\n    margin-top: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;IACT,sCAAsC;AAC1C;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,oBAAoB;IACpB,UAAU;IACV,WAAW;AACf;;AAEA;IACI;AACJ;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;IACb,SAAS;IACT,OAAO;IACP,QAAQ;IACR,2BAA2B;IAC3B,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,qCAAqC;AACzC;;AAEA;IACI,uBAAuB;IACvB,eAAe;AACnB;AACA;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,uBAAuB;IACvB,aAAa;AACjB;AACA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,sBAAsB;AAC1B;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;IACR,uBAAuB;AAC3B;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB","sourcesContent":["*, *::before, *::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Press Start 2P', cursive;\n}\n\nbody {\n    background-color: black;\n    display: flex;\n    justify-content: center;\n}\n\n#siteWrap {\n    display: inline-block;\n    position: relative;\n    margin: .5rem;\n}\n\n#overlapWrap {\n    position: absolute;\n    background-color: black;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n    opacity: 0;\n    z-index: 10;\n}\n\n#battleWrap {\n    display: none\n}\n\n#battleInterface {\n    position: absolute;\n    background-color: white;\n    height: 140px;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border-top: 4px black solid;\n    display: flex;\n}\n\n#battleContent {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: white;\n    padding: 12px;\n    display: none;\n    cursor: pointer;\n}\n\n#attacks {\n    width: 66.66%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n}\n\n#attacks button {\n    border: 1px solid black;\n    font-size: 16px;\n}\n#attacks button:hover {\n    background-color: #ddd;\n    cursor: pointer;\n}\n\n#attackType {\n    width: 33.33%;\n    border-left: 4px black solid;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#attackType h1 {\n    font-size: 16px;\n}\n\n.health {\n    position: absolute;\n    background-color: white;\n    width: 250px;\n    border: 4px solid black;\n    padding: 12px;\n}\n#healthMon1 {\n    top: 50px;\n    left: 50px;\n}\n#healthMon2 {\n    bottom: 190px;\n    right: 50px;\n}\n.health h2 {\n    font-size: 16px;\n}\n\n.healthBarWrap {\n    position: relative;\n}\n\n.healthBar {\n    height: 5px;\n}\n.fullHealth {\n    margin-top: 10px;\n    background-color: #ccc;\n}\n.currHealth {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: green;\n}\n#currHealthEnemy {\n    width: 100%;\n}\n#currHealthPlayer {\n    width: 100%;\n}\n\n#gameInstructions {\n    color: white;\n    margin-top: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/data/audio/battle.mp3":
/*!***********************************!*\
  !*** ./src/data/audio/battle.mp3 ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0047da0265f446b8d5bc4cfee5529631.mp3");

/***/ }),

/***/ "./src/data/audio/fireballHit.wav":
/*!****************************************!*\
  !*** ./src/data/audio/fireballHit.wav ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c7dd5376f8788a7c0c34364a7fac189f.wav");

/***/ }),

/***/ "./src/data/audio/initBattle.wav":
/*!***************************************!*\
  !*** ./src/data/audio/initBattle.wav ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8a9c4032207228ec964cc08169fe0fb1.wav");

/***/ }),

/***/ "./src/data/audio/initFireball.wav":
/*!*****************************************!*\
  !*** ./src/data/audio/initFireball.wav ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c88d03559c8c3b28b1058c6dfa72c27a.wav");

/***/ }),

/***/ "./src/data/audio/map.wav":
/*!********************************!*\
  !*** ./src/data/audio/map.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "1079bd1c9c01b13cccb0dfae9650967e.wav");

/***/ }),

/***/ "./src/data/audio/tackleHit.wav":
/*!**************************************!*\
  !*** ./src/data/audio/tackleHit.wav ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "6bb08dcc48eff766ae7a1e8a5f30f859.wav");

/***/ }),

/***/ "./src/data/audio/victory.wav":
/*!************************************!*\
  !*** ./src/data/audio/victory.wav ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "67b1813c9c4a45d4f71774ad7bbaf815.wav");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/battleScene.js":
/*!****************************!*\
  !*** ./src/battleScene.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animateBattle": () => (/* binding */ animateBattle),
/* harmony export */   "initBattle": () => (/* binding */ initBattle)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _data_audio_audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/audio/audio */ "./src/data/audio/audio.js");
/* harmony import */ var _data_attacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/attacks */ "./src/data/attacks.js");
/* harmony import */ var _data_monsters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/monsters */ "./src/data/monsters.js");
/* harmony import */ var _img_game_assets_battleBackground_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/game_assets/battleBackground.png */ "./src/img/game_assets/battleBackground.png");







const battleBackgroundImg = new Image();
battleBackgroundImg.src = _img_game_assets_battleBackground_png__WEBPACK_IMPORTED_MODULE_5__;
const battleBackground = new _classes__WEBPACK_IMPORTED_MODULE_1__.Sprite({
	position: {
		x: 0,
		y: 0,
	},
	image: battleBackgroundImg,
});

let draggle;
let emby;
let renderedSprites;
let battleAnimationId;
let queue;
const endBattle = () => {
	gsap.to("#overlapWrap", {
		opacity: 1,
		onComplete: () => {
			window.cancelAnimationFrame(battleAnimationId);
			(0,_index__WEBPACK_IMPORTED_MODULE_0__.animate)();
			document.querySelector("#battleWrap").style.display = "none";

			gsap.to("#overlapWrap", {
				opacity: 0,
			});

			_index__WEBPACK_IMPORTED_MODULE_0__.battle.initiated = false;
			_data_audio_audio__WEBPACK_IMPORTED_MODULE_2__.audio.map.play();
		},
	});
};

function initBattle() {
	document.querySelector("#battleWrap").style.display = "block";
	document.querySelector("#battleContent").style.display = "none";
	document.querySelector("#currHealthEnemy").style.width = "100%";
	document.querySelector("#currHealthPlayer").style.width = "100%";
	document.querySelector("#attacks").replaceChildren();

	draggle = new _classes__WEBPACK_IMPORTED_MODULE_1__.Monster(_data_monsters__WEBPACK_IMPORTED_MODULE_4__.monstersData.Draggle);
	emby = new _classes__WEBPACK_IMPORTED_MODULE_1__.Monster(_data_monsters__WEBPACK_IMPORTED_MODULE_4__.monstersData.Emby);
	renderedSprites = [draggle, emby];
	queue = [];

	for (const attack of emby.attacks) {
		const button = document.createElement("button");
		button.innerHTML = attack.name;
		button.classList.add("attack");
		document.querySelector("#attacks").append(button);
	}

	document.querySelectorAll(".attack").forEach((button) => {
		button.addEventListener("click", (e) => {
			const targetAttack = _data_attacks__WEBPACK_IMPORTED_MODULE_3__.attacks[e.currentTarget.innerHTML];

			emby.attack({
				attack: targetAttack,
				recipient: draggle,
				renderedSprites,
			});

			// enemy attacks
			if (draggle.health <= 0) {
				queue.push(() => {
					draggle.faint();
				});

				queue.push(endBattle);
				// return;
			}

			const randomAttackIndex = Math.floor(
				Math.random() * draggle.attacks.length
			);
			const randomAttack = draggle.attacks[randomAttackIndex];
			queue.push(() => {
				draggle.attack({
					attack: randomAttack,
					recipient: emby,
					renderedSprites,
				});

				if (emby.health <= 0) {
					queue.push(() => {
						emby.faint();
					});

					queue.push(endBattle);
				}
			});
		});

		button.addEventListener("mouseenter", (e) => {
			const targetAttack = _data_attacks__WEBPACK_IMPORTED_MODULE_3__.attacks[e.currentTarget.innerHTML];
			document.querySelector("#attackTypeText").textContent = targetAttack.type;
			document.querySelector("#attackTypeText").style.color =
				targetAttack.color;
		});

		button.addEventListener("mouseleave", () => {
			document.querySelector("#attackTypeText").textContent = "Attack Type";
			document.querySelector("#attackTypeText").style.color = "black";
		});
	});
}

function animateBattle() {
	battleAnimationId = window.requestAnimationFrame(animateBattle);
	battleBackground.draw();

	for (const sprite of renderedSprites) {
		sprite.draw();
	}
}

document.querySelector("#battleContent").addEventListener("click", (e) => {
	if (queue.length > 0) {
		queue[0]();
		queue.shift();
	} else e.currentTarget.style.display = "none";
});


/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boundary": () => (/* binding */ Boundary),
/* harmony export */   "Monster": () => (/* binding */ Monster),
/* harmony export */   "Sprite": () => (/* binding */ Sprite)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _data_audio_audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/audio/audio */ "./src/data/audio/audio.js");
/* harmony import */ var _img_game_assets_fireball_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/game_assets/fireball.png */ "./src/img/game_assets/fireball.png");




class Sprite {
	constructor({
		position,
		image,
		frames = { max: 1, hold: 10 },
		sprites,
		animate = false,
		rotation = 0,
		velocity,
	}) {
		this.position = position;
		this.image = new Image();
		this.frames = { ...frames, val: 0, elapsed: 0 };
		this.image.onload = () => {
			this.width = this.image.width / this.frames.max;
			this.height = this.image.height;
		};
		this.image.src = image.src;
		this.animate = animate;
		this.sprites = sprites;
		this.opacity = 1;
		this.rotation = rotation;
	}

	draw() {
		_index__WEBPACK_IMPORTED_MODULE_0__.c.save();
		_index__WEBPACK_IMPORTED_MODULE_0__.c.translate(
			this.position.x + this.width / 2,
			this.position.y + this.height / 2
		);
		_index__WEBPACK_IMPORTED_MODULE_0__.c.rotate(this.rotation);
		_index__WEBPACK_IMPORTED_MODULE_0__.c.translate(
			-this.position.x - this.width / 2,
			-this.position.y - this.height / 2
		);
		_index__WEBPACK_IMPORTED_MODULE_0__.c.globalAlpha = this.opacity;
		_index__WEBPACK_IMPORTED_MODULE_0__.c.drawImage(
			this.image,
			// image crop arguments
			this.frames.val * this.width,
			0,
			this.image.width / this.frames.max,
			this.image.height,
			// onscreen position
			this.position.x,
			this.position.y,
			// onscreen render frame
			this.image.width / this.frames.max,
			this.image.height
		);
		_index__WEBPACK_IMPORTED_MODULE_0__.c.restore();

		if (!this.animate) return;

		if (this.frames.max > 1) {
			this.frames.elapsed++;
		}

		if (this.frames.elapsed % this.frames.hold === 0) {
			if (this.frames.val < this.frames.max - 1) this.frames.val++;
			else this.frames.val = 0;
		}
	}
}

class Boundary {
	// 48 px = 400% zoom on our original 12px x 12px grids
	static width = 48;
	static height = 48;
	constructor({ position }) {
		this.position = position;
		this.width = 48;
		this.height = 48;
	}

	draw() {
		_index__WEBPACK_IMPORTED_MODULE_0__.c.fillStyle = "rgba(255,0,0, 0)";
		_index__WEBPACK_IMPORTED_MODULE_0__.c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}

class Monster extends Sprite {
	constructor({
		name,
		isEnemy = false,
		attacks,
		// future params
		type,
		defense,
		attackPower,
		// sprite parameters
		position,
		image,
		frames = { max: 1, hold: 10 },
		sprites,
		animate = false,
		rotation = 0,
		velocity,
	}) {
		super({
			position,
			image,
			frames,
			sprites,
			animate,
			rotation,
			velocity,
		});
		this.name = name;
		this.health = 100;
		this.attacks = attacks;
		this.isEnemy = isEnemy;
		// future props to implements
		this.type = type;
		this.defense = defense;
		this.attackPower = attackPower;
		// Sprite props
	}

	attack({ attack, recipient, renderedSprites }) {
		document.querySelector("#battleContent").style.display = "block";
		document.querySelector(
			"#battleContent"
		).textContent = `${this.name} used ${attack.name}`;

		let healthBar = "#currHealthEnemy";
		if (this.isEnemy) healthBar = "#currHealthPlayer";

		recipient.health -= attack.damage;
		if (recipient.health < 1) recipient.health = 0;

		let rotation = 1;
		if (this.isEnemy) rotation = -2.2;

		switch (attack.name) {
			case "Tackle":
				const tl = gsap.timeline();

				let movementDistance = 10;
				if (this.isEnemy) movementDistance = -10;

				tl.to(this.position, {
					x: this.position.x - movementDistance * 2,
				})
					.to(this.position, {
						x: this.position.x + movementDistance * 4,
						y: this.position.y - movementDistance,
						duration: 0.1,
						onComplete: () => {
							// enemy gets hit
							_data_audio_audio__WEBPACK_IMPORTED_MODULE_1__.audio.tackleHit.play();
							gsap.to(healthBar, {
								width: recipient.health + "%",
							});

							gsap.to(recipient.position, {
								x: recipient.position.x + 10,
								yoyo: true,
								repeat: 5,
								duration: 0.08,
							});

							gsap.to(recipient, {
								opacity: 0,
								repeat: 5,
								yoyo: true,
								duration: 0.08,
							});
						},
					})
					.to(this.position, {
						x: this.position.x,
						y: this.position.y,
					});

				break;
			case "Fireball":
				_data_audio_audio__WEBPACK_IMPORTED_MODULE_1__.audio.initFireball.play();
				const fireballImg = new Image();
				fireballImg.src = _img_game_assets_fireball_png__WEBPACK_IMPORTED_MODULE_2__;
				const fireball = new Sprite({
					position: {
						x: this.position.x,
						y: this.position.y,
					},
					image: fireballImg,
					frames: {
						max: 4,
						hold: 10,
					},
					animate: true,
					rotation,
				});
				renderedSprites.splice(1, 0, fireball);

				gsap.to(fireball.position, {
					x: recipient.position.x,
					y: recipient.position.y,
					onComplete: () => {
						// enemy gets hit
						_data_audio_audio__WEBPACK_IMPORTED_MODULE_1__.audio.fireballHit.play();

						gsap.to(healthBar, {
							width: recipient.health + "%",
						});

						gsap.to(recipient.position, {
							x: recipient.position.x + 10,
							yoyo: true,
							repeat: 5,
							duration: 0.08,
						});

						gsap.to(recipient, {
							opacity: 0,
							repeat: 5,
							yoyo: true,
							duration: 0.08,
						});
						renderedSprites.splice(1, 1);
					},
				});

				break;
		}
	}

	faint() {
		document.querySelector(
			"#battleContent"
		).innerHTML = `${this.name} fainted!`;
		gsap.to(this.position, {
			y: this.position.y + 20,
		});
		gsap.to(this, {
			opacity: 0,
		});
		_data_audio_audio__WEBPACK_IMPORTED_MODULE_1__.audio.battle.stop();
		_data_audio_audio__WEBPACK_IMPORTED_MODULE_1__.audio.victory.play();
	}
}

class Attack {
	constructor({ name, type, damage, amount = 10 }) {
		this.name = name;
		this.type = type;
		this.damage = damage;
		this.amount = amount;
	}
}




/***/ }),

/***/ "./src/data/attacks.js":
/*!*****************************!*\
  !*** ./src/data/attacks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attacks": () => (/* binding */ attacks)
/* harmony export */ });
const attacks = {
	Tackle: {
		name: "Tackle",
		damage: 10,
		type: "Normal",
		color: "black",
	},
	Fireball: {
		name: "Fireball",
		damage: 25,
		type: "Fire",
		color: "red",
	},
};


/***/ }),

/***/ "./src/data/audio/audio.js":
/*!*********************************!*\
  !*** ./src/data/audio/audio.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audio": () => (/* binding */ audio)
/* harmony export */ });
/* harmony import */ var _map_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.wav */ "./src/data/audio/map.wav");
/* harmony import */ var _initBattle_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initBattle.wav */ "./src/data/audio/initBattle.wav");
/* harmony import */ var _battle_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./battle.mp3 */ "./src/data/audio/battle.mp3");
/* harmony import */ var _tackleHit_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tackleHit.wav */ "./src/data/audio/tackleHit.wav");
/* harmony import */ var _initFireball_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initFireball.wav */ "./src/data/audio/initFireball.wav");
/* harmony import */ var _fireballHit_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fireballHit.wav */ "./src/data/audio/fireballHit.wav");
/* harmony import */ var _victory_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./victory.wav */ "./src/data/audio/victory.wav");








const audio = {
	map: new Howl({
		src: _map_wav__WEBPACK_IMPORTED_MODULE_0__["default"],
		html5: true,
		volume: 0.1,
	}),
	initBattle: new Howl({
		src: _initBattle_wav__WEBPACK_IMPORTED_MODULE_1__["default"],
		html5: true,
		volume: 0.01,
	}),
	battle: new Howl({
		src: _battle_mp3__WEBPACK_IMPORTED_MODULE_2__["default"],
		html5: true,
		volume: 0.05,
	}),
	tackleHit: new Howl({
		src: _tackleHit_wav__WEBPACK_IMPORTED_MODULE_3__["default"],
		html5: true,
		volume: 0.01,
	}),
	initFireball: new Howl({
		src: _initFireball_wav__WEBPACK_IMPORTED_MODULE_4__["default"],
		html5: true,
		volume: 0.05,
	}),
	fireballHit: new Howl({
		src: _fireballHit_wav__WEBPACK_IMPORTED_MODULE_5__["default"],
		html5: true,
		volume: 0.05,
	}),
	victory: new Howl({
		src: _victory_wav__WEBPACK_IMPORTED_MODULE_6__["default"],
		html5: true,
		volume: 0.05,
	}),
};




/***/ }),

/***/ "./src/data/battleData.js":
/*!********************************!*\
  !*** ./src/data/battleData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "battleZonesData": () => (/* binding */ battleZonesData)
/* harmony export */ });
const battleZonesData = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025,
	1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025,
	1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025,
	1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025,
	1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0,
	1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025,
	1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025,
	1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025,
	1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025,
	1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025,
	1025, 1025, 1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0,
	0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 1025, 1025,
	1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025,
	1025, 1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0,
	1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 1025, 1025, 1025,
	1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 1025,
	1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025,
	0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025,
	1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025,
	1025, 1025, 1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025,
	1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025,
	1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];


/***/ }),

/***/ "./src/data/collisionData.js":
/*!***********************************!*\
  !*** ./src/data/collisionData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collisions": () => (/* binding */ collisions)
/* harmony export */ });
const collisions = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 1025, 0,
	1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 1025, 1025, 0, 0,
	1025, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0,
	1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0,
	1025, 1025, 0, 0, 1025, 1025, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0,
	1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 1025, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 1025,
	0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025,
	1025, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025,
	1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 1025, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0,
	1025, 1025, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 1025,
	1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0,
	0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025,
	1025, 1025, 1025, 1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025,
	0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025,
	1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 1025, 1025, 0, 0,
	1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1025, 0, 1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0,
	1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0,
	0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0,
	1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 1025,
	1025, 1025, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025,
	1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 1025, 0, 0, 0, 0, 0,
	0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 1025, 1025, 0, 0, 1025,
	1025, 1025, 1025, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0,
	1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 1025, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 1025, 1025, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025,
	1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 1025,
	1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0,
	1025, 1025, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025,
	0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 1025, 1025,
	1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 0, 0, 1025, 0, 0,
	0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025,
	1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 1025, 1025, 1025,
	1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0,
	0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0,
	0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025,
	0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025,
	1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025,
	1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025,
	1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0,
	0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 1025, 1025, 1025, 0, 0,
	0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 0,
	1025, 0, 0, 0, 0, 1025, 1025, 1025, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1025, 0, 0, 0, 1025, 1025, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 1025,
	0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0,
];


/***/ }),

/***/ "./src/data/monsters.js":
/*!******************************!*\
  !*** ./src/data/monsters.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "monstersData": () => (/* binding */ monstersData)
/* harmony export */ });
/* harmony import */ var _attacks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attacks */ "./src/data/attacks.js");
/* harmony import */ var _img_game_assets_embySprite_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/game_assets/embySprite.png */ "./src/img/game_assets/embySprite.png");
/* harmony import */ var _img_game_assets_draggleSprite_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/game_assets/draggleSprite.png */ "./src/img/game_assets/draggleSprite.png");





const monstersData = {
	Emby: {
		position: {
			x: 280,
			y: 325,
		},
		image: {
			src: _img_game_assets_embySprite_png__WEBPACK_IMPORTED_MODULE_1__,
		},
		frames: {
			max: 4,
			hold: 30,
		},
		animate: true,
		name: "Emby",
		attacks: [_attacks__WEBPACK_IMPORTED_MODULE_0__.attacks.Tackle, _attacks__WEBPACK_IMPORTED_MODULE_0__.attacks.Fireball],
	},
	Draggle: {
		position: {
			x: 800,
			y: 100,
		},
		image: {
			src: _img_game_assets_draggleSprite_png__WEBPACK_IMPORTED_MODULE_2__,
		},
		frames: {
			max: 4,
			hold: 30,
		},
		animate: true,
		isEnemy: true,
		name: "Draggle",
		attacks: [_attacks__WEBPACK_IMPORTED_MODULE_0__.attacks.Tackle, _attacks__WEBPACK_IMPORTED_MODULE_0__.attacks.Fireball],
	},
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animate": () => (/* binding */ animate),
/* harmony export */   "battle": () => (/* binding */ battle),
/* harmony export */   "c": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_game_assets_pokemonGameMap400_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/game_assets/pokemonGameMap400.png */ "./src/img/game_assets/pokemonGameMap400.png");
/* harmony import */ var _img_game_assets_pokemonGameMapFOREGROUND_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/game_assets/pokemonGameMapFOREGROUND.png */ "./src/img/game_assets/pokemonGameMapFOREGROUND.png");
/* harmony import */ var _img_game_assets_playerDown_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/game_assets/playerDown.png */ "./src/img/game_assets/playerDown.png");
/* harmony import */ var _img_game_assets_playerUp_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/game_assets/playerUp.png */ "./src/img/game_assets/playerUp.png");
/* harmony import */ var _img_game_assets_playerLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/game_assets/playerLeft.png */ "./src/img/game_assets/playerLeft.png");
/* harmony import */ var _img_game_assets_playerRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/game_assets/playerRight.png */ "./src/img/game_assets/playerRight.png");
/* harmony import */ var _battleScene__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./battleScene */ "./src/battleScene.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _data_audio_audio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data/audio/audio */ "./src/data/audio/audio.js");
/* harmony import */ var _data_battleData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/battleData */ "./src/data/battleData.js");
/* harmony import */ var _data_collisionData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/collisionData */ "./src/data/collisionData.js");













function log(input) {
	console.log(input);
}

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d"); // c refers to context

canvas.width = 1024;
canvas.height = 576;

let collisionsMap = [];
for (let i = 0; i < _data_collisionData__WEBPACK_IMPORTED_MODULE_11__.collisions.length; i += 70) {
	collisionsMap.push(_data_collisionData__WEBPACK_IMPORTED_MODULE_11__.collisions.slice(i, i + 70));
}

let battleZonesMap = [];
for (let i = 0; i < _data_battleData__WEBPACK_IMPORTED_MODULE_10__.battleZonesData.length; i += 70) {
	battleZonesMap.push(_data_battleData__WEBPACK_IMPORTED_MODULE_10__.battleZonesData.slice(i, i + 70));
}

const boundaries = [];
const offset = {
	x: -1408,
	y: -1130,
};

collisionsMap.forEach((row, i) => {
	row.forEach((value, j) => {
		if (value === 1025) {
			boundaries.push(
				new _classes__WEBPACK_IMPORTED_MODULE_8__.Boundary({
					position: {
						x: j * _classes__WEBPACK_IMPORTED_MODULE_8__.Boundary.width + offset.x,
						y: i * _classes__WEBPACK_IMPORTED_MODULE_8__.Boundary.height + offset.y,
					},
				})
			);
		}
	});
});

const battleZones = [];
battleZonesMap.forEach((row, i) => {
	row.forEach((value, j) => {
		if (value === 1025) {
			battleZones.push(
				new _classes__WEBPACK_IMPORTED_MODULE_8__.Boundary({
					position: {
						x: j * _classes__WEBPACK_IMPORTED_MODULE_8__.Boundary.width + offset.x,
						y: i * _classes__WEBPACK_IMPORTED_MODULE_8__.Boundary.height + offset.y,
					},
				})
			);
		}
	});
});

const image = new Image(); // creates HTML img element
image.src = _img_game_assets_pokemonGameMap400_png__WEBPACK_IMPORTED_MODULE_1__;

const foregroundImage = new Image();
foregroundImage.src = _img_game_assets_pokemonGameMapFOREGROUND_png__WEBPACK_IMPORTED_MODULE_2__;

const playerDownImage = new Image();
playerDownImage.src = _img_game_assets_playerDown_png__WEBPACK_IMPORTED_MODULE_3__;
const playerUpImage = new Image();
playerUpImage.src = _img_game_assets_playerUp_png__WEBPACK_IMPORTED_MODULE_4__;
const playerLeftImage = new Image();
playerLeftImage.src = _img_game_assets_playerLeft_png__WEBPACK_IMPORTED_MODULE_5__;
const playerRightImage = new Image();
playerRightImage.src = _img_game_assets_playerRight_png__WEBPACK_IMPORTED_MODULE_6__;

const playerWidth = 192;
const playerHeight = 68;
const mvmtDistance = playerDownImage.height / 4 / 2;

const player = new _classes__WEBPACK_IMPORTED_MODULE_8__.Sprite({
	position: {
		x: canvas.width / 2 - playerWidth / 4 / 2,
		y: canvas.height / 2 - playerHeight / 2,
	},
	image: playerDownImage,
	frames: {
		max: 4,
		hold: 10,
	},
	sprites: {
		up: playerUpImage,
		down: playerDownImage,
		left: playerLeftImage,
		right: playerRightImage,
	},
});

const background = new _classes__WEBPACK_IMPORTED_MODULE_8__.Sprite({
	position: {
		x: offset.x,
		y: offset.y,
	},
	image: image,
});

const foreground = new _classes__WEBPACK_IMPORTED_MODULE_8__.Sprite({
	position: {
		x: offset.x,
		y: offset.y,
	},
	image: foregroundImage,
});

const keys = {
	up: {
		pressed: false,
	},
	down: {
		pressed: false,
	},
	left: {
		pressed: false,
	},
	right: {
		pressed: false,
	},
};

const movables = [background, foreground, ...boundaries, ...battleZones];

function shapeCollision({ shape1, shape2 }) {
	return (
		shape1.position.x + shape1.width >= shape2.position.x &&
		shape1.position.x <= shape2.position.x + shape2.width &&
		shape1.position.y + shape1.height * 0.7 >= shape2.position.y &&
		shape1.position.y <= shape2.position.y + shape2.height * 0.2
	);
}

const battle = {
	initiated: false,
};

function animate() {
	const animationId = window.requestAnimationFrame(animate);
	background.draw();
	boundaries.forEach((boundary) => {
		boundary.draw();
	});
	battleZones.forEach((battleZone) => {
		battleZone.draw();
	});
	player.draw();
	foreground.draw();

	// MOVEMENT //
	let moving = true;
	player.animate = false;

	// Battle activation
	if (battle.initiated) return; // skip battle activation if in battle

	if (
		keys.up.pressed ||
		keys.down.pressed ||
		keys.left.pressed ||
		keys.right.pressed
	) {
		for (let i = 0; i < battleZones.length; i++) {
			const battleZone = battleZones[i];
			const overlapX =
				Math.min(
					player.position.x + player.width,
					battleZone.position.x + battleZone.width
				) - Math.max(player.position.x, battleZone.position.x);
			const overlapY =
				Math.min(
					player.position.y + player.height,
					battleZone.position.y + battleZone.height
				) - Math.max(player.position.y, battleZone.position.y);
			const overlappingArea = overlapX * overlapY;

			if (
				shapeCollision({
					shape1: player,
					shape2: battleZone,
				}) &&
				overlappingArea > (player.width * player.height) / 2 &&
				Math.random() < 0.02
			) {
				// deactive current animation loop
				window.cancelAnimationFrame(animationId);

				_data_audio_audio__WEBPACK_IMPORTED_MODULE_9__.audio.map.stop();
				_data_audio_audio__WEBPACK_IMPORTED_MODULE_9__.audio.initBattle.play();
				_data_audio_audio__WEBPACK_IMPORTED_MODULE_9__.audio.battle.play();

				battle.initiated = true;
				gsap.to("#overlapWrap", {
					opacity: 1,
					repeat: 3,
					yoyo: true,
					duration: 0.4,
					onComplete() {
						gsap.to("#overlapWrap", {
							opacity: 1,
							duration: 0.4,
							onComplete() {
								// active new animation loop
								(0,_battleScene__WEBPACK_IMPORTED_MODULE_7__.initBattle)();
								(0,_battleScene__WEBPACK_IMPORTED_MODULE_7__.animateBattle)();
								gsap.to("#overlapWrap", {
									opacity: 0,
									duration: 0.4,
								});
							},
						});
					},
				});
				break;
			}
		}
	}

	if (keys.down.pressed && lastKey === "down") {
		player.animate = true;
		player.image = player.sprites.down;
		for (let i = 0; i < boundaries.length; i++) {
			const boundary = boundaries[i];
			if (
				shapeCollision({
					shape1: player,
					shape2: {
						...boundary,
						position: {
							x: boundary.position.x,
							y: boundary.position.y - playerDownImage.height / 2,
						},
					},
				})
			) {
				moving = false;
				break;
			}
		}

		if (moving) {
			movables.forEach((movable) => {
				movable.position.y -= playerDownImage.height / 4 / 2;
			});
		}
		// background.position.y -= playerDownImage.height / 4 / 2;
	} else if (keys.up.pressed && lastKey === "up") {
		player.animate = true;
		player.image = player.sprites.up;
		for (let i = 0; i < boundaries.length; i++) {
			const boundary = boundaries[i];
			if (
				shapeCollision({
					shape1: player,
					shape2: {
						...boundary,
						position: {
							x: boundary.position.x,
							y: boundary.position.y + playerDownImage.height / 4 / 2,
						},
					},
				})
			) {
				moving = false;
				break;
			}
		}

		if (moving) {
			movables.forEach((movable) => {
				movable.position.y += playerDownImage.height / 4 / 2;
			});
		}
	} else if (keys.left.pressed && lastKey === "left") {
		player.animate = true;
		player.image = player.sprites.left;
		for (let i = 0; i < boundaries.length; i++) {
			const boundary = boundaries[i];
			if (
				shapeCollision({
					shape1: player,
					shape2: {
						...boundary,
						position: {
							x: boundary.position.x + playerDownImage.height / 4 / 2,
							y: boundary.position.y,
						},
					},
				})
			) {
				moving = false;
				break;
			}
		}

		if (moving) {
			movables.forEach((movable) => {
				movable.position.x += playerDownImage.height / 4 / 2;
			});
		}
	} else if (keys.right.pressed && lastKey === "right") {
		player.animate = true;
		player.image = player.sprites.right;
		for (let i = 0; i < boundaries.length; i++) {
			const boundary = boundaries[i];
			if (
				shapeCollision({
					shape1: player,
					shape2: {
						...boundary,
						position: {
							x: boundary.position.x - playerDownImage.height / 4 / 2,
							y: boundary.position.y,
						},
					},
				})
			) {
				moving = false;
				break;
			}
		}

		if (moving) {
			movables.forEach((movable) => {
				movable.position.x -= playerDownImage.height / 4 / 2;
			});
		}
	}
}
animate();

let lastKey = "";
window.addEventListener("keydown", (e) => {
	if (e.key === "s" || e.key === "ArrowDown") {
		keys.down.pressed = true;
		lastKey = "down";
	} else if (e.key === "d" || e.key === "ArrowRight") {
		keys.right.pressed = true;
		lastKey = "right";
	} else if (e.key === "a" || e.key === "ArrowLeft") {
		keys.left.pressed = true;
		lastKey = "left";
	} else if (e.key === "w" || e.key === "ArrowUp") {
		keys.up.pressed = true;
		lastKey = "up";
	}
});

window.addEventListener("keyup", (e) => {
	if (e.key === "s" || e.key === "ArrowDown") {
		keys.down.pressed = false;
	} else if (e.key === "d" || e.key === "ArrowRight") {
		keys.right.pressed = false;
	} else if (e.key === "a" || e.key === "ArrowLeft") {
		keys.left.pressed = false;
	} else if (e.key === "w" || e.key === "ArrowUp") {
		keys.up.pressed = false;
	}
});

let clicked = false;
window.addEventListener("click", () => {
	if (!clicked) {
		_data_audio_audio__WEBPACK_IMPORTED_MODULE_9__.audio.map.play();
		clicked = true;
	}
});
window.addEventListener("keydown", () => {
	if (!clicked) {
		_data_audio_audio__WEBPACK_IMPORTED_MODULE_9__.audio.map.play();
		clicked = true;
	}
});


/***/ }),

/***/ "./src/img/game_assets/battleBackground.png":
/*!**************************************************!*\
  !*** ./src/img/game_assets/battleBackground.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80b51c219ab89fdec342.png";

/***/ }),

/***/ "./src/img/game_assets/draggleSprite.png":
/*!***********************************************!*\
  !*** ./src/img/game_assets/draggleSprite.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dcaef42f5394d52df250.png";

/***/ }),

/***/ "./src/img/game_assets/embySprite.png":
/*!********************************************!*\
  !*** ./src/img/game_assets/embySprite.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a945b4f8a793dfe42b8.png";

/***/ }),

/***/ "./src/img/game_assets/fireball.png":
/*!******************************************!*\
  !*** ./src/img/game_assets/fireball.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82f6433b68e24bda4c9e.png";

/***/ }),

/***/ "./src/img/game_assets/playerDown.png":
/*!********************************************!*\
  !*** ./src/img/game_assets/playerDown.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e65efe9883d2c4410f1.png";

/***/ }),

/***/ "./src/img/game_assets/playerLeft.png":
/*!********************************************!*\
  !*** ./src/img/game_assets/playerLeft.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "900f05a7e1073d842919.png";

/***/ }),

/***/ "./src/img/game_assets/playerRight.png":
/*!*********************************************!*\
  !*** ./src/img/game_assets/playerRight.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9205bb91389883ce0c31.png";

/***/ }),

/***/ "./src/img/game_assets/playerUp.png":
/*!******************************************!*\
  !*** ./src/img/game_assets/playerUp.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9c53af0596ff7bc89e2.png";

/***/ }),

/***/ "./src/img/game_assets/pokemonGameMap400.png":
/*!***************************************************!*\
  !*** ./src/img/game_assets/pokemonGameMap400.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1895be59ef74b7645b1f.png";

/***/ }),

/***/ "./src/img/game_assets/pokemonGameMapFOREGROUND.png":
/*!**********************************************************!*\
  !*** ./src/img/game_assets/pokemonGameMapFOREGROUND.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8904ed58c0302ff808d6.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2SE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkRBQWM7QUFDaEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBRSw2REFBYztBQUNoQjtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvZGF0YS9hdWRpby9iYXR0bGUubXAzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL3NyYy9kYXRhL2F1ZGlvL2ZpcmViYWxsSGl0LndhdiIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvZGF0YS9hdWRpby9pbml0QmF0dGxlLndhdiIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvZGF0YS9hdWRpby9pbml0RmlyZWJhbGwud2F2Iiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL3NyYy9kYXRhL2F1ZGlvL21hcC53YXYiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2RhdGEvYXVkaW8vdGFja2xlSGl0LndhdiIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvZGF0YS9hdWRpby92aWN0b3J5LndhdiIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvYmF0dGxlU2NlbmUuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2RhdGEvYXR0YWNrcy5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvZGF0YS9hdWRpby9hdWRpby5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvZGF0YS9iYXR0bGVEYXRhLmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL3NyYy9kYXRhL2NvbGxpc2lvbkRhdGEuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2RhdGEvbW9uc3RlcnMuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzaXRlV3JhcCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IC41cmVtO1xcbn1cXG5cXG4jb3ZlcmxhcFdyYXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuI2JhdHRsZVdyYXAge1xcbiAgICBkaXNwbGF5OiBub25lXFxufVxcblxcbiNiYXR0bGVJbnRlcmZhY2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3JkZXItdG9wOiA0cHggYmxhY2sgc29saWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNiYXR0bGVDb250ZW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhdHRhY2tzIHtcXG4gICAgd2lkdGg6IDY2LjY2JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuI2F0dGFja3MgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuI2F0dGFja3MgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYXR0YWNrVHlwZSB7XFxuICAgIHdpZHRoOiAzMy4zMyU7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggYmxhY2sgc29saWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jYXR0YWNrVHlwZSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmhlYWx0aCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxufVxcbiNoZWFsdGhNb24xIHtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICBsZWZ0OiA1MHB4O1xcbn1cXG4jaGVhbHRoTW9uMiB7XFxuICAgIGJvdHRvbTogMTkwcHg7XFxuICAgIHJpZ2h0OiA1MHB4O1xcbn1cXG4uaGVhbHRoIGgyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uaGVhbHRoQmFyV3JhcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhlYWx0aEJhciB7XFxuICAgIGhlaWdodDogNXB4O1xcbn1cXG4uZnVsbEhlYWx0aCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcbi5jdXJySGVhbHRoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuI2N1cnJIZWFsdGhFbmVteSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4jY3VyckhlYWx0aFBsYXllciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZ2FtZUluc3RydWN0aW9ucyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztJQUNULHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1Isb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpdGVXcmFwIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogLjVyZW07XFxufVxcblxcbiNvdmVybGFwV3JhcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jYmF0dGxlV3JhcCB7XFxuICAgIGRpc3BsYXk6IG5vbmVcXG59XFxuXFxuI2JhdHRsZUludGVyZmFjZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvcmRlci10b3A6IDRweCBibGFjayBzb2xpZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2JhdHRsZUNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2F0dGFja3Mge1xcbiAgICB3aWR0aDogNjYuNjYlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5cXG4jYXR0YWNrcyBidXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4jYXR0YWNrcyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhdHRhY2tUeXBlIHtcXG4gICAgd2lkdGg6IDMzLjMzJTtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBibGFjayBzb2xpZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNhdHRhY2tUeXBlIGgxIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uaGVhbHRoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMTJweDtcXG59XFxuI2hlYWx0aE1vbjEge1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIGxlZnQ6IDUwcHg7XFxufVxcbiNoZWFsdGhNb24yIHtcXG4gICAgYm90dG9tOiAxOTBweDtcXG4gICAgcmlnaHQ6IDUwcHg7XFxufVxcbi5oZWFsdGggaDIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5oZWFsdGhCYXJXcmFwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGVhbHRoQmFyIHtcXG4gICAgaGVpZ2h0OiA1cHg7XFxufVxcbi5mdWxsSGVhbHRoIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuLmN1cnJIZWFsdGgge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4jY3VyckhlYWx0aEVuZW15IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbiNjdXJySGVhbHRoUGxheWVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNnYW1lSW5zdHJ1Y3Rpb25zIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAwNDdkYTAyNjVmNDQ2YjhkNWJjNGNmZWU1NTI5NjMxLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjN2RkNTM3NmY4Nzg4YTdjMGMzNDM2NGE3ZmFjMTg5Zi53YXZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGE5YzQwMzIyMDcyMjhlYzk2NGNjMDgxNjlmZTBmYjEud2F2XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImM4OGQwMzU1OWM4YzNiMjhiMTA1OGM2ZGZhNzJjMjdhLndhdlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxMDc5YmQxYzljMDFiMTNjY2NiMGRmYWU5NjUwOTY3ZS53YXZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmJiMDhkY2M0OGVmZjc2NmFlN2ExZThhNWYzMGY4NTkud2F2XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY3YjE4MTNjOWM0YTQ1ZDRmNzE3NzRhZDdiYmFmODE1LndhdlwiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhbmltYXRlLCBiYXR0bGUgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgU3ByaXRlLCBNb25zdGVyIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgYXVkaW8gfSBmcm9tIFwiLi9kYXRhL2F1ZGlvL2F1ZGlvXCI7XG5pbXBvcnQgeyBhdHRhY2tzIH0gZnJvbSBcIi4vZGF0YS9hdHRhY2tzXCI7XG5pbXBvcnQgeyBtb25zdGVyc0RhdGEgfSBmcm9tIFwiLi9kYXRhL21vbnN0ZXJzXCI7XG5pbXBvcnQgYmF0dGxlQmFja2dyb3VuZEltZ1VSTCBmcm9tIFwiLi9pbWcvZ2FtZV9hc3NldHMvYmF0dGxlQmFja2dyb3VuZC5wbmdcIjtcblxuY29uc3QgYmF0dGxlQmFja2dyb3VuZEltZyA9IG5ldyBJbWFnZSgpO1xuYmF0dGxlQmFja2dyb3VuZEltZy5zcmMgPSBiYXR0bGVCYWNrZ3JvdW5kSW1nVVJMO1xuY29uc3QgYmF0dGxlQmFja2dyb3VuZCA9IG5ldyBTcHJpdGUoe1xuXHRwb3NpdGlvbjoge1xuXHRcdHg6IDAsXG5cdFx0eTogMCxcblx0fSxcblx0aW1hZ2U6IGJhdHRsZUJhY2tncm91bmRJbWcsXG59KTtcblxubGV0IGRyYWdnbGU7XG5sZXQgZW1ieTtcbmxldCByZW5kZXJlZFNwcml0ZXM7XG5sZXQgYmF0dGxlQW5pbWF0aW9uSWQ7XG5sZXQgcXVldWU7XG5jb25zdCBlbmRCYXR0bGUgPSAoKSA9PiB7XG5cdGdzYXAudG8oXCIjb3ZlcmxhcFdyYXBcIiwge1xuXHRcdG9wYWNpdHk6IDEsXG5cdFx0b25Db21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGJhdHRsZUFuaW1hdGlvbklkKTtcblx0XHRcdGFuaW1hdGUoKTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmF0dGxlV3JhcFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblx0XHRcdGdzYXAudG8oXCIjb3ZlcmxhcFdyYXBcIiwge1xuXHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0fSk7XG5cblx0XHRcdGJhdHRsZS5pbml0aWF0ZWQgPSBmYWxzZTtcblx0XHRcdGF1ZGlvLm1hcC5wbGF5KCk7XG5cdFx0fSxcblx0fSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJhdHRsZSgpIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXR0bGVXcmFwXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmF0dGxlQ29udGVudFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VyckhlYWx0aEVuZW15XCIpLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VyckhlYWx0aFBsYXllclwiKS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F0dGFja3NcIikucmVwbGFjZUNoaWxkcmVuKCk7XG5cblx0ZHJhZ2dsZSA9IG5ldyBNb25zdGVyKG1vbnN0ZXJzRGF0YS5EcmFnZ2xlKTtcblx0ZW1ieSA9IG5ldyBNb25zdGVyKG1vbnN0ZXJzRGF0YS5FbWJ5KTtcblx0cmVuZGVyZWRTcHJpdGVzID0gW2RyYWdnbGUsIGVtYnldO1xuXHRxdWV1ZSA9IFtdO1xuXG5cdGZvciAoY29uc3QgYXR0YWNrIG9mIGVtYnkuYXR0YWNrcykge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0YnV0dG9uLmlubmVySFRNTCA9IGF0dGFjay5uYW1lO1xuXHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrXCIpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0YWNrc1wiKS5hcHBlbmQoYnV0dG9uKTtcblx0fVxuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXR0YWNrXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldEF0dGFjayA9IGF0dGFja3NbZS5jdXJyZW50VGFyZ2V0LmlubmVySFRNTF07XG5cblx0XHRcdGVtYnkuYXR0YWNrKHtcblx0XHRcdFx0YXR0YWNrOiB0YXJnZXRBdHRhY2ssXG5cdFx0XHRcdHJlY2lwaWVudDogZHJhZ2dsZSxcblx0XHRcdFx0cmVuZGVyZWRTcHJpdGVzLFxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGVuZW15IGF0dGFja3Ncblx0XHRcdGlmIChkcmFnZ2xlLmhlYWx0aCA8PSAwKSB7XG5cdFx0XHRcdHF1ZXVlLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRcdGRyYWdnbGUuZmFpbnQoKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cXVldWUucHVzaChlbmRCYXR0bGUpO1xuXHRcdFx0XHQvLyByZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHJhbmRvbUF0dGFja0luZGV4ID0gTWF0aC5mbG9vcihcblx0XHRcdFx0TWF0aC5yYW5kb20oKSAqIGRyYWdnbGUuYXR0YWNrcy5sZW5ndGhcblx0XHRcdCk7XG5cdFx0XHRjb25zdCByYW5kb21BdHRhY2sgPSBkcmFnZ2xlLmF0dGFja3NbcmFuZG9tQXR0YWNrSW5kZXhdO1xuXHRcdFx0cXVldWUucHVzaCgoKSA9PiB7XG5cdFx0XHRcdGRyYWdnbGUuYXR0YWNrKHtcblx0XHRcdFx0XHRhdHRhY2s6IHJhbmRvbUF0dGFjayxcblx0XHRcdFx0XHRyZWNpcGllbnQ6IGVtYnksXG5cdFx0XHRcdFx0cmVuZGVyZWRTcHJpdGVzLFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoZW1ieS5oZWFsdGggPD0gMCkge1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRcdFx0ZW1ieS5mYWludCgpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0cXVldWUucHVzaChlbmRCYXR0bGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3QgdGFyZ2V0QXR0YWNrID0gYXR0YWNrc1tlLmN1cnJlbnRUYXJnZXQuaW5uZXJIVE1MXTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0YWNrVHlwZVRleHRcIikudGV4dENvbnRlbnQgPSB0YXJnZXRBdHRhY2sudHlwZTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0YWNrVHlwZVRleHRcIikuc3R5bGUuY29sb3IgPVxuXHRcdFx0XHR0YXJnZXRBdHRhY2suY29sb3I7XG5cdFx0fSk7XG5cblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdHRhY2tUeXBlVGV4dFwiKS50ZXh0Q29udGVudCA9IFwiQXR0YWNrIFR5cGVcIjtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0YWNrVHlwZVRleHRcIikuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZUJhdHRsZSgpIHtcblx0YmF0dGxlQW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVCYXR0bGUpO1xuXHRiYXR0bGVCYWNrZ3JvdW5kLmRyYXcoKTtcblxuXHRmb3IgKGNvbnN0IHNwcml0ZSBvZiByZW5kZXJlZFNwcml0ZXMpIHtcblx0XHRzcHJpdGUuZHJhdygpO1xuXHR9XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmF0dGxlQ29udGVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0aWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRxdWV1ZVswXSgpO1xuXHRcdHF1ZXVlLnNoaWZ0KCk7XG5cdH0gZWxzZSBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG4iLCJpbXBvcnQgeyBjIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGF1ZGlvIH0gZnJvbSBcIi4vZGF0YS9hdWRpby9hdWRpb1wiO1xuaW1wb3J0IGZpcmViYWxsVXJsIGZyb20gXCIuL2ltZy9nYW1lX2Fzc2V0cy9maXJlYmFsbC5wbmdcIjtcblxuY2xhc3MgU3ByaXRlIHtcblx0Y29uc3RydWN0b3Ioe1xuXHRcdHBvc2l0aW9uLFxuXHRcdGltYWdlLFxuXHRcdGZyYW1lcyA9IHsgbWF4OiAxLCBob2xkOiAxMCB9LFxuXHRcdHNwcml0ZXMsXG5cdFx0YW5pbWF0ZSA9IGZhbHNlLFxuXHRcdHJvdGF0aW9uID0gMCxcblx0XHR2ZWxvY2l0eSxcblx0fSkge1xuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcblx0XHR0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG5cdFx0dGhpcy5mcmFtZXMgPSB7IC4uLmZyYW1lcywgdmFsOiAwLCBlbGFwc2VkOiAwIH07XG5cdFx0dGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLndpZHRoID0gdGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzLm1heDtcblx0XHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5pbWFnZS5oZWlnaHQ7XG5cdFx0fTtcblx0XHR0aGlzLmltYWdlLnNyYyA9IGltYWdlLnNyYztcblx0XHR0aGlzLmFuaW1hdGUgPSBhbmltYXRlO1xuXHRcdHRoaXMuc3ByaXRlcyA9IHNwcml0ZXM7XG5cdFx0dGhpcy5vcGFjaXR5ID0gMTtcblx0XHR0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG5cdH1cblxuXHRkcmF3KCkge1xuXHRcdGMuc2F2ZSgpO1xuXHRcdGMudHJhbnNsYXRlKFxuXHRcdFx0dGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCAvIDIsXG5cdFx0XHR0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCAvIDJcblx0XHQpO1xuXHRcdGMucm90YXRlKHRoaXMucm90YXRpb24pO1xuXHRcdGMudHJhbnNsYXRlKFxuXHRcdFx0LXRoaXMucG9zaXRpb24ueCAtIHRoaXMud2lkdGggLyAyLFxuXHRcdFx0LXRoaXMucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0IC8gMlxuXHRcdCk7XG5cdFx0Yy5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eTtcblx0XHRjLmRyYXdJbWFnZShcblx0XHRcdHRoaXMuaW1hZ2UsXG5cdFx0XHQvLyBpbWFnZSBjcm9wIGFyZ3VtZW50c1xuXHRcdFx0dGhpcy5mcmFtZXMudmFsICogdGhpcy53aWR0aCxcblx0XHRcdDAsXG5cdFx0XHR0aGlzLmltYWdlLndpZHRoIC8gdGhpcy5mcmFtZXMubWF4LFxuXHRcdFx0dGhpcy5pbWFnZS5oZWlnaHQsXG5cdFx0XHQvLyBvbnNjcmVlbiBwb3NpdGlvblxuXHRcdFx0dGhpcy5wb3NpdGlvbi54LFxuXHRcdFx0dGhpcy5wb3NpdGlvbi55LFxuXHRcdFx0Ly8gb25zY3JlZW4gcmVuZGVyIGZyYW1lXG5cdFx0XHR0aGlzLmltYWdlLndpZHRoIC8gdGhpcy5mcmFtZXMubWF4LFxuXHRcdFx0dGhpcy5pbWFnZS5oZWlnaHRcblx0XHQpO1xuXHRcdGMucmVzdG9yZSgpO1xuXG5cdFx0aWYgKCF0aGlzLmFuaW1hdGUpIHJldHVybjtcblxuXHRcdGlmICh0aGlzLmZyYW1lcy5tYXggPiAxKSB7XG5cdFx0XHR0aGlzLmZyYW1lcy5lbGFwc2VkKys7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZnJhbWVzLmVsYXBzZWQgJSB0aGlzLmZyYW1lcy5ob2xkID09PSAwKSB7XG5cdFx0XHRpZiAodGhpcy5mcmFtZXMudmFsIDwgdGhpcy5mcmFtZXMubWF4IC0gMSkgdGhpcy5mcmFtZXMudmFsKys7XG5cdFx0XHRlbHNlIHRoaXMuZnJhbWVzLnZhbCA9IDA7XG5cdFx0fVxuXHR9XG59XG5cbmNsYXNzIEJvdW5kYXJ5IHtcblx0Ly8gNDggcHggPSA0MDAlIHpvb20gb24gb3VyIG9yaWdpbmFsIDEycHggeCAxMnB4IGdyaWRzXG5cdHN0YXRpYyB3aWR0aCA9IDQ4O1xuXHRzdGF0aWMgaGVpZ2h0ID0gNDg7XG5cdGNvbnN0cnVjdG9yKHsgcG9zaXRpb24gfSkge1xuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcblx0XHR0aGlzLndpZHRoID0gNDg7XG5cdFx0dGhpcy5oZWlnaHQgPSA0ODtcblx0fVxuXG5cdGRyYXcoKSB7XG5cdFx0Yy5maWxsU3R5bGUgPSBcInJnYmEoMjU1LDAsMCwgMClcIjtcblx0XHRjLmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cdH1cbn1cblxuY2xhc3MgTW9uc3RlciBleHRlbmRzIFNwcml0ZSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRuYW1lLFxuXHRcdGlzRW5lbXkgPSBmYWxzZSxcblx0XHRhdHRhY2tzLFxuXHRcdC8vIGZ1dHVyZSBwYXJhbXNcblx0XHR0eXBlLFxuXHRcdGRlZmVuc2UsXG5cdFx0YXR0YWNrUG93ZXIsXG5cdFx0Ly8gc3ByaXRlIHBhcmFtZXRlcnNcblx0XHRwb3NpdGlvbixcblx0XHRpbWFnZSxcblx0XHRmcmFtZXMgPSB7IG1heDogMSwgaG9sZDogMTAgfSxcblx0XHRzcHJpdGVzLFxuXHRcdGFuaW1hdGUgPSBmYWxzZSxcblx0XHRyb3RhdGlvbiA9IDAsXG5cdFx0dmVsb2NpdHksXG5cdH0pIHtcblx0XHRzdXBlcih7XG5cdFx0XHRwb3NpdGlvbixcblx0XHRcdGltYWdlLFxuXHRcdFx0ZnJhbWVzLFxuXHRcdFx0c3ByaXRlcyxcblx0XHRcdGFuaW1hdGUsXG5cdFx0XHRyb3RhdGlvbixcblx0XHRcdHZlbG9jaXR5LFxuXHRcdH0pO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5oZWFsdGggPSAxMDA7XG5cdFx0dGhpcy5hdHRhY2tzID0gYXR0YWNrcztcblx0XHR0aGlzLmlzRW5lbXkgPSBpc0VuZW15O1xuXHRcdC8vIGZ1dHVyZSBwcm9wcyB0byBpbXBsZW1lbnRzXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLmRlZmVuc2UgPSBkZWZlbnNlO1xuXHRcdHRoaXMuYXR0YWNrUG93ZXIgPSBhdHRhY2tQb3dlcjtcblx0XHQvLyBTcHJpdGUgcHJvcHNcblx0fVxuXG5cdGF0dGFjayh7IGF0dGFjaywgcmVjaXBpZW50LCByZW5kZXJlZFNwcml0ZXMgfSkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmF0dGxlQ29udGVudFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcIiNiYXR0bGVDb250ZW50XCJcblx0XHQpLnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfSB1c2VkICR7YXR0YWNrLm5hbWV9YDtcblxuXHRcdGxldCBoZWFsdGhCYXIgPSBcIiNjdXJySGVhbHRoRW5lbXlcIjtcblx0XHRpZiAodGhpcy5pc0VuZW15KSBoZWFsdGhCYXIgPSBcIiNjdXJySGVhbHRoUGxheWVyXCI7XG5cblx0XHRyZWNpcGllbnQuaGVhbHRoIC09IGF0dGFjay5kYW1hZ2U7XG5cdFx0aWYgKHJlY2lwaWVudC5oZWFsdGggPCAxKSByZWNpcGllbnQuaGVhbHRoID0gMDtcblxuXHRcdGxldCByb3RhdGlvbiA9IDE7XG5cdFx0aWYgKHRoaXMuaXNFbmVteSkgcm90YXRpb24gPSAtMi4yO1xuXG5cdFx0c3dpdGNoIChhdHRhY2submFtZSkge1xuXHRcdFx0Y2FzZSBcIlRhY2tsZVwiOlxuXHRcdFx0XHRjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKTtcblxuXHRcdFx0XHRsZXQgbW92ZW1lbnREaXN0YW5jZSA9IDEwO1xuXHRcdFx0XHRpZiAodGhpcy5pc0VuZW15KSBtb3ZlbWVudERpc3RhbmNlID0gLTEwO1xuXG5cdFx0XHRcdHRsLnRvKHRoaXMucG9zaXRpb24sIHtcblx0XHRcdFx0XHR4OiB0aGlzLnBvc2l0aW9uLnggLSBtb3ZlbWVudERpc3RhbmNlICogMixcblx0XHRcdFx0fSlcblx0XHRcdFx0XHQudG8odGhpcy5wb3NpdGlvbiwge1xuXHRcdFx0XHRcdFx0eDogdGhpcy5wb3NpdGlvbi54ICsgbW92ZW1lbnREaXN0YW5jZSAqIDQsXG5cdFx0XHRcdFx0XHR5OiB0aGlzLnBvc2l0aW9uLnkgLSBtb3ZlbWVudERpc3RhbmNlLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuMSxcblx0XHRcdFx0XHRcdG9uQ29tcGxldGU6ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0Ly8gZW5lbXkgZ2V0cyBoaXRcblx0XHRcdFx0XHRcdFx0YXVkaW8udGFja2xlSGl0LnBsYXkoKTtcblx0XHRcdFx0XHRcdFx0Z3NhcC50byhoZWFsdGhCYXIsIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogcmVjaXBpZW50LmhlYWx0aCArIFwiJVwiLFxuXHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHRnc2FwLnRvKHJlY2lwaWVudC5wb3NpdGlvbiwge1xuXHRcdFx0XHRcdFx0XHRcdHg6IHJlY2lwaWVudC5wb3NpdGlvbi54ICsgMTAsXG5cdFx0XHRcdFx0XHRcdFx0eW95bzogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRyZXBlYXQ6IDUsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuMDgsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRcdGdzYXAudG8ocmVjaXBpZW50LCB7XG5cdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdFx0XHRcdFx0XHRyZXBlYXQ6IDUsXG5cdFx0XHRcdFx0XHRcdFx0eW95bzogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC4wOCxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnRvKHRoaXMucG9zaXRpb24sIHtcblx0XHRcdFx0XHRcdHg6IHRoaXMucG9zaXRpb24ueCxcblx0XHRcdFx0XHRcdHk6IHRoaXMucG9zaXRpb24ueSxcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJGaXJlYmFsbFwiOlxuXHRcdFx0XHRhdWRpby5pbml0RmlyZWJhbGwucGxheSgpO1xuXHRcdFx0XHRjb25zdCBmaXJlYmFsbEltZyA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0XHRmaXJlYmFsbEltZy5zcmMgPSBmaXJlYmFsbFVybDtcblx0XHRcdFx0Y29uc3QgZmlyZWJhbGwgPSBuZXcgU3ByaXRlKHtcblx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0eDogdGhpcy5wb3NpdGlvbi54LFxuXHRcdFx0XHRcdFx0eTogdGhpcy5wb3NpdGlvbi55LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0aW1hZ2U6IGZpcmViYWxsSW1nLFxuXHRcdFx0XHRcdGZyYW1lczoge1xuXHRcdFx0XHRcdFx0bWF4OiA0LFxuXHRcdFx0XHRcdFx0aG9sZDogMTAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRhbmltYXRlOiB0cnVlLFxuXHRcdFx0XHRcdHJvdGF0aW9uLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmVuZGVyZWRTcHJpdGVzLnNwbGljZSgxLCAwLCBmaXJlYmFsbCk7XG5cblx0XHRcdFx0Z3NhcC50byhmaXJlYmFsbC5wb3NpdGlvbiwge1xuXHRcdFx0XHRcdHg6IHJlY2lwaWVudC5wb3NpdGlvbi54LFxuXHRcdFx0XHRcdHk6IHJlY2lwaWVudC5wb3NpdGlvbi55LFxuXHRcdFx0XHRcdG9uQ29tcGxldGU6ICgpID0+IHtcblx0XHRcdFx0XHRcdC8vIGVuZW15IGdldHMgaGl0XG5cdFx0XHRcdFx0XHRhdWRpby5maXJlYmFsbEhpdC5wbGF5KCk7XG5cblx0XHRcdFx0XHRcdGdzYXAudG8oaGVhbHRoQmFyLCB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiByZWNpcGllbnQuaGVhbHRoICsgXCIlXCIsXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0Z3NhcC50byhyZWNpcGllbnQucG9zaXRpb24sIHtcblx0XHRcdFx0XHRcdFx0eDogcmVjaXBpZW50LnBvc2l0aW9uLnggKyAxMCxcblx0XHRcdFx0XHRcdFx0eW95bzogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0cmVwZWF0OiA1LFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC4wOCxcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRnc2FwLnRvKHJlY2lwaWVudCwge1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0XHRcdFx0XHRyZXBlYXQ6IDUsXG5cdFx0XHRcdFx0XHRcdHlveW86IHRydWUsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjA4LFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRyZW5kZXJlZFNwcml0ZXMuc3BsaWNlKDEsIDEpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGZhaW50KCkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcIiNiYXR0bGVDb250ZW50XCJcblx0XHQpLmlubmVySFRNTCA9IGAke3RoaXMubmFtZX0gZmFpbnRlZCFgO1xuXHRcdGdzYXAudG8odGhpcy5wb3NpdGlvbiwge1xuXHRcdFx0eTogdGhpcy5wb3NpdGlvbi55ICsgMjAsXG5cdFx0fSk7XG5cdFx0Z3NhcC50byh0aGlzLCB7XG5cdFx0XHRvcGFjaXR5OiAwLFxuXHRcdH0pO1xuXHRcdGF1ZGlvLmJhdHRsZS5zdG9wKCk7XG5cdFx0YXVkaW8udmljdG9yeS5wbGF5KCk7XG5cdH1cbn1cblxuY2xhc3MgQXR0YWNrIHtcblx0Y29uc3RydWN0b3IoeyBuYW1lLCB0eXBlLCBkYW1hZ2UsIGFtb3VudCA9IDEwIH0pIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XG5cdFx0dGhpcy5hbW91bnQgPSBhbW91bnQ7XG5cdH1cbn1cblxuZXhwb3J0IHsgU3ByaXRlLCBCb3VuZGFyeSwgTW9uc3RlciB9O1xuIiwiZXhwb3J0IGNvbnN0IGF0dGFja3MgPSB7XG5cdFRhY2tsZToge1xuXHRcdG5hbWU6IFwiVGFja2xlXCIsXG5cdFx0ZGFtYWdlOiAxMCxcblx0XHR0eXBlOiBcIk5vcm1hbFwiLFxuXHRcdGNvbG9yOiBcImJsYWNrXCIsXG5cdH0sXG5cdEZpcmViYWxsOiB7XG5cdFx0bmFtZTogXCJGaXJlYmFsbFwiLFxuXHRcdGRhbWFnZTogMjUsXG5cdFx0dHlwZTogXCJGaXJlXCIsXG5cdFx0Y29sb3I6IFwicmVkXCIsXG5cdH0sXG59O1xuIiwiaW1wb3J0IG1hcFVybCBmcm9tIFwiLi9tYXAud2F2XCI7XG5pbXBvcnQgaW5pdEJhdHRsZVVybCBmcm9tIFwiLi9pbml0QmF0dGxlLndhdlwiO1xuaW1wb3J0IGJhdHRsZVVybCBmcm9tIFwiLi9iYXR0bGUubXAzXCI7XG5pbXBvcnQgdGFja2xlSGl0VXJsIGZyb20gXCIuL3RhY2tsZUhpdC53YXZcIjtcbmltcG9ydCBpbml0RmlyZWJhbGxVcmwgZnJvbSBcIi4vaW5pdEZpcmViYWxsLndhdlwiO1xuaW1wb3J0IGZpcmViYWxsSGl0VXJsIGZyb20gXCIuL2ZpcmViYWxsSGl0LndhdlwiO1xuaW1wb3J0IHZpY3RvcnlVcmwgZnJvbSBcIi4vdmljdG9yeS53YXZcIjtcblxuY29uc3QgYXVkaW8gPSB7XG5cdG1hcDogbmV3IEhvd2woe1xuXHRcdHNyYzogbWFwVXJsLFxuXHRcdGh0bWw1OiB0cnVlLFxuXHRcdHZvbHVtZTogMC4xLFxuXHR9KSxcblx0aW5pdEJhdHRsZTogbmV3IEhvd2woe1xuXHRcdHNyYzogaW5pdEJhdHRsZVVybCxcblx0XHRodG1sNTogdHJ1ZSxcblx0XHR2b2x1bWU6IDAuMDEsXG5cdH0pLFxuXHRiYXR0bGU6IG5ldyBIb3dsKHtcblx0XHRzcmM6IGJhdHRsZVVybCxcblx0XHRodG1sNTogdHJ1ZSxcblx0XHR2b2x1bWU6IDAuMDUsXG5cdH0pLFxuXHR0YWNrbGVIaXQ6IG5ldyBIb3dsKHtcblx0XHRzcmM6IHRhY2tsZUhpdFVybCxcblx0XHRodG1sNTogdHJ1ZSxcblx0XHR2b2x1bWU6IDAuMDEsXG5cdH0pLFxuXHRpbml0RmlyZWJhbGw6IG5ldyBIb3dsKHtcblx0XHRzcmM6IGluaXRGaXJlYmFsbFVybCxcblx0XHRodG1sNTogdHJ1ZSxcblx0XHR2b2x1bWU6IDAuMDUsXG5cdH0pLFxuXHRmaXJlYmFsbEhpdDogbmV3IEhvd2woe1xuXHRcdHNyYzogZmlyZWJhbGxIaXRVcmwsXG5cdFx0aHRtbDU6IHRydWUsXG5cdFx0dm9sdW1lOiAwLjA1LFxuXHR9KSxcblx0dmljdG9yeTogbmV3IEhvd2woe1xuXHRcdHNyYzogdmljdG9yeVVybCxcblx0XHRodG1sNTogdHJ1ZSxcblx0XHR2b2x1bWU6IDAuMDUsXG5cdH0pLFxufTtcblxuZXhwb3J0IHsgYXVkaW8gfTtcbiIsImV4cG9ydCBjb25zdCBiYXR0bGVab25lc0RhdGEgPSBbXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsXG5cdDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5dO1xuIiwiZXhwb3J0IGNvbnN0IGNvbGxpc2lvbnMgPSBbXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDEwMjUsIDAsXG5cdDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDEwMjUsIDEwMjUsIDAsIDAsXG5cdDEwMjUsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsXG5cdDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsXG5cdDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsXG5cdDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsXG5cdDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsXG5cdDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDEwMjUsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDEwMjUsIDEwMjUsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDEwMjUsIDEwMjUsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDEwMjUsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsXG5cdDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsXG5cdDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsXG5cdDEwMjUsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDEwMjUsIDEwMjUsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDEwMjUsXG5cdDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDEwMjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEwMjUsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5dO1xuIiwiaW1wb3J0IHsgYXR0YWNrcyB9IGZyb20gXCIuL2F0dGFja3NcIjtcblxuaW1wb3J0IGVtYnlJbWdVcmwgZnJvbSBcIi4uL2ltZy9nYW1lX2Fzc2V0cy9lbWJ5U3ByaXRlLnBuZ1wiO1xuaW1wb3J0IGRyYWdnbGVJbWdVcmwgZnJvbSBcIi4uL2ltZy9nYW1lX2Fzc2V0cy9kcmFnZ2xlU3ByaXRlLnBuZ1wiO1xuXG5leHBvcnQgY29uc3QgbW9uc3RlcnNEYXRhID0ge1xuXHRFbWJ5OiB7XG5cdFx0cG9zaXRpb246IHtcblx0XHRcdHg6IDI4MCxcblx0XHRcdHk6IDMyNSxcblx0XHR9LFxuXHRcdGltYWdlOiB7XG5cdFx0XHRzcmM6IGVtYnlJbWdVcmwsXG5cdFx0fSxcblx0XHRmcmFtZXM6IHtcblx0XHRcdG1heDogNCxcblx0XHRcdGhvbGQ6IDMwLFxuXHRcdH0sXG5cdFx0YW5pbWF0ZTogdHJ1ZSxcblx0XHRuYW1lOiBcIkVtYnlcIixcblx0XHRhdHRhY2tzOiBbYXR0YWNrcy5UYWNrbGUsIGF0dGFja3MuRmlyZWJhbGxdLFxuXHR9LFxuXHREcmFnZ2xlOiB7XG5cdFx0cG9zaXRpb246IHtcblx0XHRcdHg6IDgwMCxcblx0XHRcdHk6IDEwMCxcblx0XHR9LFxuXHRcdGltYWdlOiB7XG5cdFx0XHRzcmM6IGRyYWdnbGVJbWdVcmwsXG5cdFx0fSxcblx0XHRmcmFtZXM6IHtcblx0XHRcdG1heDogNCxcblx0XHRcdGhvbGQ6IDMwLFxuXHRcdH0sXG5cdFx0YW5pbWF0ZTogdHJ1ZSxcblx0XHRpc0VuZW15OiB0cnVlLFxuXHRcdG5hbWU6IFwiRHJhZ2dsZVwiLFxuXHRcdGF0dGFja3M6IFthdHRhY2tzLlRhY2tsZSwgYXR0YWNrcy5GaXJlYmFsbF0sXG5cdH0sXG59O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2VVcmwgZnJvbSBcIi4vaW1nL2dhbWVfYXNzZXRzL3Bva2Vtb25HYW1lTWFwNDAwLnBuZ1wiO1xuaW1wb3J0IGZvcmVncm91bmRJbWFnZVVybCBmcm9tIFwiLi9pbWcvZ2FtZV9hc3NldHMvcG9rZW1vbkdhbWVNYXBGT1JFR1JPVU5ELnBuZ1wiO1xuaW1wb3J0IHBsYXllckRvd25JbWFnZVVybCBmcm9tIFwiLi9pbWcvZ2FtZV9hc3NldHMvcGxheWVyRG93bi5wbmdcIjtcbmltcG9ydCBwbGF5ZXJVcEltYWdlVXJsIGZyb20gXCIuL2ltZy9nYW1lX2Fzc2V0cy9wbGF5ZXJVcC5wbmdcIjtcbmltcG9ydCBwbGF5ZXJMZWZ0SW1hZ2VVcmwgZnJvbSBcIi4vaW1nL2dhbWVfYXNzZXRzL3BsYXllckxlZnQucG5nXCI7XG5pbXBvcnQgcGxheWVyUmlnaHRJbWFnZVVybCBmcm9tIFwiLi9pbWcvZ2FtZV9hc3NldHMvcGxheWVyUmlnaHQucG5nXCI7XG5pbXBvcnQgeyBpbml0QmF0dGxlLCBhbmltYXRlQmF0dGxlIH0gZnJvbSBcIi4vYmF0dGxlU2NlbmVcIjtcbmltcG9ydCB7IFNwcml0ZSwgQm91bmRhcnkgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgeyBhdWRpbyB9IGZyb20gXCIuL2RhdGEvYXVkaW8vYXVkaW9cIjtcbmltcG9ydCB7IGJhdHRsZVpvbmVzRGF0YSB9IGZyb20gXCIuL2RhdGEvYmF0dGxlRGF0YVwiO1xuaW1wb3J0IHsgY29sbGlzaW9ucyB9IGZyb20gXCIuL2RhdGEvY29sbGlzaW9uRGF0YVwiO1xuXG5mdW5jdGlvbiBsb2coaW5wdXQpIHtcblx0Y29uc29sZS5sb2coaW5wdXQpO1xufVxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpO1xuZXhwb3J0IGNvbnN0IGMgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpOyAvLyBjIHJlZmVycyB0byBjb250ZXh0XG5cbmNhbnZhcy53aWR0aCA9IDEwMjQ7XG5jYW52YXMuaGVpZ2h0ID0gNTc2O1xuXG5sZXQgY29sbGlzaW9uc01hcCA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaXNpb25zLmxlbmd0aDsgaSArPSA3MCkge1xuXHRjb2xsaXNpb25zTWFwLnB1c2goY29sbGlzaW9ucy5zbGljZShpLCBpICsgNzApKTtcbn1cblxubGV0IGJhdHRsZVpvbmVzTWFwID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IGJhdHRsZVpvbmVzRGF0YS5sZW5ndGg7IGkgKz0gNzApIHtcblx0YmF0dGxlWm9uZXNNYXAucHVzaChiYXR0bGVab25lc0RhdGEuc2xpY2UoaSwgaSArIDcwKSk7XG59XG5cbmNvbnN0IGJvdW5kYXJpZXMgPSBbXTtcbmNvbnN0IG9mZnNldCA9IHtcblx0eDogLTE0MDgsXG5cdHk6IC0xMTMwLFxufTtcblxuY29sbGlzaW9uc01hcC5mb3JFYWNoKChyb3csIGkpID0+IHtcblx0cm93LmZvckVhY2goKHZhbHVlLCBqKSA9PiB7XG5cdFx0aWYgKHZhbHVlID09PSAxMDI1KSB7XG5cdFx0XHRib3VuZGFyaWVzLnB1c2goXG5cdFx0XHRcdG5ldyBCb3VuZGFyeSh7XG5cdFx0XHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0XHRcdHg6IGogKiBCb3VuZGFyeS53aWR0aCArIG9mZnNldC54LFxuXHRcdFx0XHRcdFx0eTogaSAqIEJvdW5kYXJ5LmhlaWdodCArIG9mZnNldC55LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0fSk7XG59KTtcblxuY29uc3QgYmF0dGxlWm9uZXMgPSBbXTtcbmJhdHRsZVpvbmVzTWFwLmZvckVhY2goKHJvdywgaSkgPT4ge1xuXHRyb3cuZm9yRWFjaCgodmFsdWUsIGopID0+IHtcblx0XHRpZiAodmFsdWUgPT09IDEwMjUpIHtcblx0XHRcdGJhdHRsZVpvbmVzLnB1c2goXG5cdFx0XHRcdG5ldyBCb3VuZGFyeSh7XG5cdFx0XHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0XHRcdHg6IGogKiBCb3VuZGFyeS53aWR0aCArIG9mZnNldC54LFxuXHRcdFx0XHRcdFx0eTogaSAqIEJvdW5kYXJ5LmhlaWdodCArIG9mZnNldC55LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0fSk7XG59KTtcblxuY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTsgLy8gY3JlYXRlcyBIVE1MIGltZyBlbGVtZW50XG5pbWFnZS5zcmMgPSBiYWNrZ3JvdW5kSW1hZ2VVcmw7XG5cbmNvbnN0IGZvcmVncm91bmRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuZm9yZWdyb3VuZEltYWdlLnNyYyA9IGZvcmVncm91bmRJbWFnZVVybDtcblxuY29uc3QgcGxheWVyRG93bkltYWdlID0gbmV3IEltYWdlKCk7XG5wbGF5ZXJEb3duSW1hZ2Uuc3JjID0gcGxheWVyRG93bkltYWdlVXJsO1xuY29uc3QgcGxheWVyVXBJbWFnZSA9IG5ldyBJbWFnZSgpO1xucGxheWVyVXBJbWFnZS5zcmMgPSBwbGF5ZXJVcEltYWdlVXJsO1xuY29uc3QgcGxheWVyTGVmdEltYWdlID0gbmV3IEltYWdlKCk7XG5wbGF5ZXJMZWZ0SW1hZ2Uuc3JjID0gcGxheWVyTGVmdEltYWdlVXJsO1xuY29uc3QgcGxheWVyUmlnaHRJbWFnZSA9IG5ldyBJbWFnZSgpO1xucGxheWVyUmlnaHRJbWFnZS5zcmMgPSBwbGF5ZXJSaWdodEltYWdlVXJsO1xuXG5jb25zdCBwbGF5ZXJXaWR0aCA9IDE5MjtcbmNvbnN0IHBsYXllckhlaWdodCA9IDY4O1xuY29uc3QgbXZtdERpc3RhbmNlID0gcGxheWVyRG93bkltYWdlLmhlaWdodCAvIDQgLyAyO1xuXG5jb25zdCBwbGF5ZXIgPSBuZXcgU3ByaXRlKHtcblx0cG9zaXRpb246IHtcblx0XHR4OiBjYW52YXMud2lkdGggLyAyIC0gcGxheWVyV2lkdGggLyA0IC8gMixcblx0XHR5OiBjYW52YXMuaGVpZ2h0IC8gMiAtIHBsYXllckhlaWdodCAvIDIsXG5cdH0sXG5cdGltYWdlOiBwbGF5ZXJEb3duSW1hZ2UsXG5cdGZyYW1lczoge1xuXHRcdG1heDogNCxcblx0XHRob2xkOiAxMCxcblx0fSxcblx0c3ByaXRlczoge1xuXHRcdHVwOiBwbGF5ZXJVcEltYWdlLFxuXHRcdGRvd246IHBsYXllckRvd25JbWFnZSxcblx0XHRsZWZ0OiBwbGF5ZXJMZWZ0SW1hZ2UsXG5cdFx0cmlnaHQ6IHBsYXllclJpZ2h0SW1hZ2UsXG5cdH0sXG59KTtcblxuY29uc3QgYmFja2dyb3VuZCA9IG5ldyBTcHJpdGUoe1xuXHRwb3NpdGlvbjoge1xuXHRcdHg6IG9mZnNldC54LFxuXHRcdHk6IG9mZnNldC55LFxuXHR9LFxuXHRpbWFnZTogaW1hZ2UsXG59KTtcblxuY29uc3QgZm9yZWdyb3VuZCA9IG5ldyBTcHJpdGUoe1xuXHRwb3NpdGlvbjoge1xuXHRcdHg6IG9mZnNldC54LFxuXHRcdHk6IG9mZnNldC55LFxuXHR9LFxuXHRpbWFnZTogZm9yZWdyb3VuZEltYWdlLFxufSk7XG5cbmNvbnN0IGtleXMgPSB7XG5cdHVwOiB7XG5cdFx0cHJlc3NlZDogZmFsc2UsXG5cdH0sXG5cdGRvd246IHtcblx0XHRwcmVzc2VkOiBmYWxzZSxcblx0fSxcblx0bGVmdDoge1xuXHRcdHByZXNzZWQ6IGZhbHNlLFxuXHR9LFxuXHRyaWdodDoge1xuXHRcdHByZXNzZWQ6IGZhbHNlLFxuXHR9LFxufTtcblxuY29uc3QgbW92YWJsZXMgPSBbYmFja2dyb3VuZCwgZm9yZWdyb3VuZCwgLi4uYm91bmRhcmllcywgLi4uYmF0dGxlWm9uZXNdO1xuXG5mdW5jdGlvbiBzaGFwZUNvbGxpc2lvbih7IHNoYXBlMSwgc2hhcGUyIH0pIHtcblx0cmV0dXJuIChcblx0XHRzaGFwZTEucG9zaXRpb24ueCArIHNoYXBlMS53aWR0aCA+PSBzaGFwZTIucG9zaXRpb24ueCAmJlxuXHRcdHNoYXBlMS5wb3NpdGlvbi54IDw9IHNoYXBlMi5wb3NpdGlvbi54ICsgc2hhcGUyLndpZHRoICYmXG5cdFx0c2hhcGUxLnBvc2l0aW9uLnkgKyBzaGFwZTEuaGVpZ2h0ICogMC43ID49IHNoYXBlMi5wb3NpdGlvbi55ICYmXG5cdFx0c2hhcGUxLnBvc2l0aW9uLnkgPD0gc2hhcGUyLnBvc2l0aW9uLnkgKyBzaGFwZTIuaGVpZ2h0ICogMC4yXG5cdCk7XG59XG5cbmV4cG9ydCBjb25zdCBiYXR0bGUgPSB7XG5cdGluaXRpYXRlZDogZmFsc2UsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcblx0Y29uc3QgYW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuXHRiYWNrZ3JvdW5kLmRyYXcoKTtcblx0Ym91bmRhcmllcy5mb3JFYWNoKChib3VuZGFyeSkgPT4ge1xuXHRcdGJvdW5kYXJ5LmRyYXcoKTtcblx0fSk7XG5cdGJhdHRsZVpvbmVzLmZvckVhY2goKGJhdHRsZVpvbmUpID0+IHtcblx0XHRiYXR0bGVab25lLmRyYXcoKTtcblx0fSk7XG5cdHBsYXllci5kcmF3KCk7XG5cdGZvcmVncm91bmQuZHJhdygpO1xuXG5cdC8vIE1PVkVNRU5UIC8vXG5cdGxldCBtb3ZpbmcgPSB0cnVlO1xuXHRwbGF5ZXIuYW5pbWF0ZSA9IGZhbHNlO1xuXG5cdC8vIEJhdHRsZSBhY3RpdmF0aW9uXG5cdGlmIChiYXR0bGUuaW5pdGlhdGVkKSByZXR1cm47IC8vIHNraXAgYmF0dGxlIGFjdGl2YXRpb24gaWYgaW4gYmF0dGxlXG5cblx0aWYgKFxuXHRcdGtleXMudXAucHJlc3NlZCB8fFxuXHRcdGtleXMuZG93bi5wcmVzc2VkIHx8XG5cdFx0a2V5cy5sZWZ0LnByZXNzZWQgfHxcblx0XHRrZXlzLnJpZ2h0LnByZXNzZWRcblx0KSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBiYXR0bGVab25lcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgYmF0dGxlWm9uZSA9IGJhdHRsZVpvbmVzW2ldO1xuXHRcdFx0Y29uc3Qgb3ZlcmxhcFggPVxuXHRcdFx0XHRNYXRoLm1pbihcblx0XHRcdFx0XHRwbGF5ZXIucG9zaXRpb24ueCArIHBsYXllci53aWR0aCxcblx0XHRcdFx0XHRiYXR0bGVab25lLnBvc2l0aW9uLnggKyBiYXR0bGVab25lLndpZHRoXG5cdFx0XHRcdCkgLSBNYXRoLm1heChwbGF5ZXIucG9zaXRpb24ueCwgYmF0dGxlWm9uZS5wb3NpdGlvbi54KTtcblx0XHRcdGNvbnN0IG92ZXJsYXBZID1cblx0XHRcdFx0TWF0aC5taW4oXG5cdFx0XHRcdFx0cGxheWVyLnBvc2l0aW9uLnkgKyBwbGF5ZXIuaGVpZ2h0LFxuXHRcdFx0XHRcdGJhdHRsZVpvbmUucG9zaXRpb24ueSArIGJhdHRsZVpvbmUuaGVpZ2h0XG5cdFx0XHRcdCkgLSBNYXRoLm1heChwbGF5ZXIucG9zaXRpb24ueSwgYmF0dGxlWm9uZS5wb3NpdGlvbi55KTtcblx0XHRcdGNvbnN0IG92ZXJsYXBwaW5nQXJlYSA9IG92ZXJsYXBYICogb3ZlcmxhcFk7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0c2hhcGVDb2xsaXNpb24oe1xuXHRcdFx0XHRcdHNoYXBlMTogcGxheWVyLFxuXHRcdFx0XHRcdHNoYXBlMjogYmF0dGxlWm9uZSxcblx0XHRcdFx0fSkgJiZcblx0XHRcdFx0b3ZlcmxhcHBpbmdBcmVhID4gKHBsYXllci53aWR0aCAqIHBsYXllci5oZWlnaHQpIC8gMiAmJlxuXHRcdFx0XHRNYXRoLnJhbmRvbSgpIDwgMC4wMlxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIGRlYWN0aXZlIGN1cnJlbnQgYW5pbWF0aW9uIGxvb3Bcblx0XHRcdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbklkKTtcblxuXHRcdFx0XHRhdWRpby5tYXAuc3RvcCgpO1xuXHRcdFx0XHRhdWRpby5pbml0QmF0dGxlLnBsYXkoKTtcblx0XHRcdFx0YXVkaW8uYmF0dGxlLnBsYXkoKTtcblxuXHRcdFx0XHRiYXR0bGUuaW5pdGlhdGVkID0gdHJ1ZTtcblx0XHRcdFx0Z3NhcC50byhcIiNvdmVybGFwV3JhcFwiLCB7XG5cdFx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0XHRyZXBlYXQ6IDMsXG5cdFx0XHRcdFx0eW95bzogdHJ1ZSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMC40LFxuXHRcdFx0XHRcdG9uQ29tcGxldGUoKSB7XG5cdFx0XHRcdFx0XHRnc2FwLnRvKFwiI292ZXJsYXBXcmFwXCIsIHtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuNCxcblx0XHRcdFx0XHRcdFx0b25Db21wbGV0ZSgpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBhY3RpdmUgbmV3IGFuaW1hdGlvbiBsb29wXG5cdFx0XHRcdFx0XHRcdFx0aW5pdEJhdHRsZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVCYXR0bGUoKTtcblx0XHRcdFx0XHRcdFx0XHRnc2FwLnRvKFwiI292ZXJsYXBXcmFwXCIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC40LFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChrZXlzLmRvd24ucHJlc3NlZCAmJiBsYXN0S2V5ID09PSBcImRvd25cIikge1xuXHRcdHBsYXllci5hbmltYXRlID0gdHJ1ZTtcblx0XHRwbGF5ZXIuaW1hZ2UgPSBwbGF5ZXIuc3ByaXRlcy5kb3duO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcmllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgYm91bmRhcnkgPSBib3VuZGFyaWVzW2ldO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRzaGFwZUNvbGxpc2lvbih7XG5cdFx0XHRcdFx0c2hhcGUxOiBwbGF5ZXIsXG5cdFx0XHRcdFx0c2hhcGUyOiB7XG5cdFx0XHRcdFx0XHQuLi5ib3VuZGFyeSxcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdHg6IGJvdW5kYXJ5LnBvc2l0aW9uLngsXG5cdFx0XHRcdFx0XHRcdHk6IGJvdW5kYXJ5LnBvc2l0aW9uLnkgLSBwbGF5ZXJEb3duSW1hZ2UuaGVpZ2h0IC8gMixcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblx0XHRcdCkge1xuXHRcdFx0XHRtb3ZpbmcgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG1vdmluZykge1xuXHRcdFx0bW92YWJsZXMuZm9yRWFjaCgobW92YWJsZSkgPT4ge1xuXHRcdFx0XHRtb3ZhYmxlLnBvc2l0aW9uLnkgLT0gcGxheWVyRG93bkltYWdlLmhlaWdodCAvIDQgLyAyO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdC8vIGJhY2tncm91bmQucG9zaXRpb24ueSAtPSBwbGF5ZXJEb3duSW1hZ2UuaGVpZ2h0IC8gNCAvIDI7XG5cdH0gZWxzZSBpZiAoa2V5cy51cC5wcmVzc2VkICYmIGxhc3RLZXkgPT09IFwidXBcIikge1xuXHRcdHBsYXllci5hbmltYXRlID0gdHJ1ZTtcblx0XHRwbGF5ZXIuaW1hZ2UgPSBwbGF5ZXIuc3ByaXRlcy51cDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGJvdW5kYXJ5ID0gYm91bmRhcmllc1tpXTtcblx0XHRcdGlmIChcblx0XHRcdFx0c2hhcGVDb2xsaXNpb24oe1xuXHRcdFx0XHRcdHNoYXBlMTogcGxheWVyLFxuXHRcdFx0XHRcdHNoYXBlMjoge1xuXHRcdFx0XHRcdFx0Li4uYm91bmRhcnksXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0XHR4OiBib3VuZGFyeS5wb3NpdGlvbi54LFxuXHRcdFx0XHRcdFx0XHR5OiBib3VuZGFyeS5wb3NpdGlvbi55ICsgcGxheWVyRG93bkltYWdlLmhlaWdodCAvIDQgLyAyLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KSB7XG5cdFx0XHRcdG1vdmluZyA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobW92aW5nKSB7XG5cdFx0XHRtb3ZhYmxlcy5mb3JFYWNoKChtb3ZhYmxlKSA9PiB7XG5cdFx0XHRcdG1vdmFibGUucG9zaXRpb24ueSArPSBwbGF5ZXJEb3duSW1hZ2UuaGVpZ2h0IC8gNCAvIDI7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoa2V5cy5sZWZ0LnByZXNzZWQgJiYgbGFzdEtleSA9PT0gXCJsZWZ0XCIpIHtcblx0XHRwbGF5ZXIuYW5pbWF0ZSA9IHRydWU7XG5cdFx0cGxheWVyLmltYWdlID0gcGxheWVyLnNwcml0ZXMubGVmdDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGJvdW5kYXJ5ID0gYm91bmRhcmllc1tpXTtcblx0XHRcdGlmIChcblx0XHRcdFx0c2hhcGVDb2xsaXNpb24oe1xuXHRcdFx0XHRcdHNoYXBlMTogcGxheWVyLFxuXHRcdFx0XHRcdHNoYXBlMjoge1xuXHRcdFx0XHRcdFx0Li4uYm91bmRhcnksXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0XHR4OiBib3VuZGFyeS5wb3NpdGlvbi54ICsgcGxheWVyRG93bkltYWdlLmhlaWdodCAvIDQgLyAyLFxuXHRcdFx0XHRcdFx0XHR5OiBib3VuZGFyeS5wb3NpdGlvbi55LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KSB7XG5cdFx0XHRcdG1vdmluZyA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobW92aW5nKSB7XG5cdFx0XHRtb3ZhYmxlcy5mb3JFYWNoKChtb3ZhYmxlKSA9PiB7XG5cdFx0XHRcdG1vdmFibGUucG9zaXRpb24ueCArPSBwbGF5ZXJEb3duSW1hZ2UuaGVpZ2h0IC8gNCAvIDI7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoa2V5cy5yaWdodC5wcmVzc2VkICYmIGxhc3RLZXkgPT09IFwicmlnaHRcIikge1xuXHRcdHBsYXllci5hbmltYXRlID0gdHJ1ZTtcblx0XHRwbGF5ZXIuaW1hZ2UgPSBwbGF5ZXIuc3ByaXRlcy5yaWdodDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGJvdW5kYXJ5ID0gYm91bmRhcmllc1tpXTtcblx0XHRcdGlmIChcblx0XHRcdFx0c2hhcGVDb2xsaXNpb24oe1xuXHRcdFx0XHRcdHNoYXBlMTogcGxheWVyLFxuXHRcdFx0XHRcdHNoYXBlMjoge1xuXHRcdFx0XHRcdFx0Li4uYm91bmRhcnksXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0XHR4OiBib3VuZGFyeS5wb3NpdGlvbi54IC0gcGxheWVyRG93bkltYWdlLmhlaWdodCAvIDQgLyAyLFxuXHRcdFx0XHRcdFx0XHR5OiBib3VuZGFyeS5wb3NpdGlvbi55LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KSB7XG5cdFx0XHRcdG1vdmluZyA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobW92aW5nKSB7XG5cdFx0XHRtb3ZhYmxlcy5mb3JFYWNoKChtb3ZhYmxlKSA9PiB7XG5cdFx0XHRcdG1vdmFibGUucG9zaXRpb24ueCAtPSBwbGF5ZXJEb3duSW1hZ2UuaGVpZ2h0IC8gNCAvIDI7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbmFuaW1hdGUoKTtcblxubGV0IGxhc3RLZXkgPSBcIlwiO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG5cdGlmIChlLmtleSA9PT0gXCJzXCIgfHwgZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcblx0XHRrZXlzLmRvd24ucHJlc3NlZCA9IHRydWU7XG5cdFx0bGFzdEtleSA9IFwiZG93blwiO1xuXHR9IGVsc2UgaWYgKGUua2V5ID09PSBcImRcIiB8fCBlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcblx0XHRrZXlzLnJpZ2h0LnByZXNzZWQgPSB0cnVlO1xuXHRcdGxhc3RLZXkgPSBcInJpZ2h0XCI7XG5cdH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiIHx8IGUua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG5cdFx0a2V5cy5sZWZ0LnByZXNzZWQgPSB0cnVlO1xuXHRcdGxhc3RLZXkgPSBcImxlZnRcIjtcblx0fSBlbHNlIGlmIChlLmtleSA9PT0gXCJ3XCIgfHwgZS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG5cdFx0a2V5cy51cC5wcmVzc2VkID0gdHJ1ZTtcblx0XHRsYXN0S2V5ID0gXCJ1cFwiO1xuXHR9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuXHRpZiAoZS5rZXkgPT09IFwic1wiIHx8IGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG5cdFx0a2V5cy5kb3duLnByZXNzZWQgPSBmYWxzZTtcblx0fSBlbHNlIGlmIChlLmtleSA9PT0gXCJkXCIgfHwgZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG5cdFx0a2V5cy5yaWdodC5wcmVzc2VkID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiIHx8IGUua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG5cdFx0a2V5cy5sZWZ0LnByZXNzZWQgPSBmYWxzZTtcblx0fSBlbHNlIGlmIChlLmtleSA9PT0gXCJ3XCIgfHwgZS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG5cdFx0a2V5cy51cC5wcmVzc2VkID0gZmFsc2U7XG5cdH1cbn0pO1xuXG5sZXQgY2xpY2tlZCA9IGZhbHNlO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGlmICghY2xpY2tlZCkge1xuXHRcdGF1ZGlvLm1hcC5wbGF5KCk7XG5cdFx0Y2xpY2tlZCA9IHRydWU7XG5cdH1cbn0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsICgpID0+IHtcblx0aWYgKCFjbGlja2VkKSB7XG5cdFx0YXVkaW8ubWFwLnBsYXkoKTtcblx0XHRjbGlja2VkID0gdHJ1ZTtcblx0fVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=