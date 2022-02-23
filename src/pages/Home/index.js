import React from 'react';
import Asset from '../../components/Asset';

import artist_img from '../../resources/images/artist.jpg'
import album_img from '../../resources/images/album.jpg'
import streaming_img from '../../resources/images/streaming.jpg'
import { Container } from './styles';
import Select from 'react-select';


const techCompanies = [
  { label: "Apple", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Netflix", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 },
];

function Home() {
  let artist = {label: 'Artist', banner: artist_img}
  let album = {label: 'Album', banner: album_img}
  let streaming = {label: 'Streaming', banner: streaming_img}

  return (
      <div>
        <Select options={ techCompanies } />
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