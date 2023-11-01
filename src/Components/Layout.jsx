import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
	  return (
	<>
	  <NavigationBar />
	  {children}
	  <Footer />
	</>
  );
}

export default Layout;