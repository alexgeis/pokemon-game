"use strict";
(self["webpackChunkpokemon_game"] = self["webpackChunkpokemon_game"] || []).push([["battle"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/battleScene.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkhPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SG9DOztBQUV1QjtBQUNNOztBQUUxRDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsUUFBUSw0REFBVTtBQUNsQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxZQUFZLG9EQUFjLEVBQUUsc0RBQWdCO0FBQzVDLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLFFBQVEsK0RBQWE7QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFjLEVBQUUsc0RBQWdCO0FBQzVDLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q3FCO0FBQ29EO0FBQ087QUFDZDtBQUNKO0FBQ0k7QUFDRTtBQUNWO0FBQ2I7QUFDRjtBQUNTO0FBQ0Y7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQTtBQUNPLG1DQUFtQzs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixJQUFJLG1FQUFpQixFQUFFO0FBQ3ZDLG9CQUFvQixrRUFBZ0I7QUFDcEM7O0FBRUE7QUFDQSxnQkFBZ0IsSUFBSSxxRUFBc0IsRUFBRTtBQUM1QyxxQkFBcUIsb0VBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUFRO0FBQ2hCO0FBQ0EsYUFBYSxvREFBYztBQUMzQixhQUFhLHFEQUFlO0FBQzVCLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUFRO0FBQ2hCO0FBQ0EsYUFBYSxvREFBYztBQUMzQixhQUFhLHFEQUFlO0FBQzVCLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVELDJCQUEyQjtBQUMzQixZQUFZLG1FQUFrQjs7QUFFOUI7QUFDQSxzQkFBc0IsMEVBQWtCOztBQUV4QztBQUNBLHNCQUFzQiw0REFBa0I7QUFDeEM7QUFDQSxvQkFBb0IsMERBQWdCO0FBQ3BDO0FBQ0Esc0JBQXNCLDREQUFrQjtBQUN4QztBQUNBLHVCQUF1Qiw2REFBbUI7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNENBQU07QUFDekI7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRCx1QkFBdUIsNENBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsQ0FBQzs7QUFFRCx1QkFBdUIsNENBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7O0FBRUEsMEJBQTBCLGdCQUFnQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksNkRBQWM7QUFDbEIsSUFBSSxvRUFBcUI7QUFDekIsSUFBSSxnRUFBaUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQVU7QUFDbEIsUUFBUSwyREFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSLE9BQU87QUFDUCxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFjO0FBQ2hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUUsNkRBQWM7QUFDaEI7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2RhdGEvYXVkaW8vYmF0dGxlLm1wMyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvZGF0YS9hdWRpby9maXJlYmFsbEhpdC53YXYiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2RhdGEvYXVkaW8vaW5pdEJhdHRsZS53YXYiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2RhdGEvYXVkaW8vaW5pdEZpcmViYWxsLndhdiIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvZGF0YS9hdWRpby9tYXAud2F2Iiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL3NyYy9kYXRhL2F1ZGlvL3RhY2tsZUhpdC53YXYiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2RhdGEvYXVkaW8vdmljdG9yeS53YXYiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2JhdHRsZVNjZW5lLmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL3NyYy9kYXRhL2F0dGFja3MuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2RhdGEvYXVkaW8vYXVkaW8uanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2RhdGEvYmF0dGxlRGF0YS5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvZGF0YS9jb2xsaXNpb25EYXRhLmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL3NyYy9kYXRhL21vbnN0ZXJzLmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2l0ZVdyYXAge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAuNXJlbTtcXG59XFxuXFxuI292ZXJsYXBXcmFwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbiNiYXR0bGVXcmFwIHtcXG4gICAgZGlzcGxheTogbm9uZVxcbn1cXG5cXG4jYmF0dGxlSW50ZXJmYWNlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxNDBweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm9yZGVyLXRvcDogNHB4IGJsYWNrIHNvbGlkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jYmF0dGxlQ29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYXR0YWNrcyB7XFxuICAgIHdpZHRoOiA2Ni42NiU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcblxcbiNhdHRhY2tzIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbiNhdHRhY2tzIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2F0dGFja1R5cGUge1xcbiAgICB3aWR0aDogMzMuMzMlO1xcbiAgICBib3JkZXItbGVmdDogNHB4IGJsYWNrIHNvbGlkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2F0dGFja1R5cGUgaDEge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5oZWFsdGgge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbn1cXG4jaGVhbHRoTW9uMSB7XFxuICAgIHRvcDogNTBweDtcXG4gICAgbGVmdDogNTBweDtcXG59XFxuI2hlYWx0aE1vbjIge1xcbiAgICBib3R0b206IDE5MHB4O1xcbiAgICByaWdodDogNTBweDtcXG59XFxuLmhlYWx0aCBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmhlYWx0aEJhcldyYXAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oZWFsdGhCYXIge1xcbiAgICBoZWlnaHQ6IDVweDtcXG59XFxuLmZ1bGxIZWFsdGgge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG4uY3VyckhlYWx0aCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcbiNjdXJySGVhbHRoRW5lbXkge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI2N1cnJIZWFsdGhQbGF5ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2dhbWVJbnN0cnVjdGlvbnMge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzaXRlV3JhcCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IC41cmVtO1xcbn1cXG5cXG4jb3ZlcmxhcFdyYXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuI2JhdHRsZVdyYXAge1xcbiAgICBkaXNwbGF5OiBub25lXFxufVxcblxcbiNiYXR0bGVJbnRlcmZhY2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3JkZXItdG9wOiA0cHggYmxhY2sgc29saWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNiYXR0bGVDb250ZW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhdHRhY2tzIHtcXG4gICAgd2lkdGg6IDY2LjY2JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuI2F0dGFja3MgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuI2F0dGFja3MgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYXR0YWNrVHlwZSB7XFxuICAgIHdpZHRoOiAzMy4zMyU7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggYmxhY2sgc29saWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jYXR0YWNrVHlwZSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmhlYWx0aCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxufVxcbiNoZWFsdGhNb24xIHtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICBsZWZ0OiA1MHB4O1xcbn1cXG4jaGVhbHRoTW9uMiB7XFxuICAgIGJvdHRvbTogMTkwcHg7XFxuICAgIHJpZ2h0OiA1MHB4O1xcbn1cXG4uaGVhbHRoIGgyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uaGVhbHRoQmFyV3JhcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhlYWx0aEJhciB7XFxuICAgIGhlaWdodDogNXB4O1xcbn1cXG4uZnVsbEhlYWx0aCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcbi5jdXJySGVhbHRoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuI2N1cnJIZWFsdGhFbmVteSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4jY3VyckhlYWx0aFBsYXllciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZ2FtZUluc3RydWN0aW9ucyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwMDQ3ZGEwMjY1ZjQ0NmI4ZDViYzRjZmVlNTUyOTYzMS5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzdkZDUzNzZmODc4OGE3YzBjMzQzNjRhN2ZhYzE4OWYud2F2XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjhhOWM0MDMyMjA3MjI4ZWM5NjRjYzA4MTY5ZmUwZmIxLndhdlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjODhkMDM1NTljOGMzYjI4YjEwNThjNmRmYTcyYzI3YS53YXZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTA3OWJkMWM5YzAxYjEzY2NjYjBkZmFlOTY1MDk2N2Uud2F2XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZiYjA4ZGNjNDhlZmY3NjZhZTdhMWU4YTVmMzBmODU5LndhdlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2N2IxODEzYzljNGE0NWQ0ZjcxNzc0YWQ3YmJhZjgxNS53YXZcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYW5pbWF0ZSwgYmF0dGxlIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IFNwcml0ZSwgTW9uc3RlciB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IGF1ZGlvIH0gZnJvbSBcIi4vZGF0YS9hdWRpby9hdWRpb1wiO1xuaW1wb3J0IHsgYXR0YWNrcyB9IGZyb20gXCIuL2RhdGEvYXR0YWNrc1wiO1xuaW1wb3J0IHsgbW9uc3RlcnNEYXRhIH0gZnJvbSBcIi4vZGF0YS9tb25zdGVyc1wiO1xuaW1wb3J0IGJhdHRsZUJhY2tncm91bmRJbWdVUkwgZnJvbSBcIi4vaW1nL2dhbWVfYXNzZXRzL2JhdHRsZUJhY2tncm91bmQucG5nXCI7XG5cbmNvbnN0IGJhdHRsZUJhY2tncm91bmRJbWcgPSBuZXcgSW1hZ2UoKTtcbmJhdHRsZUJhY2tncm91bmRJbWcuc3JjID0gYmF0dGxlQmFja2dyb3VuZEltZ1VSTDtcbmNvbnN0IGJhdHRsZUJhY2tncm91bmQgPSBuZXcgU3ByaXRlKHtcblx0cG9zaXRpb246IHtcblx0XHR4OiAwLFxuXHRcdHk6IDAsXG5cdH0sXG5cdGltYWdlOiBiYXR0bGVCYWNrZ3JvdW5kSW1nLFxufSk7XG5cbmxldCBkcmFnZ2xlO1xubGV0IGVtYnk7XG5sZXQgcmVuZGVyZWRTcHJpdGVzO1xubGV0IGJhdHRsZUFuaW1hdGlvbklkO1xubGV0IHF1ZXVlO1xuY29uc3QgZW5kQmF0dGxlID0gKCkgPT4ge1xuXHRnc2FwLnRvKFwiI292ZXJsYXBXcmFwXCIsIHtcblx0XHRvcGFjaXR5OiAxLFxuXHRcdG9uQ29tcGxldGU6ICgpID0+IHtcblx0XHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShiYXR0bGVBbmltYXRpb25JZCk7XG5cdFx0XHRhbmltYXRlKCk7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhdHRsZVdyYXBcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG5cdFx0XHRnc2FwLnRvKFwiI292ZXJsYXBXcmFwXCIsIHtcblx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdH0pO1xuXG5cdFx0XHRiYXR0bGUuaW5pdGlhdGVkID0gZmFsc2U7XG5cdFx0XHRhdWRpby5tYXAucGxheSgpO1xuXHRcdH0sXG5cdH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCYXR0bGUoKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmF0dGxlV3JhcFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhdHRsZUNvbnRlbnRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJIZWFsdGhFbmVteVwiKS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJIZWFsdGhQbGF5ZXJcIikuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdHRhY2tzXCIpLnJlcGxhY2VDaGlsZHJlbigpO1xuXG5cdGRyYWdnbGUgPSBuZXcgTW9uc3Rlcihtb25zdGVyc0RhdGEuRHJhZ2dsZSk7XG5cdGVtYnkgPSBuZXcgTW9uc3Rlcihtb25zdGVyc0RhdGEuRW1ieSk7XG5cdHJlbmRlcmVkU3ByaXRlcyA9IFtkcmFnZ2xlLCBlbWJ5XTtcblx0cXVldWUgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGF0dGFjayBvZiBlbWJ5LmF0dGFja3MpIHtcblx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdGJ1dHRvbi5pbm5lckhUTUwgPSBhdHRhY2submFtZTtcblx0XHRidXR0b24uY2xhc3NMaXN0LmFkZChcImF0dGFja1wiKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F0dGFja3NcIikuYXBwZW5kKGJ1dHRvbik7XG5cdH1cblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmF0dGFja1wiKS5mb3JFYWNoKChidXR0b24pID0+IHtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRjb25zdCB0YXJnZXRBdHRhY2sgPSBhdHRhY2tzW2UuY3VycmVudFRhcmdldC5pbm5lckhUTUxdO1xuXG5cdFx0XHRlbWJ5LmF0dGFjayh7XG5cdFx0XHRcdGF0dGFjazogdGFyZ2V0QXR0YWNrLFxuXHRcdFx0XHRyZWNpcGllbnQ6IGRyYWdnbGUsXG5cdFx0XHRcdHJlbmRlcmVkU3ByaXRlcyxcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBlbmVteSBhdHRhY2tzXG5cdFx0XHRpZiAoZHJhZ2dsZS5oZWFsdGggPD0gMCkge1xuXHRcdFx0XHRxdWV1ZS5wdXNoKCgpID0+IHtcblx0XHRcdFx0XHRkcmFnZ2xlLmZhaW50KCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHF1ZXVlLnB1c2goZW5kQmF0dGxlKTtcblx0XHRcdFx0Ly8gcmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByYW5kb21BdHRhY2tJbmRleCA9IE1hdGguZmxvb3IoXG5cdFx0XHRcdE1hdGgucmFuZG9tKCkgKiBkcmFnZ2xlLmF0dGFja3MubGVuZ3RoXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgcmFuZG9tQXR0YWNrID0gZHJhZ2dsZS5hdHRhY2tzW3JhbmRvbUF0dGFja0luZGV4XTtcblx0XHRcdHF1ZXVlLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRkcmFnZ2xlLmF0dGFjayh7XG5cdFx0XHRcdFx0YXR0YWNrOiByYW5kb21BdHRhY2ssXG5cdFx0XHRcdFx0cmVjaXBpZW50OiBlbWJ5LFxuXHRcdFx0XHRcdHJlbmRlcmVkU3ByaXRlcyxcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKGVtYnkuaGVhbHRoIDw9IDApIHtcblx0XHRcdFx0XHRxdWV1ZS5wdXNoKCgpID0+IHtcblx0XHRcdFx0XHRcdGVtYnkuZmFpbnQoKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHF1ZXVlLnB1c2goZW5kQmF0dGxlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldEF0dGFjayA9IGF0dGFja3NbZS5jdXJyZW50VGFyZ2V0LmlubmVySFRNTF07XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F0dGFja1R5cGVUZXh0XCIpLnRleHRDb250ZW50ID0gdGFyZ2V0QXR0YWNrLnR5cGU7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F0dGFja1R5cGVUZXh0XCIpLnN0eWxlLmNvbG9yID1cblx0XHRcdFx0dGFyZ2V0QXR0YWNrLmNvbG9yO1xuXHRcdH0pO1xuXG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0YWNrVHlwZVRleHRcIikudGV4dENvbnRlbnQgPSBcIkF0dGFjayBUeXBlXCI7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F0dGFja1R5cGVUZXh0XCIpLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVCYXR0bGUoKSB7XG5cdGJhdHRsZUFuaW1hdGlvbklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlQmF0dGxlKTtcblx0YmF0dGxlQmFja2dyb3VuZC5kcmF3KCk7XG5cblx0Zm9yIChjb25zdCBzcHJpdGUgb2YgcmVuZGVyZWRTcHJpdGVzKSB7XG5cdFx0c3ByaXRlLmRyYXcoKTtcblx0fVxufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhdHRsZUNvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0cXVldWVbMF0oKTtcblx0XHRxdWV1ZS5zaGlmdCgpO1xuXHR9IGVsc2UgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuIiwiaW1wb3J0IHsgYyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBhdWRpbyB9IGZyb20gXCIuL2RhdGEvYXVkaW8vYXVkaW9cIjtcbmltcG9ydCBmaXJlYmFsbFVybCBmcm9tIFwiLi9pbWcvZ2FtZV9hc3NldHMvZmlyZWJhbGwucG5nXCI7XG5cbmNsYXNzIFNwcml0ZSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRwb3NpdGlvbixcblx0XHRpbWFnZSxcblx0XHRmcmFtZXMgPSB7IG1heDogMSwgaG9sZDogMTAgfSxcblx0XHRzcHJpdGVzLFxuXHRcdGFuaW1hdGUgPSBmYWxzZSxcblx0XHRyb3RhdGlvbiA9IDAsXG5cdFx0dmVsb2NpdHksXG5cdH0pIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cdFx0dGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMuZnJhbWVzID0geyAuLi5mcmFtZXMsIHZhbDogMCwgZWxhcHNlZDogMCB9O1xuXHRcdHRoaXMuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0dGhpcy53aWR0aCA9IHRoaXMuaW1hZ2Uud2lkdGggLyB0aGlzLmZyYW1lcy5tYXg7XG5cdFx0XHR0aGlzLmhlaWdodCA9IHRoaXMuaW1hZ2UuaGVpZ2h0O1xuXHRcdH07XG5cdFx0dGhpcy5pbWFnZS5zcmMgPSBpbWFnZS5zcmM7XG5cdFx0dGhpcy5hbmltYXRlID0gYW5pbWF0ZTtcblx0XHR0aGlzLnNwcml0ZXMgPSBzcHJpdGVzO1xuXHRcdHRoaXMub3BhY2l0eSA9IDE7XG5cdFx0dGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuXHR9XG5cblx0ZHJhdygpIHtcblx0XHRjLnNhdmUoKTtcblx0XHRjLnRyYW5zbGF0ZShcblx0XHRcdHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggLyAyLFxuXHRcdFx0dGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgLyAyXG5cdFx0KTtcblx0XHRjLnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcblx0XHRjLnRyYW5zbGF0ZShcblx0XHRcdC10aGlzLnBvc2l0aW9uLnggLSB0aGlzLndpZHRoIC8gMixcblx0XHRcdC10aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCAvIDJcblx0XHQpO1xuXHRcdGMuZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG5cdFx0Yy5kcmF3SW1hZ2UoXG5cdFx0XHR0aGlzLmltYWdlLFxuXHRcdFx0Ly8gaW1hZ2UgY3JvcCBhcmd1bWVudHNcblx0XHRcdHRoaXMuZnJhbWVzLnZhbCAqIHRoaXMud2lkdGgsXG5cdFx0XHQwLFxuXHRcdFx0dGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzLm1heCxcblx0XHRcdHRoaXMuaW1hZ2UuaGVpZ2h0LFxuXHRcdFx0Ly8gb25zY3JlZW4gcG9zaXRpb25cblx0XHRcdHRoaXMucG9zaXRpb24ueCxcblx0XHRcdHRoaXMucG9zaXRpb24ueSxcblx0XHRcdC8vIG9uc2NyZWVuIHJlbmRlciBmcmFtZVxuXHRcdFx0dGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzLm1heCxcblx0XHRcdHRoaXMuaW1hZ2UuaGVpZ2h0XG5cdFx0KTtcblx0XHRjLnJlc3RvcmUoKTtcblxuXHRcdGlmICghdGhpcy5hbmltYXRlKSByZXR1cm47XG5cblx0XHRpZiAodGhpcy5mcmFtZXMubWF4ID4gMSkge1xuXHRcdFx0dGhpcy5mcmFtZXMuZWxhcHNlZCsrO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmZyYW1lcy5lbGFwc2VkICUgdGhpcy5mcmFtZXMuaG9sZCA9PT0gMCkge1xuXHRcdFx0aWYgKHRoaXMuZnJhbWVzLnZhbCA8IHRoaXMuZnJhbWVzLm1heCAtIDEpIHRoaXMuZnJhbWVzLnZhbCsrO1xuXHRcdFx0ZWxzZSB0aGlzLmZyYW1lcy52YWwgPSAwO1xuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBCb3VuZGFyeSB7XG5cdC8vIDQ4IHB4ID0gNDAwJSB6b29tIG9uIG91ciBvcmlnaW5hbCAxMnB4IHggMTJweCBncmlkc1xuXHRzdGF0aWMgd2lkdGggPSA0ODtcblx0c3RhdGljIGhlaWdodCA9IDQ4O1xuXHRjb25zdHJ1Y3Rvcih7IHBvc2l0aW9uIH0pIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cdFx0dGhpcy53aWR0aCA9IDQ4O1xuXHRcdHRoaXMuaGVpZ2h0ID0gNDg7XG5cdH1cblxuXHRkcmF3KCkge1xuXHRcdGMuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwwLDAsIDApXCI7XG5cdFx0Yy5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXHR9XG59XG5cbmNsYXNzIE1vbnN0ZXIgZXh0ZW5kcyBTcHJpdGUge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0bmFtZSxcblx0XHRpc0VuZW15ID0gZmFsc2UsXG5cdFx0YXR0YWNrcyxcblx0XHQvLyBmdXR1cmUgcGFyYW1zXG5cdFx0dHlwZSxcblx0XHRkZWZlbnNlLFxuXHRcdGF0dGFja1Bvd2VyLFxuXHRcdC8vIHNwcml0ZSBwYXJhbWV0ZXJzXG5cdFx0cG9zaXRpb24sXG5cdFx0aW1hZ2UsXG5cdFx0ZnJhbWVzID0geyBtYXg6IDEsIGhvbGQ6IDEwIH0sXG5cdFx0c3ByaXRlcyxcblx0XHRhbmltYXRlID0gZmFsc2UsXG5cdFx0cm90YXRpb24gPSAwLFxuXHRcdHZlbG9jaXR5LFxuXHR9KSB7XG5cdFx0c3VwZXIoe1xuXHRcdFx0cG9zaXRpb24sXG5cdFx0XHRpbWFnZSxcblx0XHRcdGZyYW1lcyxcblx0XHRcdHNwcml0ZXMsXG5cdFx0XHRhbmltYXRlLFxuXHRcdFx0cm90YXRpb24sXG5cdFx0XHR2ZWxvY2l0eSxcblx0XHR9KTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuaGVhbHRoID0gMTAwO1xuXHRcdHRoaXMuYXR0YWNrcyA9IGF0dGFja3M7XG5cdFx0dGhpcy5pc0VuZW15ID0gaXNFbmVteTtcblx0XHQvLyBmdXR1cmUgcHJvcHMgdG8gaW1wbGVtZW50c1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5kZWZlbnNlID0gZGVmZW5zZTtcblx0XHR0aGlzLmF0dGFja1Bvd2VyID0gYXR0YWNrUG93ZXI7XG5cdFx0Ly8gU3ByaXRlIHByb3BzXG5cdH1cblxuXHRhdHRhY2soeyBhdHRhY2ssIHJlY2lwaWVudCwgcmVuZGVyZWRTcHJpdGVzIH0pIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhdHRsZUNvbnRlbnRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XCIjYmF0dGxlQ29udGVudFwiXG5cdFx0KS50ZXh0Q29udGVudCA9IGAke3RoaXMubmFtZX0gdXNlZCAke2F0dGFjay5uYW1lfWA7XG5cblx0XHRsZXQgaGVhbHRoQmFyID0gXCIjY3VyckhlYWx0aEVuZW15XCI7XG5cdFx0aWYgKHRoaXMuaXNFbmVteSkgaGVhbHRoQmFyID0gXCIjY3VyckhlYWx0aFBsYXllclwiO1xuXG5cdFx0cmVjaXBpZW50LmhlYWx0aCAtPSBhdHRhY2suZGFtYWdlO1xuXHRcdGlmIChyZWNpcGllbnQuaGVhbHRoIDwgMSkgcmVjaXBpZW50LmhlYWx0aCA9IDA7XG5cblx0XHRsZXQgcm90YXRpb24gPSAxO1xuXHRcdGlmICh0aGlzLmlzRW5lbXkpIHJvdGF0aW9uID0gLTIuMjtcblxuXHRcdHN3aXRjaCAoYXR0YWNrLm5hbWUpIHtcblx0XHRcdGNhc2UgXCJUYWNrbGVcIjpcblx0XHRcdFx0Y29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cblx0XHRcdFx0bGV0IG1vdmVtZW50RGlzdGFuY2UgPSAxMDtcblx0XHRcdFx0aWYgKHRoaXMuaXNFbmVteSkgbW92ZW1lbnREaXN0YW5jZSA9IC0xMDtcblxuXHRcdFx0XHR0bC50byh0aGlzLnBvc2l0aW9uLCB7XG5cdFx0XHRcdFx0eDogdGhpcy5wb3NpdGlvbi54IC0gbW92ZW1lbnREaXN0YW5jZSAqIDIsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnRvKHRoaXMucG9zaXRpb24sIHtcblx0XHRcdFx0XHRcdHg6IHRoaXMucG9zaXRpb24ueCArIG1vdmVtZW50RGlzdGFuY2UgKiA0LFxuXHRcdFx0XHRcdFx0eTogdGhpcy5wb3NpdGlvbi55IC0gbW92ZW1lbnREaXN0YW5jZSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjEsXG5cdFx0XHRcdFx0XHRvbkNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdC8vIGVuZW15IGdldHMgaGl0XG5cdFx0XHRcdFx0XHRcdGF1ZGlvLnRhY2tsZUhpdC5wbGF5KCk7XG5cdFx0XHRcdFx0XHRcdGdzYXAudG8oaGVhbHRoQmFyLCB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IHJlY2lwaWVudC5oZWFsdGggKyBcIiVcIixcblx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0Z3NhcC50byhyZWNpcGllbnQucG9zaXRpb24sIHtcblx0XHRcdFx0XHRcdFx0XHR4OiByZWNpcGllbnQucG9zaXRpb24ueCArIDEwLFxuXHRcdFx0XHRcdFx0XHRcdHlveW86IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0cmVwZWF0OiA1LFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjA4LFxuXHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHRnc2FwLnRvKHJlY2lwaWVudCwge1xuXHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdFx0XHRcdFx0cmVwZWF0OiA1LFxuXHRcdFx0XHRcdFx0XHRcdHlveW86IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuMDgsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50byh0aGlzLnBvc2l0aW9uLCB7XG5cdFx0XHRcdFx0XHR4OiB0aGlzLnBvc2l0aW9uLngsXG5cdFx0XHRcdFx0XHR5OiB0aGlzLnBvc2l0aW9uLnksXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiRmlyZWJhbGxcIjpcblx0XHRcdFx0YXVkaW8uaW5pdEZpcmViYWxsLnBsYXkoKTtcblx0XHRcdFx0Y29uc3QgZmlyZWJhbGxJbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdFx0ZmlyZWJhbGxJbWcuc3JjID0gZmlyZWJhbGxVcmw7XG5cdFx0XHRcdGNvbnN0IGZpcmViYWxsID0gbmV3IFNwcml0ZSh7XG5cdFx0XHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0XHRcdHg6IHRoaXMucG9zaXRpb24ueCxcblx0XHRcdFx0XHRcdHk6IHRoaXMucG9zaXRpb24ueSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGltYWdlOiBmaXJlYmFsbEltZyxcblx0XHRcdFx0XHRmcmFtZXM6IHtcblx0XHRcdFx0XHRcdG1heDogNCxcblx0XHRcdFx0XHRcdGhvbGQ6IDEwLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YW5pbWF0ZTogdHJ1ZSxcblx0XHRcdFx0XHRyb3RhdGlvbixcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJlbmRlcmVkU3ByaXRlcy5zcGxpY2UoMSwgMCwgZmlyZWJhbGwpO1xuXG5cdFx0XHRcdGdzYXAudG8oZmlyZWJhbGwucG9zaXRpb24sIHtcblx0XHRcdFx0XHR4OiByZWNpcGllbnQucG9zaXRpb24ueCxcblx0XHRcdFx0XHR5OiByZWNpcGllbnQucG9zaXRpb24ueSxcblx0XHRcdFx0XHRvbkNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHQvLyBlbmVteSBnZXRzIGhpdFxuXHRcdFx0XHRcdFx0YXVkaW8uZmlyZWJhbGxIaXQucGxheSgpO1xuXG5cdFx0XHRcdFx0XHRnc2FwLnRvKGhlYWx0aEJhciwge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogcmVjaXBpZW50LmhlYWx0aCArIFwiJVwiLFxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdGdzYXAudG8ocmVjaXBpZW50LnBvc2l0aW9uLCB7XG5cdFx0XHRcdFx0XHRcdHg6IHJlY2lwaWVudC5wb3NpdGlvbi54ICsgMTAsXG5cdFx0XHRcdFx0XHRcdHlveW86IHRydWUsXG5cdFx0XHRcdFx0XHRcdHJlcGVhdDogNSxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuMDgsXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0Z3NhcC50byhyZWNpcGllbnQsIHtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdFx0XHRcdFx0cmVwZWF0OiA1LFxuXHRcdFx0XHRcdFx0XHR5b3lvOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC4wOCxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0cmVuZGVyZWRTcHJpdGVzLnNwbGljZSgxLCAxKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRmYWludCgpIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XCIjYmF0dGxlQ29udGVudFwiXG5cdFx0KS5pbm5lckhUTUwgPSBgJHt0aGlzLm5hbWV9IGZhaW50ZWQhYDtcblx0XHRnc2FwLnRvKHRoaXMucG9zaXRpb24sIHtcblx0XHRcdHk6IHRoaXMucG9zaXRpb24ueSArIDIwLFxuXHRcdH0pO1xuXHRcdGdzYXAudG8odGhpcywge1xuXHRcdFx0b3BhY2l0eTogMCxcblx0XHR9KTtcblx0XHRhdWRpby5iYXR0bGUuc3RvcCgpO1xuXHRcdGF1ZGlvLnZpY3RvcnkucGxheSgpO1xuXHR9XG59XG5cbmNsYXNzIEF0dGFjayB7XG5cdGNvbnN0cnVjdG9yKHsgbmFtZSwgdHlwZSwgZGFtYWdlLCBhbW91bnQgPSAxMCB9KSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuXHRcdHRoaXMuYW1vdW50ID0gYW1vdW50O1xuXHR9XG59XG5cbmV4cG9ydCB7IFNwcml0ZSwgQm91bmRhcnksIE1vbnN0ZXIgfTtcbiIsImV4cG9ydCBjb25zdCBhdHRhY2tzID0ge1xuXHRUYWNrbGU6IHtcblx0XHRuYW1lOiBcIlRhY2tsZVwiLFxuXHRcdGRhbWFnZTogMTAsXG5cdFx0dHlwZTogXCJOb3JtYWxcIixcblx0XHRjb2xvcjogXCJibGFja1wiLFxuXHR9LFxuXHRGaXJlYmFsbDoge1xuXHRcdG5hbWU6IFwiRmlyZWJhbGxcIixcblx0XHRkYW1hZ2U6IDI1LFxuXHRcdHR5cGU6IFwiRmlyZVwiLFxuXHRcdGNvbG9yOiBcInJlZFwiLFxuXHR9LFxufTtcbiIsImltcG9ydCBtYXBVcmwgZnJvbSBcIi4vbWFwLndhdlwiO1xuaW1wb3J0IGluaXRCYXR0bGVVcmwgZnJvbSBcIi4vaW5pdEJhdHRsZS53YXZcIjtcbmltcG9ydCBiYXR0bGVVcmwgZnJvbSBcIi4vYmF0dGxlLm1wM1wiO1xuaW1wb3J0IHRhY2tsZUhpdFVybCBmcm9tIFwiLi90YWNrbGVIaXQud2F2XCI7XG5pbXBvcnQgaW5pdEZpcmViYWxsVXJsIGZyb20gXCIuL2luaXRGaXJlYmFsbC53YXZcIjtcbmltcG9ydCBmaXJlYmFsbEhpdFVybCBmcm9tIFwiLi9maXJlYmFsbEhpdC53YXZcIjtcbmltcG9ydCB2aWN0b3J5VXJsIGZyb20gXCIuL3ZpY3Rvcnkud2F2XCI7XG5cbmNvbnN0IGF1ZGlvID0ge1xuXHRtYXA6IG5ldyBIb3dsKHtcblx0XHRzcmM6IG1hcFVybCxcblx0XHRodG1sNTogdHJ1ZSxcblx0XHR2b2x1bWU6IDAuMSxcblx0fSksXG5cdGluaXRCYXR0bGU6IG5ldyBIb3dsKHtcblx0XHRzcmM6IGluaXRCYXR0bGVVcmwsXG5cdFx0aHRtbDU6IHRydWUsXG5cdFx0dm9sdW1lOiAwLjAxLFxuXHR9KSxcblx0YmF0dGxlOiBuZXcgSG93bCh7XG5cdFx0c3JjOiBiYXR0bGVVcmwsXG5cdFx0aHRtbDU6IHRydWUsXG5cdFx0dm9sdW1lOiAwLjA1LFxuXHR9KSxcblx0dGFja2xlSGl0OiBuZXcgSG93bCh7XG5cdFx0c3JjOiB0YWNrbGVIaXRVcmwsXG5cdFx0aHRtbDU6IHRydWUsXG5cdFx0dm9sdW1lOiAwLjAxLFxuXHR9KSxcblx0aW5pdEZpcmViYWxsOiBuZXcgSG93bCh7XG5cdFx0c3JjOiBpbml0RmlyZWJhbGxVcmwsXG5cdFx0aHRtbDU6IHRydWUsXG5cdFx0dm9sdW1lOiAwLjA1LFxuXHR9KSxcblx0ZmlyZWJhbGxIaXQ6IG5ldyBIb3dsKHtcblx0XHRzcmM6IGZpcmViYWxsSGl0VXJsLFxuXHRcdGh0bWw1OiB0cnVlLFxuXHRcdHZvbHVtZTogMC4wNSxcblx0fSksXG5cdHZpY3Rvcnk6IG5ldyBIb3dsKHtcblx0XHRzcmM6IHZpY3RvcnlVcmwsXG5cdFx0aHRtbDU6IHRydWUsXG5cdFx0dm9sdW1lOiAwLjA1LFxuXHR9KSxcbn07XG5cbmV4cG9ydCB7IGF1ZGlvIH07XG4iLCJleHBvcnQgY29uc3QgYmF0dGxlWm9uZXNEYXRhID0gW1xuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLFxuXHQwLCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXTtcbiIsImV4cG9ydCBjb25zdCBjb2xsaXNpb25zID0gW1xuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAxMDI1LCAwLFxuXHQxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAxMDI1LCAxMDI1LCAwLCAwLFxuXHQxMDI1LCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLFxuXHQxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAxMDI1LFxuXHQwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAxMDI1LFxuXHQxMDI1LCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLFxuXHQwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLFxuXHQxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLFxuXHQwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLFxuXHQxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAxMDI1LCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAxMDI1LCAxMDI1LCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLFxuXHQxMDI1LCAxMDI1LCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAxMDI1LCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LFxuXHQxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLFxuXHQwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LFxuXHQxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLFxuXHQxMDI1LCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAxMDI1LCAxMDI1LCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAxMDI1LFxuXHQwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAxMDI1LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxMDI1LCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXTtcbiIsImltcG9ydCB7IGF0dGFja3MgfSBmcm9tIFwiLi9hdHRhY2tzXCI7XG5cbmltcG9ydCBlbWJ5SW1nVXJsIGZyb20gXCIuLi9pbWcvZ2FtZV9hc3NldHMvZW1ieVNwcml0ZS5wbmdcIjtcbmltcG9ydCBkcmFnZ2xlSW1nVXJsIGZyb20gXCIuLi9pbWcvZ2FtZV9hc3NldHMvZHJhZ2dsZVNwcml0ZS5wbmdcIjtcblxuZXhwb3J0IGNvbnN0IG1vbnN0ZXJzRGF0YSA9IHtcblx0RW1ieToge1xuXHRcdHBvc2l0aW9uOiB7XG5cdFx0XHR4OiAyODAsXG5cdFx0XHR5OiAzMjUsXG5cdFx0fSxcblx0XHRpbWFnZToge1xuXHRcdFx0c3JjOiBlbWJ5SW1nVXJsLFxuXHRcdH0sXG5cdFx0ZnJhbWVzOiB7XG5cdFx0XHRtYXg6IDQsXG5cdFx0XHRob2xkOiAzMCxcblx0XHR9LFxuXHRcdGFuaW1hdGU6IHRydWUsXG5cdFx0bmFtZTogXCJFbWJ5XCIsXG5cdFx0YXR0YWNrczogW2F0dGFja3MuVGFja2xlLCBhdHRhY2tzLkZpcmViYWxsXSxcblx0fSxcblx0RHJhZ2dsZToge1xuXHRcdHBvc2l0aW9uOiB7XG5cdFx0XHR4OiA4MDAsXG5cdFx0XHR5OiAxMDAsXG5cdFx0fSxcblx0XHRpbWFnZToge1xuXHRcdFx0c3JjOiBkcmFnZ2xlSW1nVXJsLFxuXHRcdH0sXG5cdFx0ZnJhbWVzOiB7XG5cdFx0XHRtYXg6IDQsXG5cdFx0XHRob2xkOiAzMCxcblx0XHR9LFxuXHRcdGFuaW1hdGU6IHRydWUsXG5cdFx0aXNFbmVteTogdHJ1ZSxcblx0XHRuYW1lOiBcIkRyYWdnbGVcIixcblx0XHRhdHRhY2tzOiBbYXR0YWNrcy5UYWNrbGUsIGF0dGFja3MuRmlyZWJhbGxdLFxuXHR9LFxufTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgYmFja2dyb3VuZEltYWdlVXJsIGZyb20gXCIuL2ltZy9nYW1lX2Fzc2V0cy9wb2tlbW9uR2FtZU1hcDQwMC5wbmdcIjtcbmltcG9ydCBmb3JlZ3JvdW5kSW1hZ2VVcmwgZnJvbSBcIi4vaW1nL2dhbWVfYXNzZXRzL3Bva2Vtb25HYW1lTWFwRk9SRUdST1VORC5wbmdcIjtcbmltcG9ydCBwbGF5ZXJEb3duSW1hZ2VVcmwgZnJvbSBcIi4vaW1nL2dhbWVfYXNzZXRzL3BsYXllckRvd24ucG5nXCI7XG5pbXBvcnQgcGxheWVyVXBJbWFnZVVybCBmcm9tIFwiLi9pbWcvZ2FtZV9hc3NldHMvcGxheWVyVXAucG5nXCI7XG5pbXBvcnQgcGxheWVyTGVmdEltYWdlVXJsIGZyb20gXCIuL2ltZy9nYW1lX2Fzc2V0cy9wbGF5ZXJMZWZ0LnBuZ1wiO1xuaW1wb3J0IHBsYXllclJpZ2h0SW1hZ2VVcmwgZnJvbSBcIi4vaW1nL2dhbWVfYXNzZXRzL3BsYXllclJpZ2h0LnBuZ1wiO1xuaW1wb3J0IHsgaW5pdEJhdHRsZSwgYW5pbWF0ZUJhdHRsZSB9IGZyb20gXCIuL2JhdHRsZVNjZW5lXCI7XG5pbXBvcnQgeyBTcHJpdGUsIEJvdW5kYXJ5IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgYXVkaW8gfSBmcm9tIFwiLi9kYXRhL2F1ZGlvL2F1ZGlvXCI7XG5pbXBvcnQgeyBiYXR0bGVab25lc0RhdGEgfSBmcm9tIFwiLi9kYXRhL2JhdHRsZURhdGFcIjtcbmltcG9ydCB7IGNvbGxpc2lvbnMgfSBmcm9tIFwiLi9kYXRhL2NvbGxpc2lvbkRhdGFcIjtcblxuZnVuY3Rpb24gbG9nKGlucHV0KSB7XG5cdGNvbnNvbGUubG9nKGlucHV0KTtcbn1cblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKTtcbmV4cG9ydCBjb25zdCBjID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTsgLy8gYyByZWZlcnMgdG8gY29udGV4dFxuXG5jYW52YXMud2lkdGggPSAxMDI0O1xuY2FudmFzLmhlaWdodCA9IDU3NjtcblxubGV0IGNvbGxpc2lvbnNNYXAgPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlzaW9ucy5sZW5ndGg7IGkgKz0gNzApIHtcblx0Y29sbGlzaW9uc01hcC5wdXNoKGNvbGxpc2lvbnMuc2xpY2UoaSwgaSArIDcwKSk7XG59XG5cbmxldCBiYXR0bGVab25lc01hcCA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBiYXR0bGVab25lc0RhdGEubGVuZ3RoOyBpICs9IDcwKSB7XG5cdGJhdHRsZVpvbmVzTWFwLnB1c2goYmF0dGxlWm9uZXNEYXRhLnNsaWNlKGksIGkgKyA3MCkpO1xufVxuXG5jb25zdCBib3VuZGFyaWVzID0gW107XG5jb25zdCBvZmZzZXQgPSB7XG5cdHg6IC0xNDA4LFxuXHR5OiAtMTEzMCxcbn07XG5cbmNvbGxpc2lvbnNNYXAuZm9yRWFjaCgocm93LCBpKSA9PiB7XG5cdHJvdy5mb3JFYWNoKCh2YWx1ZSwgaikgPT4ge1xuXHRcdGlmICh2YWx1ZSA9PT0gMTAyNSkge1xuXHRcdFx0Ym91bmRhcmllcy5wdXNoKFxuXHRcdFx0XHRuZXcgQm91bmRhcnkoe1xuXHRcdFx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHR4OiBqICogQm91bmRhcnkud2lkdGggKyBvZmZzZXQueCxcblx0XHRcdFx0XHRcdHk6IGkgKiBCb3VuZGFyeS5oZWlnaHQgKyBvZmZzZXQueSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cbmNvbnN0IGJhdHRsZVpvbmVzID0gW107XG5iYXR0bGVab25lc01hcC5mb3JFYWNoKChyb3csIGkpID0+IHtcblx0cm93LmZvckVhY2goKHZhbHVlLCBqKSA9PiB7XG5cdFx0aWYgKHZhbHVlID09PSAxMDI1KSB7XG5cdFx0XHRiYXR0bGVab25lcy5wdXNoKFxuXHRcdFx0XHRuZXcgQm91bmRhcnkoe1xuXHRcdFx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHR4OiBqICogQm91bmRhcnkud2lkdGggKyBvZmZzZXQueCxcblx0XHRcdFx0XHRcdHk6IGkgKiBCb3VuZGFyeS5oZWlnaHQgKyBvZmZzZXQueSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cbmNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7IC8vIGNyZWF0ZXMgSFRNTCBpbWcgZWxlbWVudFxuaW1hZ2Uuc3JjID0gYmFja2dyb3VuZEltYWdlVXJsO1xuXG5jb25zdCBmb3JlZ3JvdW5kSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbmZvcmVncm91bmRJbWFnZS5zcmMgPSBmb3JlZ3JvdW5kSW1hZ2VVcmw7XG5cbmNvbnN0IHBsYXllckRvd25JbWFnZSA9IG5ldyBJbWFnZSgpO1xucGxheWVyRG93bkltYWdlLnNyYyA9IHBsYXllckRvd25JbWFnZVVybDtcbmNvbnN0IHBsYXllclVwSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbnBsYXllclVwSW1hZ2Uuc3JjID0gcGxheWVyVXBJbWFnZVVybDtcbmNvbnN0IHBsYXllckxlZnRJbWFnZSA9IG5ldyBJbWFnZSgpO1xucGxheWVyTGVmdEltYWdlLnNyYyA9IHBsYXllckxlZnRJbWFnZVVybDtcbmNvbnN0IHBsYXllclJpZ2h0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbnBsYXllclJpZ2h0SW1hZ2Uuc3JjID0gcGxheWVyUmlnaHRJbWFnZVVybDtcblxuY29uc3QgcGxheWVyV2lkdGggPSAxOTI7XG5jb25zdCBwbGF5ZXJIZWlnaHQgPSA2ODtcbmNvbnN0IG12bXREaXN0YW5jZSA9IHBsYXllckRvd25JbWFnZS5oZWlnaHQgLyA0IC8gMjtcblxuY29uc3QgcGxheWVyID0gbmV3IFNwcml0ZSh7XG5cdHBvc2l0aW9uOiB7XG5cdFx0eDogY2FudmFzLndpZHRoIC8gMiAtIHBsYXllcldpZHRoIC8gNCAvIDIsXG5cdFx0eTogY2FudmFzLmhlaWdodCAvIDIgLSBwbGF5ZXJIZWlnaHQgLyAyLFxuXHR9LFxuXHRpbWFnZTogcGxheWVyRG93bkltYWdlLFxuXHRmcmFtZXM6IHtcblx0XHRtYXg6IDQsXG5cdFx0aG9sZDogMTAsXG5cdH0sXG5cdHNwcml0ZXM6IHtcblx0XHR1cDogcGxheWVyVXBJbWFnZSxcblx0XHRkb3duOiBwbGF5ZXJEb3duSW1hZ2UsXG5cdFx0bGVmdDogcGxheWVyTGVmdEltYWdlLFxuXHRcdHJpZ2h0OiBwbGF5ZXJSaWdodEltYWdlLFxuXHR9LFxufSk7XG5cbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgU3ByaXRlKHtcblx0cG9zaXRpb246IHtcblx0XHR4OiBvZmZzZXQueCxcblx0XHR5OiBvZmZzZXQueSxcblx0fSxcblx0aW1hZ2U6IGltYWdlLFxufSk7XG5cbmNvbnN0IGZvcmVncm91bmQgPSBuZXcgU3ByaXRlKHtcblx0cG9zaXRpb246IHtcblx0XHR4OiBvZmZzZXQueCxcblx0XHR5OiBvZmZzZXQueSxcblx0fSxcblx0aW1hZ2U6IGZvcmVncm91bmRJbWFnZSxcbn0pO1xuXG5jb25zdCBrZXlzID0ge1xuXHR1cDoge1xuXHRcdHByZXNzZWQ6IGZhbHNlLFxuXHR9LFxuXHRkb3duOiB7XG5cdFx0cHJlc3NlZDogZmFsc2UsXG5cdH0sXG5cdGxlZnQ6IHtcblx0XHRwcmVzc2VkOiBmYWxzZSxcblx0fSxcblx0cmlnaHQ6IHtcblx0XHRwcmVzc2VkOiBmYWxzZSxcblx0fSxcbn07XG5cbmNvbnN0IG1vdmFibGVzID0gW2JhY2tncm91bmQsIGZvcmVncm91bmQsIC4uLmJvdW5kYXJpZXMsIC4uLmJhdHRsZVpvbmVzXTtcblxuZnVuY3Rpb24gc2hhcGVDb2xsaXNpb24oeyBzaGFwZTEsIHNoYXBlMiB9KSB7XG5cdHJldHVybiAoXG5cdFx0c2hhcGUxLnBvc2l0aW9uLnggKyBzaGFwZTEud2lkdGggPj0gc2hhcGUyLnBvc2l0aW9uLnggJiZcblx0XHRzaGFwZTEucG9zaXRpb24ueCA8PSBzaGFwZTIucG9zaXRpb24ueCArIHNoYXBlMi53aWR0aCAmJlxuXHRcdHNoYXBlMS5wb3NpdGlvbi55ICsgc2hhcGUxLmhlaWdodCAqIDAuNyA+PSBzaGFwZTIucG9zaXRpb24ueSAmJlxuXHRcdHNoYXBlMS5wb3NpdGlvbi55IDw9IHNoYXBlMi5wb3NpdGlvbi55ICsgc2hhcGUyLmhlaWdodCAqIDAuMlxuXHQpO1xufVxuXG5leHBvcnQgY29uc3QgYmF0dGxlID0ge1xuXHRpbml0aWF0ZWQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG5cdGNvbnN0IGFuaW1hdGlvbklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblx0YmFja2dyb3VuZC5kcmF3KCk7XG5cdGJvdW5kYXJpZXMuZm9yRWFjaCgoYm91bmRhcnkpID0+IHtcblx0XHRib3VuZGFyeS5kcmF3KCk7XG5cdH0pO1xuXHRiYXR0bGVab25lcy5mb3JFYWNoKChiYXR0bGVab25lKSA9PiB7XG5cdFx0YmF0dGxlWm9uZS5kcmF3KCk7XG5cdH0pO1xuXHRwbGF5ZXIuZHJhdygpO1xuXHRmb3JlZ3JvdW5kLmRyYXcoKTtcblxuXHQvLyBNT1ZFTUVOVCAvL1xuXHRsZXQgbW92aW5nID0gdHJ1ZTtcblx0cGxheWVyLmFuaW1hdGUgPSBmYWxzZTtcblxuXHQvLyBCYXR0bGUgYWN0aXZhdGlvblxuXHRpZiAoYmF0dGxlLmluaXRpYXRlZCkgcmV0dXJuOyAvLyBza2lwIGJhdHRsZSBhY3RpdmF0aW9uIGlmIGluIGJhdHRsZVxuXG5cdGlmIChcblx0XHRrZXlzLnVwLnByZXNzZWQgfHxcblx0XHRrZXlzLmRvd24ucHJlc3NlZCB8fFxuXHRcdGtleXMubGVmdC5wcmVzc2VkIHx8XG5cdFx0a2V5cy5yaWdodC5wcmVzc2VkXG5cdCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYmF0dGxlWm9uZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGJhdHRsZVpvbmUgPSBiYXR0bGVab25lc1tpXTtcblx0XHRcdGNvbnN0IG92ZXJsYXBYID1cblx0XHRcdFx0TWF0aC5taW4oXG5cdFx0XHRcdFx0cGxheWVyLnBvc2l0aW9uLnggKyBwbGF5ZXIud2lkdGgsXG5cdFx0XHRcdFx0YmF0dGxlWm9uZS5wb3NpdGlvbi54ICsgYmF0dGxlWm9uZS53aWR0aFxuXHRcdFx0XHQpIC0gTWF0aC5tYXgocGxheWVyLnBvc2l0aW9uLngsIGJhdHRsZVpvbmUucG9zaXRpb24ueCk7XG5cdFx0XHRjb25zdCBvdmVybGFwWSA9XG5cdFx0XHRcdE1hdGgubWluKFxuXHRcdFx0XHRcdHBsYXllci5wb3NpdGlvbi55ICsgcGxheWVyLmhlaWdodCxcblx0XHRcdFx0XHRiYXR0bGVab25lLnBvc2l0aW9uLnkgKyBiYXR0bGVab25lLmhlaWdodFxuXHRcdFx0XHQpIC0gTWF0aC5tYXgocGxheWVyLnBvc2l0aW9uLnksIGJhdHRsZVpvbmUucG9zaXRpb24ueSk7XG5cdFx0XHRjb25zdCBvdmVybGFwcGluZ0FyZWEgPSBvdmVybGFwWCAqIG92ZXJsYXBZO1xuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdHNoYXBlQ29sbGlzaW9uKHtcblx0XHRcdFx0XHRzaGFwZTE6IHBsYXllcixcblx0XHRcdFx0XHRzaGFwZTI6IGJhdHRsZVpvbmUsXG5cdFx0XHRcdH0pICYmXG5cdFx0XHRcdG92ZXJsYXBwaW5nQXJlYSA+IChwbGF5ZXIud2lkdGggKiBwbGF5ZXIuaGVpZ2h0KSAvIDIgJiZcblx0XHRcdFx0TWF0aC5yYW5kb20oKSA8IDAuMDJcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBkZWFjdGl2ZSBjdXJyZW50IGFuaW1hdGlvbiBsb29wXG5cdFx0XHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG5cblx0XHRcdFx0YXVkaW8ubWFwLnN0b3AoKTtcblx0XHRcdFx0YXVkaW8uaW5pdEJhdHRsZS5wbGF5KCk7XG5cdFx0XHRcdGF1ZGlvLmJhdHRsZS5wbGF5KCk7XG5cblx0XHRcdFx0YmF0dGxlLmluaXRpYXRlZCA9IHRydWU7XG5cdFx0XHRcdGdzYXAudG8oXCIjb3ZlcmxhcFdyYXBcIiwge1xuXHRcdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdFx0cmVwZWF0OiAzLFxuXHRcdFx0XHRcdHlveW86IHRydWUsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDAuNCxcblx0XHRcdFx0XHRvbkNvbXBsZXRlKCkge1xuXHRcdFx0XHRcdFx0Z3NhcC50byhcIiNvdmVybGFwV3JhcFwiLCB7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjQsXG5cdFx0XHRcdFx0XHRcdG9uQ29tcGxldGUoKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gYWN0aXZlIG5ldyBhbmltYXRpb24gbG9vcFxuXHRcdFx0XHRcdFx0XHRcdGluaXRCYXR0bGUoKTtcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRlQmF0dGxlKCk7XG5cdFx0XHRcdFx0XHRcdFx0Z3NhcC50byhcIiNvdmVybGFwV3JhcFwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuNCxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoa2V5cy5kb3duLnByZXNzZWQgJiYgbGFzdEtleSA9PT0gXCJkb3duXCIpIHtcblx0XHRwbGF5ZXIuYW5pbWF0ZSA9IHRydWU7XG5cdFx0cGxheWVyLmltYWdlID0gcGxheWVyLnNwcml0ZXMuZG93bjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGJvdW5kYXJ5ID0gYm91bmRhcmllc1tpXTtcblx0XHRcdGlmIChcblx0XHRcdFx0c2hhcGVDb2xsaXNpb24oe1xuXHRcdFx0XHRcdHNoYXBlMTogcGxheWVyLFxuXHRcdFx0XHRcdHNoYXBlMjoge1xuXHRcdFx0XHRcdFx0Li4uYm91bmRhcnksXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0XHR4OiBib3VuZGFyeS5wb3NpdGlvbi54LFxuXHRcdFx0XHRcdFx0XHR5OiBib3VuZGFyeS5wb3NpdGlvbi55IC0gcGxheWVyRG93bkltYWdlLmhlaWdodCAvIDIsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pXG5cdFx0XHQpIHtcblx0XHRcdFx0bW92aW5nID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChtb3ZpbmcpIHtcblx0XHRcdG1vdmFibGVzLmZvckVhY2goKG1vdmFibGUpID0+IHtcblx0XHRcdFx0bW92YWJsZS5wb3NpdGlvbi55IC09IHBsYXllckRvd25JbWFnZS5oZWlnaHQgLyA0IC8gMjtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQvLyBiYWNrZ3JvdW5kLnBvc2l0aW9uLnkgLT0gcGxheWVyRG93bkltYWdlLmhlaWdodCAvIDQgLyAyO1xuXHR9IGVsc2UgaWYgKGtleXMudXAucHJlc3NlZCAmJiBsYXN0S2V5ID09PSBcInVwXCIpIHtcblx0XHRwbGF5ZXIuYW5pbWF0ZSA9IHRydWU7XG5cdFx0cGxheWVyLmltYWdlID0gcGxheWVyLnNwcml0ZXMudXA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBib3VuZGFyeSA9IGJvdW5kYXJpZXNbaV07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHNoYXBlQ29sbGlzaW9uKHtcblx0XHRcdFx0XHRzaGFwZTE6IHBsYXllcixcblx0XHRcdFx0XHRzaGFwZTI6IHtcblx0XHRcdFx0XHRcdC4uLmJvdW5kYXJ5LFxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0XHRcdFx0eDogYm91bmRhcnkucG9zaXRpb24ueCxcblx0XHRcdFx0XHRcdFx0eTogYm91bmRhcnkucG9zaXRpb24ueSArIHBsYXllckRvd25JbWFnZS5oZWlnaHQgLyA0IC8gMixcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblx0XHRcdCkge1xuXHRcdFx0XHRtb3ZpbmcgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG1vdmluZykge1xuXHRcdFx0bW92YWJsZXMuZm9yRWFjaCgobW92YWJsZSkgPT4ge1xuXHRcdFx0XHRtb3ZhYmxlLnBvc2l0aW9uLnkgKz0gcGxheWVyRG93bkltYWdlLmhlaWdodCAvIDQgLyAyO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGtleXMubGVmdC5wcmVzc2VkICYmIGxhc3RLZXkgPT09IFwibGVmdFwiKSB7XG5cdFx0cGxheWVyLmFuaW1hdGUgPSB0cnVlO1xuXHRcdHBsYXllci5pbWFnZSA9IHBsYXllci5zcHJpdGVzLmxlZnQ7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBib3VuZGFyeSA9IGJvdW5kYXJpZXNbaV07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHNoYXBlQ29sbGlzaW9uKHtcblx0XHRcdFx0XHRzaGFwZTE6IHBsYXllcixcblx0XHRcdFx0XHRzaGFwZTI6IHtcblx0XHRcdFx0XHRcdC4uLmJvdW5kYXJ5LFxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0XHRcdFx0eDogYm91bmRhcnkucG9zaXRpb24ueCArIHBsYXllckRvd25JbWFnZS5oZWlnaHQgLyA0IC8gMixcblx0XHRcdFx0XHRcdFx0eTogYm91bmRhcnkucG9zaXRpb24ueSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblx0XHRcdCkge1xuXHRcdFx0XHRtb3ZpbmcgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG1vdmluZykge1xuXHRcdFx0bW92YWJsZXMuZm9yRWFjaCgobW92YWJsZSkgPT4ge1xuXHRcdFx0XHRtb3ZhYmxlLnBvc2l0aW9uLnggKz0gcGxheWVyRG93bkltYWdlLmhlaWdodCAvIDQgLyAyO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGtleXMucmlnaHQucHJlc3NlZCAmJiBsYXN0S2V5ID09PSBcInJpZ2h0XCIpIHtcblx0XHRwbGF5ZXIuYW5pbWF0ZSA9IHRydWU7XG5cdFx0cGxheWVyLmltYWdlID0gcGxheWVyLnNwcml0ZXMucmlnaHQ7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBib3VuZGFyeSA9IGJvdW5kYXJpZXNbaV07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHNoYXBlQ29sbGlzaW9uKHtcblx0XHRcdFx0XHRzaGFwZTE6IHBsYXllcixcblx0XHRcdFx0XHRzaGFwZTI6IHtcblx0XHRcdFx0XHRcdC4uLmJvdW5kYXJ5LFxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0XHRcdFx0eDogYm91bmRhcnkucG9zaXRpb24ueCAtIHBsYXllckRvd25JbWFnZS5oZWlnaHQgLyA0IC8gMixcblx0XHRcdFx0XHRcdFx0eTogYm91bmRhcnkucG9zaXRpb24ueSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblx0XHRcdCkge1xuXHRcdFx0XHRtb3ZpbmcgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG1vdmluZykge1xuXHRcdFx0bW92YWJsZXMuZm9yRWFjaCgobW92YWJsZSkgPT4ge1xuXHRcdFx0XHRtb3ZhYmxlLnBvc2l0aW9uLnggLT0gcGxheWVyRG93bkltYWdlLmhlaWdodCAvIDQgLyAyO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG5hbmltYXRlKCk7XG5cbmxldCBsYXN0S2V5ID0gXCJcIjtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuXHRpZiAoZS5rZXkgPT09IFwic1wiIHx8IGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG5cdFx0a2V5cy5kb3duLnByZXNzZWQgPSB0cnVlO1xuXHRcdGxhc3RLZXkgPSBcImRvd25cIjtcblx0fSBlbHNlIGlmIChlLmtleSA9PT0gXCJkXCIgfHwgZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG5cdFx0a2V5cy5yaWdodC5wcmVzc2VkID0gdHJ1ZTtcblx0XHRsYXN0S2V5ID0gXCJyaWdodFwiO1xuXHR9IGVsc2UgaWYgKGUua2V5ID09PSBcImFcIiB8fCBlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuXHRcdGtleXMubGVmdC5wcmVzc2VkID0gdHJ1ZTtcblx0XHRsYXN0S2V5ID0gXCJsZWZ0XCI7XG5cdH0gZWxzZSBpZiAoZS5rZXkgPT09IFwid1wiIHx8IGUua2V5ID09PSBcIkFycm93VXBcIikge1xuXHRcdGtleXMudXAucHJlc3NlZCA9IHRydWU7XG5cdFx0bGFzdEtleSA9IFwidXBcIjtcblx0fVxufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcblx0aWYgKGUua2V5ID09PSBcInNcIiB8fCBlLmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuXHRcdGtleXMuZG93bi5wcmVzc2VkID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiZFwiIHx8IGUua2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuXHRcdGtleXMucmlnaHQucHJlc3NlZCA9IGZhbHNlO1xuXHR9IGVsc2UgaWYgKGUua2V5ID09PSBcImFcIiB8fCBlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuXHRcdGtleXMubGVmdC5wcmVzc2VkID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAoZS5rZXkgPT09IFwid1wiIHx8IGUua2V5ID09PSBcIkFycm93VXBcIikge1xuXHRcdGtleXMudXAucHJlc3NlZCA9IGZhbHNlO1xuXHR9XG59KTtcblxubGV0IGNsaWNrZWQgPSBmYWxzZTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRpZiAoIWNsaWNrZWQpIHtcblx0XHRhdWRpby5tYXAucGxheSgpO1xuXHRcdGNsaWNrZWQgPSB0cnVlO1xuXHR9XG59KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoKSA9PiB7XG5cdGlmICghY2xpY2tlZCkge1xuXHRcdGF1ZGlvLm1hcC5wbGF5KCk7XG5cdFx0Y2xpY2tlZCA9IHRydWU7XG5cdH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9