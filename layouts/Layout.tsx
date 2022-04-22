import { FC } from "react";
import Navbar from "../components/navbar/Navbar";

type Props = {
  children: any;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
