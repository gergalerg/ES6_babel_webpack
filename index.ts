import {K, I, V} from './call_api';

const latin = selector => selector('primus')('secundus');

console.log(latin(K(I)));

