import axios from 'axios'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

const api = axios.create({
    baseURL: 'http://192.168.56.1:3333/'
})

export default api