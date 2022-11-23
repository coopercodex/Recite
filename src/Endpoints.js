



const endpoints = {

  endPointsNewest: `https://www.googleapis.com/books/v1/volumes?q=fiction&key=${process.env.REACT_APP_API_KEY}`,
  endPointsHorror: `https://www.googleapis.com/books/v1/volumes?q=horror&orderBy=newest&key=${process.env.REACT_APP_API_KEY}&maxResults=10`,
  endPointsScifi: `https://www.googleapis.com/books/v1/volumes?q=scifi&=${process.env.REACT_APP_API_KEY}&maxResults=10`,
  endPointsArt: `https://www.googleapis.com/books/v1/volumes?q=mythology&key=${process.env.REACT_APP_API_KEY}&maxResults=10`,
  endPointsCoding: `https://www.googleapis.com/books/v1/volumes?q=programming&key=${process.env.REACT_APP_API_KEY}&maxResults=10`,
  endPointsClassics: `https://www.googleapis.com/books/v1/volumes?q=JaneAusten&key=${process.env.REACT_APP_API_KEY}&maxResults=10`


}

export default endpoints;
