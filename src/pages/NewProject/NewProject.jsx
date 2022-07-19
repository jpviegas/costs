import { useNavigate } from 'react-router-dom';
import ProjectForm from '../../components/Project/ProjectForm';
import './NewProject.css';

function NewProject() {
  const navigate = useNavigate();

  const createPost = (project) => {
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then(() => {
        navigate('/projects', { state: 'Successfully created!' });
      })
      .catch((err) => new Error(err));
  };

  return (
    <main className="new-project">
      <h1>Create project:</h1>
      <p>Create and then update your services</p>
      <ProjectForm handleSubmit={createPost} btnText="Create project" />
    </main>
  );
}

export default NewProject;
