import { Route, Routes } from 'react-router-dom';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Company from './pages/Company/Company';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NewProject from './pages/NewProject/NewProject';
import NotFound from './pages/NotFound/NotFound';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        {/* <Container customClass="min-heigth"> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="projects" element={<Projects />} />
        <Route exact path="company" element={<Company />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="newproject" element={<NewProject />} />
        <Route path="*" element={<NotFound />} />
        {/* </Container> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
