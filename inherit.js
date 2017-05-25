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

function defineSubclass(superclass, constructor, methods, statics) {
  constructor.prototype = inherit(superclass.prototype)
  constructor.prototype.constructor = constructor
  if (methods) extend(constructor.prototype, methods)
  if (statics) extend(constructor, statics)
  return constructor
}

if (!Function.prototype.softBind) {
  Function.prototype.softBind = function(obj) {
    var fn = this,
      curried = [].slice.call( arguments, 1 ),
      bound = function bound() {
        return fn.apply(
          (!this ||
            (typeof window !== "undefined" &&
              this === window) ||
            (typeof global !== "undefined" &&
              this === global)
          ) ? obj : this,
          curried.concat.apply( curried, arguments )
        );
      };
    bound.prototype = Object.create( fn.prototype );
    return bound;
  };
}

// iterator

var myObject = {
  a: 2,
  b: 3
};

Object.defineProperty( myObject, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function() {
    var o = this;
    var idx = 0;
    var ks = Object.keys( o );
    return {
      next: function() {
        return {
          value: o[ks[idx++]],
          done: (idx > ks.length)
        };
      }
    };
  }
} );

// iterate `myObject` manually
var it = myObject[Symbol.iterator]();
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { value:undefined, done:true }

///

if (!Object.create) {
  Object.create = function(o) {
    function F(){}
    F.prototype = o;
    return new F();
  };
}

// inherit test OO style

function Foo(who) {
  this.me = who;
}
Foo.prototype.identify = function() {
  return "I am " + this.me;
};

function Bar(who) {
  Foo.call( this, who );
}
Bar.prototype = Object.create( Foo.prototype );

Bar.prototype.speak = function() {
  alert( "Hello, " + this.identify() + "." );
};

var b1 = new Bar( "b1" );
var b2 = new Bar( "b2" );

b1.speak();
b2.speak();

// OLOO style

var Foo = {
  init: function(who) {
    this.me = who;
  },
  identify: function() {
    return "I am " + this.me;
  }
};

var Bar = Object.create( Foo );

Bar.speak = function() {
  alert( "Hello, " + this.identify() + "." );
};

var b1 = Object.create( Bar );
b1.init( "b1" );
var b2 = Object.create( Bar );
b2.init( "b2" );

b1.speak();
b2.speak();

// class style
// Parent class
function Widget(width,height) {
  this.width = width || 50;
  this.height = height || 50;
  this.$elem = null;
}

Widget.prototype.render = function($where){
  if (this.$elem) {
    this.$elem.css( {
      width: this.width + "px",
      height: this.height + "px"
    } ).appendTo( $where );
  }
};

// Child class
function Button(width,height,label) {
  // "super" constructor call
  Widget.call( this, width, height );
  this.label = label || "Default";

  this.$elem = $( "<button>" ).text( this.label );
}

// make `Button` "inherit" from `Widget`
Button.prototype = Object.create( Widget.prototype );

// override base "inherited" `render(..)`
Button.prototype.render = function($where) {
  // "super" call
  Widget.prototype.render.call( this, $where );
  this.$elem.click( this.onClick.bind( this ) );
};

Button.prototype.onClick = function(evt) {
  console.log( "Button '" + this.label + "' clicked!" );
};

$( document ).ready( function(){
  var $body = $( document.body );
  var btn1 = new Button( 125, 30, "Hello" );
  var btn2 = new Button( 150, 40, "World" );

  btn1.render( $body );
  btn2.render( $body );
} );

// delegating style / oloo

var Widget = {
  init: function(width,height){
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
  },
  insert: function($where){
    if (this.$elem) {
      this.$elem.css( {
        width: this.width + "px",
        height: this.height + "px"
      } ).appendTo( $where );
    }
  }
};

var Button = Object.create( Widget );

Button.setup = function(width,height,label){
  // delegated call
  this.init( width, height );
  this.label = label || "Default";

  this.$elem = $( "<button>" ).text( this.label );
};
Button.build = function($where) {
  // delegated call
  this.insert( $where );
  this.$elem.click( this.onClick.bind( this ) );
};
Button.onClick = function(evt) {
  console.log( "Button '" + this.label + "' clicked!" );
};

$( document ).ready( function(){
  var $body = $( document.body );

  var btn1 = Object.create( Button );
  btn1.setup( 125, 30, "Hello" );

  var btn2 = Object.create( Button );
  btn2.setup( 150, 40, "World" );

  btn1.build( $body );
  btn2.build( $body );
} );

