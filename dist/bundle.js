/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!!
 * Power Panel Events <https://github.com/carlos-sweb/pp-events>
 * @author Carlos Illesca
 * @version 1.2.6 (2024/10/07 22:07 PM)
 * Released under the MIT License
 */
;(function(){
"use strict";
const events = ( is ) => {

  const isF = is.isFunction, isS = is.isString, isU = is.isUndefined, isA = is.isArray;
  
  function instanceEvents(){
		var self = this;
		if(!(self instanceof instanceEvents)){ return new instanceEvents(is) }
		self.events = {}
		/**
		*on
		*@param {string} eventName - name event
		*@returns {boolean}
		*@description -> check if events var have callbacks assign
		*/
		self.checkOn = (eventName) => isS(eventName,(n)=>Object.hasOwnProperty.call( self.events , n ))
		/**
		*on
		*@param {string} eventName - name event
		*@param {function} callbacks - Function for execute when emit event name
		*@returns {void}
		*/		
		self.on = ( eventName , callbacks ) => {
		  if( isS( eventName ) && isF(callbacks) ){
			let self_events = self.events;
			if( isU( self_events[ eventName ] ) ){
				self_events[eventName] = [callbacks];
			}else{
				self_events[eventName].push(callbacks);
			}			
		  }
		}
		/**
		*emit
		*@param {string} eventName - name for events call
		*@returns {void}
		*/
		self.emit = ( eventName , ...args) => {
			 if( isA( self.events[eventName] )  ){			
				for (const listener of self.events[eventName].slice() ) {				
					listener.apply( self , args );
				}
			 }
		}
		/**
		*removeListener
		*@param {string} eventName - name for events call
		*@param {funcion} function - funcion will be remove
		*@returns {void}
		*/
		self.removeListener = ( eventName , callbacks ) => {
			if( isA(self.events[eventName]) ){			
				const idx = self.events[eventName].indexOf(callbacks);
				if( idx > -1 ){ self.events[eventName].splice(idx,1) }
			}				
		}		
  } 
  return instanceEvents
}

/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports =  true && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

	if (true){
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(148)], __WEBPACK_AMD_DEFINE_RESULT__ = ((is)=>events(is)).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	}else {}

}.call(this))

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;(function(){"use strict";const e=()=> true&&exports&&!exports.nodeType&&exports&&"object"=="object"&&module&&!module.nodeType&&module,t=(e,t)=>(e=>Object.prototype.toString.call(e))(e)==="[object "+t+"]",o=e=>t(e,"Array"),i=e=>!0===e||!1===e||t(e,"Boolean"),s=e=>t(e,"Function"),l=e=>t(e,"Object"),n=e=>t(e,"String"),d=(e,t,o)=>{const s=e(t);return i(s)?s:o},p=e=>(t,o,i)=>((e,t,o,i)=>{const l=e(t);return l?!s(o)||d(o,t,l):!!s(i)&&d(i,t,l)})(e,t,o,i),r={isArray:p(o),isBoolean:p(i),isDate:p((e=>t(e,"Date"))),isElement:p((e=>!(!e||1!==e.nodeType))),isEmpty:p((e=>n(e)?""===e:o(e)?0==e.length:!l(e)||0===Object.keys(e).length)),isFunction:p(s),isNull:p((e=>t(e,"Null"))),isNumber:p((e=>t(e,"Number"))),isObject:p(l),isString:p(n),isUndefined:p((e=>t(e,"Undefined"))),isEmail:p((e=>/^([a-z1-9\._-]+)@([a-z0-9-]+\.[a-z]{2,11}|[a-z0-9]+\.[a-z]{2,24}\.[a-z]{2,24})$/i.test(e))),isNaN:p((e=>Number.isNaN(parseInt(e)))),isRegExp:p((e=>t(e,"RegExp"))),isUrl:p((e=>/^(https?:\/\/)?([w]{3}\.|[w]{3}2\.)?([a-z\d]+\.)?([a-z\d]+\.[a-z]{2,}|localhost|[\d]+\.[\d]+\.[\d]+\.[\d]+)(\:[\d]+)?([\??\/?]+[\/;&a-z\d%_.~+=-]*)?(\#[\/;&a-z\d%_.~+=-]*)?$/gi.test(e))),isNodeList:p((e=>"undefined"!=typeof NodeList&&NodeList.prototype.isPrototypeOf(e))),isHTMLCollection:p((e=>"undefined"!=typeof HTMLCollection&&HTMLCollection.prototype.isPrototypeOf(e))),isAMD:p((()=>l( true&&__webpack_require__.amdO))),isFreeModule:p((()=>l(e()))),getRoot:()=>"object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g||"object"==typeof self&&self&&self.Object===Object&&self||Function("return this")()};r.isAMD(null,(()=>{!(__WEBPACK_AMD_DEFINE_RESULT__ = (()=>r).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}),(()=>{r.isFreeModule(null,(()=>{module.exports=r}),(()=>{r.getRoot().ppIs=r}))}))}).call(this);

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/* harmony import */ var pp_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
/* harmony import */ var pp_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pp_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pp_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(376);
/* harmony import */ var pp_events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pp_events__WEBPACK_IMPORTED_MODULE_1__);







console.log( (0,pp_is__WEBPACK_IMPORTED_MODULE_0__.isString)("hola a todos"));
})();

/******/ })()
;