const fs = require("fs");
const Util = require("../Utility/utility");
let grocery = JSON.parse(fs.readFileSync("../groceryInventoryManagement/groceryInventory.json"))
Util.groceryDisplayInventory(grocery)