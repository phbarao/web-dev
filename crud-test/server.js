const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

// MongoDB
const connectionString = 'mongodb+srv://admin:Admin1234@applab.oaceo.mongodb.net/<dbname>?retryWrites=true&w=majority'

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('applab-db')
    const pricesCollection = db.collection('prices')
    const servicesCollection = db.collection('services')

    //MIDDLEWARES
    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static(__dirname + '/public'))
    app.use(bodyParser.json())

    // ROUTES
    // CREATE NEW PRICE
    app.post('/prices', (req, res) => {
      pricesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })

    // NEW_ITEM
    app.post('/services', (req, res) => {
      servicesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/relatorios')
        })
        .catch(error => console.error(error))
    })

    // READ
    app.get('/', (req, res) => {
      pricesCollection.find().sort({serviceName:1}).toArray()
        .then(results => {
          res.render('index.ejs', { prices: results })
        })
        .catch(error => console.error(error))
    })

    app.get('/novo-item', (req, res) => {
          res.render('new-item.ejs')
    })

    app.get('/relatorios', (req, res) => {
      servicesCollection.find().sort({conclusionDate:1}).toArray()
        .then(results => {
          res.render('reports.ejs', { services: results })
        })
        .catch(error => console.error(error))
    })

    app.listen(3000, function() {
        console.log('Listening on 3000');
    })
  })
  .catch(error => console.error(error))
