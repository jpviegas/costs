import './Form.css';

function Select({ name, text, handleOnChange, value, options }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ''}
      >
        <option value="No category">Select</option>
        {options.map((option) => (
          <option value={option.name} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
