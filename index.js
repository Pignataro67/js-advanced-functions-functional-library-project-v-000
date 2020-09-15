const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        collection.forEach(element => 
          callback(element)
        );
      } else { // collection is an Object
        for (const key in collection) {
          if (collection.hasOwnProperty(key)) {
            const element = collection[key];
            callback(element)
          }
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []

      if (Array.isArray(collection)) {
        collection.forEach(element => 
          newCollection.push(callback(element))
        );
      } else { // collection is an Object
        for (const key in collection) {
          if (collection.hasOwnProperty(key)) {
            const element = collection[key];
            newCollection.push(callback(element))
          }
        }
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let total = (!!acc) ? acc : collection[0]
      let i = (!!acc) ? 0 : 1

      for (; i < collection.length; i++) {
        total = callback(total, collection[i], collection)
      }
      return total
    },

    find: function(collection, predicate) {
      // if collection is an object, make values an array
      if (!(Array.isArray(collection))) {
        collection = Object.values(collection)
      }
      // iterate over collection array until predicate true
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let truthValues = []
      if (!(Array.isArray(collection))) {
        collection = Object.values(collection)
      }
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          truthValues.push(collection[i])
        }
      }
      return truthValues
    },

    size: function(collection) {
    if (!(Array.isArray(collection))) {
        collection = Object.values(collection)
      }
      return collection.length
    },

    first: function(array, num) {
      let n = (!!num) ? num : 1
      let nArray = array.slice(0, n)

      return (!!num) ? nArray : nArray[0]
    },

    last: function(array, num) {
      let n = (!!num) ? -num : -1
      let nArray = array.slice(n)

      return (!!num) ? nArray : nArray[0]
    },


    compact: function(array) {
      let compactArray = []

      for (const i of array) {
        if (!!i) {
          compactArray.push(i)
        }
      }
      return compactArray
      
  sortBy: function(array, callback) {
    let sortedArray = [...array]

    return sortedArray.sort(function(a,b) {
      return callback(a) - callback(b)
  })

},

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
