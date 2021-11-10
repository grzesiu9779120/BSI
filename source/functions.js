import {fraction, subtract, number, multiply, add} from 'mathjs';


/**
 * Function for calculating the probability of selecting one of two persons with the entered probabilities for them
 * @param {number} np1 - The numerator of the fraction with the probability of selecting the first person
 * @param {number} dp1 - The denominator of the fraction with the probability of selecting the first person
 * @param {number} np2 - he numerator of the fraction with the probability of selecting the second person
 * @param {number} dp2 - The denominator of the fraction with the probability of selecting the second person
 * @returns {string} - The  probability of selecting one of the two people with the entered probability for them expressed in the form of a regular fraction and a decimal fraction
 */

const probabilitySelectingPerson = (np1,dp1,np2,dp2) =>{
    const person1 = [fraction(np1,dp1), subtract(1, fraction(np1,dp1))];
    const person2 = [fraction(np2,dp2), subtract(1, fraction(np2,dp2))]
    const probability = add(multiply(person1[0],person2[1]), multiply(person2[0], person1[1]));
    return `${probability.n} / ${probability.d} in fraction and ${number(probability).toFixed(4)} decimal`;
};


/**
 * Function to calculate the number of employees needed to handle all customers' equipment repair orders and the annual amount paid by customers to achieve the indicated profit
 * @param {number} weeklyWorkingTime - The working time of the client's device during the week, expressed in hours
 * @param {number} numberClients - Number of clients served
 * @param {number} numberFaults - Number of device failures in 100 hours
 * @param {number} employeeDailyOrders - The number of orders that one employee can perform during the day
 * @param {number} averageCostRepair - The average cost of repair for one defect
 * @param {number} percentageProfit - Expected percentage profit
 * @returns {string} - The number of employees needed and the annual amount paid by the client to achieve the indicated profit
 */

const numberEmployeesAndProfitableAnnualFee = (
    weeklyWorkingTime,
    numberClients,
    numberFaults,
    employeeDailyOrders,
    averageCostRepair,
    percentageProfit) => {

      const  numberFailuresPerWeek = ((weeklyWorkingTime * numberClients) / (100 / numberFaults));
      const  neededWorkers = numberFailuresPerWeek / (5 * employeeDailyOrders);
      const  annualCostPerCustomer = ((averageCostRepair * numberFailuresPerWeek) * 52.18) / numberClients;
      const  annualFeeCost = annualCostPerCustomer * (percentageProfit / 100) + annualCostPerCustomer;
      return `${neededWorkers}   ${annualFeeCost}`;
};

/**
 * Function for calculating the number of parts to be replaced knowing the total number of working parts, their failure rate and working time per year expressed in days
 * @param {number} failure_rate_a - The failure rate for the first part
 * @param {number} failure_rate_b - The failure rate for the second part
 * @param {number} count - The number of working parts
 * @param {number} time - The time the parts are working
 * @returns {string} - Number of parts to be replaced
 */

 const numberPartsToReplace  = (
  failure_rate_a, 
  failure_rate_b, 
  count, 
  time) =>{

  return Math.ceil(failure_rate_a * count * time * 24)  + " " + Math.ceil(failure_rate_b * count * time * 24);
};

/**
 * Function for calculating the probability of hitting a target in a series of shots of any length, knowing the probability for each shot.
 * @param {number} probabilityOfShots - The failure rate for the first part
 * @returns {string} - The probability of hitting the target in a series of shots
 */
const probabilityOfBeingShotDown = (
...probabilityOfShots
) =>{
  const arr = probabilityOfShots.map(poof => 1 - poof);
  const sumProbability = 1 - arr.reduce((acc,curr) => {
    return acc * curr;
  });
return `${sumProbability.toFixed(3)}`;
};

/**
 * Function for calculating the probability of secting two child from group with variable number of person of four selected.
 * @param {number} numberMen - The number of men
 * @param {number} numberWomen - The number of women
 * @param {number} numberChildren - The number of children
 * @returns {string} - The probability of selected two children from group of person
 */
 const probabilityOfSelectTwoChildren = (
  numberMen,
  numberWomen,
  numberChildren
  ) =>{
    const summOfAllPerson = numberMen + numberWomen + numberChildren;
    let summArr = 1;
    for(let i =0; i < 4; i++){
      summArr *= summOfAllPerson - i;
    }
    summArr = summArr/24;
    const child = (numberChildren * (numberChildren - 1))/2;
    const adults = ((numberMen + numberWomen) * ((numberMen + numberWomen)-1))/2;
    return `${((child*adults)/summArr).toFixed(3)}`;
  };

export {probabilitySelectingPerson, numberEmployeesAndProfitableAnnualFee, numberPartsToReplace, probabilityOfBeingShotDown,probabilityOfSelectTwoChildren};
