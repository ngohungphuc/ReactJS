
var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <RouteHandler />
            </div>
        );

    }
});

module.exports = App;