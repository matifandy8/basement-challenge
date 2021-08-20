import {ReactNode} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}: {children: ReactNode}): JSX.Element => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;