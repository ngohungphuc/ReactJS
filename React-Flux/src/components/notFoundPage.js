"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <p>Page not found </p>
                <Link to="app">Back to Home page</Link>
            </div>
        );
    }
});

module.exports = NotFoundPage;