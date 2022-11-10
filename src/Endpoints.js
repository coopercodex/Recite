const key = 'AIzaSyCtVD_o8dC-z2-0HLcXUpwNPG_Pdo4BgyY'

const endpoints = {
  endPointsNewest: `https://www.googleapis.com/books/v1/volumes?q=romance&orderBy=newest&key=${key}`,
  endPointsHorror: `https://www.googleapis.com/books/v1/volumes?q=horror&key=${key}&maxResults=20`,
  endPointsScifi: `https://www.googleapis.com/books/v1/volumes?q=scifi&orderBy=newest&key=${key}&maxResults=20`,
  endPointsArt: `https://www.googleapis.com/books/v1/volumes?q=romanhistory&key=${key}&maxResults=20`,
}