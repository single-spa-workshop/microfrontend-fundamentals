import layout from "./microfrontends-layout.html";
import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";
import { registerApplication, start } from "single-spa";

// Parse our microfrontend layout
const routes = constructRoutes(layout);

// Create single-spa application objects for each microfrontend
const applications = constructApplications({
  routes,
  async loadApp({ name }) {
    if (window[name]) {
      return window[name];
    } else {
      throw Error(
        `Could not find global variable 'window["${name}"]'. Try running pnpm start -- 06-${name}`
      );
    }
  },
});

// Create a layout engine, which controls where in the DOM the
// microfrontends are placed
const layoutEngine = constructLayoutEngine({
  routes,
  applications,
});

// Register our applications with single-spa
applications.forEach(registerApplication);

// Start up single-spa
start();
