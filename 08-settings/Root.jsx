import { getNavHeightPx } from "navbar";

export default function Root() {
  // Not below the navbar
  // return <h1>React settings page</h1>

  // Below the navbar
  // Example use of cross-microfrontend imports
  return (
    <h1 style={{ marginTop: getNavHeightPx() + "px" }}>React settings page</h1>
  );
}
