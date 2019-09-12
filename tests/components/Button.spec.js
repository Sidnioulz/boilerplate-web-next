import Button from 'components/Button';
import { shallow, mount, render } from 'enzyme';

let reusableButton = null;
const reusableButtonProps = {
  type: 'button',
  text: 'Click me',
  icon: 'send',
  tooltip: 'Send me to production!',
  inProgressText: 'Doing it!',
};

describe('Button', () => {
  /* Reuse the same comp for basic stateless tests, to boost performance. */
  beforeAll(() => {
    reusableButton = mount(
      <Button
        {...reusableButtonProps}
      >
        {reusableButtonProps.text}
      </Button>,
    );
  });

  afterAll(() => {
    reusableButton = null;
  });

  it('renders without crashing', () => {
    expect(reusableButton).toBeDefined();
    expect(reusableButton.props).toBeDefined();
  });

  it('detects if an invalid button type is passed', () => {
    expect(() => {
      mount(<Button type="WRONG" />);
    }).toThrow();
  });

  it('has a handler when it is a button type, which is called on click', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Button handler={mock} />);
    wrapper.simulate('click');
    expect(wrapper.props().onClick).toBeDefined();
    expect(mock).toHaveBeenCalledWith();
  });

  it('cannot be clicked when it is disabled', () => {
    const wrapper = shallow(
      <Button type="button" disabled />,
    );

    expect(wrapper.prop('disabled')).toBeTruthy();
  });

  it('shows the text it was passed', () => {
    const inner = reusableButton.find('[data-test-id="inner-area"]');
    expect(inner).toBeDefined();
    expect(inner.text()).toEqual(reusableButtonProps.text);
  });

  it('shows an icon if one is passed', () => {
    const icon = reusableButton.find('[data-test-id="icon"]');
    expect(icon).toHaveLength(1);
    expect(icon.prop('name')).toEqual(reusableButtonProps.icon);
  });

  it('shows no icon by default', () => {
    const wrapper = mount(<Button>No icon</Button>);
    const icon = wrapper.find('[data-test-id="icon"]');
    expect(icon).toHaveLength(0);
  });

  it('shows no tooltip if none was passed', () => {
    const wrapper = mount(<Button />);
    const tooltip = wrapper.find('[data-test-id="tooltip"]');
    expect(tooltip).toHaveLength(0);
  });

  it('shows a tooltip if one was passed', () => {
    const tooltip = reusableButton.find('[data-test-id="tooltip"]');
    expect(tooltip).toHaveLength(1);
  });

  it('shows the right tooltip content', () => {
    const tooltip = reusableButton.find('[data-test-id="tooltip"]');
    expect(tooltip.text()).toEqual(reusableButtonProps.tooltip);
  });

  it('detects if an invalid progress animation type is passed', () => {
    expect(() => {
      mount(<Button inProgressAnimation />);
    }).toThrow();
  });

  it('shows in-progress text and is disabled while the handler runs', () => {
    const wrapper = render(
      <Button {...Object.assign({}, reusableButtonProps, { inProgress: true })}>
        {reusableButtonProps.text}
      </Button>,
    );

    const inner = wrapper.find('[data-test-id="inner-area"]');
    expect(inner).toBeDefined();
    expect(inner.text()).toEqual(reusableButtonProps.inProgressText);
    expect(wrapper.prop('disabled')).toBeTruthy();
  });

  it('resets back to the original text after the handler is done', () => {
    const wrapper = mount(
      <Button {...Object.assign({}, reusableButtonProps, { inProgress: true })}>
        {reusableButtonProps.text}
      </Button>,
    );
    wrapper.setProps({ inProgress: false });

    const inner = wrapper.find('[data-test-id="inner-area"]');
    expect(inner).toBeDefined();
    expect(inner.text()).toEqual(reusableButtonProps.text);
    // TODO find how to test DOM attr disabled, since we'd need to use render for that.
  });
});
