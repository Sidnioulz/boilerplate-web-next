import HTMLHead from 'components/HTMLHead';
// import fetch from 'isomorphic-unfetch';
// import Link from 'next/link';
// import PropTypes from 'prop-types';

const Page = props => (
  <>
    <HTMLHead title="Boilerplate Web" />
    <p>Hello World.</p>
  </>
);

Page.propTypes = {
};

Page.getInitialProps = async function () {
  return { };
};

export default Page;
