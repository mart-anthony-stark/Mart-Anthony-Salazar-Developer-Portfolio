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
  setActiveRoute?: (path: string) => void;
};

const callback = (entries: any) => {
  entries.forEach((entry: any) => {
    console.log(entry);
  });
};

const Navbar: FC<Props> = (props) => {
  const { activeRoute } = props;

  // const observer = new IntersectionObserver(callback, {
  //   threshold: 0.5,
  // });

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
            <Image src={Home} height={40} width={40} alt="" />
          </Link>
        </li>
        <li className={activeRoute == "/#about" ? "active" : ""}>
          <Link href="/#about">
            <Image src={About} height={40} width={40} alt="" />
          </Link>
        </li>
        <li className={activeRoute == "/#works" ? "active" : ""}>
          <Link href="/#works">
            <Image src={Work} height={40} width={40} alt="" />
          </Link>
        </li>
        <li className={activeRoute == "/#contact" ? "active" : ""}>
          <Link href="/#contact">
            <Image src={Contact} height={40} width={40} alt="" />
          </Link>
        </li>
      </div>
    </nav>
  );
};
export default Navbar;
