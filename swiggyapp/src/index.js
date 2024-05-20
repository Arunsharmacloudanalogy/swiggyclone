import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from './redux/store.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
const root = ReactDOM.createRoot(document.getElementById("root"));
// require('dotenv').config()
const PUBLISHABLE_KEY='pk_test_bG95YWwtY291Z2FyLTM1LmNsZXJrLmFjY291bnRzLmRldiQ'

console.log('key is ' , PUBLISHABLE_KEY)
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
root.render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  </ClerkProvider>
);
