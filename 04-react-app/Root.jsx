import { BrowserRouter, Link, Route } from "react-router-dom";

export default function Root(props) {
  const linkStyle = {
    padding: "16px",
    display: "inline-block",
  };

  return (
    <BrowserRouter basename="/">
      <Link to="/react" style={linkStyle}>
        React home
      </Link>
      <Link to="/react/subroute" style={linkStyle}>
        React subroute
      </Link>
      <Link to="/vue" style={linkStyle}>
        Leave React
      </Link>
      <Route path="/react">
        <div>{props.name} is mounted</div>
      </Route>
      <Route path="/react" exact>
        <div>React Home</div>
      </Route>
      <Route path="/react/subroute">
        <div>Subroute</div>
      </Route>
    </BrowserRouter>
  );
}
