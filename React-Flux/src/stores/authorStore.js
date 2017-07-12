/*
 * @CreateTime: Jul 11, 2017 11:19 PM
 * @Author: Tony Hudson
 * @Contact: github.com/ngohungphuc
 * @Last Modified By: Tony Hudson
 * @Last Modified Time: Jul 12, 2017 9:07 PM
 * @Description: Modify Here, Please
 */

"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionType');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';
var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getAllAuthors: function () {
        return _authors;
    },

    getAuthorById: function (id) {
        return _.find(_authors, {id: id});
    }
});

Dispatcher.register(function (action) {
    switch (action.actionTypes) {
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.atuhor);
            AuthorStore.emitChange();
            break;
    }
});

module.exports = AuthorStore;