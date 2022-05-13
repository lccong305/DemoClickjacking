var btn = document.querySelector(".btn");

var account = [];
function handleSubmit(e) {
  var form = document.getElementById("form");
  var psw = document.getElementById("psw");
  var usn = document.getElementById("usn");
  e.preventDefault();
  const username = usn.value;
  const password = psw.value;
  console.log(username);
  console.log(password);
  if (username.length > 0) {
    account.push({ username: username, password: password });
  }

  console.log(account);
}

btn.addEventListener("click", handleSubmit);

// var mysql = require('mysql');
// var con = mysql.createConnection({
//     host:'localhost',
//     user: 'root',
//     password: '',
//     database: 'data_hack'
// })

// con.connect(function(err) {
//     if(err) throw err;
//     console.log('connected')

//     var sql  = 'insert into account_bank (username, password) values ?)';
//     var values  = [[
//         '1191', '123456'
//     ]]

//     con.query(sql, [values], function(err, result) {
//         if(err) console.log(err)
//     })
// })

// // btn.addEventListener("click", handleSubmit);
