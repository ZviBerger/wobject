/*!
 * 
 *   wobject v1.0.4
 *   https://github.com/ZviBerger/Wobject
 *
 *   Copyright (c) Zvika Berger (https://github.com/ZviBerger) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Wobject"] = factory();
	else
		root["Wobject"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CollisionManager": () => (/* reexport */ CollisionManager),
  "LightWObject": () => (/* reexport */ LightWObject),
  "WOAnimation": () => (/* reexport */ WOAnimation),
  "WOApp": () => (/* reexport */ WOApp),
  "WOButton": () => (/* reexport */ WOButton),
  "WOCircle": () => (/* reexport */ WOCircle),
  "WOClock": () => (/* reexport */ WOClock),
  "WOCollidersContainer": () => (/* reexport */ WOCollidersContainer),
  "WOContainer": () => (/* reexport */ WOContainer),
  "WODynamicContainer": () => (/* reexport */ WODynamicContainer),
  "WOFrame": () => (/* reexport */ WOFrame),
  "WOGridContainer": () => (/* reexport */ WOGridContainer),
  "WOHorizontalContainer": () => (/* reexport */ WOHorizontalContainer),
  "WOImage": () => (/* reexport */ WOImage),
  "WOInternalButton": () => (/* reexport */ WOInternalButton),
  "WOMargin": () => (/* reexport */ WOMargin),
  "WOMotion": () => (/* reexport */ WOMotion),
  "WOPadding": () => (/* reexport */ WOPadding),
  "WOPairString": () => (/* reexport */ WOPairString),
  "WOPosition": () => (/* reexport */ WOPosition),
  "WORect": () => (/* reexport */ WORect),
  "WORoundedRect": () => (/* reexport */ WORoundedRect),
  "WOSize": () => (/* reexport */ WOSize),
  "WOStore": () => (/* reexport */ WOStore),
  "WOTextBox": () => (/* reexport */ WOTextBox),
  "WOVerticalContainer": () => (/* reexport */ WOVerticalContainer),
  "WObject": () => (/* reexport */ WObject),
  "accelerateInLine": () => (/* reexport */ accelerateInLine),
  "adjustColor": () => (/* reexport */ adjustColor),
  "collideCircleWithCircle": () => (/* reexport */ collideCircleWithCircle),
  "collideCircleWithRect": () => (/* reexport */ collideCircleWithRect),
  "collideFrames": () => (/* reexport */ collideFrames),
  "collideMap": () => (/* reexport */ collideMap),
  "collideRectWithCircle": () => (/* reexport */ collideRectWithCircle),
  "collideRectWithRect": () => (/* reexport */ collideRectWithRect),
  "default": () => (/* binding */ lib),
  "getRandomColor": () => (/* reexport */ getRandomColor),
  "getRandomInteger": () => (/* reexport */ getRandomInteger),
  "getRandomNumber": () => (/* reexport */ getRandomNumber),
  "getRandomPosition": () => (/* reexport */ getRandomPosition),
  "isCollide": () => (/* reexport */ isCollide),
  "moveInCircle": () => (/* reexport */ moveInCircle),
  "moveInLine": () => (/* reexport */ moveInLine),
  "stopAcceleration": () => (/* reexport */ stopAcceleration)
});

// NAMESPACE OBJECT: ./src/lib/wobject.ts
var wobject_namespaceObject = {};
__webpack_require__.r(wobject_namespaceObject);
__webpack_require__.d(wobject_namespaceObject, {
  "WOApp": () => (WOApp)
});

// NAMESPACE OBJECT: ./src/lib/basics.ts
var basics_namespaceObject = {};
__webpack_require__.r(basics_namespaceObject);
__webpack_require__.d(basics_namespaceObject, {
  "WOFrame": () => (WOFrame),
  "WOMargin": () => (WOMargin),
  "WOMotion": () => (WOMotion),
  "WOPadding": () => (WOPadding),
  "WOPairString": () => (WOPairString),
  "WOPosition": () => (WOPosition),
  "WOSize": () => (WOSize),
  "WOStore": () => (WOStore)
});

// NAMESPACE OBJECT: ./src/lib/engine.ts
var engine_namespaceObject = {};
__webpack_require__.r(engine_namespaceObject);
__webpack_require__.d(engine_namespaceObject, {
  "LightWObject": () => (LightWObject),
  "WObject": () => (WObject)
});

// NAMESPACE OBJECT: ./src/lib/image.ts
var image_namespaceObject = {};
__webpack_require__.r(image_namespaceObject);
__webpack_require__.d(image_namespaceObject, {
  "WOImage": () => (WOImage)
});

// NAMESPACE OBJECT: ./src/lib/animation.ts
var animation_namespaceObject = {};
__webpack_require__.r(animation_namespaceObject);
__webpack_require__.d(animation_namespaceObject, {
  "WOAnimation": () => (WOAnimation)
});

// NAMESPACE OBJECT: ./src/lib/text.ts
var text_namespaceObject = {};
__webpack_require__.r(text_namespaceObject);
__webpack_require__.d(text_namespaceObject, {
  "WOTextBox": () => (WOTextBox)
});

// NAMESPACE OBJECT: ./src/lib/shapes.ts
var shapes_namespaceObject = {};
__webpack_require__.r(shapes_namespaceObject);
__webpack_require__.d(shapes_namespaceObject, {
  "WOCircle": () => (WOCircle),
  "WORect": () => (WORect),
  "WORoundedRect": () => (WORoundedRect)
});

// NAMESPACE OBJECT: ./src/lib/utility.ts
var utility_namespaceObject = {};
__webpack_require__.r(utility_namespaceObject);
__webpack_require__.d(utility_namespaceObject, {
  "WOClock": () => (WOClock),
  "adjustColor": () => (adjustColor),
  "getRandomColor": () => (getRandomColor),
  "getRandomInteger": () => (getRandomInteger),
  "getRandomNumber": () => (getRandomNumber),
  "getRandomPosition": () => (getRandomPosition)
});

// NAMESPACE OBJECT: ./src/lib/buttons.ts
var buttons_namespaceObject = {};
__webpack_require__.r(buttons_namespaceObject);
__webpack_require__.d(buttons_namespaceObject, {
  "WOButton": () => (WOButton),
  "WOInternalButton": () => (WOInternalButton)
});

// NAMESPACE OBJECT: ./src/lib/collideMethods.ts
var collideMethods_namespaceObject = {};
__webpack_require__.r(collideMethods_namespaceObject);
__webpack_require__.d(collideMethods_namespaceObject, {
  "collideCircleWithCircle": () => (collideCircleWithCircle),
  "collideCircleWithRect": () => (collideCircleWithRect),
  "collideFrames": () => (collideFrames),
  "collideMap": () => (collideMap),
  "collideRectWithCircle": () => (collideRectWithCircle),
  "collideRectWithRect": () => (collideRectWithRect),
  "isCollide": () => (isCollide)
});

// NAMESPACE OBJECT: ./src/lib/colliders.ts
var colliders_namespaceObject = {};
__webpack_require__.r(colliders_namespaceObject);
__webpack_require__.d(colliders_namespaceObject, {
  "CollisionManager": () => (CollisionManager),
  "WOCollidersContainer": () => (WOCollidersContainer)
});

// NAMESPACE OBJECT: ./src/lib/containers.ts
var containers_namespaceObject = {};
__webpack_require__.r(containers_namespaceObject);
__webpack_require__.d(containers_namespaceObject, {
  "WOContainer": () => (WOContainer),
  "WODynamicContainer": () => (WODynamicContainer),
  "WOGridContainer": () => (WOGridContainer),
  "WOHorizontalContainer": () => (WOHorizontalContainer),
  "WOVerticalContainer": () => (WOVerticalContainer)
});

// NAMESPACE OBJECT: ./src/lib/movements.ts
var movements_namespaceObject = {};
__webpack_require__.r(movements_namespaceObject);
__webpack_require__.d(movements_namespaceObject, {
  "accelerateInLine": () => (accelerateInLine),
  "moveInCircle": () => (moveInCircle),
  "moveInLine": () => (moveInLine),
  "stopAcceleration": () => (stopAcceleration)
});

