const MongoClient = require('mongodb').MongoClient;
const url = mongodb+srv://rim:<rim>@cluster0.qwegikj.mongodb.net/?appName=Cluster0
MongoClient.connect(url, function(err, db) {
if(err) { return console.log(err); return;}
var dbo = db.db("library");
var collection = dbo.collection('pets');
console.log("Success!");
db.close();
});
