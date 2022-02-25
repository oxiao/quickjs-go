import { fib } from "./qjmdl.js"
import * as std from 'std'
import * as os from 'os'

import { require } from './require.js'
let ejs = require('ejs');

console.log("Hello World");
console.log("fib(10)=", fib(10));
let rr = fib(10)
globalThis.rr = rr
let people = ['geddy', 'neil', 'alex'];
let html = ejs.render('<%= people.join(", "); %>', {people: people});

console.log(hlw, rr, html)
console.log(globalThis.rr)

function test(msg) {
    return rr+msg;
}