;// CONCATENATED MODULE: ./src/lib/wobject.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * app module.
 * @module WOApp
 * @see module:Engine
 */

/**
 * @class WOApp - each app should have single instance of this class.
 * WOApp wobject control the entire life cycle of the application.
 * The instance is the root wobject of the application.
 */
var WOApp = /*#__PURE__*/function () {
  /**
   * Create WOApp
  * @param canvasID {string}   the canvas id as defined in the HTML file
  * @param updateRate {string} each time in ms the app will process the all cycle -- > Update -> Display
  * This class can be extended in order to add more functionality (take a look on the spaceship game for example).
     */
  function WOApp(canvasID, updateRate) {
    _classCallCheck(this, WOApp);

    _defineProperty(this, "canvas", void 0);

    _defineProperty(this, "context", void 0);

    _defineProperty(this, "elements", void 0);

    _defineProperty(this, "updateRate", void 0);

    this.canvas = document.getElementById(canvasID);

    if (!this.canvas) {
      var cnv = document.createElement("CANVAS");
      cnv.setAttribute("id", canvasID);
      cnv.width = window.innerWidth - 20;
      cnv.height = window.innerHeight - 20;
      document.body.appendChild(cnv);
      this.canvas = cnv;
    }

    this.context = this.canvas.getContext("2d");
    this.elements = [];
    this.updateRate = updateRate;
  }
  /**
   * @method update run each cycle for ech child wobject before display
   */


  _createClass(WOApp, [{
    key: "update",
    value: function update() {
      this.elements.forEach(function (element) {
        element.update();
      });
    }
    /**
     * @method reOrganize make all children nested wobjects be ordered relative to position or there father
     * @param position (optional) position to be relative to.
     */

  }, {
    key: "reOrganize",
    value: function reOrganize(position) {
      this.elements.forEach(function (element) {
        try {
          element.reOrganize();
        } catch (e) {
          console.log("Error:", e);
        }
      });
    }
    /**
     * @method addElement add an wobject element to be under this wobject.. ( WObject    )
     * @param element {WObject} any wobject extended instance.            /  /   |  \   \
     *                                                                  (W) (W) (W) (W) (W)
     */

  }, {
    key: "addElement",
    value: function addElement(element) {
      this.elements.push(element);
      this.reOrganize();
    }
    /**
     * @method clear - remove all children wobjects
     */

  }, {
    key: "clear",
    value: function clear() {
      this.elements = [];
    }
    /**
     * @method display - clear the canvas and display the new state of the children wobject after been updated.
     * @see update
     */

  }, {
    key: "display",
    value: function display() {
      var _this = this;

      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.elements.forEach(function (element) {
        element.display(_this.context);
      });
    }
    /**
     * @method run - main loop that makes the application running
     * @cal update & display for each child wobject
     */

  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      this.update();
      this.display();
      setInterval(function () {
        _this2.update();

        _this2.display();
      }, this.updateRate);
    }
  }]);

  return WOApp;
}();
;// CONCATENATED MODULE: ./src/lib/basics.ts
function basics_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function basics_createClass(Constructor, protoProps, staticProps) { if (protoProps) basics_defineProperties(Constructor.prototype, protoProps); if (staticProps) basics_defineProperties(Constructor, staticProps); return Constructor; }

function basics_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function basics_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WOStore = function WOStore() {
  basics_classCallCheck(this, WOStore);

  basics_defineProperty(this, "data", void 0);

  this.data = {};
};
var WOPosition = /*#__PURE__*/function () {
  function WOPosition(x, y) {
    basics_classCallCheck(this, WOPosition);

    basics_defineProperty(this, "x", void 0);

    basics_defineProperty(this, "y", void 0);

    this.x = x;
    this.y = y;
  }

  basics_createClass(WOPosition, [{
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "adapt",
    value: function adapt(motion) {
      this.x += motion.dX;
      this.y += motion.dY;
    }
  }]);

  return WOPosition;
}();
var WOMargin = /*#__PURE__*/function () {
  function WOMargin() {
    basics_classCallCheck(this, WOMargin);

    basics_defineProperty(this, "left", void 0);

    basics_defineProperty(this, "top", void 0);

    basics_defineProperty(this, "right", void 0);

    basics_defineProperty(this, "bottom", void 0);

    this.left = 0;
    this.top = 0;
    this.right = 0;
    this.bottom = 0;
  }

  basics_createClass(WOMargin, [{
    key: "set",
    value: function set(left, top, right, bottom) {
      this.left = left;
      this.top = top;
      this.right = right;
      this.bottom = bottom;
    }
  }]);

  return WOMargin;
}();
var WOPadding = /*#__PURE__*/function () {
  function WOPadding() {
    basics_classCallCheck(this, WOPadding);

    basics_defineProperty(this, "left", void 0);

    basics_defineProperty(this, "top", void 0);

    basics_defineProperty(this, "right", void 0);

    basics_defineProperty(this, "bottom", void 0);

    this.left = 0;
    this.top = 0;
    this.right = 0;
    this.bottom = 0;
  }

  basics_createClass(WOPadding, [{
    key: "set",
    value: function set(left, top, right, bottom) {
      this.left = left;
      this.top = top;
      this.right = right;
      this.bottom = bottom;
    }
  }]);

  return WOPadding;
}();
var WOSize = function WOSize(width, high) {
  basics_classCallCheck(this, WOSize);

  basics_defineProperty(this, "width", void 0);

  basics_defineProperty(this, "height", void 0);

  this.width = width;
  this.height = high;
};
var WOFrame = /*#__PURE__*/function () {
  function WOFrame(x, y, w, h) {
    basics_classCallCheck(this, WOFrame);

    basics_defineProperty(this, "topLeft", void 0);

    basics_defineProperty(this, "topRight", void 0);

    basics_defineProperty(this, "bottomLeft", void 0);

    basics_defineProperty(this, "bottomRight", void 0);

    this.topLeft = new WOPosition(x, y);
    this.topRight = new WOPosition(x + w, y);
    this.bottomLeft = new WOPosition(x, y + h);
    this.bottomRight = new WOPosition(x + w, y + h);
  }

  basics_createClass(WOFrame, [{
    key: "update",
    value: function update(pos, size) {
      this.topLeft.set(pos.x, pos.y);
      this.topRight.set(pos.x + size.width, pos.y);
      this.bottomLeft.set(pos.x, pos.y + size.height);
      this.bottomRight.set(pos.x + size.width, pos.y + size.height);
    }
  }, {
    key: "contain",
    value: function contain(x, y) {
      var topLeft = this.topLeft,
          bottomRight = this.bottomRight;
      return x > topLeft.x && x < bottomRight.x && y > topLeft.y && y < bottomRight.y;
    }
  }]);

  return WOFrame;
}();
var WOMotion = /*#__PURE__*/function () {
  function WOMotion() {
    basics_classCallCheck(this, WOMotion);

    basics_defineProperty(this, "dX", void 0);

    basics_defineProperty(this, "dY", void 0);

    basics_defineProperty(this, "radius", void 0);

    basics_defineProperty(this, "angel", void 0);

    this.dX = 0;
    this.dY = 0;
    this.radius = 0;
    this.angel = 0;
  }

  basics_createClass(WOMotion, [{
    key: "set",
    value: function set(dX, dY, radius) {
      this.dX = dX;
      this.dY = dY;
      this.radius = radius;
    }
  }, {
    key: "setRadius",
    value: function setRadius(radius) {
      this.radius = radius;
    }
  }]);

  return WOMotion;
}();
var WOPairString = /*#__PURE__*/function () {
  function WOPairString(objName1, objName2) {
    basics_classCallCheck(this, WOPairString);

    basics_defineProperty(this, "objName1", void 0);

    basics_defineProperty(this, "objName2", void 0);

    this.objName1 = objName1;
    this.objName2 = objName2;
  }

  basics_createClass(WOPairString, [{
    key: "asString",
    value: function asString() {
      return this.objName1 + this.objName2;
    }
  }]);

  return WOPairString;
}();
;// CONCATENATED MODULE: ./src/lib/engine.ts
function engine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function engine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function engine_createClass(Constructor, protoProps, staticProps) { if (protoProps) engine_defineProperties(Constructor.prototype, protoProps); if (staticProps) engine_defineProperties(Constructor, staticProps); return Constructor; }

