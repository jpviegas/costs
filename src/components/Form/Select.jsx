import PropTypes from 'prop-types';
import './Form.css';

function Select({ name, text, type, placeholder, handleOnChange, value }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{text}:</label>
      <select
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      >
        <option value="">Select</option>
      </select>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleOnChange: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
