import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import image1 from '../src/profil1.jpg';
import image2 from '../src/profil2t.jpg';
import image3 from '../src/profil3.jpg';
import { DH_NOT_SUITABLE_GENERATOR } from 'constants';

export default class profil extends Component {

  state = {
    nom: "sara",
    image: image1,
    texte: "je m'appelle sarra"
  }
  render() {
    return (<div style={{ width:400,marginRight:'auto',marginLeft:'auto' }}>
      <div  >
        <button onClick={() => { this.setState({ nom: 'nick', image: image3, texte: "je m'appelle nick" }) }}> nick</button>
        <button onClick={() => { this.setState({ nom: 'sara', image: image1, texte: "je m'appelle sara" }) }}> sara</button>
        <button onClick={() => { this.setState({ nom: 'salma', image: image2, texte: "je m'appelle salma" }) }}> salma</button>
      </div>  
      <div>
        <img src={this.state.image}></img>
        <p>{this.state.texte}</p>
      </div>
    </div>
    )
  }


}
