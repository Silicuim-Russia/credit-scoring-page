import axios from 'axios'

const postAnalyseData = (dataJson) => {
  const response = axios.post('http://localhost:8000/analyse/', dataJson)

  if (response.status === 200) {
    return response.data
  } else {
    return null
  }
}

export default postAnalyseData
