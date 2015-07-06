(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var evens = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

var odds = evens.map(function (v) {
    return v + 1;
});
var nums = evens.map(function (v, i) {
    return v + i;
});

nums.forEach(function (v) {
    if (v % 5 === 0) console.log(v);
});

odds.forEach(function (o) {
    return console.log(o);
});

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

var child = new Child('Sun', 'Hyunsang');
child.setFamilyName('Kim');

console.log(child);
console.log(child.constructor);
console.log(Child.prototype);
console.log(Child.prototype.setFamilyName);
console.log(child instanceof Child);
console.log(child instanceof Parent);
console.log(child.hasOwnProperty('setFamilyName'));

},{}]},{},[1]);
