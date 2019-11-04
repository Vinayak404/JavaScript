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
    const FactoryObjects = require('../factory/utility')
    new FactoryObjects.PC().say();
    new FactoryObjects.Server().say();
    new FactoryObjects.laptop().say();
} catch (e) {
    console.log(e.message)
}