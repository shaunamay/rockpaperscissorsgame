var times=3;
for(i=0;i<times;i++){
    var userChoice = prompt("rock, paper or scissors?");
    var computerChoice = Math.random();
        if (computerChoice<0.34){
            computerChoice="rock";
        }
        else if(computerChoice<=0.67){
            computerChoice = "paper";
        }
        else{
            computerChoice="scissors";
        }
    console.log("Computer: " + computerChoice);
    console.log(compare(userChoice, computerChoice)); 
    function compare(choice1, choice2){
		if (choice1===choice2){
            alert("Your opponent chose the same option: The result is a tie!");
        }
        else if(choice1==="rock"){
            if(choice2==="scissors"){
                alert("Your opponent chose Scissors: You win!");
                hide();
            }
            else{
                alert("Your opponent chose Paper: You lose!");
                
            }
		}
        else if(choice1==="paper"){
            if(choice2==="rock"){
                alert("Your opponent chose Rock: You win!");
                hide();
            }
            else{
                alert("Your opponent chose Scissors: You lose!");
            }
		}
		else if(choice1==="scissors") {
            if(choice2==="rock") {
                alert("Your opponent chose Rock: You lose!");
            } 
            else{
                alert("Your opponent chose Paper: You win!");
                hide();
            }
        }
    }
}