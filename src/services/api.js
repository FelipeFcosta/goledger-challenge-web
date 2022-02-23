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

export function deleteAsset(item){
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
      "location": item['location'],
      "description": item['description'],
      "year": item['year'],
      "nTracks": item['nTracks'],
      "genre": item['genre'],
      "explicit": item['explicit'],
      "artist": {
        "@key": artistKey
      }
    }]
  })
}



export default api