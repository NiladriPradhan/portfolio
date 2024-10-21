import logo from './logo.svg';
import './App.css';
import Hero from './pages/Hero';
import Menubar from './components/Menubar';
import HomePage from './pages/HomePage';
import Sidebar from './components/Sidebar';
import AboutSection from './pages/About';
import MyAdvantages from './pages/Skills';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {
  const Layout = ({ children }) => {
    return (

      <>
        <div className="flex ">
          <div className="md:w-1/4 bg-black">
            <Sidebar />
          </div>
          <div className="md:w-3/4">
            {children}
          </div>
        </div>

      </>
    )
  }
  return (
    <>
      <div className="flex ">
        <div className="md:w-1/4 bg-black">
          <Sidebar />
        </div>
        <div className="md:w-3/4">
          <Hero />
          <AboutSection />
          {/* <Skills/> */}
          <Skills />
          <Projects />

        </div>
      </div>
      {/* <Layout>
        <Hero />
        <AboutSection />
        <MyAdvantages />
        <FeaturedProjects />
      </Layout> */}
    </>
  );
}

export default App;
