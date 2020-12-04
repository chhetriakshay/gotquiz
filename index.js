var readlineSync= require('readline-sync');
const chalk = require('chalk');
var score=0;
var resp = readlineSync.question("Do you want to play Akshay's Game Of Thrones Quiz? ");
if(resp=="yes")
{
  var name= readlineSync.question("What's your name? ");
  console.log(chalk.green("Welcome to the game", name));
}
else
{
  console.log("See you soon");

}
if(resp=="yes")
{



  function begin(question,answer)
  {

  var reslt= readlineSync.question(question);
  if(reslt==answer)
  {
    console.log(chalk.green("Bingo!!! thats correct"));
    score=score+1;
  }
  else
  {
    console.log(chalk.red("Sorry you are wrong"));
    score=score;
  }
  }


  questionOne =
  {
    question:"Who was responsible for the creation of the Night King?" ,
    answer:"Children of the Forest" ,
  }
  questionTwo =
  {
    question:"Dany’s dragons are (or were) called Drogon, Viserion and ?",
    answer:"Rhaegal",

  }
  questionThree =
  {
    question:"Who said:'I don’t plan on knitting by the fire while men fight for me'?",
    answer:"Lyanna Mormont",

  }

  questionFour =
  {
    question:"What is the name of the giant dragon-slaying crossbow that failed to protect King’s Landing?",
    answer:"Scorpion",

  }

  questionFive =
  {
    question:"Where is the House of Black and White, the training temple of the Faceless Men?",
    answer:"Braavos",

  }
  questionSix =
  {
    question:"What is the name of Arya’s sword?",
    answer:"Needle",

  }
  var questions= [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,];
  for(i=0;i<questions.length;i++)
  {
    var start=questions[i];
    console.log("\n");
    begin(start.question, start.answer);
    
  }

  console.log("The score is: ", score);

  if (score>=3)
  {
    console.log(chalk.blue("Hurrahh!!! You are up for the next level"));
  }
  else
  {
    console.log("Thank You for playing");
  }
}
  