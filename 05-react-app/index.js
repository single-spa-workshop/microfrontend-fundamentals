import * as React from "react";
import * as ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./Root";

window.reactApp = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
});
