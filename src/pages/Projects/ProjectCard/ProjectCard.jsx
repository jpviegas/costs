import { BsFillTrashFill, BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ id, name, budget, category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <article name="article project card" className="project-card">
      <h1>Name: {name}</h1>
      <p>
        <span>Budget:</span> R${budget}
      </p>
      <p className="category-text">
        <span className={`${[category.name.toLowerCase()]}`} />
        {category.name}
      </p>
      <div className="project-card-actions">
        <Link to={`../project/${id}`}>
          <BsPencil /> Edit
        </Link>
        <button type="button" onClick={remove}>
          <BsFillTrashFill /> Remove
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;
