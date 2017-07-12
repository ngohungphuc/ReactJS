/*
 * @CreateTime: Jul 11, 2017 10:13 PM
 * @Author: Tony Hudson
 * @Contact: github.com/ngohungphuc
 * @Last Modified By: Tony Hudson
 * @Last Modified Time: Jul 12, 2017 8:46 PM
 * @Description: Modify Here, Please
 */

"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitAction = require('./actions/initAction');

InitAction.initApp();
Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.getElementById('app'));
});
