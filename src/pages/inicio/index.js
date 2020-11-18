import React from 'react';

import './style.css';
import '../reset.css';


class Lista extends React.Component {
    state = {
        photos: []
    }; 

  componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/photos')
          .then(res => res.json())
          .then(res => {
          this.setState({
        photos: res
      });
    });
  }
  render() { 
    return(
      <div className="photosContainer">
        <ul>
          {this.state.photos.map(item => (
            <li key={item.id}>
              <p><b>id:</b> {item.id}</p>
              <p><b>title:</b> {item.title}</p>
              <p><b>url:</b> {item.url}</p>
              <p><b>thumbnailUrl:</b> {item.thumbnailUrl}</p>
              <img src={item.url} alt={item.title} />
            </li>
          ))}
          
        </ul>
      </div>
    );
  }
}

export default Lista;