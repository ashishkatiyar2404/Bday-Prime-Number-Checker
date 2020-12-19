// var readline = require('readline');
// // var userName = readlineSync.question("Tell me your name\n");
// var userName = readline.createInterface(process.stdin, process.stdout);

// userName.question('Tell me your name? ', function(userAns) {
//      console.log("Do you want to play Is your birthday is prime Number ? \n");
// });

var chalk = require('chalk');
var readlineSync = require('readline-sync');
var userName = readlineSync.question("Tell me your name\n");

var userInterest = readlineSync.question(chalk.red("Welcome "+userName+" Do you want to play, Is your birthday is prime Number ? \n\nType Y or N \n\n"));



// strt frm
if(userInterest == 'Y'){
    var date_of_birth = readlineSync.question(chalk.white.bgRed.bold('Write your DOB in DD/MM format\n\n'));
    var dobArray = date_of_birth.split("/");

    checkPrime();      // function call
}else if(userInterest == 'N'){
    console.log("Bye😞");
} else{
    console.log("Please check the input");
}




//check prime
function checkPrime(){
      if(1 <= dobArray[0] <= 31 && 1<= dobArray[1] <= 12 ) {  // correct input
                if(dobArray[1] == 2 && (1<= dobArray[0] <=29)) {    // feb month
                    var temp = 0;                            // extra variable
                    for(var i = 2;i<dobArray[0];i++) {
                        if(dobArray[0] % i == 0){
                            temp = temp + 1;
                        }
                    }  
                    if(temp>0) {
                        console.log(chalk.white.bgRed.bold("Your Birthday is not a prime"));
                    }else{
                        console.log(chalk.red("Your Birthday is Prime🎉"));
                        console.log("You can share it on Social Media📱");
                        }

                }else if(1 <= dobArray[0] <= 31 && 1<= dobArray[1] <= 12 ) {
                        var temp = 0;
                        for(var i = 2;i<dobArray[0];i++) {
                            if(dobArray[0] % i == 0) {
                                temp = temp + 1;
                            }
                        }
                        if(temp>0) {
                            console.log(chalk.white.bgRed.bold("Your Birthday is not a prime"));
                        }else{
                            console.log(chalk.red("Your Birthday is Prime🎉"));
                            console.log("You can share it on Social Media📱");
                        }
                }else{
                    console.log("Error!! Please Input in Right format");
                }
        }else {
            console.log("Error!! Please Input in Right format😞");
  }

}












// var temp = 0;
// for(var i = 2;i<dobArray[0];i++) {
//     if(dobArray[0] % i == 0) {
//         temp = temp + 1;
//     }
// }
// if(temp>0) {
//     console.log("Your Birthday is not a prime");
// }else{
//     console.log("Your Birthday is Prime");
// }
