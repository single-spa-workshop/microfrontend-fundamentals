import styles from "./ScopedChild.module.css";

export default function ScopedChild() {
  return (
    <p className={styles["with-border"]}>
      The ScopedChild component relies on CSS which has unique class names, to
      avoid collisions with other components and microfrontends.
    </p>
  );
}
