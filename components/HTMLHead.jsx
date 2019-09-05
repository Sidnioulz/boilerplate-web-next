import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const HTMLHead = props => (
  <Head>
    <link rel="icon" sizes="192x192" href="/static/images/AppIcon.png" />
    <meta name="description" content="Boilerplate site for one-off Web experiments" />
    <meta name="author" content="Steve Dodier-Lazaro" />
    <meta name="copyright" content="gpl-3.0-or-later" />
    <meta name="robots" content="follow" />
    <title>
      { props.title }
      {' – Steve D. Lazaro'}
    </title>
    { props.children }
  </Head>
);

HTMLHead.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

HTMLHead.defaultProps = {
  children: null,
};

export default HTMLHead;
