const key = 'AIzaSyDtu7s2zIdQY3NqmJA1IntPDe5_-jySCCE'

const endpoints = {
  endPointsNewest: `https://www.googleapis.com/books/v1/volumes?q=romance&orderBy=newest&key=${key}`,
  endPointsHorror: `https://www.googleapis.com/books/v1/volumes?q=horror&key=${key}&maxResults=20`,
  endPointsScifi: `https://www.googleapis.com/books/v1/volumes?q=scifi&orderBy=newest&key=${key}&maxResults=20`,
  endPointsArt: `https://www.googleapis.com/books/v1/volumes?q=mythology&key=${key}&maxResults=20`,
  endPointsCoding : `https://www.googleapis.com/books/v1/volumes?q=programming&key=${key}&maxResults=20`,
  endPointsClassics : `https://www.googleapis.com/books/v1/volumes?q=JaneAusten&key=${key}&maxResults=20`

}


export default endpoints;