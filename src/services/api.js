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

export function addProduct(data){
    return api.post('/product', JSON.stringify(data));
}

export default api