import { FC, useContext } from "react";
import Navbar from "../components/navbar/Navbar";
import AppContext from "../context/AppContext";

type Props = {
  children: any;
};

const Layout: FC<Props> = ({ children }) => {
  const { activeRoute, setActiveRoute } = useContext(AppContext);

  return (
    <div>
      <Navbar activeRoute={activeRoute} setActiveRoute={setActiveRoute} />
      {children}
    </div>
  );
};

export default Layout;