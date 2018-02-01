> ReactJS APP


`componentWillMount()` : This method is called before the component is initially rendered. So it is called before the render method is executed. You can't perform any type of DOM manipulation here because the component isn't available in the DOM yet.

`componentDidMount()` : This method is called right after the component has been rendered. So it is called immediately after the render method has been executed. It's the best place to perform network and AJAX calls.

`componentWillUnmount()` : This method is called right before the component is removed from the DOM.

`shouldComponentUpdate()` : This method determines if a re-rendering should occur or not. It is never called on initial rendering and it's always called before the render method.

`componentWillUpdate()` : This method is called as soon as shouldComponentUpdate returns true. It is called just before the component is rendered with new data.


![React](img/reactjs.png)