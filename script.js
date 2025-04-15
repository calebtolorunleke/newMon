// let numbers = [10,20,30,40]

// let results = numbers.map(function(value,index){
//     console.log(`index: ${index}, Value: ${value}`)
//     return value * 2
// })

// console.log(results)

// console.log(numbers)

// let numbers = [1,2,3,4,5,6]

// let evenNumbers = numbers.filter(number => number)

// console.log(evenNumbers)

// let products = [ {
//     name: 'laptop', price: 1000, inStock: true
// }, {
//     name: 'phone', price: 500, inStock: false
// }, {
//     name: 'Tablet', price: 700, inStock: true
// } ]

// let availableProducts = products.filter(product => product.inStock)

// console.log(availableProducts)

// let numbers = [1,2,3,4]

// let sum = numbers.reduce((total, number) => total + number,10)

// console.log(sum)

// let products = [ {
//     name: 'laptop', price: 1000, inStock: true
// }, {
//     name: 'phone', price: 500, inStock: false
// }, {
//     name: 'Tablet', price: 700, inStock: true
// } ]

// let totalPrice = products.filter(product => product.inStock).reduce((total,product) => total + product.price, 0)

// console.log(totalPrice)


// let age = 17
// if(age >= 18){
//     console.log('you are allowed to enter')
// // }

// let number = 6
// if (number % 2 == 0){
//     console.log('even number')
// }else{console.log('odd number')}

function checkGrade(){
    let score = document.getElementById('score').value
    let grade;

    if (score>=90){
        grade ='A'
    }else if(score>=80){
        grade ='B'
    }else if(score>=70){
        grade ='C'
    }else{
        grade='F'
    }


document.getElementById('grade').innerText = 'Your Grade: ' + grade;
}
