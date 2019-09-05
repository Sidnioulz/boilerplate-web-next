import css from 'sass/components/Button.scss';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';

const Button = props => (
  <button
    type={props.type}
    disabled={props.disabled === true || props.disabled === 'disabled' || props.disabled === 'true'}
    onClick={props.handler}
    className={`${
      css.Button}${
      props.scale === 'small' ? ` ${css.ButtonSmall}` : ''}${
      !props.children ? ` ${css.ButtonNoText}` : ''} ${
      props.className || ''}`}
  >
    {props.icon ? (
      <Icon
        className={`${css.ButtonIcon}${props.inProgress ? ` ${css.ButtonIconAnimated}` : ''}`}
        name={props.icon}
      />
    ) : ''}
    {props.children ? <span className={css.ButtonInner}>{props.inProgress ? props.inProgressText : props.children}</span> : ''}
    {props.tooltip ? <div className={css.Tooltip}>{props.tooltip}</div> : ''}
  </button>
);

Button.propTypes = {
  disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  icon: PropTypes.string,
  inProgress: PropTypes.bool,
  inProgressText: PropTypes.string,
  handler: PropTypes.func,
  scale: PropTypes.oneOf(['small', 'medium']),
  tooltip: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  disabled: null,
  icon: null,
  inProgress: false,
  inProgressText: null,
  handler: () => true,
  scale: 'medium',
  tooltip: null,
  type: 'button',
};

export default Button;
