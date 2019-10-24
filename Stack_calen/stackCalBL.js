const Qu = require('../Utilities/queue')
const Stck = require('../Utilities/stack')
const leapYear = require('../../Functional/Leap_year/Leap_yearBL')
const weekDay = require('../../Algorithm problems/Algorithms/Day_of_Week/DayOfWeekBL')
CalenQS = (month, year) => {

    y1 = leapYear.Leap_yr(year);
    let calStk = new Stck.Stack;
    let days = ['Sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    if (leapYear.Leap_yr(year) && month == 2) {
        md = 29
    }
    else if (!leapYear.Leap_yr(year) && month == 2) {
        md = 28
    }
    else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
        md = 31
    }
    else if ([4, 6, 9, 11].includes(month)) {
        md = 30
    }
    var k = md;
    W = weekDay.dayOfWeek(md, month, year);
    for (i = 0; i < 6; i++) {
        let Qlines = new Qu.Queue()
        for (j = 7; j > 0; j--) {
            if (k >= 1 && j <= W + 1) {
                if (k > 9) Qlines.enqueue(k + ' ');
                else Qlines.enqueue(' ' + k + ' ');
                k--;
                W = W + 7;
            } else Qlines.enqueue('   ')
        }; calStk.push(Qlines)
    } let Qdays = new Qu.Queue
    for (let i = 0; i < 7; i++) {
        s
        Qdays.enqueue(days[6 - i])
    } calStk.push(Qdays)
    return calStk
}
module.exports = { CalenQS }