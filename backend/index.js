require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({
	origin: process.env.ALLOWED_ORIGINS,
	methods: ['GET']
}))

app.use(express.json())

const port = process.env.PORT || 3000

// Route -> http://localhost:3001/api/v1
app.use("/api/v1", require('./routes'))

app.use("/", (req,res) => { res.status(404).send("Ruta no disponible")} )

app.listen(port, () => {
	console.log(`http://localhost:${port}`)
});
