/********************************************************************
 * @Execution    : addressBook.js
 * @description  : To read in details of contents.
 * @overview     : Object oriented program
 * @file         : addressBook
 * @author       : Vinayaka S V<vinayakavastrad@gmail.com>
 * @version      : v12.10.0
 * @since        : 29-oct-2019
 *
 *********************************************************************/
try {
    const fs = require("fs");
    const Util = require("../Utility/utility")
    let jsonFile = JSON.parse(fs.readFileSync("../adressBook/adressBook.json"))
    Util.addressOperations(jsonFile)
} catch (e) {
    console.log(e.message)
}