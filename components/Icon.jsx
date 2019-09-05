import PropTypes from 'prop-types';

const Icon = props => (
  <span className={`${props.className ? `${props.className} ` : ''}icon-${props.name}`} />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
