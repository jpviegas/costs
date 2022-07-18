import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Input from '../Form/Input';
import Select from '../Form/Select';
import SubmitButton from '../Form/SubmitButton';
import './ProjectForm.css';

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <form className="project-form">
      <Input
        name="projectsName"
        text="Name"
        type="text"
        id="0"
        placeholder="Insert projects name"
        handleOnChange={0}
        value=""
      />
      <Input
        name="projectsBudget"
        text="Budget"
        type="number"
        id="1"
        handleOnChange={0}
        defaultValue={0}
        min={0}
      />
      <Select name="category-id" text="Select Category" options={categories} />

      <SubmitButton text={btnText} />
    </form>
  );
}

ProjectForm.propTypes = {
  btnText: PropTypes.string.isRequired,
};

export default ProjectForm;
