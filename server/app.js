const express = require('express');
const axios = require('axios');
const cors = require('cors')
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/movies', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies1.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '9dda88e499msh80c9e8008f62435p1d728djsnfa28e5eb5c06',
      'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// const express = require('express')
// const axios = require('axios');
// const app = express()

// const port = 3000



// app.use(cors());
// app.use(express.json());

// app.get('/', async (req, res) => {
  

//     const options = {
//       method: 'GET',
//       url: 'https://anime-db.p.rapidapi.com/anime',
//       params: {
//         page: '1',
//         size: '15'
//       },
//       headers: {
//         'X-RapidAPI-Key': '9dda88e499msh80c9e8008f62435p1d728djsnfa28e5eb5c06',
//         'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
//       }
//     };
    
//     try {
//         const response = await axios.request(options);
//         res = response
//         console.log(res.data);
//     } catch (error) {
//         console.error(error);
//     }
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




// const options = {
//   method: 'GET',
//   url: 'https://anime-db.p.rapidapi.com/anime',
//   params: {
//     page: '1',
//     size: '15'
//   },
//   headers: {
//     'X-RapidAPI-Key': '9dda88e499msh80c9e8008f62435p1d728djsnfa28e5eb5c06',
//     'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
//   }