import './Form.css';

function Input({
  name,
  text,
  type,
  placeholder,
  handleOnChange,
  defaultValue,
  min,
}) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        defaultValue={defaultValue}
        min={min}
      />
    </div>
  );
}

export default Input;
