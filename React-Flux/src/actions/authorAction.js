/*
 * @CreateTime: Jul 11, 2017 10:44 PM
 * @Author: Tony Hudson
 * @Contact: github.com/ngohungphuc
 * @Last Modified By: Tony Hudson
 * @Last Modified Time: Jul 11, 2017 11:36 PM
 * @Description: Modify Here, Please
 */

"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionType');
var AuthorActions = {
    createAuthor: function (author) {
        var newAuthor = AuthorApi.saveAuthor(author);
        //tell all the stores that an author was just created
        Dispatcher.dispatch({actionType: ActionTypes.CREATE_AUTHOR, author: newAuthor})
    }
};

module.exports = AuthorActions;