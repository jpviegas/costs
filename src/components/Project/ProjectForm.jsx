import { useEffect, useState } from 'react';
import Input from '../Form/Input';
import Select from '../Form/Select';
import SubmitButton from '../Form/SubmitButton';
import './ProjectForm.css';

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(
    projectData || { name: '', budget: 0, category: { id: '', name: '' } }
  );

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
    console.log(project);
  };

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
    console.log(project);
  };

  const handleCategory = (e) => {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
    console.log(project);
  };

  return (
    <form className="project-form" onSubmit={submit}>
      <Input
        name="name"
        text="Name"
        type="text"
        placeholder="Insert projects name"
        handleOnChange={handleChange}
        value={project.name}
      />
      <Input
        name="budget"
        text="Budget"
        type="number"
        defaultValue={0}
        min={0}
        handleOnChange={handleChange}
        value={project.budget}
      />
      <Select
        name="category-id"
        text="Select Category"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category && project.category.id}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
