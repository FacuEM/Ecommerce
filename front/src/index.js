// el inicio de la app
const React = require("react");
const ReactDOM = require("react-dom");
const { Provider } = require("react-redux");
import Main from "./containers/Main";

ReactDOM.render(
  <div>
  <Main />
  {console.log("Hola")}
  </div>,
  document.getElementById("root")
);

console.log("gonza secades probando esta verga");