function engine_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var WObject = /*#__PURE__*/function () {
  function WObject(x, y, w, h, color) {
    engine_classCallCheck(this, WObject);

    engine_defineProperty(this, "elements", void 0);

    engine_defineProperty(this, "position", void 0);

    engine_defineProperty(this, "originPos", void 0);

    engine_defineProperty(this, "size", void 0);

    engine_defineProperty(this, "margin", void 0);

    engine_defineProperty(this, "padding", void 0);

    engine_defineProperty(this, "motion", void 0);

    engine_defineProperty(this, "color", void 0);

    engine_defineProperty(this, "wobjName", void 0);

    engine_defineProperty(this, "motionMethods", void 0);

    this.elements = [];
    this.position = new WOPosition(x, y);
    this.originPos = new WOPosition(x, y);
    this.size = new WOSize(w, h);
    this.margin = new WOMargin();
    this.padding = new WOPadding();
    this.motion = new WOMotion();
    this.color = color;
    this.wobjName = this.constructor.name;
  }

  engine_createClass(WObject, [{
    key: "update",
    value: function update() {
      if (this.motionMethods) {
        var newMotion = this.motionMethods(this.motion);
        this.position.adapt(newMotion);
        this.motion = newMotion;
      }

      this.elements.forEach(function (element) {
        element.update();
      });
    }
  }, {
    key: "getFullWidth",
    value: function getFullWidth() {
      return this.margin.left + this.size.width + this.margin.right;
    }
  }, {
    key: "getFullHeight",
    value: function getFullHeight() {
      return this.margin.top + this.size.height + this.margin.bottom;
    }
  }, {
    key: "setMotionMethod",
    value: function setMotionMethod(motionMethods) {
      this.motionMethods = motionMethods;
    }
  }, {
    key: "setMotion",
    value: function setMotion(motion) {
      this.motion = motion;
    }
  }, {
    key: "adoptPosition",
    value: function adoptPosition(position) {
      this.position.x += position.x;
      this.position.y += position.y;
    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this.position.x = position.x;
      this.position.y = position.y;
    }
  }, {
    key: "setMargin",
    value: function setMargin(left, top, right, bottom) {
      this.margin.set(left, top, right, bottom);
    }
  }, {
    key: "setPadding",
    value: function setPadding(left, top, right, bottom) {
      this.padding.set(left, top, right, bottom);
    }
  }, {
    key: "reOrganize",
    value: function reOrganize(position) {
      var _this = this;

      this.elements.forEach(function (element) {
        element.reOrganize(position !== null && position !== void 0 ? position : _this.position);
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.elements = [];
    }
  }, {
    key: "addElement",
    value: function addElement(s) {
      s.adoptPosition(this.position);
      this.elements.push(s);
    }
  }, {
    key: "addElementNotAdopt",
    value: function addElementNotAdopt(s) {
      this.elements.push(s);
    }
  }, {
    key: "myDisplay",
    value: function myDisplay(context) {//override this method as your wish
    }
  }, {
    key: "display",
    value: function display(context) {
      this.myDisplay(context);
      this.elements.forEach(function (element) {
        element.display(context);
      });
    }
  }]);

  return WObject;
}();
/**
 * @class LightWObject
 *
 */

var LightWObject = /*#__PURE__*/function () {
  function LightWObject() {
    engine_classCallCheck(this, LightWObject);

    engine_defineProperty(this, "elements", void 0);

    engine_defineProperty(this, "wobjName", void 0);

    this.elements = [];
    this.wobjName = this.constructor.name;
  }

  engine_createClass(LightWObject, [{
    key: "update",
    value: function update() {
      this.elements.forEach(function (element) {
        element.update();
      });
    }
  }, {
    key: "reOrganize",
    value: function reOrganize() {}
  }, {
    key: "addElement",
    value: function addElement(s) {
      this.elements.push(s);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.elements = [];
    }
  }, {
    key: "myDisplay",
    value: function myDisplay(context) {//override this method as your wish
    }
  }, {
    key: "display",
    value: function display(context) {
      this.myDisplay(context);
      this.elements.forEach(function (element) {
        element.display(context);
      });
    }
  }]);

  return LightWObject;
}();
;// CONCATENATED MODULE: ./src/lib/image.ts
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function image_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function image_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function image_createClass(Constructor, protoProps, staticProps) { if (protoProps) image_defineProperties(Constructor.prototype, protoProps); if (staticProps) image_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function image_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var WOImage = /*#__PURE__*/function (_WObject) {
  _inherits(WOImage, _WObject);

  var _super = _createSuper(WOImage);

  function WOImage(x, y, imgPath, w, h) {
    var _this;

    image_classCallCheck(this, WOImage);

    _this = _super.call(this, x, y, w, h);

    image_defineProperty(_assertThisInitialized(_this), "image", void 0);

    image_defineProperty(_assertThisInitialized(_this), "loaded", void 0);

    image_defineProperty(_assertThisInitialized(_this), "slicing", void 0);

    image_defineProperty(_assertThisInitialized(_this), "slicePos", void 0);

    image_defineProperty(_assertThisInitialized(_this), "sliceSize", void 0);

    if (imgPath) {
      _this.image = w && h ? new Image(w, h) : new Image();
      _this.image.src = imgPath;

      _this.image.onload = function () {
        _this.loaded = true;
      };
    }

    _this.loaded = false;
    _this.slicing = false;
    return _this;
  }

  image_createClass(WOImage, [{
    key: "setImage",
    value: function setImage(image) {
      this.image = image;
      this.loaded = image.complete;
    }
  }, {
    key: "setSlice",
    value: function setSlice(x, y, w, h) {
      this.slicing = true;
      this.slicePos = new WOPosition(x, y);
      this.sliceSize = new WOSize(w, h);
    }
  }, {
    key: "setFrameSize",
    value: function setFrameSize(w, h) {
      this.size.width = w;
      this.size.height = h;
    }
  }, {
    key: "myDisplay",
    value: function myDisplay(context) {
      if (!this.loaded) return; // context.shadowBlur = 100;

      if (this.slicing) context.drawImage(this.image, this.slicePos.x, this.slicePos.y, this.sliceSize.width, this.sliceSize.height, this.position.x, this.position.y, this.size.width, this.size.height);else {
        var _this$size$width, _this$size$height;

        context.drawImage(this.image, this.position.x, this.position.y, (_this$size$width = this.size.width) !== null && _this$size$width !== void 0 ? _this$size$width : this.image.width, (_this$size$height = this.size.height) !== null && _this$size$height !== void 0 ? _this$size$height : this.image.height);
      }
      context.stroke();
    }
  }]);

  return WOImage;
}(WObject);
;// CONCATENATED MODULE: ./src/lib/animation.ts
function animation_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { animation_typeof = function _typeof(obj) { return typeof obj; }; } else { animation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return animation_typeof(obj); }

function animation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function animation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function animation_createClass(Constructor, protoProps, staticProps) { if (protoProps) animation_defineProperties(Constructor.prototype, protoProps); if (staticProps) animation_defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = animation_getPrototypeOf(object); if (object === null) break; } return object; }

function animation_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) animation_setPrototypeOf(subClass, superClass); }

function animation_setPrototypeOf(o, p) { animation_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return animation_setPrototypeOf(o, p); }

function animation_createSuper(Derived) { var hasNativeReflectConstruct = animation_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = animation_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = animation_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return animation_possibleConstructorReturn(this, result); }; }

function animation_possibleConstructorReturn(self, call) { if (call && (animation_typeof(call) === "object" || typeof call === "function")) { return call; } return animation_assertThisInitialized(self); }

