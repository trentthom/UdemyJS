// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
//
// 1. Calculate the average score for each team, using the test data below
//
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
//
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinsAverageScore1 = (96 + 108 + 89) / 3
const koaloasAverageScore1 = (88 + 91 + 110) / 3
//
// if(dolphinsAverageScore === koaloasAverageScore){
//   console.log('draw result')
// } else if (dolphinsAverageScore > koaloasAverageScore){
//   console.log('dolphins win')
// } else {
//   console.log('koalas win')
// }

const dolphinsAverageScore2 = (97 + 88 + 101) /3
console.log('dolpins:', dolphinsAverageScore2)
const koaloasAverageScore2 = (99 + 95 + 99) / 3
console.log('koalas:', koaloasAverageScore2)

if(dolphinsAverageScore2 > 100 && dolphinsAverageScore2 > koaloasAverageScore2){
  console.log('dolphins winner')
} else if(koaloasAverageScore2 > 100 && koaloasAverageScore2 > dolphinsAverageScore2){
  console.log('koalas win')
} else {
  console.log('nobody scored enough points to win')
}


const dolphinsAverageScore3 = (10000) /3
console.log('dolpins:', dolphinsAverageScore3)
const koaloasAverageScore3 = (1000) / 3
console.log('koalas:', koaloasAverageScore3)

if(dolphinsAverageScore3 === koaloasAverageScore3 && dolphinsAverageScore3 > 100){
  console.log('we got a graw dogs!')
} else if(dolphinsAverageScore3 > 100 && dolphinsAverageScore3 > koaloasAverageScore3){
  console.log('dolphins winner')
} else if(koaloasAverageScore3 > 100 && koaloasAverageScore3 > dolphinsAverageScore3){
  console.log('koalas win')
} else {
  console.log('nobody scored enough points to win')
}


const day = 'tue'

switch (day) {
  case 'mon':
  console.log('go jogging')
  break
  case 'tue':
  console.log('situps')
  break
  default:
  console.log('no mathces!!')
}



const days = 'mon'

if(days === 'mon'){
  console.log('monday')
} else if (days === 'tue'){
  console.log('tuesday')
} else if(days === 'wed' || days === 'thurs'){
  console.log('hi')
} else {
  console.log('going home')
}


const weekdays = ''

switch (weekdays){
  case 'sat':
  console.log('yay its satdat')
  break
  case 'sun':
  console.log('sunday baby')
  break
  default:
  console.log('boo!')
}

///////////////////////////////////////////////////////////////ternary operator

const age = 22

age >= 18 ? console.log('have some booze') :
console.log('haha!')


const day1 = 'workday'

day1 === 'weekday' ? console.log('workday') :
console.log('yay party on dude');

const legal = age >= 18? 'wine' : 'water'

console.log(legal)

let legal2;
if(age >= 18){
  legal2 = 'wine'
} else {
  legal2 = 'water'
}
console.log(legal2)

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`)








//
