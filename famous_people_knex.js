let input = process.argv;

const settings = require("./settings"); // settings.json

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});


knex.select('*').from('famous_people')
// .where('first_name', '=', process.argv[2])
// .orWhere('last_name', '=', process.argv[2])
.asCallback(function(err, rows) {
  if (err) return console.error(err);
    console.log(rows);
    process.exit();
});


