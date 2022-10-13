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
/* harmony export */   "animateBattle": () => (/* binding */ animateBattle)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _data_audio_audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/audio/audio */ "./src/data/audio/audio.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _data_attacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/attacks */ "./src/data/attacks.js");
/* harmony import */ var _data_monsters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/monsters */ "./src/data/monsters.js");






const battleBackgroundImg = new Image();
battleBackgroundImg.src = "./img/game_assets/battleBackground.png";
const battleBackground = new _classes__WEBPACK_IMPORTED_MODULE_0__.Sprite({
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
			(0,_index__WEBPACK_IMPORTED_MODULE_2__.animate)();
			document.querySelector("#battleWrap").style.display = "none";

			gsap.to("#overlapWrap", {
				opacity: 0,
			});

			battle.initiated = false;
			_data_audio_audio__WEBPACK_IMPORTED_MODULE_1__.audio.map.play();
		},
	});
};

function initBattle() {
	document.querySelector("#battleWrap").style.display = "block";
	document.querySelector("#battleContent").style.display = "none";
	document.querySelector("#currHealthEnemy").style.width = "100%";
	document.querySelector("#currHealthPlayer").style.width = "100%";
	document.querySelector("#attacks").replaceChildren();

	draggle = new _classes__WEBPACK_IMPORTED_MODULE_0__.Monster(_data_monsters__WEBPACK_IMPORTED_MODULE_4__.monstersData.Draggle);
	emby = new _classes__WEBPACK_IMPORTED_MODULE_0__.Monster(_data_monsters__WEBPACK_IMPORTED_MODULE_4__.monstersData.Emby);
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
			log(e.currentTarget.textContent);
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

	console.log(battleAnimationId);
	for (const sprite of renderedSprites) {
		sprite.draw();
	}
}

