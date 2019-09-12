import DownloadButton from 'components/DownloadButton';
import { shallow, mount, render } from 'enzyme';

let reusableButton = null;
const reusableButtonProps = {
  type: 'button',
  text: 'Download me',
  icon: 'download',
  tooltip: 'Download the file!',
  inProgressText: 'Doing it!',
  href: '/static/images/AppIcon.png',
  download: 'TheFile.png',
};

describe('DownloadButton', () => {
  /* Reuse the same comp for basic stateless tests, to boost performance. */
  beforeAll(() => {
    reusableButton = mount(
      <DownloadButton
        {...reusableButtonProps}
      >
        {reusableButtonProps.text}
      </DownloadButton>,
    );
  });

  afterAll(() => {
    reusableButton = null;
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('renders without crashing', () => {
    expect(reusableButton).toBeDefined();
    expect(reusableButton.props).toBeDefined();
  });

  it('detects if no href is provided', () => {
    expect(() => {
      mount(<DownloadButton />);
    }).toThrow();
  });

  it('detects if an invalid filename is passed', () => {
    expect(() => {
      mount(<DownloadButton href="whatever" download={-3} />);
    }).toThrow();
  });

  it('triggers a download when given a href string', () => {
    const link = {
      click: jest.fn(),
    };
    jest.spyOn(document, 'createElement').mockImplementation(() => link);

    reusableButton.simulate('click');

    expect(link.download).toEqual(reusableButtonProps.download);
    expect(link.href).toEqual(reusableButtonProps.href);
    expect(link.click).toHaveBeenCalledTimes(1);
  });

  it('triggers a download when given a href function', () => {
    const link = {
      click: jest.fn(),
    };
    const blobMock = jest.fn();
    const computedHref = 'http://example.com/file.ext';
    blobMock.mockReturnValue(computedHref);

    const wrapper = mount(
      <DownloadButton href={blobMock} />,
    );

    jest.spyOn(document, 'createElement').mockImplementation(() => link);
    wrapper.simulate('click');

    expect(link.href).toEqual(computedHref);
    expect(link.click).toHaveBeenCalledTimes(1);
  });

  // TODO: reuse Button tests to avoid regressions on Button/DownloadButton composition
});
