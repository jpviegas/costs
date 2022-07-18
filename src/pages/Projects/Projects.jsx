import { useLocation } from 'react-router-dom';
// import Container from '../../components/Layout/Container/Container';
import Message from '../../components/Layout/Message/Message';
import LinkButton from '../../components/LinkButton/LinkButton';
import './Projects.css';

function Projects() {
  const location = useLocation();
  console.log(location);
  let message = '';
  if (location.state) {
    message = location.state;
  }

  return (
    <main className="projects">
      <div className="title">
        <h1>My Projects</h1>
        <LinkButton to="/newproject" text="Create new project" />
      </div>
      <Message msg={message} type="success" />
      {/* <Container customClass="start">
        <p>projects...</p>
      </Container> */}
    </main>
  );
}

export default Projects;
