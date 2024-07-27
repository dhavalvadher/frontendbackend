const express = require('express')
const Routes = require('./routes/api/v1/index');
const connectDB = require('./db/mongodb');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const passport = require('passport');
const { googleProvider } = require('./utils/Provider');

const app = express()

app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(require('express-session')({ secret: 'abcdefghijklmnopqrstuvwxyz', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

connectDB()
googleProvider()
// facebookProvider()
app.use('/api/v1', Routes);

app.listen(9000, () => {
  console.log("Server started at port 9000.");
});

