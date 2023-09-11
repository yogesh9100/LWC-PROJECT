/* 
We're building a Cricket app !

Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the wicketkeeper and the others are field players. 
For India (team 1) create one variable ('Ind') with the wicketkeeper name, 
and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, India (team 1) used 3 substitute players. So create a new array ('players1Final') 
containing all the original team1 players plus 'Sandeep', 'John' and 'Sunil'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. The team with the lower odd is more likely to win. 
Print to the console which team is more likely to win, 
WITHOUT using an if/else statement or the ternary operator.
7. Loop over the game.Century array and print each player name to the 
console, along with the Century number (Example: "Century 1: Kohli")
8. Use a loop to calculate the average odd and log it to the console 

GOOD LUCK 😀
*/
const game = {
    team1: "India",
    team2: "Australia",
    players: [
      [
        "Dhoni",
        "Sharma",
        "Kohli",
        "Rahul",
        "Jadeja",
        "Pandey",
        "Ashwin",
        "Chahal",
        "Khan",
        "Bhumra",
        "Shami",
      ],
      [
        "Wade",
        "Cummins",
        "Green",
        "Maxwell",
        "Finch",
        "Hazelwood",
        "Marsh",
        "Stoinis",
        "Richardson",
        "Starc",
        "Warner",
      ],
    ],
    Century: ["Kohli", "Sharma", "Warner", "Maxwell"],
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
    oddstest: {
      team11: 1.33,
      y: 3.25,
      team22: 6.5,
    },
  };

//Coding here
  console.log("Week 1 Assignment");
  //1. Create one player array for each team (variables 'players1' and 'players2')
  let[players1,players2] =game["players"];
  console.log("players1",players1);
  console.log("players2",players2);
//2.The first player in any player array is the wicketkeeper and the others are field players. 
//For India (team 1) create one variable ('Ind') with the wicketkeeper name, 
//and one array ('fieldPlayers') with all the remaining 10 field players
  var Ind=players1[1];
  console.log("WicketKeeper",players1[0]);
  //Slicing the Array to get the remaining fieldPlayers other than WicketKeeper
  fieldPlayers=players1.slice(1);
  console.log("fieldPlayers",fieldPlayers)
  //3. Create an array 'allPlayers' containing all players of both teams (22 players)
   allplayers=[... players1,... players2];
  console.log("Allplayers",allplayers);
  //4. During the game, India (team 1) used 3 substitute players. So create a new array ('players1Final') //containing all the original team1 players plus 'Sandeep', 'John' and 'Sunil'
players1Final=[... players1,"Sandeep", "John","Sunil"];
console.log("players1Final",players1Final);
//5.Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
let team1=game.odds.team1;
console.log("team1 from odd Object",team1);
let team2=game.odds.team2;
console.log("team2 from odd Object",team2);
let draw=game.odds.x;
console.log("draw from odd Object",draw);
//6. The team with the lower odd is more likely to win.Print to the console which team is more likely to win,// WITHOUT using an if/else statement or the ternary operator.
console.log("Team with lower odd will Win.The lower Odd is.Min",Math.min(game.odds.team1,game.odds.team2,game.odds.x));
//7.Loop over the game.Century array and print each player name to the //console, along with the Century number (Example: "Century 1: Kohli")
for(let[key,value] of game.Century.entries())
{
console.log(`Century ${key}.${value}`);
}
//8. Use a loop to calculate the average odd and log it to the console 
let oddsValues = Object.values(game.odds);
let sum=0;
for(let lvar in oddsValues)
{
  sum=sum+oddsValues[lvar];
}
console.log("Average",sum/oddsValues.length);
console.log("length of game Odds",oddsValues.length);


//Ankits Sir Solution
console.log("//Ankits Sir Solution");
//1.derstucturing
let[player1,player2]=game.players;
console.log("Player1",player1);
console.log("Player2",player2);
//2.destructuring
let[captain,...fieldplayersss]=player1;
console.log("captain",captain);
console.log("fieldplayersss",fieldplayersss);

//3.spread operator for concatenate
let allplayerslist=[...player1,...player2];
console.log("allplayerslist",allplayerslist);

//4.adding values to array spread operator
finalprayerfinal1=[...player1,'Sandeep','John','Sunil'];
console.log("finalprayerfinal1",finalprayerfinal1);

//5.destucturing y as alias drwas var to print
//aliasing (y:draww) 

let {team11,y:draww,team22}=game.oddstest;
console.log("team11",team11);
console.log("draww",draww);
console.log("team22",team22);

//6.use logical operator && ,||  best practice modren javascript users use this approach
team11<team22&&console.log("team11 will win",team11);
team22<team11&&console.log("team22 will win",team22);

//7.for of loop
for(let [index,value] of game.Century.entries())
{
  
console.log(`Century ${index+1}:${value}`);
}
//8.Average Summing
let summing=0;
let counter=0;
for(let currItem of Object.values(game.odds))
{
console.log(currItem);
summing=summing +currItem;
counter=counter +1;
}
console.log(sum);
console.log(counter);
console.log("Avergae",Math.floor(sum/counter));