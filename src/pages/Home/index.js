import React from 'react';
import Asset from '../../components/Asset';

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
      <h1>Music Registration</h1>
        <Container>
          <Asset asset={artist}/>
          <Asset asset={album}/>
          <Asset asset={streaming}/>
        </Container>
      </div>
  );
}

export default Home;