function animation_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function animation_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function animation_getPrototypeOf(o) { animation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return animation_getPrototypeOf(o); }

function animation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var WOAnimation = /*#__PURE__*/function (_WObject) {
  animation_inherits(WOAnimation, _WObject);

  var _super = animation_createSuper(WOAnimation);

  function WOAnimation(x, y, w, h, framesNum, spriteSource, infinityLoop, initialFrame) {
    var _this;

    animation_classCallCheck(this, WOAnimation);

    _this = _super.call(this, x, y, w, h);

    animation_defineProperty(animation_assertThisInitialized(_this), "frames", void 0);

    animation_defineProperty(animation_assertThisInitialized(_this), "index", void 0);

    animation_defineProperty(animation_assertThisInitialized(_this), "frameNum", void 0);

    animation_defineProperty(animation_assertThisInitialized(_this), "loaded", void 0);

    animation_defineProperty(animation_assertThisInitialized(_this), "animFinished", void 0);

    animation_defineProperty(animation_assertThisInitialized(_this), "infinityLoop", void 0);

    _this.frames = new Array();
    _this.index = Number.isInteger(initialFrame) ? initialFrame : 0;
    _this.loaded = false;
    _this.frameNum = framesNum;
    _this.animFinished = true;
    _this.infinityLoop = infinityLoop;
    var image = new Image();
    image.src = spriteSource;

    image.onload = function () {
      var frameWidth = image.width / framesNum;

      for (var Sx = 0; Sx < framesNum; Sx++) {
        var frameImg = new WOImage(x, y);
        frameImg.setImage(image);
        frameImg.setSlice(Sx * frameWidth, 0, frameWidth, image.height);
        frameImg.setFrameSize(w, h); //make both position & size reference to the owner for quick update

        frameImg.position = _this.position;
        frameImg.size = _this.size;

        _this.frames.push(frameImg);
      }

      _this.loaded = true;
      _this.animFinished = false;
    };

    return _this;
  }

  animation_createClass(WOAnimation, [{
    key: "init",
    value: function init() {
      this.index = 0;
      this.animFinished = false;
    }
  }, {
    key: "nextFrame",
    value: function nextFrame() {
      if (!this.loaded) return;
      this.animFinished = this.index === this.frameNum - 1;
      this.elements.pop();
      if (this.animFinished && !this.infinityLoop) return;
      this.addElementNotAdopt(this.frames[this.index]);
      this.index = (this.index + 1) % this.frameNum;
    }
  }, {
    key: "hasFinished",
    value: function hasFinished() {
      return this.animFinished && !this.infinityLoop;
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.animFinished || this.infinityLoop) this.nextFrame();

      _get(animation_getPrototypeOf(WOAnimation.prototype), "update", this).call(this);
    }
  }]);

  return WOAnimation;
}(WObject);
;// CONCATENATED MODULE: ./src/lib/text.ts
function text_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { text_typeof = function _typeof(obj) { return typeof obj; }; } else { text_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return text_typeof(obj); }

function text_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function text_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function text_createClass(Constructor, protoProps, staticProps) { if (protoProps) text_defineProperties(Constructor.prototype, protoProps); if (staticProps) text_defineProperties(Constructor, staticProps); return Constructor; }

function text_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) text_setPrototypeOf(subClass, superClass); }

function text_setPrototypeOf(o, p) { text_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return text_setPrototypeOf(o, p); }

function text_createSuper(Derived) { var hasNativeReflectConstruct = text_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = text_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = text_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return text_possibleConstructorReturn(this, result); }; }

function text_possibleConstructorReturn(self, call) { if (call && (text_typeof(call) === "object" || typeof call === "function")) { return call; } return text_assertThisInitialized(self); }

function text_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function text_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function text_getPrototypeOf(o) { text_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return text_getPrototypeOf(o); }

function text_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var WOTextBox = /*#__PURE__*/function (_WObject) {
  text_inherits(WOTextBox, _WObject);

  var _super = text_createSuper(WOTextBox);

  function WOTextBox(x, y, w, h, color, text, fontSize) {
    var _this;

    text_classCallCheck(this, WOTextBox);

    _this = _super.call(this, x, y, w, h, color);

    text_defineProperty(text_assertThisInitialized(_this), "text", void 0);

    text_defineProperty(text_assertThisInitialized(_this), "fontSize", void 0);

    _this.text = text;
    _this.fontSize = fontSize;
    return _this;
  }

  text_createClass(WOTextBox, [{
    key: "setText",
    value: function setText(text) {
      this.text = text;
    }
  }, {
    key: "setFontSize",
    value: function setFontSize(fontSize) {
      this.fontSize = fontSize;
    }
  }, {
    key: "display",
    value: function display(context) {
      var _this$fontSize;

      context.beginPath();
      context.fillStyle = this.color;
      context.fill();
      context.shadowColor = "#666565";
      context.strokeStyle = "#000";
      context.shadowBlur = 0;
      context.font = "".concat((_this$fontSize = this.fontSize) !== null && _this$fontSize !== void 0 ? _this$fontSize : "30px", " Courier New");
      context.fillText(this.text, this.position.x, this.position.y);
      context.stroke();
    }
  }]);

  return WOTextBox;
}(WObject);
;// CONCATENATED MODULE: ./src/lib/shapes.ts
function shapes_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { shapes_typeof = function _typeof(obj) { return typeof obj; }; } else { shapes_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return shapes_typeof(obj); }

function shapes_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { shapes_get = Reflect.get; } else { shapes_get = function _get(target, property, receiver) { var base = shapes_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return shapes_get(target, property, receiver || target); }

function shapes_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = shapes_getPrototypeOf(object); if (object === null) break; } return object; }

function shapes_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function shapes_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function shapes_createClass(Constructor, protoProps, staticProps) { if (protoProps) shapes_defineProperties(Constructor.prototype, protoProps); if (staticProps) shapes_defineProperties(Constructor, staticProps); return Constructor; }

function shapes_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) shapes_setPrototypeOf(subClass, superClass); }

function shapes_setPrototypeOf(o, p) { shapes_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return shapes_setPrototypeOf(o, p); }

function shapes_createSuper(Derived) { var hasNativeReflectConstruct = shapes_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = shapes_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = shapes_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return shapes_possibleConstructorReturn(this, result); }; }

function shapes_possibleConstructorReturn(self, call) { if (call && (shapes_typeof(call) === "object" || typeof call === "function")) { return call; } return shapes_assertThisInitialized(self); }

function shapes_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function shapes_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function shapes_getPrototypeOf(o) { shapes_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return shapes_getPrototypeOf(o); }

function shapes_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //===============================================================

/**
 *@class WOShape is a general shape form extends WObject
 */

var WOShape = /*#__PURE__*/function (_WObject) {
  shapes_inherits(WOShape, _WObject);

  var _super = shapes_createSuper(WOShape);

  function WOShape() {
    var _this;

    shapes_classCallCheck(this, WOShape);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    shapes_defineProperty(shapes_assertThisInitialized(_this), "text", void 0);

    return _this;
  }

  shapes_createClass(WOShape, [{
    key: "setText",
    value: function setText(text) {
      this.text = new WOTextBox(10, 30, this.size.width, this.size.height, "#000", text);
      this.addElement(this.text);
    }
  }, {
    key: "setTextPosition",
    value: function setTextPosition(position) {
      this.text && this.text.setPosition(position);
    }
  }]);

  return WOShape;
}(WObject); //===============================================================

/**
 *@class WORect is a rectangle shape extends WOShape
 * @param x position x
 * @param y position y
 * @param w the width size
 * @param h the height size
 * @param color in format  '#RRBBGG'
 */


