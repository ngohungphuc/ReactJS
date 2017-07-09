"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var ManageAuthorPage = React.createClass({
    getInitialState: function () {
        return {
            author: {
                id: '',
                firstName: '',
                lastName: ''
            }
        }
    },
    setAuthorState: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.sate.author[field] = vaule;
        return this.setState({author: this.state.author});
    },
    render: function () {
        return (
            <div>
                <h1>Manage Authors</h1>
                <AuthorForm author={this.state.author} onchange={this.setAuthorState}/>
            </div>
        );
    }
});

module.exports = ManageAuthorPage;