const express = require('express')
const Routes = require('./routes/api/v1/index');
const connectDB = require('./db/mongodb');
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json());
app.use('/api/v1', Routes);



connectDB()


app.listen(9000, () => {
  console.log("Server started at port 9000.");
});

