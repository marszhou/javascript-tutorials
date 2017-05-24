function inherit(p) {
  if (p == null) throw TypeError()
  if (Object.create) {
    return Object.create(p)
  }

  var t = typeof p
  if (t !== 'object' && t !== 'function') throw TypeError()
  function f() {}
  f.prototype = p
  return new f()
}

function classOf(o) {
  if (o === null) return 'Null'
  if (o === undefined) return 'Undefined'
  return Object.prototype.toString.call(o).slice(8, -1)
}

function addPrivateProperty(o, name, predicate) {
  var value

  Object.defineProperty(o, name, {
    get: function() {return value},
    set: function(v) {
      if (predicate && !predicate(v)) {
        throw Error('set' + name + ': invalid value ' + v)
      } else {
        value = v
      }
    },
    enumerable: true,
    configurable: true
  })
}

function not(f) {
  return function() {
    var result = f.apply(this, arguments)
    return !result
  }
}

function memorize(f) {
  var cache = {}
  return function () {
    var key = arguments.length + Array.prototype.join.call(arguments, ',')
    if (key in cache) {
      return cache[key]
    } else {
      cache[key] = f.apply(this, arguments)
      return cache[key]
    }
  }
}

Object.defineProperty(
  Object.prototype,
  'extend',
  {
    writable: true,
    enumerable: false,
    configurable: true,
    value: function(o) {
      var names = Object.getOwnPropertyNames(o)
      for(var i=0; i < names.length; i++) {
        if (names[i] in this) {
          continue
        }
        var desc = Object.getOwnPropertyDescriptor(o, names[i])
        Object.defineProperty(this, names[i], desc)
      }
    }
  }
)

Range = function() {
  console.log(1)
}

Object.assign(Range.prototype, {
  print() {
    console.log('aaa')
  }
})

function type(o) {
  var t, c, n

  if (o === null) return 'null'
  if (o !==  o) return 'nan'
  if ((t =  typeof o) !== 'object') return t
  if ((c = classof(o)) !== 'Object') return c
  if (o.constructor && typeof o.constructor === 'function' &&
    (n = o.constructor.getName())) return n
  return 'Object'
}

function classof(o) {
  return Object.prototype.toString.call(o).slice(8, -1)
}

Function.prototype.getName = function() {
  if ('name' in this) return this.name
  return this.name = this.toString().match(/function\s*([^(]*)\(/)[1]
}

function quacks(o/*, ... */) {
  for (var i=1; i< arguments.length; i++) {
    var arg = arguments[i]
    switch (typeof arg) {
      case 'string':
        if (typeof o[arg] !== 'function') return false
        continue;
      case 'function':
        arg = arg.prototype
      case 'object':
        for (var m in arg) {
          if (typeof arg[m] !== 'function') continue
          if (typeof o[m] !== 'function') return false
        }
        break
    }
  }
  return true
}

function F(v) {
  this.value = v
}

F.prototype.compareTo = function(that) {
  return this.value - that.value
}

