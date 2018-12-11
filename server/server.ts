import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as cors from 'cors';
import * as mysql from 'mysql';
import * as dotenv from 'dotenv';
import setRoutes from './routes';

// setRoutes = require('routes')

const app = express();
const router = express.Router();
dotenv.load({ path: '.env' });

app.use(cors());
app.use(bodyparser.json());
app.use('/api', router); //user /api in services

var con = mysql.createConnection({
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPassword,
  database: process.env.database,
  port : 8889
});

// // Create DB
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE IF NOT EXISTS landmark", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

setRoutes(app);

app.get('/', (req,res) => res.send('hello world'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port', process.env.PORT || 3000);
});


export{app, con};