var WORect = /*#__PURE__*/function (_WOShape) {
  shapes_inherits(WORect, _WOShape);

  var _super2 = shapes_createSuper(WORect);

  function WORect(x, y, w, h, color) {
    var _this2;

    shapes_classCallCheck(this, WORect);

    _this2 = _super2.call(this, x, y, w, h, color);

    shapes_defineProperty(shapes_assertThisInitialized(_this2), "frame", void 0);

    _this2.frame = new WOFrame(x, y, w, h);
    return _this2;
  }

  shapes_createClass(WORect, [{
    key: "update",
    value: function update() {
      shapes_get(shapes_getPrototypeOf(WORect.prototype), "update", this).call(this);

      this.frame.update(this.position, this.size);
    }
  }, {
    key: "myDisplay",
    value: function myDisplay(context) {
      context.clearRect(this.position.x, this.position.y, this.size.width, this.size.height);
      context.beginPath();
      context.lineWidth = 1;
      context.fillStyle = this.color;
      context.shadowColor = "#666565";
      context.strokeStyle = this.color;
      context.shadowBlur = 10; //context.filter = "contrast(80%)";

      context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
      context.stroke();
      /*
      new WOCircle(this.frame.topLeft.x, this.frame.topLeft.y, 5, "#000").display(
        context
      );
      new WOCircle(
        this.frame.topRight.x,
        this.frame.topRight.y,
        5,
        "#000"
      ).display(context);
      new WOCircle(
        this.frame.bottomRight.x,
        this.frame.bottomRight.y,
        5,
        "#000"
      ).display(context);
      new WOCircle(
        this.frame.bottomLeft.x,
        this.frame.bottomLeft.y,
        5,
        "#000"
      ).display(context);
      */
    }
  }]);

  return WORect;
}(WOShape);
var WORoundedRect = /*#__PURE__*/function (_WORect) {
  shapes_inherits(WORoundedRect, _WORect);

  var _super3 = shapes_createSuper(WORoundedRect);

  function WORoundedRect(x, y, w, h, r, color) {
    var _this3;

    shapes_classCallCheck(this, WORoundedRect);

    _this3 = _super3.call(this, x, y, w, h, color);

    shapes_defineProperty(shapes_assertThisInitialized(_this3), "borderRadius", void 0);

    _this3.borderRadius = r;
    return _this3;
  }

  shapes_createClass(WORoundedRect, [{
    key: "myDisplay",
    value: function myDisplay(context) {
      var x = this.position.x;
      var y = this.position.y;
      var w = this.size.width;
      var h = this.size.height;
      var r = this.borderRadius;
      context.beginPath();
      context.lineWidth = 1;
      context.fillStyle = this.color;
      console.log(this.color);
      context.shadowColor = "#666565";
      context.strokeStyle = this.color;
      context.shadowBlur = 10;
      context.moveTo(x + r, y);
      context.arcTo(x + w, y, x + w, y + h, r);
      context.arcTo(x + w, y + h, x, y + h, r);
      context.arcTo(x, y + h, x, y, r);
      context.arcTo(x, y, x + w, y, r);
      context.closePath();
      context.fill();
    }
  }]);

  return WORoundedRect;
}(WORect); //===============================================================

/**
 *@class WOCircle is a rectangle shape extends WOShape
 * @param x position x
 * @param y position y
 * @param w the width size
 * @param h the height size
 * @param color in format  '#RRBBGG'
 */

var WOCircle = /*#__PURE__*/function (_WOShape2) {
  shapes_inherits(WOCircle, _WOShape2);

  var _super4 = shapes_createSuper(WOCircle);

  function WOCircle(x, y, r, color) {
    var _this4;

    shapes_classCallCheck(this, WOCircle);

    _this4 = _super4.call(this, x, y, r * 2, r * 2, color);

    shapes_defineProperty(shapes_assertThisInitialized(_this4), "radius", void 0);

    _this4.radius = r;
    return _this4;
  }

  shapes_createClass(WOCircle, [{
    key: "myDisplay",
    value: function myDisplay(context) {
      context.beginPath();
      context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
      context.fillStyle = this.color;
      context.fill();
      context.shadowColor = "#666565";
      context.strokeStyle = this.color;
      context.shadowBlur = 10;
      context.stroke();
    }
  }]);

  return WOCircle;
}(WOShape);
;// CONCATENATED MODULE: ./src/lib/utility.ts
function utility_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { utility_typeof = function _typeof(obj) { return typeof obj; }; } else { utility_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return utility_typeof(obj); }

function utility_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function utility_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function utility_createClass(Constructor, protoProps, staticProps) { if (protoProps) utility_defineProperties(Constructor.prototype, protoProps); if (staticProps) utility_defineProperties(Constructor, staticProps); return Constructor; }

function utility_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) utility_setPrototypeOf(subClass, superClass); }

function utility_setPrototypeOf(o, p) { utility_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return utility_setPrototypeOf(o, p); }

function utility_createSuper(Derived) { var hasNativeReflectConstruct = utility_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = utility_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = utility_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return utility_possibleConstructorReturn(this, result); }; }

function utility_possibleConstructorReturn(self, call) { if (call && (utility_typeof(call) === "object" || typeof call === "function")) { return call; } return utility_assertThisInitialized(self); }

function utility_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function utility_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function utility_getPrototypeOf(o) { utility_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return utility_getPrototypeOf(o); }

function utility_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //======================================================================
//getRandomColor - return a RBG random color (format like '#FFFFFF')
//======================================================================

var getRandomColor = function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}; //======================================================================
//adjustColor - make the color lighter or darker -by the @Param amount
//======================================================================

var adjustColor = function adjustColor(color, amount) {
  return "#" + color.replace(/^#/, "").replace(/../g, function (color) {
    return ("0" + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2);
  });
}; //======================================================================
//getRandomNumber - get random number in the range min-max
//======================================================================

var getRandomNumber = function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}; //======================================================================
//getRandomInteger - get random integer in the range min-max
//======================================================================

var getRandomInteger = function getRandomInteger(min, max) {
  return Math.floor(getRandomNumber(min, max));
}; //======================================================================
//getRandomPosition - return a position in the range xMin-xMax, yMin-yMax
//======================================================================

var getRandomPosition = function getRandomPosition(xMin, xMax, yMin, yMax) {
  return new WOPosition(getRandomNumber(xMin, xMax), getRandomNumber(yMin, yMax));
};
var WOClock = /*#__PURE__*/function (_LightWObject) {
  utility_inherits(WOClock, _LightWObject);

  var _super = utility_createSuper(WOClock);

  function WOClock(iterationsToCount) {
    var _this;

    utility_classCallCheck(this, WOClock);

    _this = _super.call(this);

    utility_defineProperty(utility_assertThisInitialized(_this), "iterationsToCount", void 0);

    utility_defineProperty(utility_assertThisInitialized(_this), "count", void 0);

    _this.iterationsToCount = iterationsToCount;
    _this.count = 0;
    return _this;
  }

  utility_createClass(WOClock, [{
    key: "update",
    value: function update() {
      this.count += 1;
    }
  }, {
    key: "isTime",
    value: function isTime() {
      return this.count >= this.iterationsToCount;
    }
  }, {
    key: "restart",
    value: function restart() {
      this.count = 0;
    }
  }]);

  return WOClock;
}(LightWObject);
;// CONCATENATED MODULE: ./src/lib/buttons.ts
function buttons_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { buttons_typeof = function _typeof(obj) { return typeof obj; }; } else { buttons_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return buttons_typeof(obj); }

function buttons_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function buttons_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function buttons_createClass(Constructor, protoProps, staticProps) { if (protoProps) buttons_defineProperties(Constructor.prototype, protoProps); if (staticProps) buttons_defineProperties(Constructor, staticProps); return Constructor; }

function buttons_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { buttons_get = Reflect.get; } else { buttons_get = function _get(target, property, receiver) { var base = buttons_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return buttons_get(target, property, receiver || target); }

function buttons_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = buttons_getPrototypeOf(object); if (object === null) break; } return object; }

function buttons_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) buttons_setPrototypeOf(subClass, superClass); }

function buttons_setPrototypeOf(o, p) { buttons_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return buttons_setPrototypeOf(o, p); }

