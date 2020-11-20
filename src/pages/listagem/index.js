import React, {useEffect, useState,}from 'react';

import api from '../../services/api';
import Header from '../../components/header/header';
import { IoIosHeartEmpty } from "react-icons/io";

import './style.css';
import '../reset.css';

export default function Listagem(){

  const [photo, setPhotos ] = useState();
  const [album, setAlbum] = useState(0);

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
      <div className="description">
        <h2>Digite o numero do album que deseja buscar no campo abaixo!</h2>
      </div>
      <input
        type="number"
        id="idAlbum"
        onChange={e => setAlbum(e.target.value)}
        value={album}
        placeholder="Digite o numero do album"
      />     
        
    </div>

      <div className="album1">     
          <div className="item">

          {photo.filter(id => id.albumId === +album).map(filteredAlbum => (
            <li key={filteredAlbum.id}>
              <h5 id="album">Album ID : {album}</h5>
              <h5 id="id">ID da Imagem : {filteredAlbum.id}</h5>
              <h5 id="title">Title : {filteredAlbum.title}</h5>
              <div className="icon">
                <IoIosHeartEmpty size={20} color="#FF669D" />
              </div>
              <div className="imagem">
                <img src={filteredAlbum.thumbnailUrl} alt={filteredAlbum.title} />
              </div>
            </li>
          ))} 

          </div>         
      </div>  

    </div>
  )
}
