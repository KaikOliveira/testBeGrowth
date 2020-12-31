import React from 'react';

import logo from '../../image/logo.png';
import './header.css';
import '../../pages/reset.css';

export default function Header(){
    return(
        
        <header>
          <div id="image">
            <img src={logo} alt="Logo" />
          </div>
          <div id="title">
            <h2>Teste desenvolvedor Be Growth</h2>
          </div>
        </header>
    )
}