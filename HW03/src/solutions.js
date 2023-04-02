module.exports = {
  /**
   * Returns an empty object without prototype. There is object creation type that creates object without prototype
   */
  createPrototypelessObject() {
      var noProto = Object.create(null, {})

      return noProto
  },

  /**
   * Returns an object with prototype set to given `proto`.
   * @param {Object} proto Prototype object
   */
  createObjectWithPrototype(proto) {
    var withProto = Object.create(proto, {})
    
    return withProto
    },

  /**
   * Returns an object with `value` property set to the given `value` and `getValue` method.
   * Be careful, if `value` changes, `getValue` should return changed `value`.
   * @param {any} value
   */
  createObjectWithMethod(value) {
    var valuedObject = {
      value: value,
      getValue: function (){
        return this.value;
      }
    }

    return valuedObject
  },

  /**
   * Returns an object with the `getValue` and `setValue` methods, having `value` hidden from the outside.
   */
  createEncapsulatedObject() {
    var encapObj = {
      getValue: function(){
        return value
      },
      setValue: function(newValue){
        value = newValue
      }
    }

    return encapObj
    
  },

  /**
   * Returns the shallow copy of the given `obj`. HINT: This **operator** will be used later.
   * @param {Object} obj
   */
  shallowCopy(obj) {
     var newObj = Object.assign({}, obj)

    return newObj
  },

  /**
   * Returns the deep copy of the given `obj`.
   * @param {Object} obj
   */
  deepCopy(obj) {
    var newObj  = JSON.parse(JSON.stringify(obj))
    
    return newObj
  },

  /**
   * Returns an array containing 2 elements which are
   * loosely equal, but strictly unequal.
   */
  looselyTrue() {
    var string = ['0', 0]
    
    return string
  },

  /**
   * Returns a string that is loosely equal to boolean `true`. This one is tricky :)
   */
  stringLooselyEqualToTrue() {
    var string = '1'
    
    return string
  },

  /**
   * Returns correct sum of a and b.
   */
  safeSum(a, b) {
    const x = parseInt(a)
    const y = parseInt(b)
    const sum = x + y

    return sum
  },

  /**
   * Returns formatted string for the given date.
   * Format should be `{day}-{month}-{fullYear}` (all numbers).
   * @param {Date} date
   */
  formatDate(date) {
      var d = date.getDate()
      var m = date.getMonth() + 1
      var y = date.getFullYear()
      return "" + d + "-" + m +"-" + y +""
  },

  /**
   * Sorts the given `numberArray` in ascending order.
   * Use array `.sort` method. Sort is done in place so there is no need to return anything.
   * @param {number[]} numberArray
   */
  sortNumberArray(numberArray) {
      numberArray.sort(function(a, b) {
        return a - b;
      })
  },

  /**
   * Multiplies all the elements in the array by 2 _in place_
   * (edits the given array) and returns it.
   * @param {number[]} numberArray
   */
  multiplyArrayByTwo(numberArray) {
    for(var i=0; i<numberArray.length; i++) {
      numberArray[i] *= 2;
    }
    return numberArray
  },

  /**
   * Multiplies all the elements in the array by 2 and returns them
   * in a new array.
   * @param numberArray
   */
  multiplyArrayByTwoNew(numberArray) {
    const newNumberArray = []

    for(var i=0; i < numberArray.length; i++) {
      newNumberArray.push(numberArray[i] * 2) 
    }
    return newNumberArray
  },

  /**
   *
   * EXTRA CREDIT TASK:
   *
   * Create two classes: `Person` and `Programmer`. `Programmer` class extends `Person`.
   * Person class has `name` property (set via constructor) and `getName` method (calls `callGetName` with name`).
   * Programmer class has `language` property provided to constructor (and `name` inherited from `Person`) and `getLanguage` method (calls `callGetLanguage` with `language`) 
   *'Return object with created classes,' `return { Person, Programmer }`.
   *
   * NOTE: class methods should use `bind', function expression syntax won't work here because code isn't transpiled.'
   *
   * @param {Function} callGetName
   * @param {Function} callGetLanguage
   */

  classInheritance(callGetName, callGetLanguage) {
    class Person{
      constructor(name){
        this.name = name
        this.getName = this.getName.bind(this)
      }
      getName(){
        callGetName(this.name)
      }
    }

    class Programmer extends Person{
      constructor(name, language){
        super(name)
        this.language=language
        this.getLanguage = this.getLanguage.bind(this)
      }
      getLanguage(){
        callGetLanguage(this.language)
      }
    }
    return { Person, Programmer }
  },

  /**
   * EXTRA CREDIT TASK:
   *
   * **This is variant of probably most common "big firm" interview question with closures.**
   *
   * This task has more easier solutions (e.g. using `let` instead of `var`), but desired solutions included Closures.
   *
   * Call the `consumer` function once every second three times giving it loop iterator as argument.
   * Use the provided for loop, do not change for loop, but feel free to modify setTimeout.
   * @param {Function} consumer
   */
  timeoutIncrement(consumer) {
    for (var i = 1; i <= 3; i += 1) {
      var counter = 1
      setTimeout(() => {
        consumer(counter++)
      }, 1000)
    }
  },
}
