import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/album';

class Library extends Component {
  constructor(props) {
     super(props);
     this.state = { albums: albumData };
   }

  render() {
    return (
      <section className='library'>
        {
          this.state.albums.map( (album,index) =>
          <Link to={`/album/${album.slug}`} key={index}>
            <div id='album-cover'><img src={album.albumCover} alt={album.title} height='290' width='290' /></div>
           <div className='album-info'>
            <div>{album.title}</div>
            <div>{album.artist}</div>
            <div>{album.songs.length} songs</div>
           </div>
          </Link>
          )
        }
      </section>
    );
  }
}

export default Library;
