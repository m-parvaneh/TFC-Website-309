import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import StyledLink from "../../components/Common/Link"

function Layout() {
    return (
      <>
      <Navbar>
            <StyledLink to={'/'}>Home</StyledLink>
            <StyledLink to={'/studios'}>Studios</StyledLink>
            <StyledLink to={'/subscriptions'}>Subscriptions</StyledLink>
      </Navbar>
      <Outlet/>
      </>
      );
  }
  
  export default Layout;