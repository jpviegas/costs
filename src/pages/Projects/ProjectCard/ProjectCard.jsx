import { BsFillTrashFill, BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ id, name, budget, category, handleRemove }) {
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
        <Link to={`${id}/edit`}>
          <span>Edit:</span>
          <BsPencil />
        </Link>
        <Link to={`${id}/remove`}>
          <span>Remove:</span>
          <BsFillTrashFill />
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;
