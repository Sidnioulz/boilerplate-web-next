import Icon from 'components/Icon';
import PropTypes from 'prop-types';
import css from 'sass/components/Button.scss';

const Button = props => (
  <button
    type={props.type}
    disabled={!!([true, 'true', 'disabled'].includes(props.disabled) || props.inProgress)}
    onClick={props.handler}
    className={`${
      css.Button}${
      !props.children ? ` ${css.ButtonNoText}` : ''} ${
      props.className || ''}`}
  >
    {props.icon ? (
      <Icon
        data-test-id="icon"
        className={`${css.ButtonIcon}${props.inProgress
          ? ` ${css[`ButtonIconAnimated__${props.inProgressAnimation}`]}`
          : ''}`}
        name={props.icon}
      />
    ) : ''}
    {props.children ? <span data-test-id="inner-area" className={css.ButtonInner}>{props.inProgress ? props.inProgressText : props.children}</span> : ''}
    {props.tooltip ? <div data-test-id="tooltip" className={css.Tooltip}>{props.tooltip}</div> : ''}
  </button>
);

Button.propTypes = {
  disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  icon: PropTypes.string,
  inProgress: PropTypes.bool,
  inProgressAnimation: PropTypes.oneOf(['slideX', 'spin']),
  inProgressText: PropTypes.string,
  handler: PropTypes.func,
  tooltip: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  disabled: null,
  icon: null,
  inProgress: false,
  inProgressAnimation: 'spin',
  inProgressText: null,
  handler: () => true,
  tooltip: null,
  type: 'button',
};

export default Button;
