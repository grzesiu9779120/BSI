/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/*
Author:
-Grzegorz Słomiński
-Mikolaj Saja
*/

import * as readline from 'readline';
import {
  probabilitySelectingPerson,
  numberEmployeesAndProfitableAnnualFee,
  numberPartsToReplace,
  probabilityOfBeingShotDown,
  probabilityOfSelectTwoChildren,
} from './functions.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const map = new Map();
map.set(1, probabilitySelectingPerson);
map.set(2, numberEmployeesAndProfitableAnnualFee);
map.set(3, numberPartsToReplace);
map.set(4, probabilityOfBeingShotDown);
map.set(5, probabilityOfSelectTwoChildren);

const get = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let input;
      rl.on('line', (line) => {
        input = line.match(/\d+\.*\d*/g);
        resolve(input.map((e) => parseFloat(e)));
      });
    }, 400);
  });
};

async function startProgram() {
  console.log(
    'Select the function you want to use: \n 1: Calculate probability to select one person with two \n 2: Calculate number of needed employers and anual fee for one client \n 3: Calculate number of parts that should be replaced \n 4: Calculate probability shootings down the plane in a series of shots \n 5: Probability of choosing two children from a group of people'
  );
  const selectedFunctions = await get();
  if (selectedFunctions[0] > 0 || selectedFunctions[0] < 6) {
    console.log('Enter the necessary parameters');
    const enteredParameters = await get();
    rl.close();
    const choiceFunction = map.get(selectedFunctions[0]);
    try {
      console.log(choiceFunction(...enteredParameters));
    } catch (error) {
      console.log(`Invalid value for parameter \n ${error}`);
    }
  } else {
    console.log('Invalid value. The correct function has not been selected');
  }
}

startProgram();
