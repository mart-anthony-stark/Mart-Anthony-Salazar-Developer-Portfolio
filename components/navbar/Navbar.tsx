import styles from "../../styles/navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <h1 className={styles.logo}>M</h1>
        <div className={styles.name}>
          <h2>Mart Salazar</h2>
          <span>Fullstack Web Developer</span>
        </div>
      </div>
      <div className={styles.links}>
        <li className={router.asPath == "/" ? "active" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.asPath == "/#about" ? "active" : ""}>
          <Link href="/#about">About</Link>
        </li>
        <li className={router.asPath == "/works" ? "active" : ""}>
          <Link href="/works">Works</Link>
        </li>
        <li className={router.asPath == "/#contact" ? "active" : ""}>
          <Link href="/#contact">Contact</Link>
        </li>
      </div>
    </nav>
  );
};
export default Navbar;
