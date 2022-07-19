import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Project.css';

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
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

  return (
    <>
      <p>project</p>
      <p>{project.name}</p>
    </>
  );
}

export default Project;
