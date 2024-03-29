/*
// import, export 개념
// default 방식 - 원하는 이름 할당
import def from "./util.js";
// 일반 방식 - 별칠 사용가능
import { apiKey, apiKey2 as ak2 } from "./util.js";
// 객체로 묶는 방식
import * as util from "./util.js";

console.log(def);
console.log(apiKey);
console.log(ak2);
console.log(util.apiKey);
*/

/*
// 변수   
// JS에선 관용적으로 camelCase 방식으로 변수명을 작성
// 일반적으로 let 을 사용
let userMessage = "Hello World!";
console.log(userMessage);
// const - 상수, 상수엔은 값을 다시 할당할 수 없음
const userMessage2 = "Hello World 2";
console.log(userMessage2);
*/

/*
// 연산자
console.log(2 + 3);
console.log("2" + 3); // String 값 반환
console.log(2 === 3); // boolean 값 반환
*/

/*
// 함수
function createGreeting(userName, message = "Hello !") {
    return "Hi I am " + userName + ", " + message
}

const greeting1 = createGreeting("Max");
console.log(greeting1);

const greeting2 = createGreeting("Manuel", "What's up?");
console.log(greeting2);
*/

/*
// 화살표 함수
export default () => {
    console.log("arrow");
}
*/

/*
// 객체와 클래스
// 객체
const user = { // 중괄호로 선언
    name: "Max", // key, value 형식
    age: 34,
    greet() {
        console.log("Hello !");
    }
}
console.log(user.name);
user.greet();

// 클래스
class User { // class명의 첫글자는 대문자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello !");
    }
}
const user1 = new User("Manuel", 35); // 선언 된 클래스를 이용해 객체 생성
console.log(user1.name);
user1.greet();
*/

/*
// 배열함수 - 간결한 코드 사용 가능
const hobbies = ["Sports", "Cooking", "Reading"];

// push - 배열에 요소 추가
hobbies.push("working");
console.log(hobbies);

// findeIndex - 찾고자 하는 원소의 index 값을 구할 수 있음.
// 배열의 모든 원소를 돌면서 'Sports' 값을 찾아 index 값을 반환
const index = hobbies.findIndex((item) => item === "Sports");
console.log(index);

// map - 기존 배열을 이용해 새로운 더미값을 만들수 있음. 이때 기본배열은 안변하고 새배열 반환함
const editedHobbies = hobbies.map((item) => ({item})); // 화살푬 함수에서 object 반환하려면 소괄호로 감싸줘야함
console.log(editedHobbies);
*/

/*
// 배열 및 객체의 분해

// 배열 분해
// 첫번째 상수변수에 첫번쨰 원소를 매핑하고, 두번째 상수변수에 두번째 원소를 매핑
const [firstName, lastName] = ["Max", "Schwarzmiller"];
console.log(firstName);
console.log(lastName);

// 객체 분해
const { name: userName, age } = {  // 별칭 사용 가능 (userName)
    name: "Max",
    age: 36
};
console.log(userName);
console.log(age);

// 배열의 전개 연산자
const hobbies = ["Sports", "Cooking", "Reading"];
const newHobbies = ["Reading"];
// 각각의 원소들이 합쳐짐
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

// 객체의 전개 연산자
const user = { // 중괄호로 선언
    name: "Max", // key, value 형식
    age: 34,
    greet() {
        console.log("Hello !");
    }
}
const extendedUser = {
    isAdmin: true,
    ...user
};
console.log(extendedUser);
*/

/* 
// 함수 매개변수로 쓰이는 함수
function handleTimeout() {
    console.log("Timed out!");
}

const handleTimeout2 = () => {
    console.log("Timed out... again!");
};
// 함수를 매개변수로 하는데, 함수를 호출하는게 아니라 선언하는 걸 명심해야한다
setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
    console.log("More timing out...");
}, 4000)

function greater(greatFn) {
    greatFn();
}
greater(() => {
    console.log("great!")
});
*/

/*
// 함수 안에서 함수를 선언하고 실행 가능 함
// 일반 JS에서는 잘 안 쓰이지만, 리액트에서는 많이 쓰임
function init() {
    function greet() {
        console.log("Hi !");
    }
    greet();
}

init();
*/

// 참조

// String, Number, boolean 형식의 변수는 항상 새 값을 생성한다
// ex) 값이 바뀌면 새로운 값을 만들어서 변수에 저장. 기존 값 수정 불가

// 배열은 기존의 값을 수정한다
// 배열이 저장 된 주솟값에 접근 -> 배열에 새 원소 추가
// 상수에는 주솟값을 저장하고, 주소는 변경되지 않으므로 상수 인 변수에 저장돼있는 배열 및 객체를 수정가능함
const hobbies = ["Sports", "Cooking"];
hobbies.push("Working");
console.log(hobbies);
