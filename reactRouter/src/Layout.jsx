import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Profile from "./components/Profile";
function Layout(){
  return (
    <>
      <Header />
      <Outlet />  
      <Footer />
    </>
  );
}
export default Layout;