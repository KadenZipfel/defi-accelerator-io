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

    // Should be error handling here
    axios.post('/email', {email: this.state.email});

    this.setState({button: 'Thanks!', email: ''});
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
          Use of Defi Accelerator has risk and can lead to fund loss. 
          Interest rates are simply estimates and are not guaranteed. 
          Use at your own risk.
        </p>
        <hr className="footer__hr" />
        <div className="footer__links">
          <a href="https://github.com/KadenZipfel" className="footer__link">Github</a>
          <p className="footer__link footer__link--name">
            Made with love by Kaden Zipfel
          </p>
          <a href="https://discord.gg/hQGMu3R" className="footer__link">Discord</a>
        </div>
      </footer>
    );
  }
}

export default Footer;