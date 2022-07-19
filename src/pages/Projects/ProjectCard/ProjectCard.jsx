import { BsFillTrashFill, BsPencil } from 'react-icons/bs';
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
        {/* <span className={`${[category.toLowerCase()]}`} />  */}
        {/* {category} */}
      </p>
      <div className="project-card-actions">
        <button type="button">
          <BsPencil /> Edit
        </button>
        <button type="button" onClick={remove}>
          <BsFillTrashFill /> Remove
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;
