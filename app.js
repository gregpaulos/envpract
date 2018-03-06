const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Yo World!'))

app.listen(3006, () => console.log('Example app listening on port 3006!'))