const express = require('express')
const app = express()
const port = 5000
const data = require('./data.js')

app.get('/cities', (req, res) => {
  res.status(200).json(data)
})

app.get('/:id', (req, res) => {
    const {id} = req.params;
    const city = data.find(city => city.id===parseInt(id));
    if(city){
        res.status(200).json(city)
    }
    else{
        res.status(404).send('City bulunmadiii')
    }
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/', (req, res, next) => {
    const filters = req.query;
    const filteredUsers = data.filter(city => {
      let isValid = true;
      for (key in filters) {
        console.log(key, city[key], filters[key]);
        isValid = isValid && city[key] == filters[key];
      }
      return isValid;
    });
    res.send(filteredUsers);
  });