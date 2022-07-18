import PropTypes from 'prop-types';
import './Form.css';

function SubmitButton({ text }) {
  return (
    <button className="submit-button" type="submit">
      {text}
    </button>
  );
}

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubmitButton;
