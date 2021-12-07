import { Provider, teamsTheme } from "@fluentui/react-northstar";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <Provider theme={teamsTheme}>
    <App />
  </Provider>,
  document.getElementById("root")
);
