import React, {Component} from 'react';

import '../layout/components/footer.sass';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <h2 className="footer__header">
          Be the first to know when it's ready
        </h2>
        <form className="footer__form">
          <input className="footer__input" type="email" placeholder="Email..." />
          <button className="footer__button">Subscribe</button>
        </form>
        <p className="footer__disclaimer">
          You can unsubscribe at any time.
        </p>
        <p className="footer__disclaimer">
          Defi Accelerator relies on an appropriate scaling solution and may never 
          come to fruition. Interest rates are subject to change and are not 
          guaranteed. Use at your own risk.
        </p>
        <hr className="footer__hr" />
        <div className="footer__links">
          <a href="https://github.com/KadenZipfel" className="footer__link">Github</a>
          <p className="footer__link">
            Made with love by Kaden Zipfel
          </p>
          <a href="https://discord.gg/cVNTgt" className="footer__link">Discord</a>
        </div>
      </footer>
    );
  }
}

export default Footer;