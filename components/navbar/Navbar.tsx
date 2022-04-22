import styles from "../../styles/navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <h1>M</h1>
      </div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#works">Works</Link>
        <Link href="#">Contact</Link>
      </div>
    </nav>
  );
};
export default Navbar;
