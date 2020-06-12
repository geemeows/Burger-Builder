import axios from 'axios'

export const serverHttp = axios.create({
    baseURL: 'https://burger-builder-5404b.firebaseio.com/'
})