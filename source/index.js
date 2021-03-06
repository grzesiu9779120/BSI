/*
Author:
-Grzegorz S
-Mikolaj S
*/


import {probabilitySelectingPerson, numberEmployeesAndProfitableAnnualFee, numberPartsToReplace, probabilityOfBeingShotDown,probabilityOfSelectTwoChildren} from './functions.js'
import * as readline from "readline";


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
  const map = new Map;
  map.set('1',probabilitySelectingPerson);
  map.set('2',numberEmployeesAndProfitableAnnualFee);
  map.set('3',numberPartsToReplace);
  map.set('4',probabilityOfBeingShotDown);
  map.set('5',probabilityOfSelectTwoChildren);


  const startProgram = () =>{
    console.log("Select the function you want to use: \n 1: Calculate probability to select one person with two \n 2: Calculate number of needed employers and anual fee for one client \n 3: Calculate number of parts that should be replaced \n 4: Calculate probability shootings down the plane in a series of shots \n 5: Probability of choosing two children from a group of people");

    rl.on('line', function (line) {
        if(0 < parseInt(line) && parseInt(line) < 6) {
          console.log("Enter the necessary parameters");
          const choiceFunction = map.get(line)
        rl.on('line', function (line) {
          const arrayOfParameters = line.split(/\s+|[,\/]/g).map(e => parseFloat(e));
          try{
            console.log(choiceFunction(...arrayOfParameters));
          rl.close();
          }catch(error){
            console.log(`Invalid value for parameter \n ${error}`);
            rl.close();
          }
        });
        }
        else{
          console.log("Invalid value. The correct function has not been selected");
          rl.close();
        }
     });
  }


  startProgram();

  