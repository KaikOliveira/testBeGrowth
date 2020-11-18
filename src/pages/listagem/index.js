import React, {useEffect, useState,}from 'react';

import api from '../../services/api';
import logo from '../../image/logo.png';

import './style.css';
import '../reset.css';


export default function Listagem(){

  const [photo, setPhotos ] = useState();

  useEffect( () => {
    api.get('photos').then(response => {
      setPhotos(response.data);
    });
  }, []);
  
  if (!photo) {
    return <p>Carregando...</p>
  }

  return (
    <div id="listagemConteiner">
      <aside>
        <header>
          <img src={logo} alt="Logo" />
          <div id="title">
            <h2>Processo seletivo Be Growth</h2>
          </div>
        </header>
      </aside>

      <div className="album1">
        <ul>
          <div className="item">
          {photo.filter(id => id.albumId === 1).map(filteredAlbum => (
            <li key={filteredAlbum.id}>
              <p>{filteredAlbum.title}</p>
              <div className="imagem">
                <img src={filteredAlbum.url} alt={filteredAlbum.title} />
              </div>
            </li>
          ))} 
          </div>
        </ul>
      
  
      </div>  

    </div>

    )

}