const a = 5;
const b = 2;
const myName = "jinsoo"
const boolean = true; //or flase // in python Ture or False
const notThing = null; //python None -> undefined지만 다른..!
let somthing; // undefined


console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello "+myName)

// array is use [] like pythons list
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1, 2, "hello", false, null, true, undefined, "jinsoo"];

// Get Item from Array
console.log(daysOfWeek[5]); //python의 인덱싱과 같음 0부터 시작

// Add one more day to the array
daysOfWeek.push("sun");

const player = {
    name : "nico",
    points : 10,
    fat : true,

};
// 파이썬으로 생각 했을때 key값이 모두 문자열로 인식 되는 것 같음.
console.log(player.name);
//console.log(player["name"]) property를 사용한다고 표현하네?
player["lastName"] = "potato";
//player.lastName = "potato";
console.log(player);


function sayHello(nameOfPerson, age){
    // console.log("Hello my name is " + nameOfPerson +" and I`m " + age);
    console.log(`Hello my name is ${nameOfPerson} and I\`m ${age} years old.`);  //익스플로어 환경과 호환하기 위해 문자열포멧 함수를 만들어 사용하기도 하였었다. 파이썬의 문자열 포멧같은거! 는 직접 만들어 써야함. \ <- 이스케이프를 넣어서 백틱문자열 안에 백틱 넣기
}
player['sayHellos'] = function(nameOfPerson, age){
    // console.log("Hello my name is " + nameOfPerson +" and I`m " + age);
    console.log(`Hello my name is ${nameOfPerson} and I\`m ${age} years old.`); // []형태로 오브젝트 안에 함수 넣기
};
player.sayHelloso = function(nameOfPerson, age){
    // console.log("Hello my name is " + nameOfPerson +" and I`m " + age);
    console.log(`Hello my name is ${nameOfPerson} and I\`m ${age} years old.`);  // . 으로 오브젝트 안에 함수 넣기
}

sayHello("jinsoo", 10);
sayHello("dal", 23);
sayHello("lynn", 21)
player['sayHellos']("niki", 20);
// []이용한 방법.. 그럼 consol도??
player.sayHelloso('nice', 10);
// 이렇게 사용할 수 있음..!

console['log']("이건 실험 중이야.") // = console.log() 이런 발견을 하면서 공부하는 사람이 있을까?


const def = {
    '+': function(a, b){
        console.log(a+b);
    },
    '-': function(a, b){
        console.log(a-b);
    }
}

def["+"](3, 5)
def["-"](3, 5)

class NumpyArray {
    constructor(array) {
      this.array = array;
    }
  
    // 배열의 모든 요소에 대해 주어진 함수를 적용
    applyFunction(func) {
      return this.array.map((row) => row.map(func));
    }
  
    // 배열에 스칼라 값을 더함
    addScalar(value) {
      return this.applyFunction((x) => x + value);
    }
  
    // 배열을 출력
    print() {
      console.log(this.array);
    }
  }
  
  // 사용 예
  const myArray = new NumpyArray([[1, 2, 3], [4, 5, 6]]);
  myArray.print(); // 원본 배열 출력
  const addedArray = myArray.addScalar(10); // 모든 요소에 10 더하기
  console.log(addedArray); // 결과 출력
  


function createZeros(dimensions) {
  // 재귀적으로 배열을 생성하는 함수
  function createArray(dimensions, depth) {
    if (depth === dimensions.length) return 0; // 최하위 차원에 도달하면 0 반환

    const length = dimensions[depth]; // 현재 차원의 길이
    const arr = new Array(length);

    for (let i = 0; i < length; i++) {
      arr[i] = createArray(dimensions, depth + 1); // 다음 차원으로 재귀 호출
    }

    return arr;
  }

  // dimensions 배열의 각 요소를 기반으로 다차원 배열 생성
  return createArray(dimensions, 0);
}
  
const zerosArray = createZeros([3, 3, 3]); // 3x3x3 배열 생성
console.log(zerosArray);
  

