import { Child, Parent } from './family';
import fibonacci from './fibonacci';

var evens = [0,2,4,6,8,10,12,14,16,18,20];

var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

console.group('5의 배수');
nums.forEach(v => {
    if (v % 5 === 0)
        console.log(v);
});
console.groupEnd();

console.group('홀수');
odds.forEach(o => console.log(o));
console.groupEnd();

var child = new Child('Sun', 'Hyunsang');
child.setFamilyName('Kim');

console.group('검사');
console.log("child : ", child);
console.log("child.constructor : ", child.constructor);
console.log("Child.prototype : ", Child.prototype);
console.log("Child.prototype.setFamilyName : ", Child.prototype.setFamilyName);
console.log("child instanceof Child : ", child instanceof Child);
console.log("child instanceof Parent : ", child instanceof Parent);
console.log("child.hasOwnProperty('setFamilyName') : ", child.hasOwnProperty('setFamilyName'));
console.groupEnd();

/**
 * let, const 를 어떻게?
 */
function letTest() {
    if (true) {
        let a;
        {
            a = 'inner';
            console.log('inner A : ', a);

            const b = 'good';
            console.log('b : ', b);
        }
        console.log('self A : ', a);
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
for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 1000)
        break;
    console.log(n);
}
console.groupEnd();