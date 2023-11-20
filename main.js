/*
const regex = /JavaScript/
const containsRegex = regex.test(myString)
console.log(containsRegex)
*/

/*
const myString = 'I Love JavaScript'
const myRegex = /JavaScript/
let newString = myString.replace(myRegex, 'Kotlin')
console.log(newString)
*/

/*
const myString = 'I Love JavaScript'
let newRegex = myString.search(/JavaScript/)
console.log(newRegex)
*/


const str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Fames ac turpis egestas integer eget aliquet nibh praesent tristique. 
 Vulputate dignissim suspendisse in est. Suspendisse potenti nullam ac tortor vitae purus. 
 Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. 
 Adipiscing vitae proin sagittis nisl rhoncus. Dictum at tempor commodo ullamcorper a. 
 Cras ornare arcu dui vivamus arcu felis bibendum ut. Scelerisque eleifend donec pretium vulputate. 
 Elementum eu facilisis sed odio morbi quis commodo. 
 Morbi tincidunt ornare massa eget egestas purus viverra accumsan.
Quam vulputate dignissim suspendisse in.`

let myRegex = str.match(/nisl/g)
console.log(myRegex.length)




console.log(1)
console.log(2)
setTimeout(() =>{
    console.log(3)

}, 3000)
console.log(4)
console.log(5)



console.log('Start')
function userInfo(name, callback){
    setTimeout(() =>{
        console.log('** User info received **')
        callback(name)
}, 3000)
}

let userNmae = userInfo('Ammar', name => {
    console.log(`Your name is ${name}`)
})
console.log('End')


let ages = [25, 30, 32]
let [firstAge, secondAge, thirdAge] = ages
console.log(firstAge, secondAge, thirdAge)

let colors = ['red', 'green', 'black']
let [firstColor, secondColor, thirdColor = 'black'] = colors
console.log(firstColor, secondColor, thirdColor)

let calors = ['red', 'green', 'blue']
let [,,firstCalor] = calorsconsole.log(firstCalor)

let numbers = [1, 2, [3, 4]]
let [first, second, [firstValue, SecondValue]] = numbers
console.log(first, second, firstValue, SecondValue)

let fisrt = 5, senocd = 7;
[fisrt, senocd] = [fisrt, fisrt]
console.log(fisrt, senocd)

let colars = ['red', 'green'];
[colars[0], colars[1]] = ['blue', 'black', 'white']
console.log(colars)

let student = {
    name : 'Ammar',
    age: 21,
    //gender: true
}
let {age: yourAge, name: yourName} = student
console.log(yourName, yourAge)
// let {namr, age, gender} = student
//console.log(name, age, gender)

let feerst = [1, 2, 3]
let seecond = [4, 5]
let theerd = [...feerst, ...seecond]
console.log(theerd)


let stoodant = {
    namee : 'Amr',
    agee : 21,
    gendere : false
}
let {namee, ...others} = stoodant
console.log(namee, others)

