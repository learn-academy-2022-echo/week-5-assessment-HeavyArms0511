// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe('secretCode', () => {
    it('takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0', () => {
    expect(secretCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(secretCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(secretCode(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})


// FAIL  ./code-challenges.test.js
//   secretCode
//     ✕ akes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0 (2 ms)

//   ● secretCode › akes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0

//     ReferenceError: secretCode is not defined

// b) Create the function that makes the test pass.

// PSUEDOCODE:
// Create a function called secretCode
// Take in a string and return a coded message that converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0
    // After taking in the string use replaceAll() to replace "a" to 4 and "e" to 3 and "i" to 1 and "o" to 0.
// Expected output
    // secretCode1 = "L4ck4d41s1c4l"
    // secretCode2 = "G0bbl3dyg00k"
    // secretCode3 = "3cc3ntr1cź

const secretCode = (string) => {
    return string.replaceAll("a", 4).replaceAll("i", 1).replaceAll("e", 3).replaceAll("o", 0).replaceAll("A", 4).replaceAll("I", 1).replaceAll("E", 3).replaceAll("0", 0)
}
  

  

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("checker", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        expect(checker(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(checker(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})


// FAIL  ./code-challenges.test.js
// secretCode
//   ✓ takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0 (3 ms)
// checker
//   ✕ akes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)

// ● checker › takes in an array of words and a single letter and returns an array of all the words containing that particular letter

//   ReferenceError: checker is not defined

// b) Create the function that makes the test pass.


// PSUEDOCODE:
// Create a function called checker
// Take in an input:
    // takes in an array of words and a single letter
        // iterates through the array with a for loop
        // checks each index of the arry to determine if it has the letter in the letter variable
        // if so push the indexes that match into a neww array
        // return the new array
// Expected Output:
    // const letterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    // const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]

//     const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

//     const letterA = "a"
// // Expected output: ["Mango", "Apricot", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]

const checker = (array, string) => {
    let newArr = []
    for(let i = 0; i < array.length; i++){
        if(array[i].toLowerCase().includes(string)){
            newArr.push(array[i])
        }
    }
    return newArr 
}

// PASS  ./code-challenges.test.js
// secretCode
//   ✓ takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0 (2 ms)
// checker
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

describe('fullHouse', () =>{
    it('takes in an array of 5 numbers and determines whether or not the array is a full house', () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)

    })
})

// FAIL  ./code-challenges.test.js
//   secretCode
//     ✓ takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0 (2 ms)
//   checker
//     ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)
//   fullHouse
//     ✕ takes in an array of 5 numbers and determines whether or not the array is a full house

//   ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a full house

//     ReferenceError: fullHouse is not defined


// b) Create the function that makes the test pass.

// PSUEDOCODE:
// Create a function called fullHouse
// Take in an array of 5 numbers
    // determine if the numbers in the array are a full house or not (A full house is exactly one pair and one three of a kind.)
        // use the built in method .sort() to put the numbers from least to greatest
        // create a local variable called numSort and assign it the value of array.sort()
        // create a conditional saying if three of the numbers are the same and two of the numbers are the same then we have a full house.
        // create a conditional saying that if three of the numbers are not the same then the array is not a full house.
        // return an output of either true or false
// Expected output
    // const hand1 output: true
    // const hand2 output: false
    // const hand3 output: false
    // const hand4 output: true


const fullHouse = (array) => {
    let numSort = array.sort()
    if(numSort[0] === numSort[2] && numSort[3] === numSort[4]){
        return true
    }else if(numSort[0] === numSort[1] && numSort[2] === numSort[4]){
        return true
    }else if(numSort[0] === numSort[4] && numSort[1] === numSort[3]){
        return true
    }else{
        return false
    }
}



// PASS  ./code-challenges.test.js
// secretCode
//   ✓ takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0 (2 ms)
// checker
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a full house (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.345 s, estimated 1 s
// Ran all test suites.
