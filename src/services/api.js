import axios from 'axios'

const baseURL =
  'https://gist.githubusercontent.com/defrontcompri/0800434ce965a4a9f9126e9ccba02f32/raw/9eb65d4b2c7e161bbb12fb2baa3cd363a60cdf93/gistfile1.json'

const api = axios.create({
  baseURL: baseURL,
})

export default api
