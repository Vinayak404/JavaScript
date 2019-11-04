/********************************************************************
 * @Execution    : factoryMain.js
 * @description  : To build a factory design pattern.
 * @overview     : DesignPatterns
 * @file         : factory
 * @author       : Vinayaka S V<vinayakavastrad@gmail.com>
 * @version      : v12.10.0
 * @since        : 02-nov-2019
 *
 *********************************************************************/
try {
    function student(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.say = () => {
            console.log("Student name is " + this.name + " and age is " + this.age + " address " + this.address);
        };

    }

    function studentPrototype(proto) {
        this.proto = proto;
        this.nick = function () {
            var std = new student();
            std.name = proto.name;
            std.age = proto.age;
            std.address = proto.address;
            return std;
        };
    }

    function run() {
        var proto = new student('Karan', '18', 'Bengaluru');
        var prototype = new studentPrototype(proto);
        var std = prototype.nick();
        std.say();
    }
    run();
} catch (e) {
    console.log(e)
}