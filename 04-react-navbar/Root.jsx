import { BrowserRouter, Link } from "react-router-dom";

export default function Root(props) {
  const linkStyle = {
    padding: "16px",
    display: "inline-block",
  };

  return (
    <BrowserRouter basename="/">
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/react" style={linkStyle}>
        React
      </Link>
      <Link to="/vue" style={linkStyle}>
        Vue
      </Link>
      <Link to="/angular" style={linkStyle}>
        Angular
      </Link>
    </BrowserRouter>
  );
}
