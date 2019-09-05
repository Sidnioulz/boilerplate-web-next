import Button from 'components/Button';
import PropTypes from 'prop-types';

const DownloadButton = props => (
  <Button
    type="submit"
    {...props}
    handler={() => {
      const link = document.createElement('a');
      link.href = typeof props.href === 'string' ? props.href : props.href();
      link.download = props.download || link.href.substr(link.href.lastIndexOf('/') + 1);
      link.click();
    }}
  />
);

DownloadButton.propTypes = {
  icon: PropTypes.string,
  download: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};

DownloadButton.defaultProps = {
  icon: null,
  download: null,
};

export default DownloadButton;
