import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import article from "./reducers/article";
import PublishingApp from "./layouts/PublishingApp";

//keep an application state object
const store = createStore(article);

render(
  <Provider store={store}>
    <PublishingApp />
  </Provider>,
  document.getElementById("publishingAppRoot")
);
