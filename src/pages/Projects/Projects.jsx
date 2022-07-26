import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../../components/Layout/Container/Container';
import Loading from '../../components/Layout/Loading/Loading';
import Message from '../../components/Layout/Message/Message';
import LinkButton from '../../components/LinkButton/LinkButton';
import ProjectCard from './ProjectCard/ProjectCard';
import './Projects.css';

function Projects() {
  document.title = 'Costs | Projects';

  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState('');
  const location = useLocation();
  const url = 'http://localhost:5000';

  useEffect(() => {
    fetch(`${url}/projects`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setRemoveLoading(true);
      })
      .catch((err) => new Error(err));
  }, []);

  let message = '';
  if (location.state) {
    message = location.state;
  }

  const removeProject = (id) => {
    fetch(`${url}/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage('Successfully deleted!');
      })
      .catch((err) => new Error(err));
  };

  return (
    <main className="projects">
      <div className="title">
        <h1>My Projects</h1>
        <LinkButton to="/newproject" text="Create new project" />
      </div>
      {message && <Message msg={message} type="success" />}
      {projectMessage && <Message msg={projectMessage} type="error" />}

      <Container container="container" customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category}
              handleRemove={removeProject}
              key={project.id}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>There are no projects yet...</p>
        )}
      </Container>
    </main>
  );
}

export default Projects;
