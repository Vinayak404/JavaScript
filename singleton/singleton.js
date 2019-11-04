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