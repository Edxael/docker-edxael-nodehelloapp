const app = require('express')() 

app.get('/', (req, res) => {
    res.json({ message: 'Yeppp it is working with docker' })
})

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Server up and Running in port: 8080'))