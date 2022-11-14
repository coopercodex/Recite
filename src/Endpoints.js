const key = 'AIzaSyAog16sScVOZy2f7FuIManjZ71-CMLgkVA'

const endpoints = {
  endPointsNewest: `https://www.googleapis.com/books/v1/volumes?q=fiction&key=${key}`,
  endPointsHorror: `https://www.googleapis.com/books/v1/volumes?q=horror&orderBy=newest&key=${key}&maxResults=10`,
  endPointsScifi: `https://www.googleapis.com/books/v1/volumes?q=scifi&=${key}&maxResults=10`,
  endPointsArt: `https://www.googleapis.com/books/v1/volumes?q=mythology&key=${key}&maxResults=10`,
  endPointsCoding: `https://www.googleapis.com/books/v1/volumes?q=programming&key=${key}&maxResults=10`,
  endPointsClassics: `https://www.googleapis.com/books/v1/volumes?q=JaneAusten&key=${key}&maxResults=10`

}


export default endpoints;