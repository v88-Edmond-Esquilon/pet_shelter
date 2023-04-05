import React        from "react";
import ReactDOM     from "react-dom/client";
import App          from "./views/pages/app/App.jsx";
import { Provider } from "react-redux";
import { store }    from "./_reducers/store.js";

import "./index.less";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
)
