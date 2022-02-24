import React from 'react';
import Asset from '../../components/Asset';

import logo from '../../resources/images/goledger-logo.png'
import artist_img from '../../resources/images/artist.jpg'
import album_img from '../../resources/images/album.jpg'
import streaming_img from '../../resources/images/streaming.jpg'
import { Container } from './styles';



function Home() {
  let artist = {label: 'Artist', banner: artist_img}
  let album = {label: 'Album', banner: album_img}
  let streaming = {label: 'Streaming', banner: streaming_img}

  return (
      <div>
        <Container>
          <div id='bar'>
            <a href='/'><img id='logo' src={logo}></img></a>
            <a href='/'><span>Music</span></a>
          </div>
          <Asset asset={artist}/>
          <Asset asset={album}/>
          <Asset asset={streaming}/>
        </Container>
      </div>
  );
}

export default Home;