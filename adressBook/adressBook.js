const fs = require("fs");
const Util = require("../Utility/utility")
let jsonFile = JSON.parse(fs.readFileSync("../adressBook/adressBook.json"))
Util.addressOperations(jsonFile)