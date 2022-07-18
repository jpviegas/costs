import PropTypes from 'prop-types';

function Container({ children, styles, customClass }) {
  return (
    <section className={`${styles.container} ${styles[customClass]}`}>
      <article>{children}</article>
    </section>
  );
}

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.node.isRequired,
  styles: PropTypes.node.isRequired,
};
