import React, {Component} from 'react';
import axios from 'axios';

import '../layout/components/footer.sass';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      button: 'Subscribe'
    }
  }

  handleChange = (e) => {
    this.setState({email: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/email', {email: this.state.email})
      .then(() => {
        this.setState({button: 'Thanks!'})
      });
  }

  render() {
    return (
      <footer className="footer">
        <h2 className="footer__header">
          Be the first to know when it's ready
        </h2>
        <form className="footer__form" onSubmit={this.handleSubmit}>
          <input 
            className="footer__input" 
            type="email" 
            placeholder="Email..." 
            value={this.state.email} 
            onChange={this.handleChange} 
          />
          <button className="footer__button">{this.state.button}</button>
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
          <p className="footer__link footer__link--name">
            Made with love by Kaden Zipfel
          </p>
          <a href="https://discord.gg/cVNTgt" className="footer__link">Discord</a>
        </div>
      </footer>
    );
  }
}

export default Footer;