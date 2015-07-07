var evens = [0,2,4,6,8,10,12,14,16,18,20];

var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

function run () {
    console.group('5의 배수');
    nums.forEach(v => {
        if (v % 5 === 0)
            console.log(v);
    });
    console.groupEnd();

    console.group('홀수');
    odds.forEach(o => console.log(o));
    console.groupEnd();
}

export default run;