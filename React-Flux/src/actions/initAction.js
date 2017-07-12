/*
 * @CreateTime: Jul 12, 2017 8:41 PM
 * @Author: Tony Hudson
 * @Contact: github.com/ngohungphuc
 * @Last Modified By: Tony Hudson
 * @Last Modified Time: Jul 12, 2017 8:44 PM
 * @Description: Modify Here, Please
 */
"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionType');

var InitAction = {
    initApp: function(){
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }
        });
    }
}

module.exports = InitAction;