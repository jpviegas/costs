import PropTypes from 'prop-types';

function Container({ children, styles, customClass }) {
  return (
    <div className={`${styles.container} ${styles[customClass]}`}>
      {children}
    </div>
  );
}

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.node.isRequired,
  styles: PropTypes.node.isRequired,
};
