import ProjectForm from '../../components/project/ProjectForm';
import './NewProject.css';

function NewProject() {
  return (
    <main className="new-project">
      <h1>Create project:</h1>
      <p>Create and then update your services</p>
      <ProjectForm />
    </main>
  );
}

export default NewProject;
