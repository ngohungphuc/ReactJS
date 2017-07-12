/*
 * @CreateTime: Jul 11, 2017 10:29 PM
 * @Author: Tony Hudson
 * @Contact: github.com/ngohungphuc
 * @Last Modified By: Tony Hudson
 * @Last Modified Time: Jul 12, 2017 9:01 PM
 * @Description: Modify Here, Please
 */

// a singleton that operates as the central hub for application updates
var Dispatcher = require('flux').Dispatcher;

module.exports = new Dispatcher();