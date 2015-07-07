import number from './number';
import family from './family';
import fibonacci from './fibonacci';
import letTest from './let';

var tester = {};

tester.number = number;
tester.family = family;
tester.fibonacci = fibonacci;
tester.letTest = letTest;

!window.tester && (window.tester = tester);