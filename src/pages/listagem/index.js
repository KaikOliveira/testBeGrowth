import React, {useEffect, useState,}from 'react';

import api from '../../services/api';
import Header from '../../components/header/header';

import './style.css';
import '../reset.css';


export default function Listagem(){

  const [photo, setPhotos ] = useState();
  const [album, setAlbum] = useState();

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
      <Header />

    <div className="search">
      <input 
        id="idAlbum"
        onChange={e => setAlbum(e.target.value)}
        value={album}
      />
      
      <label>{album}</label>
    </div>

      <div className="album1">     
          <div className="item">
          {photo.filter(id => id.albumId === album).map(filteredAlbum => (
            <li key={filteredAlbum.id}>
              <p>{filteredAlbum.title}</p>
              <div className="imagem">
                <img src={filteredAlbum.url} alt={filteredAlbum.title} />
              </div>
            </li>
          ))} 
          </div>
     
      
  
      </div>  

    </div>

    )

}