import React from 'react';
import App from 'next/app';
import css from 'sass/layout/_layout.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className={css.Layout}>
        <header className={css.Header}>
          <h1>Web Boilerplate</h1>
        </header>
        <div className={css.PageWrapper}>
          <Component {...pageProps} />
        </div>
        <footer className={css.Footer}>
          <h6>Made by Steve Dodier-Lazaro. Under GPL v3 or later.</h6>
        </footer>
      </div>
    );
  }
}

export default MyApp;
