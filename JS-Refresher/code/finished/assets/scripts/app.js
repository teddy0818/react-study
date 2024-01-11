// default 방식 - 원하는 이름 할당
import def from "./util.js";
// 일반 방식 - 별칠 사용가능
import { apiKey, apiKey2 as ak2 } from "./util.js";
// 객체로 묶는 방식
import * as util from "./util.js"

console.log(def);
console.log(apiKey);
console.log(ak2);
console.log(util.apiKey);