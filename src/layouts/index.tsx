import AppMain from './components/AppMain';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function Layout() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <AppMain />
      <Footer />
    </div>
  );
}

export default Layout;
