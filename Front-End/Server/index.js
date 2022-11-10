const bodyParser = require("body-parser")
const express = require('express')
const mysql = require('mysql2');
const app = express();
const port = 5000;
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: true}))

const db =  mysql.createPool({
  host: '127.0.0.1',
  port:'3306',
  user: 'root',
  password: 'Viky2019',
  database: 'finances'
})

app.use(cors());
app.use(express.json());

app.post('/api/insert',(req,res)=>{
  const fname = req.body.fname;
  const amount = req.body.amount;
  const type = req.body.type;

  
  var datetime = new Date();
  let date = datetime.getDate();
  let month = datetime.getMonth() + 1;
  let year = datetime.getFullYear();

  datetime = (datetime.toISOString().slice(0,10));

  const sqlInsert = "INSERT INTO finances.expense (user_id,date,amount,purpose) VALUES (?,?,?,?)"
  const sqlInsertdate = "INSERT IGNORE INTO dates (dates, date, month, year) VALUES (?,?,?,?);"
  db.query(sqlInsert, [fname,datetime,amount,type],(err,results)=>{
      //console.log(results);
  });
  db.query(sqlInsertdate, [datetime,datetime,date,month,year],(err,results)=>{
    console.log(err);
  });
});

app.post('/api/insertInc',(req,res)=>{
  const fname = req.body.fname;
  const amount = req.body.amount;
  const type = req.body.type;

  
  var datetime = new Date();
  let date = datetime.getDate();
  let month = datetime.getMonth() + 1;
  let year = datetime.getFullYear();

  datetime = (datetime.toISOString().slice(0,10));

  const sqlInsert = "INSERT INTO finances.income (user_id,date,amount,source) VALUES (?,?,?,?)"
  const sqlInsertdate = "INSERT IGNORE INTO dates (dates, date, month, year) VALUES (?,?,?,?);"
  db.query(sqlInsert, [fname,datetime,amount,type],(err,results)=>{
      //console.log(results);
  });
  db.query(sqlInsertdate, [datetime,date,month,year],(err,results)=>{
    console.log(err);
  });

})


app.post('/api/insertSav',(req,res)=>{
  const fname = req.body.fname;
  const amount = req.body.amount;
  const type = req.body.type;

  
  var datetime = new Date();
  let date = datetime.getDate();
  let month = datetime.getMonth() + 1;
  let year = datetime.getFullYear();

  datetime = (datetime.toISOString().slice(0,10));

  const sqlInsert = "INSERT INTO finances.savings (user_id,date,amount) VALUES (?,?,?)"
  const sqlInsertdate = "INSERT IGNORE INTO dates (dates, date, month, year) VALUES (?,?,?,?);"
  db.query(sqlInsert, [fname,datetime,amount],(err,results)=>{
      //console.log(results);
  });
  db.query(sqlInsertdate, [datetime,date,month,year],(err,results)=>{
    console.log(err);
  });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
