import { Route, Routes } from 'react-router-dom';
// import Container from './components/Layout/Container/Container';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Company from './pages/Company/Company';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NewProject from './pages/NewProject/NewProject';
import NotFound from './pages/NotFound/NotFound';
import Project from './pages/Project/Project';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        {/* <Container customClass="min-heigth"> */}
        <Route exact path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="company" element={<Company />} />
        <Route path="contact" element={<Contact />} />
        <Route path="newproject" element={<NewProject />} />
        <Route path="project/:id" element={<Project />} />
        <Route path="*" element={<NotFound />} />
        {/* </Container> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
