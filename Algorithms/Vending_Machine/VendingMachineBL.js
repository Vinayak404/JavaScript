// Vending machine.
/**
* @description : To Return the cash for the given amount with least number of bills.
* @param {num}, user input
* @return {bills and quantity},Returns the least possible currency bills and thier corresponding quantity.
*/
VendingMachine = (num) => {
    N1000 = parseInt(num / 1000);
    N500 = parseInt((num % 1000) / 500);
    N100 = parseInt(num % 500 / 100);
    N50 = parseInt(num % 100 / 50);
    N10 = parseInt(num % 50 / 10);
    N5 = parseInt(num % 10 / 5);
    N2 = parseInt(num % 5 / 2);
    N1 = num - 1000 * N1000 - 500 * N500 - 100 * N100 - 50 * N50 - 10 * N10 - 5 * N5 - 2 * N2;
    console.log("1000*", N1000, ",500*", N500, ",100*", N100, ",50*", N50, ",10*", N10, ",5*", N5, ",2*", N2, ",1*", N1);
}
module.exports = { VendingMachine }