function buttons_createSuper(Derived) { var hasNativeReflectConstruct = buttons_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = buttons_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = buttons_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return buttons_possibleConstructorReturn(this, result); }; }

function buttons_possibleConstructorReturn(self, call) { if (call && (buttons_typeof(call) === "object" || typeof call === "function")) { return call; } return buttons_assertThisInitialized(self); }

function buttons_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function buttons_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function buttons_getPrototypeOf(o) { buttons_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return buttons_getPrototypeOf(o); }

function buttons_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var WOInternalButton = /*#__PURE__*/function (_WORect) {
  buttons_inherits(WOInternalButton, _WORect);

  var _super = buttons_createSuper(WOInternalButton);

  function WOInternalButton(x, y, w, h, color, text, id) {
    var _this;

    buttons_classCallCheck(this, WOInternalButton);

    _this = _super.call(this, x, y, w, h, color);

    buttons_defineProperty(buttons_assertThisInitialized(_this), "onClick", void 0);

    buttons_defineProperty(buttons_assertThisInitialized(_this), "id", void 0);

    buttons_defineProperty(buttons_assertThisInitialized(_this), "pressedNow", void 0);

    buttons_defineProperty(buttons_assertThisInitialized(_this), "clickedColor", void 0);

    buttons_defineProperty(buttons_assertThisInitialized(_this), "normalColor", void 0);

    buttons_defineProperty(buttons_assertThisInitialized(_this), "hide", void 0);

    _this.id = id;

    _this.setText(text);

    _this.pressedNow = false;
    _this.clickedColor = adjustColor(_this.color, -30);
    _this.normalColor = _this.color;
    _this.hide = false;
    return _this;
  }

  buttons_createClass(WOInternalButton, [{
    key: "onClickMethod",
    value: function onClickMethod() {
      this.onClick && this.onClick();
    }
  }, {
    key: "contain",
    value: function contain(x, y) {
      return this.frame.contain(x, y);
    }
  }, {
    key: "setHide",
    value: function setHide(hide) {
      this.hide = hide;
    }
  }, {
    key: "myDisplay",
    value: function myDisplay(context) {
      if (this.hide) return;

      buttons_get(buttons_getPrototypeOf(WOInternalButton.prototype), "myDisplay", this).call(this, context);

      if (this.pressedNow) {
        this.color = this.clickedColor;
      } else {
        this.color = this.normalColor;
      }
    }
  }]);

  return WOInternalButton;
}(WORect);
var WOButton = /*#__PURE__*/function (_WObject) {
  buttons_inherits(WOButton, _WObject);

  var _super2 = buttons_createSuper(WOButton);

  function WOButton() {
    var _this2;

    buttons_classCallCheck(this, WOButton);

    _this2 = _super2.call(this, 0, 0, 0, 0, ""); //empty super

    buttons_defineProperty(buttons_assertThisInitialized(_this2), "canvas", void 0);

    buttons_defineProperty(buttons_assertThisInitialized(_this2), "actionMap", void 0);

    return _this2;
  }

  buttons_createClass(WOButton, [{
    key: "checkWhenClicked",
    value: function checkWhenClicked(event) {
      WOButton.instance.elements.forEach(function (button) {
        if (button.pressedNow = button.contain(event.offsetX, event.offsetY)) {
          var action = WOButton.instance.actionMap.get(button.id);
          action && action();
        }
      });
    }
  }, {
    key: "checkWhenTouched",
    value: function checkWhenTouched(event) {
      WOButton.instance.elements.forEach(function (button) {
        if (button.pressedNow = button.contain(event.touches[0].clientX, event.touches[0].clientY)) {
          var action = WOButton.instance.actionMap.get(button.id);
          action && action();
        }
      });
    }
  }, {
    key: "checkAfterEvent",
    value: function checkAfterEvent(event) {
      WOButton.instance.elements.forEach(function (button) {
        button.pressedNow = false;
      });
    }
  }], [{
    key: "init",
    value: function init(canvas) {
      if (!WOButton.instance) {
        WOButton.instance = new WOButton();
        WOButton.instance.actionMap = new Map();
        canvas.addEventListener("touchstart", function (event) {
          WOButton.instance.checkWhenTouched(event);
        }, {
          passive: true
        });
        canvas.addEventListener("touchend", function (event) {
          setTimeout(function () {
            WOButton.instance.checkAfterEvent(event);
          }, 100);
        });
        canvas.addEventListener("mousedown", function (event) {
          WOButton.instance.checkWhenClicked(event);
        });
        canvas.addEventListener("mouseup", function (event) {
          setTimeout(function () {
            WOButton.instance.checkAfterEvent(event);
          }, 100);
        });
      }

      WOButton.instance.canvas = canvas;
      return WOButton.instance;
    }
  }, {
    key: "getInstance",
    value: function getInstance() {
      return WOButton.instance;
    }
  }, {
    key: "add",
    value: function add(x, y, w, h, color, text, onClick) {
      var _WOButton$instance$el;

      if (!WOButton.instance) throw new Error("WOButton singleton class did not initiated. call init() first.");
      var nextID = (_WOButton$instance$el = WOButton.instance.elements.length) !== null && _WOButton$instance$el !== void 0 ? _WOButton$instance$el : 0;
      var newButton = new WOInternalButton(x, y, w, h, color, text, nextID);
      onClick && WOButton.instance.actionMap.set(nextID, onClick);
      WOButton.instance.elements.push(newButton);
      return newButton;
    }
  }]);

  return WOButton;
}(WObject);

buttons_defineProperty(WOButton, "instance", void 0);
;// CONCATENATED MODULE: ./src/lib/collideMethods.ts
/**
 * @module collideMethods - this module is for settings the object
 * with the right collision methods.
 * This definition is determine if those given two object are actually colliding.
 * In order to set the action that triggered when they collide use the
 * @module colliders where all actions are defined.
 */

/***************************************************************
 * @function collideCircleWithCircle
 * @param cir1
 * @param cir2
 * @returns true if they are colliding
 */
var collideCircleWithCircle = function collideCircleWithCircle(cir1, cir2) {
  var xd = cir1.position.x - cir2.position.x;
  var yd = cir1.position.y - cir2.position.y;
  var sumRadius = cir1.radius + cir2.radius;
  var sqrRadius = sumRadius * sumRadius;
  var distSqr = xd * xd + yd * yd;
  return distSqr <= sqrRadius;
};
/***************************************************************
 * @function collideRectWithRect
 * @param rec1
 * @param rec2
 * @returns true if they are colliding
 */

var collideRectWithRect = function collideRectWithRect(rec1, rec2) {
  var R1 = rec1.frame;
  var R2 = rec2.frame;
  return R1.topLeft.x < R2.bottomRight.x && R1.bottomRight.x > R2.topLeft.x && R1.topLeft.y < R2.bottomRight.y && R1.bottomRight.y > R2.topLeft.y;
};
/***************************************************************
 * @function collideFrames
 * @param frame1
 * @param frame2
 * @returns true if they are colliding
 */

var collideFrames = function collideFrames(f1, f2) {
  return f1.topLeft.x < f2.bottomRight.x && f1.bottomRight.x > f2.topLeft.x && f1.topLeft.y < f2.bottomRight.y && f1.bottomRight.y > f2.topLeft.y;
};
/***************************************************************
 * @function collideRectWithCircle
 * @param rect
 * @param circle
 * @returns true if they are colliding
 */

var collideRectWithCircle = function collideRectWithCircle(rect, circle) {
  var circleDistanceX = Math.abs(circle.position.x - rect.position.x);
  var circleDistanceY = Math.abs(circle.position.y - rect.position.y);

  if (circleDistanceX > rect.size.width / 2 + circle.radius) {
    return false;
  }

  if (circleDistanceY > rect.size.height / 2 + circle.radius) {
    return false;
  }

  if (circleDistanceX <= rect.size.width / 2) {
    return true;
  }

  if (circleDistanceY <= rect.size.height / 2) {
    return true;
  }

  var cornerDistance_sq = Math.pow(circleDistanceX - rect.size.width / 2, 2) + Math.pow(circleDistanceY - rect.size.height / 2, 2);
  return cornerDistance_sq <= circle.radius * circle.radius;
};
/***************************************************************
 * @function collideCircleWithRect
 * @param circle
 * @param rect
 * @returns true if they are colliding
 */

