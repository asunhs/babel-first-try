(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parent = (function () {
    function Parent(familyName) {
        _classCallCheck(this, Parent);

        this.familyName = familyName;
    }

    Parent.prototype.setFamilyName = function setFamilyName(familyName) {
        this.familyName = familyName;
    };

    return Parent;
})();

var Child = (function (_Parent) {
    function Child(familyName, givenName) {
        _classCallCheck(this, Child);

        _Parent.call(this, familyName);

        this.givenName = givenName;
    }

    _inherits(Child, _Parent);

    return Child;
})(Parent);

exports.Parent = Parent;
exports.Child = Child;

},{}],2:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _fibonacci;

var fibonacci = (_fibonacci = {}, _fibonacci[Symbol.iterator] = function () {
    var pre = 0,
        cur = 1;
    return {
        next: function next() {
            var _ref = [cur, pre + cur];
            pre = _ref[0];
            cur = _ref[1];

            return { done: false, value: cur };
        }
    };
}, _fibonacci);

exports["default"] = fibonacci;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _family = require('./family');

var _fibonacci = require('./fibonacci');

var _fibonacci2 = _interopRequireDefault(_fibonacci);

var evens = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

var odds = evens.map(function (v) {
    return v + 1;
});
var nums = evens.map(function (v, i) {
    return v + i;
});

console.group('5의 배수');
nums.forEach(function (v) {
    if (v % 5 === 0) console.log(v);
});
console.groupEnd();

console.group('홀수');
odds.forEach(function (o) {
    return console.log(o);
});
console.groupEnd();

var child = new _family.Child('Sun', 'Hyunsang');
child.setFamilyName('Kim');

console.group('검사');
console.log('child : ', child);
console.log('child.constructor : ', child.constructor);
console.log('Child.prototype : ', _family.Child.prototype);
console.log('Child.prototype.setFamilyName : ', _family.Child.prototype.setFamilyName);
console.log('child instanceof Child : ', child instanceof _family.Child);
console.log('child instanceof Parent : ', child instanceof _family.Parent);
console.log('child.hasOwnProperty(\'setFamilyName\') : ', child.hasOwnProperty('setFamilyName'));
console.groupEnd();

/**
 * let, const 를 어떻게?
 */
function letTest() {
    if (true) {
        var _a = undefined;
        {
            _a = 'inner';
            console.log('inner A : ', _a);

            var b = 'good';
            console.log('b : ', b);
        }
        console.log('self A : ', _a);
    }
    console.log('outer A : ', a);
}

console.group('let, const 실험');
try {
    letTest();
} catch (e) {
    console.error(e);
}
console.groupEnd();

/**
 * Symbol?
 */
console.group('피보나치');
for (var _iterator = _fibonacci2['default'], _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
    } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
    }

    var n = _ref;

    // truncate the sequence at 1000
    if (n > 1000) break;
    console.log(n);
}
console.groupEnd();

},{"./family":1,"./fibonacci":2}]},{},[3]);
