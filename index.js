function scuberGreetingForFeet(someValue){
 let result;
 if (someValue <= 400){
  return "This one is on me!"
 } else if (someValue > 2500) {
  return "No can do."
 } else if (someValue > 2000) {
  return "I will gladly take your thirty bucks."
 }
 
}

function ternaryCheckCity(someCity){
  if (someCity === "NYC"){
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}

function switchOnCharmFromTip(MoneyTip){
  if (MoneyTip === "generous"){
    return "Thank you so much."
  } else if (MoneyTip === "not as generous"){
    return "Thank you."
  } else {
    return "Bye."
  }
}