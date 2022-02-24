import axios from "axios"

const api = axios.create({
    baseURL: "http://ec2-100-26-133-117.compute-1.amazonaws.com/api/"
})

export function getArtistByKey(key){
  return api.post(`/query/readAsset`, {
    "key": {
      "@assetType": 'artist',
      "@key": `${key}`
    }
  })
}

export async function deleteAsset(item){
  return api.delete('/invoke/deleteAsset', {data: {
    "key": {
      "@assetType": `${item['@assetType']}`,
      "@key": `${item['@key']}`
    }
  }})
}

export function searchByAssetType(assetType){
  return api.post(`/query/search`, {
    "query": {
      "selector": {
        "@assetType": `${assetType}`
      }
    }
  })
}

export function searchAlbumsByArtistKey(artistKey){
  return api.post(`/query/search`, {
    "query": {
      "selector": {
        "@assetType": "album",
        "artist": {
          "@key": artistKey
         }
      }
    }
  })
}

export function updateAsset(item){
  return api.put(`invoke/updateAsset`, {
    "update": {
      "@assetType": item['@assetType'],
      "@key": item['@key'],
      "description": item['description'],
      "year": item['year'],
      "nTracks": item['nTracks'],
      "genre": item['genre'],
      "explicit": item['explicit']
    }
  })
}

export function createAsset(item, artistKey=null){
  return api.post(`invoke/createAsset`, {
    "asset": [{
      "@assetType": item['@assetType'],
      "name": item['name'],
      ...(item['location']) && {"location": item['location']},
      ...(item['description']) && {"description": item['description']},
      ...(item['year']) && {"year": item['year']},
      ...(item['nTracks']) && {"nTracks": item['nTracks']},
      ...(item['genre']) && {"genre": item['genre']},
      ...(item['explicit']) && {"explicit": item['explicit']},
      ...(artistKey) && {"artist": {"@key": artistKey}},
    }]
  })
}



export default api