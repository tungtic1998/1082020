// var a = "Doan Hoang Tung"
// var b = a.split(" ")
// var c = b[2]

// alert(c)

// function hello() {
//     console.log("hello")
// }

// function  say(callback) {
//     callback()
// }

// say(hello)

var numbers = [1,3,5,7,8,9,12,14];

function firstEvenNumber(number) {
    return number % 2 == 0
}

// var result = numbers.find(firstEvenNumber)

// alert(result)


// function findEvenNumber(number, index, array gốc)

var myFind = (array, callback) => { // hàm find gốc
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i]
        }
    }
}

console.log(myFind(numbers, firstEvenNumber))

var filterEvenNumber = (number) => {
    return (number % 2 === 0)
}

var resultEvenNumbers = numbers.filter(filterEvenNumber)

console.log(resultEvenNumbers)

// map()

var students = [
    {
        firstName: "Big",
        lastName: "Dick",
        age: 69
    },
    {
        firstName: "Wide",
        lastName: "Pussy",
        age: 420
    },
    {
        firstName: "Djt",
        lastName: "Cmm",
        age: 999
    }
]

 var results = students.filter(student => student.age >= 420)
    .map(
        student => {
            return {
                age: student.age,
                fullName: student.firstName + " " + student.lastName
            }
        }
    )

console.log(results)

var dmms = [1,3,5,7,8,9,11,12,13];

var oddsum = dmms.filter(dmm => dmm % 2 != 0)
        .reduce((a, b) => {
            return a + b
        }
    )
console.log(oddsum)

var quantityOddNumbers = dmms.reduce((quantity, value) => {
    if (value % 2 !== 0) {
        quantity += 1
    }
    return quantity
}, 0)
console.log(quantityOddNumbers)

//tuong tac voi DOM