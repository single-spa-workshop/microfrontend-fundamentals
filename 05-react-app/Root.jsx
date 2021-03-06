import ScopedChild from "./ScopedChild";
// import LeakyChild from './LeakyChild'

export default function Root(props) {
  return (
    <ScopedChild />
    // <LeakyChild />
  );
}
