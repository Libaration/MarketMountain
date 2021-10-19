import React, { Component } from 'react';
import './Signup.css';
import logo from '../images/logo.png';
interface Props {}
interface State {}

class Signup extends Component<Props, State> {
  private overlayRef: React.RefObject<HTMLDivElement>;
  private popupRef: React.RefObject<HTMLDivElement>;
  constructor(props: Props) {
    super(props);
    this.overlayRef = React.createRef();
    this.popupRef = React.createRef();
  }
  state = {
    email: 'Email Address',
    emailconfirm: 'Confirm Email',
    password: 'Password',
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  openPopup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.overlayRef!.current!.style.display = 'block';
    this.popupRef!.current!.style.display = 'flex';
  };

  closePopup = () => {
    this.overlayRef!.current!.style.display = 'none';
    this.popupRef!.current!.style.display = 'none';
  };
  signUpClick = () => {
    if (this.state.email !== this.state.emailconfirm) {
      alert('Emails do not match');
    }
  };

  render() {
    return (
      <>
        <div
          className="overlay"
          ref={this.overlayRef}
          onClick={this.closePopup}
        ></div>
        <div className="signupContainer">
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button className="signupButton" onClick={this.openPopup}>
            GET STARTED
          </button>
        </div>
        <div className="registerPopupContainer">
          <div className="popup" ref={this.popupRef}>
            <img src={logo} alt="logo" />
            Please confirm you are using the official site
            <form>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <br />
              <input
                type="text"
                name="emailconfirm"
                value={this.state.emailconfirm}
                onChange={this.handleChange}
              />
              <br />
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </form>
            <a href="#" onClick={this.signUpClick}>
              Sign Up
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
