(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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

function run() {
    var child = new Child('Sun', 'Hyunsang');
    child.setFamilyName('Kim');

    console.group('검사');
    console.log('child : ', child);
    console.log('child.constructor : ', child.constructor);
    console.log('Child.prototype : ', Child.prototype);
    console.log('Child.prototype.setFamilyName : ', Child.prototype.setFamilyName);
    console.log('child instanceof Child : ', child instanceof Child);
    console.log('child instanceof Parent : ', child instanceof Parent);
    console.log('child.hasOwnProperty(\'setFamilyName\') : ', child.hasOwnProperty('setFamilyName'));
    console.groupEnd();
}

exports['default'] = run;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _fibonacci;

var fibonacci = (_fibonacci = {}, _fibonacci[Symbol.iterator] = function () {
    var pre = 0,
        cur = 1;
    return {
        next: function next() {
            var _ref2 = [cur, pre + cur];
            pre = _ref2[0];
            cur = _ref2[1];

            return { done: false, value: cur };
        }
    };
}, _fibonacci);

function run() {
    /**
     * Symbol?
     */
    console.group('for..of 피보나치');
    for (var _iterator = fibonacci, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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
}

exports['default'] = run;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _number = require('./number');

var _number2 = _interopRequireDefault(_number);

var _family = require('./family');

var _family2 = _interopRequireDefault(_family);

var _fibonacci = require('./fibonacci');

var _fibonacci2 = _interopRequireDefault(_fibonacci);

var _let = require('./let');

var _let2 = _interopRequireDefault(_let);

var tester = {};

tester.number = _number2['default'];
tester.family = _family2['default'];
tester.fibonacci = _fibonacci2['default'];
tester.letTest = _let2['default'];

!window.tester && (window.tester = tester);

},{"./family":1,"./fibonacci":2,"./let":4,"./number":5}],4:[function(require,module,exports){
/**
 * let, const 를 어떻게?
 */
'use strict';

exports.__esModule = true;
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

function run() {
    console.group('let, const 실험');
    try {
        letTest();
    } catch (e) {
        console.error(e);
    }
    console.groupEnd();
}

exports['default'] = run;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var evens = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

var odds = evens.map(function (v) {
    return v + 1;
});
var nums = evens.map(function (v, i) {
    return v + i;
});

function run() {
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
}

exports['default'] = run;
module.exports = exports['default'];

},{}]},{},[3]);
