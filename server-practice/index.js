const { req, res } = require('express');

const express = require('express');
const app = express();
const PORT = 5500;

app.use(express.json())

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })
} )

app.post('/tshirt/:id', (req, res ) => {
    const {id} = req.params;
    const {logo} = req.body;
    if(!logo) {
        res.status(418).send({message: 'we need a logo'})
    }

    res.send({
        tshirt: '👕 with your ${logo} and ID of ${id}',
    })
})

app.listen(
    PORT,
    () => console.log('its alive on http://localhost:${PORT}')
)