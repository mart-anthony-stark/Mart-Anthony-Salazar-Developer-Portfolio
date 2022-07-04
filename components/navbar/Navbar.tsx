import styles from "../../styles/navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Home from "../../svg/home.svg";
import About from "../../svg/about.svg";
import Work from "../../svg/works.svg";
import Contact from "../../svg/contact.svg";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

type Props = {
  activeRoute: string;
};

const Navbar: FC<Props> = (props) => {
  const { activeRoute } = props;

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
        <li className={activeRoute == "/" ? "active" : ""}>
          <Link href="/">
            <Image src={Home} alt="" />
          </Link>
        </li>
        <li className={activeRoute == "/#about" ? "active" : ""}>
          <Link href="/#about">
            <Image src={About} alt="" />
          </Link>
        </li>
        <li className={activeRoute == "/#works" ? "active" : ""}>
          <Link href="/#works">
            <Image src={Work} alt="" />
          </Link>
        </li>
        <li className={activeRoute == "/#contact" ? "active" : ""}>
          <Link href="/#contact">
            <Image src={Contact} alt="" />
          </Link>
        </li>
      </div>
    </nav>
  );
};
export default Navbar;
