/********************************************************************
 * @Execution    : singleton.js
 * @description  : To build a Singleton design pattern.
 * @overview     : DesignPatterns
 * @file         : singleton
 * @author       : Vinayaka S V<vinayakavastrad@gmail.com>
 * @version      : v12.10.0
 * @since        : 02-nov-2019
 *
 *********************************************************************/
// Singleton class allows only one instance to be created by it if more than one instances are created, then it will be pointed to the same memory address.
try {
    var Singleton = () => {
        var instance;
        return {
            createInstance: () => {
                var object = new Object("I am the instance");
                return object;
            },
            getInstance: () => {
                if (!instance) {
                    instance = createInstance();
                }
                return instance;
            }
        };
    };

    var run = () => {
        var instance1 = Singleton.getInstance;
        var instance2 = Singleton.getInstance;

        if (instance1 === instance2) {
            console.log("I am SingleTon");
        } else {
            console.log("I am not singleTon");
        }
    }
    run();
} catch (e) {
    console.log(e.message)
}