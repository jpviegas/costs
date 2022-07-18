import PropTypes from 'prop-types';
import './Form.css';

function Input({
  name,
  text,
  type,
  id,
  placeholder,
  handleOnChange,
  value,
  defaultValue,
  min,
}) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        defaultValue={defaultValue}
        min={min}
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleOnChange: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
};

export default Input;
