const express = require('express')
const countriesJSON = require('./countries.json')
const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Aplicación express corriendo en el puerto ${PORT}`)
})


app.get('/', (req, res) => {
    res.send('Estamos en la pagina inicio')
})

app.get('/countries', (req , res) => {
    res.send(countriesJSON)
})

app.get('/countries/:code', (req, res) => {
    const codeid = req.params.code;
    const foundcountrie = countriesJSON.find(function(countries) {
    console.log(countries.code === codeid)
    return countries.code === codeid
    })

    if (foundcountrie){
        res.send(foundcountrie)
    } else {
        res.status(404).send (`No encontramos el producto ${codeid}`)
    }


})