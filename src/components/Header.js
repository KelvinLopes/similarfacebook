import React, { Component } from 'react';



import logo from '../assets/facebook-logo.svg';
import profileIcon from '../assets/icon_profile.svg';

class Header extends Component {
  render() {
  return(
    <div className="content">
    <div className="header">
      <div className="logo">
      <img src={ logo } alt="Logo"/>
      </div>
      <div className="profile">
        <span><strong>Meu Perfil</strong></span>
        <img src={profileIcon} alt="Profile Icon"/>
      </div>
    </div>
    </div>

   )
  }
}

export default Header;