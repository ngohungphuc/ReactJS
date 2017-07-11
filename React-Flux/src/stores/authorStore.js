/*
 * @CreateTime: Jul 11, 2017 11:19 PM
 * @Author: Tony Hudson
 * @Contact: github.com/ngohungphuc
 * @Last Modified By: Tony Hudson
 * @Last Modified Time: Jul 11, 2017 11:28 PM
 * @Description: Modify Here, Please
 */

"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionType');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    }
});