(0,_index__WEBPACK_IMPORTED_MODULE_2__.animate)();
// initBattle();
// animateBattle();

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
							audio.tackleHit.play();
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
				audio.initFireball.play();
				const fireballImg = new Image();
				fireballImg.src = "./img/game_assets/fireball.png";
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
						audio.fireballHit.play();

						gsap.to(healthBar, {
							width: recipient.health + "%",
						});

						console.log(recipient.health);
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
		audio.battle.stop();
		audio.victory.play();
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
const audio = {
	map: new Howl({
		src: "./data/audio/map.wav",
		html5: true,
		volume: 0.1,
	}),
	initBattle: new Howl({
		src: "./data/audio/initBattle.wav",
		html5: true,
		volume: 0.01,
	}),
	battle: new Howl({
		src: "./data/audio/battle.mp3",
		html5: true,
		volume: 0.05,
	}),
	tackleHit: new Howl({
		src: "./data/audio/tackleHit.wav",
		html5: true,
		volume: 0.01,
	}),
	initFireball: new Howl({
		src: "./data/audio/initFireball.wav",
		html5: true,
		volume: 0.05,
	}),
	fireballHit: new Howl({
		src: "./data/audio/fireballHit.wav",
		html5: true,
		volume: 0.05,
	}),
	victory: new Howl({
		src: "./data/audio/victory.wav",
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
const monstersData = {
	Emby: {
		position: {
			x: 280,
			y: 325,
		},
		image: {
			src: "./img/game_assets/embySprite.png",
		},
		frames: {
			max: 4,
			hold: 30,
		},
		animate: true,
		name: "Emby",
		attacks: [attacks.Tackle, attacks.Fireball],
	},
	Draggle: {
		position: {
			x: 800,
			y: 100,
		},
		image: {
			src: "./img/game_assets/draggleSprite.png",
		},
		frames: {
			max: 4,
			hold: 30,
		},
		animate: true,
		isEnemy: true,
		name: "Draggle",
		attacks: [attacks.Tackle, attacks.Fireball],
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
								initBattle();
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
// animate(); // FOR TESTING, UNCOMMENT WHEN FINISHED

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVpQjs7Ozs7Ozs7Ozs7Ozs7O0FDdENWO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkhPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5SE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ3FCO0FBQ29EO0FBQ087QUFDZDtBQUNKO0FBQ0k7QUFDRTtBQUN0QjtBQUNEO0FBQ0Y7QUFDUztBQUNGOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDTyxtQ0FBbUM7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsSUFBSSxtRUFBaUIsRUFBRTtBQUN2QyxvQkFBb0Isa0VBQWdCO0FBQ3BDOztBQUVBO0FBQ0EsZ0JBQWdCLElBQUkscUVBQXNCLEVBQUU7QUFDNUMscUJBQXFCLG9FQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBUTtBQUNoQjtBQUNBLGFBQWEsb0RBQWM7QUFDM0IsYUFBYSxxREFBZTtBQUM1QixNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBUTtBQUNoQjtBQUNBLGFBQWEsb0RBQWM7QUFDM0IsYUFBYSxxREFBZTtBQUM1QixNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRCwyQkFBMkI7QUFDM0IsWUFBWSxtRUFBa0I7O0FBRTlCO0FBQ0Esc0JBQXNCLDBFQUFrQjs7QUFFeEM7QUFDQSxzQkFBc0IsNERBQWtCO0FBQ3hDO0FBQ0Esb0JBQW9CLDBEQUFnQjtBQUNwQztBQUNBLHNCQUFzQiw0REFBa0I7QUFDeEM7QUFDQSx1QkFBdUIsNkRBQW1COztBQUUxQztBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRDQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQsdUJBQXVCLDRDQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLENBQUM7O0FBRUQsdUJBQXVCLDRDQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBOztBQUVBLDBCQUEwQixnQkFBZ0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDZEQUFjO0FBQ2xCLElBQUksb0VBQXFCO0FBQ3pCLElBQUksZ0VBQWlCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUixPQUFPO0FBQ1AsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFjO0FBQ2hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUUsNkRBQWM7QUFDaEI7QUFDQTtBQUNBLENBQUM7O0FBRWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL3NyYy9iYXR0bGVTY2VuZS5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvZGF0YS9hdHRhY2tzLmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL3NyYy9kYXRhL2F1ZGlvL2F1ZGlvLmpzIiwid2VicGFjazovL3Bva2Vtb24tZ2FtZS8uL3NyYy9kYXRhL2JhdHRsZURhdGEuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi1nYW1lLy4vc3JjL2RhdGEvY29sbGlzaW9uRGF0YS5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvZGF0YS9tb25zdGVycy5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLWdhbWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NpdGVXcmFwIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogLjVyZW07XFxufVxcblxcbiNvdmVybGFwV3JhcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jYmF0dGxlV3JhcCB7XFxuICAgIGRpc3BsYXk6IG5vbmVcXG59XFxuXFxuI2JhdHRsZUludGVyZmFjZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvcmRlci10b3A6IDRweCBibGFjayBzb2xpZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2JhdHRsZUNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2F0dGFja3Mge1xcbiAgICB3aWR0aDogNjYuNjYlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5cXG4jYXR0YWNrcyBidXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4jYXR0YWNrcyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhdHRhY2tUeXBlIHtcXG4gICAgd2lkdGg6IDMzLjMzJTtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBibGFjayBzb2xpZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNhdHRhY2tUeXBlIGgxIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uaGVhbHRoIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMTJweDtcXG59XFxuI2hlYWx0aE1vbjEge1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIGxlZnQ6IDUwcHg7XFxufVxcbiNoZWFsdGhNb24yIHtcXG4gICAgYm90dG9tOiAxOTBweDtcXG4gICAgcmlnaHQ6IDUwcHg7XFxufVxcbi5oZWFsdGggaDIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5oZWFsdGhCYXJXcmFwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGVhbHRoQmFyIHtcXG4gICAgaGVpZ2h0OiA1cHg7XFxufVxcbi5mdWxsSGVhbHRoIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuLmN1cnJIZWFsdGgge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4jY3VyckhlYWx0aEVuZW15IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbiNjdXJySGVhbHRoUGxheWVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNnYW1lSW5zdHJ1Y3Rpb25zIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2l0ZVdyYXAge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAuNXJlbTtcXG59XFxuXFxuI292ZXJsYXBXcmFwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbiNiYXR0bGVXcmFwIHtcXG4gICAgZGlzcGxheTogbm9uZVxcbn1cXG5cXG4jYmF0dGxlSW50ZXJmYWNlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxNDBweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm9yZGVyLXRvcDogNHB4IGJsYWNrIHNvbGlkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jYmF0dGxlQ29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYXR0YWNrcyB7XFxuICAgIHdpZHRoOiA2Ni42NiU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcblxcbiNhdHRhY2tzIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbiNhdHRhY2tzIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2F0dGFja1R5cGUge1xcbiAgICB3aWR0aDogMzMuMzMlO1xcbiAgICBib3JkZXItbGVmdDogNHB4IGJsYWNrIHNvbGlkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2F0dGFja1R5cGUgaDEge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5oZWFsdGgge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbn1cXG4jaGVhbHRoTW9uMSB7XFxuICAgIHRvcDogNTBweDtcXG4gICAgbGVmdDogNTBweDtcXG59XFxuI2hlYWx0aE1vbjIge1xcbiAgICBib3R0b206IDE5MHB4O1xcbiAgICByaWdodDogNTBweDtcXG59XFxuLmhlYWx0aCBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmhlYWx0aEJhcldyYXAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oZWFsdGhCYXIge1xcbiAgICBoZWlnaHQ6IDVweDtcXG59XFxuLmZ1bGxIZWFsdGgge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG4uY3VyckhlYWx0aCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcbiNjdXJySGVhbHRoRW5lbXkge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI2N1cnJIZWFsdGhQbGF5ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2dhbWVJbnN0cnVjdGlvbnMge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgU3ByaXRlLCBNb25zdGVyIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgYXVkaW8gfSBmcm9tIFwiLi9kYXRhL2F1ZGlvL2F1ZGlvXCI7XG5pbXBvcnQgeyBhbmltYXRlIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGF0dGFja3MgfSBmcm9tIFwiLi9kYXRhL2F0dGFja3NcIjtcbmltcG9ydCB7IG1vbnN0ZXJzRGF0YSB9IGZyb20gXCIuL2RhdGEvbW9uc3RlcnNcIjtcblxuY29uc3QgYmF0dGxlQmFja2dyb3VuZEltZyA9IG5ldyBJbWFnZSgpO1xuYmF0dGxlQmFja2dyb3VuZEltZy5zcmMgPSBcIi4vaW1nL2dhbWVfYXNzZXRzL2JhdHRsZUJhY2tncm91bmQucG5nXCI7XG5jb25zdCBiYXR0bGVCYWNrZ3JvdW5kID0gbmV3IFNwcml0ZSh7XG5cdHBvc2l0aW9uOiB7XG5cdFx0eDogMCxcblx0XHR5OiAwLFxuXHR9LFxuXHRpbWFnZTogYmF0dGxlQmFja2dyb3VuZEltZyxcbn0pO1xuXG5sZXQgZHJhZ2dsZTtcbmxldCBlbWJ5O1xubGV0IHJlbmRlcmVkU3ByaXRlcztcbmxldCBiYXR0bGVBbmltYXRpb25JZDtcbmxldCBxdWV1ZTtcbmNvbnN0IGVuZEJhdHRsZSA9ICgpID0+IHtcblx0Z3NhcC50byhcIiNvdmVybGFwV3JhcFwiLCB7XG5cdFx0b3BhY2l0eTogMSxcblx0XHRvbkNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYmF0dGxlQW5pbWF0aW9uSWQpO1xuXHRcdFx0YW5pbWF0ZSgpO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXR0bGVXcmFwXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuXHRcdFx0Z3NhcC50byhcIiNvdmVybGFwV3JhcFwiLCB7XG5cdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHR9KTtcblxuXHRcdFx0YmF0dGxlLmluaXRpYXRlZCA9IGZhbHNlO1xuXHRcdFx0YXVkaW8ubWFwLnBsYXkoKTtcblx0XHR9LFxuXHR9KTtcbn07XG5cbmZ1bmN0aW9uIGluaXRCYXR0bGUoKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmF0dGxlV3JhcFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhdHRsZUNvbnRlbnRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJIZWFsdGhFbmVteVwiKS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJIZWFsdGhQbGF5ZXJcIikuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdHRhY2tzXCIpLnJlcGxhY2VDaGlsZHJlbigpO1xuXG5cdGRyYWdnbGUgPSBuZXcgTW9uc3Rlcihtb25zdGVyc0RhdGEuRHJhZ2dsZSk7XG5cdGVtYnkgPSBuZXcgTW9uc3Rlcihtb25zdGVyc0RhdGEuRW1ieSk7XG5cdHJlbmRlcmVkU3ByaXRlcyA9IFtkcmFnZ2xlLCBlbWJ5XTtcblx0cXVldWUgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGF0dGFjayBvZiBlbWJ5LmF0dGFja3MpIHtcblx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdGJ1dHRvbi5pbm5lckhUTUwgPSBhdHRhY2submFtZTtcblx0XHRidXR0b24uY2xhc3NMaXN0LmFkZChcImF0dGFja1wiKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F0dGFja3NcIikuYXBwZW5kKGJ1dHRvbik7XG5cdH1cblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmF0dGFja1wiKS5mb3JFYWNoKChidXR0b24pID0+IHtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRsb2coZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50KTtcblx0XHRcdGNvbnN0IHRhcmdldEF0dGFjayA9IGF0dGFja3NbZS5jdXJyZW50VGFyZ2V0LmlubmVySFRNTF07XG5cblx0XHRcdGVtYnkuYXR0YWNrKHtcblx0XHRcdFx0YXR0YWNrOiB0YXJnZXRBdHRhY2ssXG5cdFx0XHRcdHJlY2lwaWVudDogZHJhZ2dsZSxcblx0XHRcdFx0cmVuZGVyZWRTcHJpdGVzLFxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGVuZW15IGF0dGFja3Ncblx0XHRcdGlmIChkcmFnZ2xlLmhlYWx0aCA8PSAwKSB7XG5cdFx0XHRcdHF1ZXVlLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRcdGRyYWdnbGUuZmFpbnQoKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cXVldWUucHVzaChlbmRCYXR0bGUpO1xuXHRcdFx0XHQvLyByZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHJhbmRvbUF0dGFja0luZGV4ID0gTWF0aC5mbG9vcihcblx0XHRcdFx0TWF0aC5yYW5kb20oKSAqIGRyYWdnbGUuYXR0YWNrcy5sZW5ndGhcblx0XHRcdCk7XG5cdFx0XHRjb25zdCByYW5kb21BdHRhY2sgPSBkcmFnZ2xlLmF0dGFja3NbcmFuZG9tQXR0YWNrSW5kZXhdO1xuXHRcdFx0cXVldWUucHVzaCgoKSA9PiB7XG5cdFx0XHRcdGRyYWdnbGUuYXR0YWNrKHtcblx0XHRcdFx0XHRhdHRhY2s6IHJhbmRvbUF0dGFjayxcblx0XHRcdFx0XHRyZWNpcGllbnQ6IGVtYnksXG5cdFx0XHRcdFx0cmVuZGVyZWRTcHJpdGVzLFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoZW1ieS5oZWFsdGggPD0gMCkge1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRcdFx0ZW1ieS5mYWludCgpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0cXVldWUucHVzaChlbmRCYXR0bGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3QgdGFyZ2V0QXR0YWNrID0gYXR0YWNrc1tlLmN1cnJlbnRUYXJnZXQuaW5uZXJIVE1MXTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0YWNrVHlwZVRleHRcIikudGV4dENvbnRlbnQgPSB0YXJnZXRBdHRhY2sudHlwZTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0YWNrVHlwZVRleHRcIikuc3R5bGUuY29sb3IgPVxuXHRcdFx0XHR0YXJnZXRBdHRhY2suY29sb3I7XG5cdFx0fSk7XG5cblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdHRhY2tUeXBlVGV4dFwiKS50ZXh0Q29udGVudCA9IFwiQXR0YWNrIFR5cGVcIjtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0YWNrVHlwZVRleHRcIikuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZUJhdHRsZSgpIHtcblx0YmF0dGxlQW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVCYXR0bGUpO1xuXHRiYXR0bGVCYWNrZ3JvdW5kLmRyYXcoKTtcblxuXHRjb25zb2xlLmxvZyhiYXR0bGVBbmltYXRpb25JZCk7XG5cdGZvciAoY29uc3Qgc3ByaXRlIG9mIHJlbmRlcmVkU3ByaXRlcykge1xuXHRcdHNwcml0ZS5kcmF3KCk7XG5cdH1cbn1cblxuYW5pbWF0ZSgpO1xuLy8gaW5pdEJhdHRsZSgpO1xuLy8gYW5pbWF0ZUJhdHRsZSgpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhdHRsZUNvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0cXVldWVbMF0oKTtcblx0XHRxdWV1ZS5zaGlmdCgpO1xuXHR9IGVsc2UgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuIiwiaW1wb3J0IHsgYyB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNsYXNzIFNwcml0ZSB7XG5cdGNvbnN0cnVjdG9yKHtcblx0XHRwb3NpdGlvbixcblx0XHRpbWFnZSxcblx0XHRmcmFtZXMgPSB7IG1heDogMSwgaG9sZDogMTAgfSxcblx0XHRzcHJpdGVzLFxuXHRcdGFuaW1hdGUgPSBmYWxzZSxcblx0XHRyb3RhdGlvbiA9IDAsXG5cdFx0dmVsb2NpdHksXG5cdH0pIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cdFx0dGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdHRoaXMuZnJhbWVzID0geyAuLi5mcmFtZXMsIHZhbDogMCwgZWxhcHNlZDogMCB9O1xuXHRcdHRoaXMuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0dGhpcy53aWR0aCA9IHRoaXMuaW1hZ2Uud2lkdGggLyB0aGlzLmZyYW1lcy5tYXg7XG5cdFx0XHR0aGlzLmhlaWdodCA9IHRoaXMuaW1hZ2UuaGVpZ2h0O1xuXHRcdH07XG5cdFx0dGhpcy5pbWFnZS5zcmMgPSBpbWFnZS5zcmM7XG5cdFx0dGhpcy5hbmltYXRlID0gYW5pbWF0ZTtcblx0XHR0aGlzLnNwcml0ZXMgPSBzcHJpdGVzO1xuXHRcdHRoaXMub3BhY2l0eSA9IDE7XG5cdFx0dGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuXHR9XG5cblx0ZHJhdygpIHtcblx0XHRjLnNhdmUoKTtcblx0XHRjLnRyYW5zbGF0ZShcblx0XHRcdHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggLyAyLFxuXHRcdFx0dGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgLyAyXG5cdFx0KTtcblx0XHRjLnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcblx0XHRjLnRyYW5zbGF0ZShcblx0XHRcdC10aGlzLnBvc2l0aW9uLnggLSB0aGlzLndpZHRoIC8gMixcblx0XHRcdC10aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCAvIDJcblx0XHQpO1xuXHRcdGMuZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG5cdFx0Yy5kcmF3SW1hZ2UoXG5cdFx0XHR0aGlzLmltYWdlLFxuXHRcdFx0Ly8gaW1hZ2UgY3JvcCBhcmd1bWVudHNcblx0XHRcdHRoaXMuZnJhbWVzLnZhbCAqIHRoaXMud2lkdGgsXG5cdFx0XHQwLFxuXHRcdFx0dGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzLm1heCxcblx0XHRcdHRoaXMuaW1hZ2UuaGVpZ2h0LFxuXHRcdFx0Ly8gb25zY3JlZW4gcG9zaXRpb25cblx0XHRcdHRoaXMucG9zaXRpb24ueCxcblx0XHRcdHRoaXMucG9zaXRpb24ueSxcblx0XHRcdC8vIG9uc2NyZWVuIHJlbmRlciBmcmFtZVxuXHRcdFx0dGhpcy5pbWFnZS53aWR0aCAvIHRoaXMuZnJhbWVzLm1heCxcblx0XHRcdHRoaXMuaW1hZ2UuaGVpZ2h0XG5cdFx0KTtcblx0XHRjLnJlc3RvcmUoKTtcblxuXHRcdGlmICghdGhpcy5hbmltYXRlKSByZXR1cm47XG5cblx0XHRpZiAodGhpcy5mcmFtZXMubWF4ID4gMSkge1xuXHRcdFx0dGhpcy5mcmFtZXMuZWxhcHNlZCsrO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmZyYW1lcy5lbGFwc2VkICUgdGhpcy5mcmFtZXMuaG9sZCA9PT0gMCkge1xuXHRcdFx0aWYgKHRoaXMuZnJhbWVzLnZhbCA8IHRoaXMuZnJhbWVzLm1heCAtIDEpIHRoaXMuZnJhbWVzLnZhbCsrO1xuXHRcdFx0ZWxzZSB0aGlzLmZyYW1lcy52YWwgPSAwO1xuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBCb3VuZGFyeSB7XG5cdC8vIDQ4IHB4ID0gNDAwJSB6b29tIG9uIG91ciBvcmlnaW5hbCAxMnB4IHggMTJweCBncmlkc1xuXHRzdGF0aWMgd2lkdGggPSA0ODtcblx0c3RhdGljIGhlaWdodCA9IDQ4O1xuXHRjb25zdHJ1Y3Rvcih7IHBvc2l0aW9uIH0pIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cdFx0dGhpcy53aWR0aCA9IDQ4O1xuXHRcdHRoaXMuaGVpZ2h0ID0gNDg7XG5cdH1cblxuXHRkcmF3KCkge1xuXHRcdGMuZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwwLDAsIDApXCI7XG5cdFx0Yy5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXHR9XG59XG5cbmNsYXNzIE1vbnN0ZXIgZXh0ZW5kcyBTcHJpdGUge1xuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0bmFtZSxcblx0XHRpc0VuZW15ID0gZmFsc2UsXG5cdFx0YXR0YWNrcyxcblx0XHQvLyBmdXR1cmUgcGFyYW1zXG5cdFx0dHlwZSxcblx0XHRkZWZlbnNlLFxuXHRcdGF0dGFja1Bvd2VyLFxuXHRcdC8vIHNwcml0ZSBwYXJhbWV0ZXJzXG5cdFx0cG9zaXRpb24sXG5cdFx0aW1hZ2UsXG5cdFx0ZnJhbWVzID0geyBtYXg6IDEsIGhvbGQ6IDEwIH0sXG5cdFx0c3ByaXRlcyxcblx0XHRhbmltYXRlID0gZmFsc2UsXG5cdFx0cm90YXRpb24gPSAwLFxuXHRcdHZlbG9jaXR5LFxuXHR9KSB7XG5cdFx0c3VwZXIoe1xuXHRcdFx0cG9zaXRpb24sXG5cdFx0XHRpbWFnZSxcblx0XHRcdGZyYW1lcyxcblx0XHRcdHNwcml0ZXMsXG5cdFx0XHRhbmltYXRlLFxuXHRcdFx0cm90YXRpb24sXG5cdFx0XHR2ZWxvY2l0eSxcblx0XHR9KTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuaGVhbHRoID0gMTAwO1xuXHRcdHRoaXMuYXR0YWNrcyA9IGF0dGFja3M7XG5cdFx0dGhpcy5pc0VuZW15ID0gaXNFbmVteTtcblx0XHQvLyBmdXR1cmUgcHJvcHMgdG8gaW1wbGVtZW50c1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5kZWZlbnNlID0gZGVmZW5zZTtcblx0XHR0aGlzLmF0dGFja1Bvd2VyID0gYXR0YWNrUG93ZXI7XG5cdFx0Ly8gU3ByaXRlIHByb3BzXG5cdH1cblxuXHRhdHRhY2soeyBhdHRhY2ssIHJlY2lwaWVudCwgcmVuZGVyZWRTcHJpdGVzIH0pIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhdHRsZUNvbnRlbnRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XCIjYmF0dGxlQ29udGVudFwiXG5cdFx0KS50ZXh0Q29udGVudCA9IGAke3RoaXMubmFtZX0gdXNlZCAke2F0dGFjay5uYW1lfWA7XG5cblx0XHRsZXQgaGVhbHRoQmFyID0gXCIjY3VyckhlYWx0aEVuZW15XCI7XG5cdFx0aWYgKHRoaXMuaXNFbmVteSkgaGVhbHRoQmFyID0gXCIjY3VyckhlYWx0aFBsYXllclwiO1xuXG5cdFx0cmVjaXBpZW50LmhlYWx0aCAtPSBhdHRhY2suZGFtYWdlO1xuXHRcdGlmIChyZWNpcGllbnQuaGVhbHRoIDwgMSkgcmVjaXBpZW50LmhlYWx0aCA9IDA7XG5cblx0XHRsZXQgcm90YXRpb24gPSAxO1xuXHRcdGlmICh0aGlzLmlzRW5lbXkpIHJvdGF0aW9uID0gLTIuMjtcblxuXHRcdHN3aXRjaCAoYXR0YWNrLm5hbWUpIHtcblx0XHRcdGNhc2UgXCJUYWNrbGVcIjpcblx0XHRcdFx0Y29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cblx0XHRcdFx0bGV0IG1vdmVtZW50RGlzdGFuY2UgPSAxMDtcblx0XHRcdFx0aWYgKHRoaXMuaXNFbmVteSkgbW92ZW1lbnREaXN0YW5jZSA9IC0xMDtcblxuXHRcdFx0XHR0bC50byh0aGlzLnBvc2l0aW9uLCB7XG5cdFx0XHRcdFx0eDogdGhpcy5wb3NpdGlvbi54IC0gbW92ZW1lbnREaXN0YW5jZSAqIDIsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnRvKHRoaXMucG9zaXRpb24sIHtcblx0XHRcdFx0XHRcdHg6IHRoaXMucG9zaXRpb24ueCArIG1vdmVtZW50RGlzdGFuY2UgKiA0LFxuXHRcdFx0XHRcdFx0eTogdGhpcy5wb3NpdGlvbi55IC0gbW92ZW1lbnREaXN0YW5jZSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjEsXG5cdFx0XHRcdFx0XHRvbkNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdC8vIGVuZW15IGdldHMgaGl0XG5cdFx0XHRcdFx0XHRcdGF1ZGlvLnRhY2tsZUhpdC5wbGF5KCk7XG5cdFx0XHRcdFx0XHRcdGdzYXAudG8oaGVhbHRoQmFyLCB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IHJlY2lwaWVudC5oZWFsdGggKyBcIiVcIixcblx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0Z3NhcC50byhyZWNpcGllbnQucG9zaXRpb24sIHtcblx0XHRcdFx0XHRcdFx0XHR4OiByZWNpcGllbnQucG9zaXRpb24ueCArIDEwLFxuXHRcdFx0XHRcdFx0XHRcdHlveW86IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0cmVwZWF0OiA1LFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjA4LFxuXHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHRnc2FwLnRvKHJlY2lwaWVudCwge1xuXHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdFx0XHRcdFx0cmVwZWF0OiA1LFxuXHRcdFx0XHRcdFx0XHRcdHlveW86IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuMDgsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50byh0aGlzLnBvc2l0aW9uLCB7XG5cdFx0XHRcdFx0XHR4OiB0aGlzLnBvc2l0aW9uLngsXG5cdFx0XHRcdFx0XHR5OiB0aGlzLnBvc2l0aW9uLnksXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiRmlyZWJhbGxcIjpcblx0XHRcdFx0YXVkaW8uaW5pdEZpcmViYWxsLnBsYXkoKTtcblx0XHRcdFx0Y29uc3QgZmlyZWJhbGxJbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdFx0ZmlyZWJhbGxJbWcuc3JjID0gXCIuL2ltZy9nYW1lX2Fzc2V0cy9maXJlYmFsbC5wbmdcIjtcblx0XHRcdFx0Y29uc3QgZmlyZWJhbGwgPSBuZXcgU3ByaXRlKHtcblx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0eDogdGhpcy5wb3NpdGlvbi54LFxuXHRcdFx0XHRcdFx0eTogdGhpcy5wb3NpdGlvbi55LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0aW1hZ2U6IGZpcmViYWxsSW1nLFxuXHRcdFx0XHRcdGZyYW1lczoge1xuXHRcdFx0XHRcdFx0bWF4OiA0LFxuXHRcdFx0XHRcdFx0aG9sZDogMTAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRhbmltYXRlOiB0cnVlLFxuXHRcdFx0XHRcdHJvdGF0aW9uLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmVuZGVyZWRTcHJpdGVzLnNwbGljZSgxLCAwLCBmaXJlYmFsbCk7XG5cblx0XHRcdFx0Z3NhcC50byhmaXJlYmFsbC5wb3NpdGlvbiwge1xuXHRcdFx0XHRcdHg6IHJlY2lwaWVudC5wb3NpdGlvbi54LFxuXHRcdFx0XHRcdHk6IHJlY2lwaWVudC5wb3NpdGlvbi55LFxuXHRcdFx0XHRcdG9uQ29tcGxldGU6ICgpID0+IHtcblx0XHRcdFx0XHRcdC8vIGVuZW15IGdldHMgaGl0XG5cdFx0XHRcdFx0XHRhdWRpby5maXJlYmFsbEhpdC5wbGF5KCk7XG5cblx0XHRcdFx0XHRcdGdzYXAudG8oaGVhbHRoQmFyLCB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiByZWNpcGllbnQuaGVhbHRoICsgXCIlXCIsXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVjaXBpZW50LmhlYWx0aCk7XG5cdFx0XHRcdFx0XHRnc2FwLnRvKHJlY2lwaWVudC5wb3NpdGlvbiwge1xuXHRcdFx0XHRcdFx0XHR4OiByZWNpcGllbnQucG9zaXRpb24ueCArIDEwLFxuXHRcdFx0XHRcdFx0XHR5b3lvOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRyZXBlYXQ6IDUsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjA4LFxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdGdzYXAudG8ocmVjaXBpZW50LCB7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdFx0XHRcdHJlcGVhdDogNSxcblx0XHRcdFx0XHRcdFx0eW95bzogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuMDgsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHJlbmRlcmVkU3ByaXRlcy5zcGxpY2UoMSwgMSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0ZmFpbnQoKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFwiI2JhdHRsZUNvbnRlbnRcIlxuXHRcdCkuaW5uZXJIVE1MID0gYCR7dGhpcy5uYW1lfSBmYWludGVkIWA7XG5cdFx0Z3NhcC50byh0aGlzLnBvc2l0aW9uLCB7XG5cdFx0XHR5OiB0aGlzLnBvc2l0aW9uLnkgKyAyMCxcblx0XHR9KTtcblx0XHRnc2FwLnRvKHRoaXMsIHtcblx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0fSk7XG5cdFx0YXVkaW8uYmF0dGxlLnN0b3AoKTtcblx0XHRhdWRpby52aWN0b3J5LnBsYXkoKTtcblx0fVxufVxuXG5jbGFzcyBBdHRhY2sge1xuXHRjb25zdHJ1Y3Rvcih7IG5hbWUsIHR5cGUsIGRhbWFnZSwgYW1vdW50ID0gMTAgfSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLmRhbWFnZSA9IGRhbWFnZTtcblx0XHR0aGlzLmFtb3VudCA9IGFtb3VudDtcblx0fVxufVxuXG5leHBvcnQgeyBTcHJpdGUsIEJvdW5kYXJ5LCBNb25zdGVyIH07XG4iLCJleHBvcnQgY29uc3QgYXR0YWNrcyA9IHtcblx0VGFja2xlOiB7XG5cdFx0bmFtZTogXCJUYWNrbGVcIixcblx0XHRkYW1hZ2U6IDEwLFxuXHRcdHR5cGU6IFwiTm9ybWFsXCIsXG5cdFx0Y29sb3I6IFwiYmxhY2tcIixcblx0fSxcblx0RmlyZWJhbGw6IHtcblx0XHRuYW1lOiBcIkZpcmViYWxsXCIsXG5cdFx0ZGFtYWdlOiAyNSxcblx0XHR0eXBlOiBcIkZpcmVcIixcblx0XHRjb2xvcjogXCJyZWRcIixcblx0fSxcbn07XG4iLCJjb25zdCBhdWRpbyA9IHtcblx0bWFwOiBuZXcgSG93bCh7XG5cdFx0c3JjOiBcIi4vZGF0YS9hdWRpby9tYXAud2F2XCIsXG5cdFx0aHRtbDU6IHRydWUsXG5cdFx0dm9sdW1lOiAwLjEsXG5cdH0pLFxuXHRpbml0QmF0dGxlOiBuZXcgSG93bCh7XG5cdFx0c3JjOiBcIi4vZGF0YS9hdWRpby9pbml0QmF0dGxlLndhdlwiLFxuXHRcdGh0bWw1OiB0cnVlLFxuXHRcdHZvbHVtZTogMC4wMSxcblx0fSksXG5cdGJhdHRsZTogbmV3IEhvd2woe1xuXHRcdHNyYzogXCIuL2RhdGEvYXVkaW8vYmF0dGxlLm1wM1wiLFxuXHRcdGh0bWw1OiB0cnVlLFxuXHRcdHZvbHVtZTogMC4wNSxcblx0fSksXG5cdHRhY2tsZUhpdDogbmV3IEhvd2woe1xuXHRcdHNyYzogXCIuL2RhdGEvYXVkaW8vdGFja2xlSGl0LndhdlwiLFxuXHRcdGh0bWw1OiB0cnVlLFxuXHRcdHZvbHVtZTogMC4wMSxcblx0fSksXG5cdGluaXRGaXJlYmFsbDogbmV3IEhvd2woe1xuXHRcdHNyYzogXCIuL2RhdGEvYXVkaW8vaW5pdEZpcmViYWxsLndhdlwiLFxuXHRcdGh0bWw1OiB0cnVlLFxuXHRcdHZvbHVtZTogMC4wNSxcblx0fSksXG5cdGZpcmViYWxsSGl0OiBuZXcgSG93bCh7XG5cdFx0c3JjOiBcIi4vZGF0YS9hdWRpby9maXJlYmFsbEhpdC53YXZcIixcblx0XHRodG1sNTogdHJ1ZSxcblx0XHR2b2x1bWU6IDAuMDUsXG5cdH0pLFxuXHR2aWN0b3J5OiBuZXcgSG93bCh7XG5cdFx0c3JjOiBcIi4vZGF0YS9hdWRpby92aWN0b3J5LndhdlwiLFxuXHRcdGh0bWw1OiB0cnVlLFxuXHRcdHZvbHVtZTogMC4wNSxcblx0fSksXG59O1xuXG5leHBvcnQgeyBhdWRpbyB9O1xuIiwiZXhwb3J0IGNvbnN0IGJhdHRsZVpvbmVzRGF0YSA9IFtcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCxcblx0MCwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcbl07XG4iLCJleHBvcnQgY29uc3QgY29sbGlzaW9ucyA9IFtcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMTAyNSwgMCxcblx0MTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMTAyNSwgMTAyNSwgMCwgMCxcblx0MTAyNSwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCxcblx0MTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMTAyNSxcblx0MCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMTAyNSxcblx0MTAyNSwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCxcblx0MCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMCxcblx0MTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCxcblx0MCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCxcblx0MTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMTAyNSwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMTAyNSwgMTAyNSwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCxcblx0MTAyNSwgMTAyNSwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMTAyNSwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSxcblx0MTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCxcblx0MCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSxcblx0MTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCxcblx0MTAyNSwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMTAyNSwgMTAyNSwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMTAyNSxcblx0MCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMTAyNSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMTAyNSwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCxcbl07XG4iLCJleHBvcnQgY29uc3QgbW9uc3RlcnNEYXRhID0ge1xuXHRFbWJ5OiB7XG5cdFx0cG9zaXRpb246IHtcblx0XHRcdHg6IDI4MCxcblx0XHRcdHk6IDMyNSxcblx0XHR9LFxuXHRcdGltYWdlOiB7XG5cdFx0XHRzcmM6IFwiLi9pbWcvZ2FtZV9hc3NldHMvZW1ieVNwcml0ZS5wbmdcIixcblx0XHR9LFxuXHRcdGZyYW1lczoge1xuXHRcdFx0bWF4OiA0LFxuXHRcdFx0aG9sZDogMzAsXG5cdFx0fSxcblx0XHRhbmltYXRlOiB0cnVlLFxuXHRcdG5hbWU6IFwiRW1ieVwiLFxuXHRcdGF0dGFja3M6IFthdHRhY2tzLlRhY2tsZSwgYXR0YWNrcy5GaXJlYmFsbF0sXG5cdH0sXG5cdERyYWdnbGU6IHtcblx0XHRwb3NpdGlvbjoge1xuXHRcdFx0eDogODAwLFxuXHRcdFx0eTogMTAwLFxuXHRcdH0sXG5cdFx0aW1hZ2U6IHtcblx0XHRcdHNyYzogXCIuL2ltZy9nYW1lX2Fzc2V0cy9kcmFnZ2xlU3ByaXRlLnBuZ1wiLFxuXHRcdH0sXG5cdFx0ZnJhbWVzOiB7XG5cdFx0XHRtYXg6IDQsXG5cdFx0XHRob2xkOiAzMCxcblx0XHR9LFxuXHRcdGFuaW1hdGU6IHRydWUsXG5cdFx0aXNFbmVteTogdHJ1ZSxcblx0XHRuYW1lOiBcIkRyYWdnbGVcIixcblx0XHRhdHRhY2tzOiBbYXR0YWNrcy5UYWNrbGUsIGF0dGFja3MuRmlyZWJhbGxdLFxuXHR9LFxufTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgYmFja2dyb3VuZEltYWdlVXJsIGZyb20gXCIuL2ltZy9nYW1lX2Fzc2V0cy9wb2tlbW9uR2FtZU1hcDQwMC5wbmdcIjtcbmltcG9ydCBmb3JlZ3JvdW5kSW1hZ2VVcmwgZnJvbSBcIi4vaW1nL2dhbWVfYXNzZXRzL3Bva2Vtb25HYW1lTWFwRk9SRUdST1VORC5wbmdcIjtcbmltcG9ydCBwbGF5ZXJEb3duSW1hZ2VVcmwgZnJvbSBcIi4vaW1nL2dhbWVfYXNzZXRzL3BsYXllckRvd24ucG5nXCI7XG5pbXBvcnQgcGxheWVyVXBJbWFnZVVybCBmcm9tIFwiLi9pbWcvZ2FtZV9hc3NldHMvcGxheWVyVXAucG5nXCI7XG5pbXBvcnQgcGxheWVyTGVmdEltYWdlVXJsIGZyb20gXCIuL2ltZy9nYW1lX2Fzc2V0cy9wbGF5ZXJMZWZ0LnBuZ1wiO1xuaW1wb3J0IHBsYXllclJpZ2h0SW1hZ2VVcmwgZnJvbSBcIi4vaW1nL2dhbWVfYXNzZXRzL3BsYXllclJpZ2h0LnBuZ1wiO1xuaW1wb3J0IHsgYW5pbWF0ZUJhdHRsZSB9IGZyb20gXCIuL2JhdHRsZVNjZW5lXCI7XG5pbXBvcnQgeyBTcHJpdGUsIEJvdW5kYXJ5IH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgYXVkaW8gfSBmcm9tIFwiLi9kYXRhL2F1ZGlvL2F1ZGlvXCI7XG5pbXBvcnQgeyBiYXR0bGVab25lc0RhdGEgfSBmcm9tIFwiLi9kYXRhL2JhdHRsZURhdGFcIjtcbmltcG9ydCB7IGNvbGxpc2lvbnMgfSBmcm9tIFwiLi9kYXRhL2NvbGxpc2lvbkRhdGFcIjtcblxuZnVuY3Rpb24gbG9nKGlucHV0KSB7XG5cdGNvbnNvbGUubG9nKGlucHV0KTtcbn1cblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKTtcbmV4cG9ydCBjb25zdCBjID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTsgLy8gYyByZWZlcnMgdG8gY29udGV4dFxuXG5jYW52YXMud2lkdGggPSAxMDI0O1xuY2FudmFzLmhlaWdodCA9IDU3NjtcblxubGV0IGNvbGxpc2lvbnNNYXAgPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlzaW9ucy5sZW5ndGg7IGkgKz0gNzApIHtcblx0Y29sbGlzaW9uc01hcC5wdXNoKGNvbGxpc2lvbnMuc2xpY2UoaSwgaSArIDcwKSk7XG59XG5cbmxldCBiYXR0bGVab25lc01hcCA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBiYXR0bGVab25lc0RhdGEubGVuZ3RoOyBpICs9IDcwKSB7XG5cdGJhdHRsZVpvbmVzTWFwLnB1c2goYmF0dGxlWm9uZXNEYXRhLnNsaWNlKGksIGkgKyA3MCkpO1xufVxuXG5jb25zdCBib3VuZGFyaWVzID0gW107XG5jb25zdCBvZmZzZXQgPSB7XG5cdHg6IC0xNDA4LFxuXHR5OiAtMTEzMCxcbn07XG5cbmNvbGxpc2lvbnNNYXAuZm9yRWFjaCgocm93LCBpKSA9PiB7XG5cdHJvdy5mb3JFYWNoKCh2YWx1ZSwgaikgPT4ge1xuXHRcdGlmICh2YWx1ZSA9PT0gMTAyNSkge1xuXHRcdFx0Ym91bmRhcmllcy5wdXNoKFxuXHRcdFx0XHRuZXcgQm91bmRhcnkoe1xuXHRcdFx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHR4OiBqICogQm91bmRhcnkud2lkdGggKyBvZmZzZXQueCxcblx0XHRcdFx0XHRcdHk6IGkgKiBCb3VuZGFyeS5oZWlnaHQgKyBvZmZzZXQueSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cbmNvbnN0IGJhdHRsZVpvbmVzID0gW107XG5iYXR0bGVab25lc01hcC5mb3JFYWNoKChyb3csIGkpID0+IHtcblx0cm93LmZvckVhY2goKHZhbHVlLCBqKSA9PiB7XG5cdFx0aWYgKHZhbHVlID09PSAxMDI1KSB7XG5cdFx0XHRiYXR0bGVab25lcy5wdXNoKFxuXHRcdFx0XHRuZXcgQm91bmRhcnkoe1xuXHRcdFx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHR4OiBqICogQm91bmRhcnkud2lkdGggKyBvZmZzZXQueCxcblx0XHRcdFx0XHRcdHk6IGkgKiBCb3VuZGFyeS5oZWlnaHQgKyBvZmZzZXQueSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cbmNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7IC8vIGNyZWF0ZXMgSFRNTCBpbWcgZWxlbWVudFxuaW1hZ2Uuc3JjID0gYmFja2dyb3VuZEltYWdlVXJsO1xuXG5jb25zdCBmb3JlZ3JvdW5kSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbmZvcmVncm91bmRJbWFnZS5zcmMgPSBmb3JlZ3JvdW5kSW1hZ2VVcmw7XG5cbmNvbnN0IHBsYXllckRvd25JbWFnZSA9IG5ldyBJbWFnZSgpO1xucGxheWVyRG93bkltYWdlLnNyYyA9IHBsYXllckRvd25JbWFnZVVybDtcbmNvbnN0IHBsYXllclVwSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbnBsYXllclVwSW1hZ2Uuc3JjID0gcGxheWVyVXBJbWFnZVVybDtcbmNvbnN0IHBsYXllckxlZnRJbWFnZSA9IG5ldyBJbWFnZSgpO1xucGxheWVyTGVmdEltYWdlLnNyYyA9IHBsYXllckxlZnRJbWFnZVVybDtcbmNvbnN0IHBsYXllclJpZ2h0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbnBsYXllclJpZ2h0SW1hZ2Uuc3JjID0gcGxheWVyUmlnaHRJbWFnZVVybDtcblxuY29uc3QgcGxheWVyV2lkdGggPSAxOTI7XG5jb25zdCBwbGF5ZXJIZWlnaHQgPSA2ODtcbmNvbnN0IG12bXREaXN0YW5jZSA9IHBsYXllckRvd25JbWFnZS5oZWlnaHQgLyA0IC8gMjtcblxuY29uc3QgcGxheWVyID0gbmV3IFNwcml0ZSh7XG5cdHBvc2l0aW9uOiB7XG5cdFx0eDogY2FudmFzLndpZHRoIC8gMiAtIHBsYXllcldpZHRoIC8gNCAvIDIsXG5cdFx0eTogY2FudmFzLmhlaWdodCAvIDIgLSBwbGF5ZXJIZWlnaHQgLyAyLFxuXHR9LFxuXHRpbWFnZTogcGxheWVyRG93bkltYWdlLFxuXHRmcmFtZXM6IHtcblx0XHRtYXg6IDQsXG5cdFx0aG9sZDogMTAsXG5cdH0sXG5cdHNwcml0ZXM6IHtcblx0XHR1cDogcGxheWVyVXBJbWFnZSxcblx0XHRkb3duOiBwbGF5ZXJEb3duSW1hZ2UsXG5cdFx0bGVmdDogcGxheWVyTGVmdEltYWdlLFxuXHRcdHJpZ2h0OiBwbGF5ZXJSaWdodEltYWdlLFxuXHR9LFxufSk7XG5cbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgU3ByaXRlKHtcblx0cG9zaXRpb246IHtcblx0XHR4OiBvZmZzZXQueCxcblx0XHR5OiBvZmZzZXQueSxcblx0fSxcblx0aW1hZ2U6IGltYWdlLFxufSk7XG5cbmNvbnN0IGZvcmVncm91bmQgPSBuZXcgU3ByaXRlKHtcblx0cG9zaXRpb246IHtcblx0XHR4OiBvZmZzZXQueCxcblx0XHR5OiBvZmZzZXQueSxcblx0fSxcblx0aW1hZ2U6IGZvcmVncm91bmRJbWFnZSxcbn0pO1xuXG5jb25zdCBrZXlzID0ge1xuXHR1cDoge1xuXHRcdHByZXNzZWQ6IGZhbHNlLFxuXHR9LFxuXHRkb3duOiB7XG5cdFx0cHJlc3NlZDogZmFsc2UsXG5cdH0sXG5cdGxlZnQ6IHtcblx0XHRwcmVzc2VkOiBmYWxzZSxcblx0fSxcblx0cmlnaHQ6IHtcblx0XHRwcmVzc2VkOiBmYWxzZSxcblx0fSxcbn07XG5cbmNvbnN0IG1vdmFibGVzID0gW2JhY2tncm91bmQsIGZvcmVncm91bmQsIC4uLmJvdW5kYXJpZXMsIC4uLmJhdHRsZVpvbmVzXTtcblxuZnVuY3Rpb24gc2hhcGVDb2xsaXNpb24oeyBzaGFwZTEsIHNoYXBlMiB9KSB7XG5cdHJldHVybiAoXG5cdFx0c2hhcGUxLnBvc2l0aW9uLnggKyBzaGFwZTEud2lkdGggPj0gc2hhcGUyLnBvc2l0aW9uLnggJiZcblx0XHRzaGFwZTEucG9zaXRpb24ueCA8PSBzaGFwZTIucG9zaXRpb24ueCArIHNoYXBlMi53aWR0aCAmJlxuXHRcdHNoYXBlMS5wb3NpdGlvbi55ICsgc2hhcGUxLmhlaWdodCAqIDAuNyA+PSBzaGFwZTIucG9zaXRpb24ueSAmJlxuXHRcdHNoYXBlMS5wb3NpdGlvbi55IDw9IHNoYXBlMi5wb3NpdGlvbi55ICsgc2hhcGUyLmhlaWdodCAqIDAuMlxuXHQpO1xufVxuXG5jb25zdCBiYXR0bGUgPSB7XG5cdGluaXRpYXRlZDogZmFsc2UsXG59O1xuXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuXHRjb25zdCBhbmltYXRpb25JZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cdGJhY2tncm91bmQuZHJhdygpO1xuXHRib3VuZGFyaWVzLmZvckVhY2goKGJvdW5kYXJ5KSA9PiB7XG5cdFx0Ym91bmRhcnkuZHJhdygpO1xuXHR9KTtcblx0YmF0dGxlWm9uZXMuZm9yRWFjaCgoYmF0dGxlWm9uZSkgPT4ge1xuXHRcdGJhdHRsZVpvbmUuZHJhdygpO1xuXHR9KTtcblx0cGxheWVyLmRyYXcoKTtcblx0Zm9yZWdyb3VuZC5kcmF3KCk7XG5cblx0Ly8gTU9WRU1FTlQgLy9cblx0bGV0IG1vdmluZyA9IHRydWU7XG5cdHBsYXllci5hbmltYXRlID0gZmFsc2U7XG5cblx0Ly8gQmF0dGxlIGFjdGl2YXRpb25cblx0aWYgKGJhdHRsZS5pbml0aWF0ZWQpIHJldHVybjsgLy8gc2tpcCBiYXR0bGUgYWN0aXZhdGlvbiBpZiBpbiBiYXR0bGVcblxuXHRpZiAoXG5cdFx0a2V5cy51cC5wcmVzc2VkIHx8XG5cdFx0a2V5cy5kb3duLnByZXNzZWQgfHxcblx0XHRrZXlzLmxlZnQucHJlc3NlZCB8fFxuXHRcdGtleXMucmlnaHQucHJlc3NlZFxuXHQpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJhdHRsZVpvbmVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBiYXR0bGVab25lID0gYmF0dGxlWm9uZXNbaV07XG5cdFx0XHRjb25zdCBvdmVybGFwWCA9XG5cdFx0XHRcdE1hdGgubWluKFxuXHRcdFx0XHRcdHBsYXllci5wb3NpdGlvbi54ICsgcGxheWVyLndpZHRoLFxuXHRcdFx0XHRcdGJhdHRsZVpvbmUucG9zaXRpb24ueCArIGJhdHRsZVpvbmUud2lkdGhcblx0XHRcdFx0KSAtIE1hdGgubWF4KHBsYXllci5wb3NpdGlvbi54LCBiYXR0bGVab25lLnBvc2l0aW9uLngpO1xuXHRcdFx0Y29uc3Qgb3ZlcmxhcFkgPVxuXHRcdFx0XHRNYXRoLm1pbihcblx0XHRcdFx0XHRwbGF5ZXIucG9zaXRpb24ueSArIHBsYXllci5oZWlnaHQsXG5cdFx0XHRcdFx0YmF0dGxlWm9uZS5wb3NpdGlvbi55ICsgYmF0dGxlWm9uZS5oZWlnaHRcblx0XHRcdFx0KSAtIE1hdGgubWF4KHBsYXllci5wb3NpdGlvbi55LCBiYXR0bGVab25lLnBvc2l0aW9uLnkpO1xuXHRcdFx0Y29uc3Qgb3ZlcmxhcHBpbmdBcmVhID0gb3ZlcmxhcFggKiBvdmVybGFwWTtcblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRzaGFwZUNvbGxpc2lvbih7XG5cdFx0XHRcdFx0c2hhcGUxOiBwbGF5ZXIsXG5cdFx0XHRcdFx0c2hhcGUyOiBiYXR0bGVab25lLFxuXHRcdFx0XHR9KSAmJlxuXHRcdFx0XHRvdmVybGFwcGluZ0FyZWEgPiAocGxheWVyLndpZHRoICogcGxheWVyLmhlaWdodCkgLyAyICYmXG5cdFx0XHRcdE1hdGgucmFuZG9tKCkgPCAwLjAyXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gZGVhY3RpdmUgY3VycmVudCBhbmltYXRpb24gbG9vcFxuXHRcdFx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xuXG5cdFx0XHRcdGF1ZGlvLm1hcC5zdG9wKCk7XG5cdFx0XHRcdGF1ZGlvLmluaXRCYXR0bGUucGxheSgpO1xuXHRcdFx0XHRhdWRpby5iYXR0bGUucGxheSgpO1xuXG5cdFx0XHRcdGJhdHRsZS5pbml0aWF0ZWQgPSB0cnVlO1xuXHRcdFx0XHRnc2FwLnRvKFwiI292ZXJsYXBXcmFwXCIsIHtcblx0XHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHRcdHJlcGVhdDogMyxcblx0XHRcdFx0XHR5b3lvOiB0cnVlLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAwLjQsXG5cdFx0XHRcdFx0b25Db21wbGV0ZSgpIHtcblx0XHRcdFx0XHRcdGdzYXAudG8oXCIjb3ZlcmxhcFdyYXBcIiwge1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC40LFxuXHRcdFx0XHRcdFx0XHRvbkNvbXBsZXRlKCkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGFjdGl2ZSBuZXcgYW5pbWF0aW9uIGxvb3Bcblx0XHRcdFx0XHRcdFx0XHRpbml0QmF0dGxlKCk7XG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUJhdHRsZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGdzYXAudG8oXCIjb3ZlcmxhcFdyYXBcIiwge1xuXHRcdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjQsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKGtleXMuZG93bi5wcmVzc2VkICYmIGxhc3RLZXkgPT09IFwiZG93blwiKSB7XG5cdFx0cGxheWVyLmFuaW1hdGUgPSB0cnVlO1xuXHRcdHBsYXllci5pbWFnZSA9IHBsYXllci5zcHJpdGVzLmRvd247XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBib3VuZGFyeSA9IGJvdW5kYXJpZXNbaV07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHNoYXBlQ29sbGlzaW9uKHtcblx0XHRcdFx0XHRzaGFwZTE6IHBsYXllcixcblx0XHRcdFx0XHRzaGFwZTI6IHtcblx0XHRcdFx0XHRcdC4uLmJvdW5kYXJ5LFxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0XHRcdFx0eDogYm91bmRhcnkucG9zaXRpb24ueCxcblx0XHRcdFx0XHRcdFx0eTogYm91bmRhcnkucG9zaXRpb24ueSAtIHBsYXllckRvd25JbWFnZS5oZWlnaHQgLyAyLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KSB7XG5cdFx0XHRcdG1vdmluZyA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobW92aW5nKSB7XG5cdFx0XHRtb3ZhYmxlcy5mb3JFYWNoKChtb3ZhYmxlKSA9PiB7XG5cdFx0XHRcdG1vdmFibGUucG9zaXRpb24ueSAtPSBwbGF5ZXJEb3duSW1hZ2UuaGVpZ2h0IC8gNCAvIDI7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ly8gYmFja2dyb3VuZC5wb3NpdGlvbi55IC09IHBsYXllckRvd25JbWFnZS5oZWlnaHQgLyA0IC8gMjtcblx0fSBlbHNlIGlmIChrZXlzLnVwLnByZXNzZWQgJiYgbGFzdEtleSA9PT0gXCJ1cFwiKSB7XG5cdFx0cGxheWVyLmFuaW1hdGUgPSB0cnVlO1xuXHRcdHBsYXllci5pbWFnZSA9IHBsYXllci5zcHJpdGVzLnVwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcmllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgYm91bmRhcnkgPSBib3VuZGFyaWVzW2ldO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRzaGFwZUNvbGxpc2lvbih7XG5cdFx0XHRcdFx0c2hhcGUxOiBwbGF5ZXIsXG5cdFx0XHRcdFx0c2hhcGUyOiB7XG5cdFx0XHRcdFx0XHQuLi5ib3VuZGFyeSxcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdHg6IGJvdW5kYXJ5LnBvc2l0aW9uLngsXG5cdFx0XHRcdFx0XHRcdHk6IGJvdW5kYXJ5LnBvc2l0aW9uLnkgKyBwbGF5ZXJEb3duSW1hZ2UuaGVpZ2h0IC8gNCAvIDIsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pXG5cdFx0XHQpIHtcblx0XHRcdFx0bW92aW5nID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChtb3ZpbmcpIHtcblx0XHRcdG1vdmFibGVzLmZvckVhY2goKG1vdmFibGUpID0+IHtcblx0XHRcdFx0bW92YWJsZS5wb3NpdGlvbi55ICs9IHBsYXllckRvd25JbWFnZS5oZWlnaHQgLyA0IC8gMjtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSBlbHNlIGlmIChrZXlzLmxlZnQucHJlc3NlZCAmJiBsYXN0S2V5ID09PSBcImxlZnRcIikge1xuXHRcdHBsYXllci5hbmltYXRlID0gdHJ1ZTtcblx0XHRwbGF5ZXIuaW1hZ2UgPSBwbGF5ZXIuc3ByaXRlcy5sZWZ0O1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcmllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgYm91bmRhcnkgPSBib3VuZGFyaWVzW2ldO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRzaGFwZUNvbGxpc2lvbih7XG5cdFx0XHRcdFx0c2hhcGUxOiBwbGF5ZXIsXG5cdFx0XHRcdFx0c2hhcGUyOiB7XG5cdFx0XHRcdFx0XHQuLi5ib3VuZGFyeSxcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdHg6IGJvdW5kYXJ5LnBvc2l0aW9uLnggKyBwbGF5ZXJEb3duSW1hZ2UuaGVpZ2h0IC8gNCAvIDIsXG5cdFx0XHRcdFx0XHRcdHk6IGJvdW5kYXJ5LnBvc2l0aW9uLnksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pXG5cdFx0XHQpIHtcblx0XHRcdFx0bW92aW5nID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChtb3ZpbmcpIHtcblx0XHRcdG1vdmFibGVzLmZvckVhY2goKG1vdmFibGUpID0+IHtcblx0XHRcdFx0bW92YWJsZS5wb3NpdGlvbi54ICs9IHBsYXllckRvd25JbWFnZS5oZWlnaHQgLyA0IC8gMjtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSBlbHNlIGlmIChrZXlzLnJpZ2h0LnByZXNzZWQgJiYgbGFzdEtleSA9PT0gXCJyaWdodFwiKSB7XG5cdFx0cGxheWVyLmFuaW1hdGUgPSB0cnVlO1xuXHRcdHBsYXllci5pbWFnZSA9IHBsYXllci5zcHJpdGVzLnJpZ2h0O1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcmllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgYm91bmRhcnkgPSBib3VuZGFyaWVzW2ldO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRzaGFwZUNvbGxpc2lvbih7XG5cdFx0XHRcdFx0c2hhcGUxOiBwbGF5ZXIsXG5cdFx0XHRcdFx0c2hhcGUyOiB7XG5cdFx0XHRcdFx0XHQuLi5ib3VuZGFyeSxcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdHg6IGJvdW5kYXJ5LnBvc2l0aW9uLnggLSBwbGF5ZXJEb3duSW1hZ2UuaGVpZ2h0IC8gNCAvIDIsXG5cdFx0XHRcdFx0XHRcdHk6IGJvdW5kYXJ5LnBvc2l0aW9uLnksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pXG5cdFx0XHQpIHtcblx0XHRcdFx0bW92aW5nID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChtb3ZpbmcpIHtcblx0XHRcdG1vdmFibGVzLmZvckVhY2goKG1vdmFibGUpID0+IHtcblx0XHRcdFx0bW92YWJsZS5wb3NpdGlvbi54IC09IHBsYXllckRvd25JbWFnZS5oZWlnaHQgLyA0IC8gMjtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuLy8gYW5pbWF0ZSgpOyAvLyBGT1IgVEVTVElORywgVU5DT01NRU5UIFdIRU4gRklOSVNIRURcblxubGV0IGxhc3RLZXkgPSBcIlwiO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG5cdGlmIChlLmtleSA9PT0gXCJzXCIgfHwgZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcblx0XHRrZXlzLmRvd24ucHJlc3NlZCA9IHRydWU7XG5cdFx0bGFzdEtleSA9IFwiZG93blwiO1xuXHR9IGVsc2UgaWYgKGUua2V5ID09PSBcImRcIiB8fCBlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcblx0XHRrZXlzLnJpZ2h0LnByZXNzZWQgPSB0cnVlO1xuXHRcdGxhc3RLZXkgPSBcInJpZ2h0XCI7XG5cdH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiIHx8IGUua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG5cdFx0a2V5cy5sZWZ0LnByZXNzZWQgPSB0cnVlO1xuXHRcdGxhc3RLZXkgPSBcImxlZnRcIjtcblx0fSBlbHNlIGlmIChlLmtleSA9PT0gXCJ3XCIgfHwgZS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG5cdFx0a2V5cy51cC5wcmVzc2VkID0gdHJ1ZTtcblx0XHRsYXN0S2V5ID0gXCJ1cFwiO1xuXHR9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuXHRpZiAoZS5rZXkgPT09IFwic1wiIHx8IGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG5cdFx0a2V5cy5kb3duLnByZXNzZWQgPSBmYWxzZTtcblx0fSBlbHNlIGlmIChlLmtleSA9PT0gXCJkXCIgfHwgZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG5cdFx0a2V5cy5yaWdodC5wcmVzc2VkID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiYVwiIHx8IGUua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG5cdFx0a2V5cy5sZWZ0LnByZXNzZWQgPSBmYWxzZTtcblx0fSBlbHNlIGlmIChlLmtleSA9PT0gXCJ3XCIgfHwgZS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG5cdFx0a2V5cy51cC5wcmVzc2VkID0gZmFsc2U7XG5cdH1cbn0pO1xuXG5sZXQgY2xpY2tlZCA9IGZhbHNlO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGlmICghY2xpY2tlZCkge1xuXHRcdGF1ZGlvLm1hcC5wbGF5KCk7XG5cdFx0Y2xpY2tlZCA9IHRydWU7XG5cdH1cbn0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsICgpID0+IHtcblx0aWYgKCFjbGlja2VkKSB7XG5cdFx0YXVkaW8ubWFwLnBsYXkoKTtcblx0XHRjbGlja2VkID0gdHJ1ZTtcblx0fVxufSk7XG5cbmV4cG9ydCB7IGFuaW1hdGUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==