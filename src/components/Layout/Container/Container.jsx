import './Container.css';

function Container({ children, container, customClass }) {
  return (
    <section className={`${container} ${[customClass]}`}>{children}</section>
  );
}

export default Container;