var collideCircleWithRect = function collideCircleWithRect(circle, rect) {
  return collideRectWithCircle(rect, circle);
};
/***************************************************************
 * @constant collideMap will contain all collision methods. according to
 * the objects names (WObject1WObject2) both concatenated without space
 * it will decide how to determine if the shapes collides.
 * this module is including a basic 4 methods for 2 objects type: circle and rectangle.
 * @import collideMap and add new collide methods as your wish.
 */

var collideMap = new Map();
/***************************************************************
 * @Set the basic collision options
 */

collideMap.set("WOCircle" + "WOCircle", collideCircleWithCircle);
collideMap.set("WORect" + "WOCircle", collideRectWithCircle);
collideMap.set("WOCircle" + "WORect", collideCircleWithRect);
collideMap.set("WORect" + "WORect", collideRectWithRect);
/***************************************************************
 * @function isCollide
 * @param obj1 WObject1
 * @param obj2 WObject2
 * @returns true if they are colliding
 */

var isCollide = function isCollide(obj1, obj2) {
  var cm = collideMap.get(obj1.wobjName + obj2.wobjName);
  return cm && cm(obj1, obj2);
};
;// CONCATENATED MODULE: ./src/lib/colliders.ts
function colliders_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { colliders_typeof = function _typeof(obj) { return typeof obj; }; } else { colliders_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return colliders_typeof(obj); }

function colliders_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { colliders_get = Reflect.get; } else { colliders_get = function _get(target, property, receiver) { var base = colliders_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return colliders_get(target, property, receiver || target); }

function colliders_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = colliders_getPrototypeOf(object); if (object === null) break; } return object; }

function colliders_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) colliders_setPrototypeOf(subClass, superClass); }

function colliders_setPrototypeOf(o, p) { colliders_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return colliders_setPrototypeOf(o, p); }

function colliders_createSuper(Derived) { var hasNativeReflectConstruct = colliders_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = colliders_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = colliders_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return colliders_possibleConstructorReturn(this, result); }; }

function colliders_possibleConstructorReturn(self, call) { if (call && (colliders_typeof(call) === "object" || typeof call === "function")) { return call; } return colliders_assertThisInitialized(self); }

function colliders_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function colliders_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function colliders_getPrototypeOf(o) { colliders_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return colliders_getPrototypeOf(o); }

function colliders_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function colliders_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function colliders_createClass(Constructor, protoProps, staticProps) { if (protoProps) colliders_defineProperties(Constructor.prototype, protoProps); if (staticProps) colliders_defineProperties(Constructor, staticProps); return Constructor; }

function colliders_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var voidAction = function voidAction() {};

var CollisionManager = /*#__PURE__*/function () {
  function CollisionManager(initialCollideMap) {
    colliders_classCallCheck(this, CollisionManager);

    colliders_defineProperty(this, "collideMap", void 0);

    this.collideMap = initialCollideMap();
  }

  colliders_createClass(CollisionManager, [{
    key: "lookup",
    value: function lookup(classes) {
      var _this$collideMap$get;

      return (_this$collideMap$get = this.collideMap.get(classes)) !== null && _this$collideMap$get !== void 0 ? _this$collideMap$get : voidAction;
    }
  }, {
    key: "runActivity",
    value: function runActivity(wo1, wo2) {
      this.lookup(wo1.wobjName + wo2.wobjName)(wo1, wo2);
    }
  }]);

  return CollisionManager;
}();
var WOCollidersContainer = /*#__PURE__*/function (_WObject) {
  colliders_inherits(WOCollidersContainer, _WObject);

  var _super = colliders_createSuper(WOCollidersContainer);

  function WOCollidersContainer(x, y, w, h, color, rateCheck, initCollideMap) {
    var _this;

    colliders_classCallCheck(this, WOCollidersContainer);

    _this = _super.call(this, x, y, w, h, color);

    colliders_defineProperty(colliders_assertThisInitialized(_this), "collisionManager", void 0);

    colliders_defineProperty(colliders_assertThisInitialized(_this), "rateCheck", void 0);

    colliders_defineProperty(colliders_assertThisInitialized(_this), "intervalID", void 0);

    colliders_defineProperty(colliders_assertThisInitialized(_this), "frame", void 0);

    _this.rateCheck = rateCheck;
    _this.intervalID = 0;
    _this.frame = new WOFrame(x, y, w, h);
    if (initCollideMap) _this.setCollisionManager(initCollideMap);
    return _this;
  }

  colliders_createClass(WOCollidersContainer, [{
    key: "setCollisionManager",
    value: function setCollisionManager(initCollideMap) {
      this.collisionManager = new CollisionManager(initCollideMap);
    }
  }, {
    key: "rectObjInsideFrame",
    value: function rectObjInsideFrame() {
      var _this2 = this;

      return this.elements.filter(function (wbj) {
        return collideFrames(_this2.frame, wbj.frame);
      });
    }
  }, {
    key: "isFrameInside",
    value: function isFrameInside(frame) {
      return collideFrames(this.frame, frame);
    }
  }, {
    key: "update",
    value: function update() {
      this.checkCollide();

      colliders_get(colliders_getPrototypeOf(WOCollidersContainer.prototype), "update", this).call(this);
    }
    /**
     * @method checkCollide run each time (rateCheck)
     * and for each two different object if they collide
     * (according to the methods defined in the collideMap of collideMethods)
     * run specific activity that pre defined in initCollideMap
     */

  }, {
    key: "checkCollide",
    value: function checkCollide() {
      var _this3 = this;

      this.elements.forEach(function (wo1) {
        _this3.elements.forEach(function (wo2) {
          if (wo1 !== wo2 && isCollide(wo1, wo2)) {
            _this3.collisionManager.runActivity(wo1, wo2);
          }
        });
      });
    }
  }]);

  return WOCollidersContainer;
}(WObject);
;// CONCATENATED MODULE: ./src/lib/containers.ts
function containers_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { containers_typeof = function _typeof(obj) { return typeof obj; }; } else { containers_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return containers_typeof(obj); }

function containers_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function containers_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function containers_createClass(Constructor, protoProps, staticProps) { if (protoProps) containers_defineProperties(Constructor.prototype, protoProps); if (staticProps) containers_defineProperties(Constructor, staticProps); return Constructor; }

function containers_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) containers_setPrototypeOf(subClass, superClass); }

function containers_setPrototypeOf(o, p) { containers_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return containers_setPrototypeOf(o, p); }

function containers_createSuper(Derived) { var hasNativeReflectConstruct = containers_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = containers_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = containers_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return containers_possibleConstructorReturn(this, result); }; }

function containers_possibleConstructorReturn(self, call) { if (call && (containers_typeof(call) === "object" || typeof call === "function")) { return call; } return containers_assertThisInitialized(self); }

function containers_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function containers_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function containers_getPrototypeOf(o) { containers_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return containers_getPrototypeOf(o); }

