

const endpoints = {
  endPointsNewest: `https://www.googleapis.com/books/v1/volumes?q=fiction&orderBy=newest&key=${key}`,
  endPointsHorror: `https://www.googleapis.com/books/v1/volumes?q=horror&key=${key}&maxResults=10`,
  endPointsScifi: `https://www.googleapis.com/books/v1/volumes?q=scifi&=${key}&maxResults=10`,
  endPointsArt: `https://www.googleapis.com/books/v1/volumes?q=mythology&key=${key}&maxResults=10`,
  endPointsCoding: `https://www.googleapis.com/books/v1/volumes?q=programming&key=${key}&maxResults=10`,
  endPointsClassics: `https://www.googleapis.com/books/v1/volumes?q=JaneAusten&key=${key}&maxResults=10`

}


export default endpoints;