/*!!
 * Power Panel pp-is <https://github.com/carlos-sweb/pp-is>
 * @author Carlos Illesca
 * @version 1.2.3 (2024/10/06 23:25 PM)
 * Released under the MIT License
 */
;(function(){
  "use strict";  
  /**   
   * @function getType
   * @description - Gets the type name
   * @param {Any} value - Value to check
   * @returns {string}
   * @example
   * const s = 'Hello Word';
   * console.log(getType(s))
   * // [object String]
   */
  const getType=(value)=>Object.prototype.toString.call(value),
  /**   
   * @description - This function checks for the presence of `define` in the global scope and checks if it is configured as an AMD module.
   * @function getAMD
   * @return {object} - define object if exists
   */
  getAMD = ()=>typeof define == 'function' && typeof define.amd == 'object' && define.amd,
  /**
   * @function isAMD
   * @description - check if AMD is a Object
   * @return {boolean} - AMD works
   */
  isAMD=()=>isObject(getAMD()),
  /**
   * @function getFreeGlobal
   * @descriptcion - Detect free variable `global` 
   * @return {object}
   */
  getFreeGlobal=()=>(typeof global == 'object' && global && global.Object === Object && global),
  /**
   * @function getFreeGlobal
   * @descriptcion - Detect free variable `self` 
   * @return {object}
   */
  getFreeSelf=()=>(typeof self == 'object' && self && self.Object === Object && self),
  /**
   * @name getRoot
   * @description - Used as a reference to the global object.
   * @function
   * @return {object}
   */
  getRoot=()=>{
    return getFreeGlobal() || getFreeSelf() || Function('return this')();
  },
  /**
   * @function isFreeExports
   * @description - Detect free variable `exports`
   * @return {boolean} - 
   */
  isFreeExports =()=>(typeof exports == 'object' && exports && !exports.nodeType && exports),    
  /**
   * @function getFreeModule
   * @description - Detect free variable `module`.
   * @return {object} - variable `module`
   */
  getFreeModule=()=>(isFreeExports() && typeof module == 'object' && module && !module.nodeType && module),
  
  /**
   * @function isFreeModule
   * @description - detect if variable module is Object
   * @param { Any } value - Any value
   * @return {boolean}
   */
  isFreeModule=()=>isObject(getFreeModule()),
  /**
   * @function getTypeCompare
   * @description - 
   * @param {Any} value - Any Value
   * @param {string} expression - Expression to compare
   * 
   */
  getTypeCompare=(value,expression)=>(getType(value) === "[object "+expression+"]"),
   /**
   * @function isNodeList
   * @description - Checks if value is a valid NodeList.
   * @param { Any } value - Any Value
   * @return {boolean}
   */
  isNodeList=(value)=>(typeof NodeList === "undefined" ? false : NodeList.prototype.isPrototypeOf(value)),      
    /**
   * @function isHTMLCollection
   * @description - Checks if value is a valid HTMLCollection.
   * @param { Any } value - Any Value
   * @return {boolean}
   */
  isHTMLCollection=(value)=>(typeof HTMLCollection === "undefined" ? false : HTMLCollection.prototype.isPrototypeOf(value)),      
  /**
   * @function isArray
   * @description - Checks if value is classified as an Array object.
   * @param { Any } value - Any Value
   * @return {boolean}
   */
  isArray=(value)=>getTypeCompare(value,'Array'),      
  /**
   * @function isRegExp
   * @description - Checks if value is a RegExp.
   * @param { Any } value - Any value
   * @return {boolean}
   */
  isRegExp=(value)=>getTypeCompare(value,'RegExp'),
  /**
   * @function isBoolean
   * @description - Checks if value is either true or false.
   * @param { Any } value - Any value
   * @return {boolean}
   */
  isBoolean=(value)=>value === true || value === false || getTypeCompare(value,'Boolean'),      
  /**
   * @function isDate
   * @description - isDate
   * @param { Any } value - Any value
   * @return {boolean}
   */
  isDate=(value)=>getTypeCompare(value,'Date'),      
  /**
   * @function isElement
   * @description - isElement
   * @param { Any } value - Any value
   * @return {boolean}
   */
  isElement=(value)=>!!( value && value.nodeType === 1 ) ,      
  /**
   * @function isFunction
   * @description - Checks if value is a Function.
   * @param { Any } value - Any value
   * @return {boolean}
   */
  isFunction=(value) =>getTypeCompare(value,'Function'),
  /**
   * @function isNull
   * @description - Checks if value is a Null.
   * @param { Any } value - Any value
   * @return {boolean}
   */
  isNull=(value)=>getTypeCompare(value,'Null'),  
  /**
   * @function isNumber
   * @description - Checks if value is a Number.
   * @param { Any } value - Any value
   * @return {boolean}
   */
  isNumber=(value)=>getTypeCompare(value,'Number'),
  /**
   * @function isObject
   * @description - Checks if value is classified as an Object.
   * @param { Any } value - Any value
   * @return {boolean}
   */
  isObject=(value)=>getTypeCompare(value,'Object'),
  /**
   * @function isString
   * @description - Checks if value is a string.
   * @param { Any } value - Any value
   * @return {boolean}
   */
  isString=(value)=>getTypeCompare(value,'String'),
  /**
   * @function isUndefined
   * @description - Checks if value is a undefined.
   * @param { Any } value - Any value
   * @return {boolean}
   */
  isUndefined=(value)=>getTypeCompare(value,'Undefined'),
  /**
   * @function isEmpty
   * @description - Checks if value is not empty
   * @param { Any } value - Any value
   * @example
   * // this a empty string
   * is.isEmpty("")
   * // return true
   * @example
   * // this a empty array
   * is.isEmpty([])
   * // return true
   * @example
   * // this a empty Object
   * is.isEmpty({})
   * // return true
   * @return {boolean}
   */
  isEmpty=(value)=>{
      if(isString(value)){return value === ""}
      else if(isArray(value)){return value.length == 0}
      else if(isObject(value)){return Object.keys(value).length === 0}
      return true;
  },
  /**
   * @function isEmail
   * @description - Checks if value is a valid email.
   * @param { Any } value - Any Value
   * @example
   * is.isEmail("h@blog.mydomian.xyz")
   * // return true
   * @return {boolean}
   */    
  isEmail = ( value )=>/^([a-z1-9\._-]+)@([a-z0-9-]+\.[a-z]{2,11}|[a-z0-9]+\.[a-z]{2,24}\.[a-z]{2,24})$/i.test( value ),  
  /**
   * @function isNaN
   * @description - Checks if value is a valid Number from String.
   * @param { Any } value - Any Value      
   * @return {boolean}
   */
  isNaN = ( value )=>(Number.isNaN( parseInt(value))),
  // =======================================================================
  // ^(https?:\/\/)?([w]{3}\.|[w]{3}2\.)? protocol 
  //  ([w]{3}\.|[w]{3}2\.)? ([a-z\d]+\.)?([a-z\d]+\.[a-z]{2,} Domain name www or www2 
  // localhost -> include this word
  //  [\d]+\.[\d]+\.[\d]+\.[\d]+ -> add ipv4
  //  (\:[\d]+)? -> port 
  // ([\??\/?]+[\/;&a-z\d%_.~+=-]*)? -> query url
  // (\#[\/;&a-z\d%_.~+=-]*)? -> hashtag url
  /**
   * @function isUrl
   * @description - Checks if value is a valid Url.
   * @param { Any } value - Any Value
   * @return {boolean}
   */
  isUrl = ( value )=>/^(https?:\/\/)?([w]{3}\.|[w]{3}2\.)?([a-z\d]+\.)?([a-z\d]+\.[a-z]{2,}|localhost|[\d]+\.[\d]+\.[\d]+\.[\d]+)(\:[\d]+)?([\??\/?]+[\/;&a-z\d%_.~+=-]*)?(\#[\/;&a-z\d%_.~+=-]*)?$/gi.test(value),
  
  // =======================================================================
  /**
   * @function baseSanetize
   * @description - Trabajar Aqui
   * @param { function } doneOrReject - Custom function that is triggered when the positive hook or negative hook is defined by the user. This function can resolve true or false independent of the first evaluation or it can simply do nothing.
   * @param { Any } value - The value to evaluate 
   * @param { boolean } evaluate - pre evaulate from static function isString,isUndefined,..etc
   * @return { boolean } - evaluate 
   */
  baseSanetize = ( doneOrReject , value , evaluate )=> {    
    const response = doneOrReject(value);
    return isBoolean( response ) ? response : evaluate;
  },
  /**
   * @function baseEvaluate
   * @description - Responsible for evaluation
   * @param {function} func - Evaluative function
   * @param {Any} value - The value to evaluate
   * @param {function} done - Function to be executed in case the evaluation is positive.
   * @param {function} reject - Function to be executed in case the evaluation is negative.
   * @return {boolean} - value of the evaluation
   */
  baseEvaluate =  (func , value , done , reject) => { 
    const evaluate = func(value);
    return evaluate ? isFunction( done ) ? baseSanetize(done,value,evaluate) : true : isFunction( reject ) ? baseSanetize(reject,value,evaluate) : false ;
  },
  /**
   * @function base
   * @description - This function stretches to baseEvaluate passing as parameter the function that specifically evaluates the given value to be evaluated, but in the baseEvaluate function it arrives as a parameter called func
   * @param {function} func - Evaluative function
   * @return {function} - function to execute baseEvaluate
   * @example 
   * const hello = "hello Word!";
   * const evaluate = base(isString)(hello)
   * //return true
   */
  base = ( func ) => ( value ,done , reject) => baseEvaluate( func , value , done , reject),
  /** 
   * @description - Obtains the object to be exported with the following main functions
   * @name is
   * @type {object}   
   * @property {function} isArray - {@link isArray}
   * @property {function} isBoolean - {@link isBoolean}
   * @property {function} isDate - {@link isDate}
   * @property {function} isElement - {@link isElement}
   * @property {function} isEmpty - {@link isEmpty}
   * @property {function} isFunction - {@link isFunction}
   * @property {function} isNull - {@link isNull}
   * @property {function} isNumber - {@link isNumber}
   * @property {function} isString - {@link isString}
   * @property {function} isUndefined - {@link isUndefined}
   * @property {function} isEmail - {@link isEmail}
   * @property {function} isNaN - {@link isNaN}
   * @property {function} isRegExp - {@link isRegExp}
   * @property {function} isUrl - {@link isUrl}
   * @property {function} isNodeList - {@link isNodeList}
   * @property {function} isHTMLCollection - {@link isHTMLCollection}
   * @property {function} isAMD - {@link isAMD}
   * @property {function} isFreeModule - {@link isFreeModule}
   * @property {function} getRoot - {@link getRoot}
   */
  is = {
      'isArray':base(isArray),
      'isBoolean':base(isBoolean),
      'isDate':base(isDate),
      'isElement':base(isElement),
      'isEmpty':base(isEmpty),
      'isFunction':base(isFunction),
      'isNull':base(isNull),
      'isNumber':base(isNumber),
      'isObject':base(isObject),
      'isString':base(isString),
      'isUndefined':base(isUndefined),
      'isEmail':base(isEmail),
      'isNaN':base(isNaN),
      'isRegExp':base(isRegExp),
      'isUrl':base(isUrl),
      'isNodeList':base(isNodeList),
      'isHTMLCollection':base(isHTMLCollection),
      'isAMD':base(isAMD),
      'isFreeModule':base(isFreeModule),
      'getRoot':getRoot
  }  

  
  //
  is.isAMD(null,()=>{define(()=>is)},()=>{
    is.isFreeModule(null,()=>{ module.exports = is; },()=>{      
      is.getRoot().ppIs = is
    })
  });
  
}.call(this))