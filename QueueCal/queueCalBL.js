/**
 * @description :To print the calender of a month of a year using queue operations.
 * @param {month,year}, user input
 * @return {calender}, returning the calender of month,year.
 */
const Qu = require('../Utilities/queue')
const leapYear = require('../../Functional/Leap_year/Leap_yearBL')
const weekDay = require('../../Algorithm problems/Algorithms/Day_of_Week/DayOfWeekBL')
qCalen = (month, year) => {
    y1 = leapYear.Leap_yr(year);
    W = weekDay.dayOfWeek(1, month, year);
    let calen = []
    let days = ['Sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    var k = 1
    if (leapYear.Leap_yr(year) && month == 2) {
        md = 29
    } else if (!leapYear.Leap_yr(year) && month == 2) {
        md = 28
    } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
        md = 31
    } else if ([4, 6, 9, 11].includes(month)) {
        md = 30
    }

    days.forEach((ele, i) => {
        calen[i] = new Qu.Queue();
        calen[i].enqueue(ele);
    });
    for (i = 1; i < 7; i++) {
        for (j = 0; j < 7; j++) {
            if (k <= md && j >= W) {
                if (k > 9) calen[j].enqueue(k + ' ');
                else calen[j].enqueue(' ' + k + ' ');
                k++;
                W = W - 7;
            } else calen[j].enqueue('   ');
        }
    }
    return calen
}
module.exports = {
    qCalen
}