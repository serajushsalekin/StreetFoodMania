import axios from 'axios'

const url = 'https://streetfoodmania.herokuapp.com'

const api = axios.create({
    baseURL: url
})

export default api
