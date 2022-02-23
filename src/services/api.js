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
  console.log(item['@assetType'], item['@key'])
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


export default api