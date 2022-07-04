import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Social from "../components/Socials";

type Props = {
  children: any;
};

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setActiveRoute(router.asPath);
  }, [router.asPath]);

  return (
    <div>
      <Navbar activeRoute={activeRoute} setActiveRoute={setActiveRoute} />
      {children}
    </div>
  );
};

export default Layout;
