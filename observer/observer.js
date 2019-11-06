/********************************************************************
 * @Execution    : observer.js
 * @description  : To build an observer design pattern.
 * @overview     : DesignPatterns
 * @file         : observer
 * @author       : Vinayaka S V<vinayakavastrad@gmail.com>
 * @version      : v12.10.0
 * @since        : 02-nov-2019
 *
 *********************************************************************/
// this des9ign pattern monitors the actions performed
try {
    var subject = function () {
        let observers = []

        return {
            subscribe(user) {
                observers.push(user)
            },
            unsubscribe(user) {
                var index = observers.indexOf(user);
                if (index >= 0) {
                    observers.splice(index, 1)
                }
            },
            notifyObserver(user) {
                var index = observers.indexOf(user);
                if (index >= 0) {
                    observers[index].notify();
                }
            },
            notifyAllObservers() {
                for (i = 0; i < observers.length; i++) {
                    observers[i].notify();
                };
            }
        }
    }
    var observer = function (number) {
        return {
            notify: function () {
                console.log("Observer" + number + "is notified")
            }
        }
    }
    var subject1 = new subject();
    var observer1 = new observer(1);
    var observer2 = new observer(2);
    var observer3 = new observer(3);
    var observer4 = new observer(4);
    subject1.subscribe(observer1);
    subject1.subscribe(observer2);
    subject1.subscribe(observer3);
    subject1.subscribe(observer4);
    subject1.unsubscribe(observer3);
    subject1.notifyAllObservers();
    subject1.notifyObserver(observer2)
} catch (e) {
    console.log(e.message)
}