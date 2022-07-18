import './Form.css';

function SubmitButton({ text }) {
  return (
    <button className="submit-button" type="submit">
      {text}
    </button>
  );
}

export default SubmitButton;