function containers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var WOContainer = /*#__PURE__*/function (_WObject) {
  containers_inherits(WOContainer, _WObject);

  var _super = containers_createSuper(WOContainer);

  function WOContainer(x, y, w, h, color) {
    var _this;

    containers_classCallCheck(this, WOContainer);

    _this = _super.call(this, x, y, w, h, color);

    containers_defineProperty(containers_assertThisInitialized(_this), "lastElementX", void 0);

    containers_defineProperty(containers_assertThisInitialized(_this), "lastElementWidth", void 0);

    _this.lastElementX = x;
    _this.lastElementWidth = x;
    return _this;
  }

  containers_createClass(WOContainer, [{
    key: "reOrganize",
    value: function reOrganize(position) {}
  }, {
    key: "isFull",
    value: function isFull(element) {
      return false;
    }
  }, {
    key: "myDisplay",
    value: function myDisplay(context) {
      context.clearRect(this.position.x, this.position.y, this.size.width, this.size.height);
      context.beginPath();
      context.lineWidth = 1;
      context.fillStyle = this.color;
      context.shadowColor = "#666565";
      context.strokeStyle = this.color;
      context.shadowBlur = 10;
      context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
      context.stroke();
    }
  }]);

  return WOContainer;
}(WObject);
var WOHorizontalContainer = /*#__PURE__*/function (_WOContainer) {
  containers_inherits(WOHorizontalContainer, _WOContainer);

  var _super2 = containers_createSuper(WOHorizontalContainer);

  function WOHorizontalContainer(x, y, w, h, color) {
    containers_classCallCheck(this, WOHorizontalContainer);

    return _super2.call(this, x, y, w, h, color);
  }

  containers_createClass(WOHorizontalContainer, [{
    key: "reOrganize",
    value: function reOrganize(position) {
      var _this2 = this,
          _position$x;

      if (!position) return;
      var countWidths = 0;
      this.elements.forEach(function (element) {
        countWidths += element.getFullWidth() + _this2.margin.left;
      });
      if (countWidths > 0) countWidths -= this.margin.left;
      var leftSpace = (this.size.width - countWidths) / 2;
      leftSpace += position.x;
      var lastEnd = (_position$x = position.x) !== null && _position$x !== void 0 ? _position$x : 0;
      this.elements.forEach(function (element, i) {
        element.position.x = i == 0 ? leftSpace : lastEnd + _this2.margin.left;
        lastEnd = element.position.x + element.size.width;
        element.reOrganize(element.position);
      });
    }
  }, {
    key: "addElement",
    value: function addElement(element) {
      element.position.y += this.margin.top + this.position.y;
      this.elements.push(element);
      this.reOrganize(this.position);
    }
  }, {
    key: "isFull",
    value: function isFull(element) {
      var _lastElement$position, _lastElement$size$wid, _lastElement$margin$r;

      var lastElement = this.elements.slice(-1).pop();
      var lastElementX = (_lastElement$position = lastElement.position.x) !== null && _lastElement$position !== void 0 ? _lastElement$position : this.position.x;
      var lastElementWidth = (_lastElement$size$wid = lastElement.size.width) !== null && _lastElement$size$wid !== void 0 ? _lastElement$size$wid : 0;
      var endWithMargin = lastElementX + lastElementWidth + ((_lastElement$margin$r = lastElement.margin.right) !== null && _lastElement$margin$r !== void 0 ? _lastElement$margin$r : 0);
      return endWithMargin + element.getFullWidth() > this.position.x + this.size.width;
    }
  }]);

  return WOHorizontalContainer;
}(WOContainer);
var WOVerticalContainer = /*#__PURE__*/function (_WOContainer2) {
  containers_inherits(WOVerticalContainer, _WOContainer2);

  var _super3 = containers_createSuper(WOVerticalContainer);

  function WOVerticalContainer(x, y, w, h, color) {
    containers_classCallCheck(this, WOVerticalContainer);

    return _super3.call(this, x, y, w, h, color);
  }

  containers_createClass(WOVerticalContainer, [{
    key: "reOrganize",
    value: function reOrganize(position) {
      var _this3 = this;

      if (!position) return;
      var countHeight = 0;
      this.elements.forEach(function (element) {
        countHeight += element.getFullHeight() + _this3.margin.top;
      });
      if (countHeight > 0) countHeight -= this.margin.top;
      var topSpace = (this.size.height - countHeight) / 2;
      topSpace += position.y;
      var lastEnd = position ? position.y : 0;
      this.elements.forEach(function (element, i) {
        element.position.y = i == 0 ? topSpace : lastEnd + _this3.margin.top;
        lastEnd = element.position.y + element.size.height;
        element.reOrganize(element.position);
      });
    }
  }, {
    key: "addElement",
    value: function addElement(element) {
      element.position.x += this.margin.left + this.position.x;
      this.elements.push(element);
      this.reOrganize(this.position);
    }
  }]);

  return WOVerticalContainer;
}(WOContainer);
var WODynamicContainer = /*#__PURE__*/function (_WOContainer3) {
  containers_inherits(WODynamicContainer, _WOContainer3);

  var _super4 = containers_createSuper(WODynamicContainer);

  function WODynamicContainer(x, y, w, h, color, padding) {
    var _this4;

    containers_classCallCheck(this, WODynamicContainer);

    _this4 = _super4.call(this, x, y, w, h, color);

    containers_defineProperty(containers_assertThisInitialized(_this4), "rowsNum", void 0);

    _this4.padding = padding;
    _this4.rowsNum = 0;
    return _this4;
  }

  containers_createClass(WODynamicContainer, [{
    key: "reOrganize",
    value: function reOrganize(position) {
      if (!position) return;
    }
  }, {
    key: "addElement",
    value: function addElement(element) {
      this.elements.push(element);
      this.reOrganize(this.position);
    }
  }]);

  return WODynamicContainer;
}(WOContainer);
var WOGridContainer = /*#__PURE__*/function (_WOContainer4) {
  containers_inherits(WOGridContainer, _WOContainer4);

  var _super5 = containers_createSuper(WOGridContainer);

  function WOGridContainer(x, y, w, h, color, itemsPerRow) {
    var _this5;

    containers_classCallCheck(this, WOGridContainer);

    _this5 = _super5.call(this, x, y, w, h, color);

    containers_defineProperty(containers_assertThisInitialized(_this5), "itemsPerRow", void 0);

    _this5.itemsPerRow = itemsPerRow;
    return _this5;
  }

  return WOGridContainer;
}(WOContainer);
;// CONCATENATED MODULE: ./src/lib/movements.ts
/**
 * ========================================================================
 * @function moveInCircle
 * @param radius
 * @param angel
 * @returns
 */
var moveInCircle = function moveInCircle(radius, angel) {
  return function (mo) {
    mo.angel += angel;
    mo.dX = Math.cos(mo.angel) * radius;
    mo.dY = Math.sin(mo.angel) * radius;
    return mo;
  };
};
/**
 * ========================================================================
 * @function moveInLine
 * @param dx
 * @param dy
 * @returns
 */

var moveInLine = function moveInLine(dx, dy) {
  return function (mo) {
    mo.dX = dx;
    mo.dY = dy;
    return mo;
  };
};
/**
 * ========================================================================
 * @function accelerateInLine
 * @param ax
 * @param ay
 * @param maxA
 * @returns update motion
 */

var accelerateInLine = function accelerateInLine(ax, ay, maxA) {
  return function (mo) {
    mo.dX += Math.abs(mo.dX + ax) > maxA ? 0 : ax;
    mo.dY += Math.abs(mo.dY + ay) > maxA ? 0 : ay;
    return mo;
  };
};
/**
 * ========================================================================
 * @function stopAcceleration
 * @param x
 * @param y
 * @returns closure function that will calculate the motion in ech call
 */

var stopAcceleration = function stopAcceleration(x, y) {
  return function (mo) {
    mo.dX = mo.dX - x > 0 ? mo.dX - x : mo.dX - x < 0 ? mo.dX + x : 0;
    mo.dY = mo.dY - y > 0 ? mo.dY - y : mo.dY - y < 0 ? mo.dY + y : 0;
    return mo;
  };
};
;// CONCATENATED MODULE: ./src/lib/index.ts


























var WO = {
  Anim: animation_namespaceObject,
  Basics: basics_namespaceObject,
  Buttons: buttons_namespaceObject,
  CollideMethods: collideMethods_namespaceObject,
  Colliders: colliders_namespaceObject,
  Containers: containers_namespaceObject,
  Engine: engine_namespaceObject,
  Movements: movements_namespaceObject,
  Shapes: shapes_namespaceObject,
  Text: text_namespaceObject,
  Utils: utility_namespaceObject,
  Wobject: wobject_namespaceObject,
  Img: image_namespaceObject
};
/* harmony default export */ const lib = (WO);
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map