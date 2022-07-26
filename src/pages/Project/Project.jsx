import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import Container from '../../components/Layout/Container/Container';
import Loading from '../../components/Layout/Loading/Loading';
import Message from '../../components/Layout/Message/Message';
import ProjectForm from '../../components/Project/ProjectForm';
import './Project.css';

function Project() {
  document.title = 'Costs | Project';
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');
  const url = 'http://localhost:5000';
  const HALF_SECOND = 500;

  useEffect(() => {
    setTimeout(() => {
      fetch(`${url}/projects/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProject(data);
        })
        .catch((err) => new Error(err));
    }, HALF_SECOND);
  }, []);

  const editPost = () => {
    if (project.budget < project.cost) {
      setMessage('Invalid value');
      setType('error');
      return false;
    }
    fetch(`${url}/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        setMessage('Successifuly updated');
        setType('success');
      })
      .catch((err) => new Error(err));
    return true;
  };

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.name ? (
        <div className="project-details">
          {/* <Container customClass="column"> */}
          <Link to="/projects">
            <button type="button">back</button>
          </Link>
          {message && <Message type={type} msg={message} />}
          <div className="details-container">
            <h1>Project: {project.name}</h1>
            <button type="button" onClick={toggleProjectForm}>
              {!showProjectForm ? 'Edit project' : 'Close'}
            </button>
            {!showProjectForm ? (
              <div className="project-info">
                <p>
                  <span>Category:</span>
                  {project.category.name}
                </p>
                <p>
                  <span>Budget:</span>R${project.budget}
                </p>
                <p>
                  <span>Total:</span>R${project.cost}
                </p>
              </div>
            ) : (
              <div className="project-info">
                <ProjectForm
                  handleSubmit={editPost}
                  btnText="Finish"
                  projectData={project}
                />
              </div>
            )}
          </div>
          {/* </Container> */}
        </div>
      ) : (
        <Loading />
      )}
      {/* <p>project</p> */}
      {/* <p>{project.name}</p> */}
    </>
  );
}

export default Project;
