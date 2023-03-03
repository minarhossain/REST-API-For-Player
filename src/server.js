const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors())
app.use(morgan("dev"));
app.use(express.json())


app.get('/', (req, res) => {
    res.send("Player Home Page")
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("this is player server");
    console.log(`Server is running http://localhost:${PORT}`);
});