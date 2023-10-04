import React from 'react';

const Footer = () => {
  return (
    <>
      {' '}
      <footer className="page__footer page__footer--small page__footer--dark">
        <div className="contentFlex">
          <nav
            className="navFlex page__footerNav page__footerNav--small page__footerNav--dark"
            aria-label="Statista Footer Navigation Small"
          >
            <ul className="navFlex__list">
              <li className="navFlex__item">
                <a className="navFlex__text" href="https://www.statista.com/">
                  Home
                </a>
              </li>
              <li className="navFlex__item">
                <a
                  className="navFlex__text"
                  href="https://www.statista.com/aboutus/"
                >
                  About Statista
                </a>
              </li>
              <li className="navFlex__item">
                <a
                  className="navFlex__text"
                  href="https://www.statista.com/working-at-statista/"
                >
                  Career
                </a>
              </li>
              <li className="navFlex__item">
                <a
                  className="navFlex__text"
                  href="https://www.statista.com/contact/"
                >
                  Contact
                </a>
              </li>
              <li className="navFlex__item">
                <a
                  className="navFlex__text"
                  href="https://www.statista.com/help/"
                >
                  Help &amp; FAQ
                </a>
              </li>
              <li className="navFlex__item">
                <a
                  className="navFlex__text"
                  href="https://de.statista.com/statistik/imprint/#privacy"
                >
                  Privacy
                </a>
              </li>
              <li className="navFlex__item">
                <a
                  className="navFlex__text"
                  href="https://www.statista.com/statistik/imprint/"
                >
                  Imprint
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
