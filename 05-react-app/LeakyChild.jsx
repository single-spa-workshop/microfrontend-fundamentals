import "./LeakyChild.css";

export default function LeakyChild() {
  return (
    <p className="with-border">
      The LeakyChild component relies on global CSS which can collide with the
      CSS from other microfrontends.
    </p>
  );
}
