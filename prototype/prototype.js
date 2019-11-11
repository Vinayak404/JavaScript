/********************************************************************
 * @Execution    : prototype.js
 * @description  : To build a prototype design pattern.
 * @overview     : DesignPatterns
 * @file         : prototype
 * @author       : Vinayaka S V<vinayakavastrad@gmail.com>
 * @version      : v12.10.0
 * @since        : 02-nov-2019
 *
 *********************************************************************/
try {
    class employee {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
            this.say = () => {
                console.log("Employee name is " + this.name + " and age is " + this.age + " address " + this.address);
            };
        }
    }

    function employeePrototype(proto) {
        this.proto = proto;
        this.clone = function () {
            var emp1 = new employee;
            emp1.name = proto.name;
            emp1.age = proto.age;
            emp1.address = proto.address;
            return emp1;
        };
    }

    function run() {
        var proto = new employee('Karan', '25', 'Bengaluru');
        var prototype = new employeePrototype(proto);
        var emp = prototype.clone();
        emp.say();
    }
    run();
} catch (e) {
    console.log(e)
}