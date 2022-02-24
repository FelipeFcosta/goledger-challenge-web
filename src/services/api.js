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

export async function deleteAsset(asset){
  return api.delete('/invoke/deleteAsset', {data: {
    "key": {
      "@assetType": `${asset['@assetType']}`,
      "@key": `${asset['@key']}`
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

export function updateAsset(asset){
  return api.put(`invoke/updateAsset`, {
    "update": {
      "@assetType": asset['@assetType'],
      "@key": asset['@key'],
      "description": asset['description'],
      "year": asset['year'],
      "nTracks": asset['nTracks'],
      "genre": asset['genre'],
      "explicit": asset['explicit']
    }
  })
}

export function createAsset(asset, artistKey=null){
  return api.post(`invoke/createAsset`, {
    "asset": [{
      "@assetType": asset['@assetType'],
      "name": asset['name'],
      ...(asset['location']) && {"location": asset['location']},
      ...(asset['description']) && {"description": asset['description']},
      ...(asset['year']) && {"year": asset['year']},
      ...(asset['nTracks']) && {"nTracks": asset['nTracks']},
      ...(asset['genre']) && {"genre": asset['genre']},
      ...(asset['explicit']) && {"explicit": asset['explicit']},
      ...(artistKey) && {"artist": {"@key": artistKey}},
    }]
  })
}

export function searchAssetByQuery(assetType, query){
  let words = query.split(' ')
  let regexStr = ""
  
  // create regex search string
  if (query.length > 0) {
    for (let i = 0; i < words.length; i++) {
      regexStr += `((?i).*${words[i]}.*)|`
    }
    regexStr = regexStr.substring(0, regexStr.length - 1)
  } else {
    regexStr = '.*'
  }

  return api.post(`/query/search`, {
    "query": {
      "selector": {
        "@assetType": assetType,
        "name": {
          "$regex": regexStr
        }
      }
    }
  })
}



export default api