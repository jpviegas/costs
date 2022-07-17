import './ProjectForm.css';

function ProjectForm() {
  return (
    <form className="project-form">
      <input type="text" placeholder="project's name" />
      <input type="number" placeholder="total" defaultValue={0} min={0} />
      <select name="category-id" id="">
        <option disabled selected value="select">
          Select Category
        </option>
      </select>
      <button className="btn-create" type="submit">
        Create
      </button>
    </form>
  );
}

export default ProjectForm;
