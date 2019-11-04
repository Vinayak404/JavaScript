/********************************************************************
 * @Execution    : groceryInventoryManagement.js
 * @description  : To read in Stock value of Each Company
 * @overview     : Object oriented program
 * @file         : groceryInventoryManagement
 * @author       : Vinayaka S V<vinayakavastrad@gmail.com>
 * @version      : v12.10.0
 * @since        : 28-oct-2019
 *
 *********************************************************************/
try {
    const fs = require("fs");
    const Util = require("../Utility/utility");
    let grocery = JSON.parse(fs.readFileSync("../groceryInventoryManagement/groceryInventory.json"))
    Util.groceryDisplayInventory(grocery)
} catch (e) {
    console.log(e.message)
}