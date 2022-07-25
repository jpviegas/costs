import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Layout/Container/Container';
import Loading from '../../components/Layout/Loading/Loading';
import './Project.css';

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const url = 'http://localhost:5000/';

  useEffect(() => {
    fetch(`${url}projects/${id}`, {
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
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.name ? (
        <div className="project-details">
          <Container customClass="column">
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
                    <span>Budget</span>R${project.budget}
                  </p>
                </div>
              ) : (
                <div className="project-info">
                  <p>Project Form</p>
                </div>
              )}
            </div>
          </Container>
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
