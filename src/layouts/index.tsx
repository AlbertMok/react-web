import './index.less';
import AppMain from './components/AppMain';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function Layout() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <div className="content-wrapper">
        <AppMain />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
