import axios from 'axios'

export default axios.create({
    baseURL: 'https://scheduler-app-backend.herokuapp.com'
})