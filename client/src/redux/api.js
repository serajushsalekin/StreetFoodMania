import axios from 'axios'

const url = 'http://streetfoodmania.herokuapp.com'

const api = axios.create({
    baseURL: url
})

export default api
