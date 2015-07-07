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

function run() {
    console.group('let, const 실험');
    try {
        letTest();
    } catch (e) {
        console.error(e);
    }
    console.groupEnd();
}

export default run;