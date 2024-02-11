//변수 선언(const = 불변, let 가변)
// let name = "MAX";
// let age = 29;
// let hasHobbies= true;
// console.log(name);

//기본 함수 정의법
function sumar(name, age, hasHobbies){
    return name+age+hasHobbies;
};
// console.log(sumar(name,age,hasHobbies));

//화살표 함수
const summary = (name, age, hasHobbies) => {
    return name+age+hasHobbies;
};
const add = (a,b)=> a+b;
// console.log(summary(name,age,hasHobbies));

// 객체선언
const person = {
    name: 'Max',
    age: 29,
    great() {
        console.log('Hi, I am' + this.name);
    }
};
person.great();

// 배열
const hobbies = ['a','b',1, true];
for (let hobby of hobbies) {
    console.log(hobby);
}
console.log(hobbies.map(hobby => 'a'+hobby));
hobbies.push('c');
console.log(hobbies);

// Spread, Rest
const copiedAraay = hobbies.slice();
const coparray= [...hobbies];
const toarray = (...args) => {
    return args;
};
console.log(toarray(1,2,3))

// 구조 분해
const printName = ({name}) => {
    console.log(name);
}
printName(person);
const {name, age}= person;
console.log(name,age);

//비동기화 코드 및 프로미스
setTimeout(() => {
    console.log('done!');
}, 2000);
const promise = new Promise((resolve, reject)=> {
    setTimeout(() =>{
        cancelIdleCallback('Done!');
    },1500);
    return promise;
})