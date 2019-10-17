/********************************************************************************************************************
* @Execution : default node : cmd> DayOfWeek.js
* @Purpose : to study the functionals working.
* @description :To find the day of the week for the given date using Gregorian calendar.
* @overview : Returns the day of the week .
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 16-October-2019
*******************************************************************************************************************/
const Weekday = require('../Day_of_Week/DayOfWeekBL')
let input = require('readline-sync')
let d = input.questionInt("Enter the day:");
let m = input.questionInt("Enter the month:");
let y = input.questionInt("Enter the year:");
if (0 < d <= 31 && 0 < m <= 12 && 0 < y <= 9999) {
    Weekday.dayOfWeek(d, m, y)
}