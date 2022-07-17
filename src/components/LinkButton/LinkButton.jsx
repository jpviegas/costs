import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LinkButton.css';

function LinkButton({ to, text }) {
  return (
    <Link className="link-button" to={to}>
      {text}
    </Link>
  );
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LinkButton;
