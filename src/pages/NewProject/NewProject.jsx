import ProjectForm from '../../components/Project/ProjectForm';
import './NewProject.css';

function NewProject() {
  return (
    <main className="new-project">
      <h1>Create project:</h1>
      <p>Create and then update your services</p>
      <ProjectForm btnText="Create project" />
    </main>
  );
}

export default NewProject;
