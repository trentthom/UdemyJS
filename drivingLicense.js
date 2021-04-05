const name  = 'Trent'
const yob = 2001
const currentYear = 2021
const age = currentYear - yob
const isLegalToDrive = currentYear - yob >= 18 //Boolean

if(isLegalToDrive){
  console.log(`${name} can drive a car`)
} else {
  const yearsLeft = 18 - age
  console.log(isLegalToDrive)
  console.log(`not old enough, Wait ${yearsLeft} more years`)
}

let century
if(yob <= 2100 && yob > 2000){
  century = 21
} else if(yob <= 2000 &&  yob > 1900){
  century = 20
}
console.log(century)
