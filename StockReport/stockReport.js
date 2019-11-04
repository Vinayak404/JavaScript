/********************************************************************
 * @Execution    : stockReport.js
 * @description  : To read in Stock value of Each Company
 * @overview     : Object oriented program
 * @file         : StockReport
 * @author       : Vinayaka S V<vinayakavastrad@gmail.com>
 * @version      : v12.10.0
 * @since        : 29-oct-2019
 *
 *********************************************************************/
try {
    const util = require('../StockReport/stockBLReport');
    var obj = new util.Inventory();
    obj.jsonParse('../StockReport/stockReport.json')
    obj.value();
} catch (e) {
    console.log(e.message)
}