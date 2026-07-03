// Movie name game 

const favMovie = "avataar";
let guess = prompt("Guess Your favmovie");
// while((guess!=favMovie)&&(guess != "quit"))

//or this condition is valid

while(guess!=favMovie)
{   if(guess=="quit"){
    console.log("You quit");
    break;
}
    guess=prompt("Try agan !!")
}

if(guess==favMovie){
    console.log("Congralution");
}
