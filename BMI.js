// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �

const johnMass = 150
const johnHeight = 1.95
const markMass = 200
const markHeight = 1.69

const johnBMI = johnMass / johnHeight ** 2
const markBMI = markMass / markHeight ** 2
console.log(johnBMI, markBMI)

const markHigherBMI = markBMI > johnBMI
if(markHigherBMI){
  console.log(`marks bmi of ${markBMI} is grater thatn johns`)
} else {
  console.log(`johns bmi of ${johnBMI} is grwater than marks`)
}
const myBMI = function(john, mark){
  if(john > mark){
    return `john fatter than mark`
  } else {
    return `mark fatter than john`
  }
}

console.log('BMI is:',myBMI(johnBMI,markBMI))

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK �

const inputString = '23'
console.log(Number(inputString),inputString)

console.log(23 + 'trent')






























//
