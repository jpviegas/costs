import { useLocation } from 'react-router-dom';
import Message from '../../components/Layout/Message/Message';

function Projects() {
  const location = useLocation();
  console.log(location);
  let message = '';
  if (location.state) {
    message = location.state;
  }

  return (
    <main className="projects">
      <h1>Projects</h1>
      <Message msg={message} type="success" />
    </main>
  );
}

export default Projects;
