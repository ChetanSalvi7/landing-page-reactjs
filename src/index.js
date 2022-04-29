var React = require("react");
var ReactDOM = require("react-dom");
const { BrowserRouter } = require("react-router-dom");
const { default: App } = require("./App");

ReactDOM.render (
  <>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </>,
  document.getElementById("root")
);