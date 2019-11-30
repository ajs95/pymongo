db = connect("localhost:27017/world");
db.auth("user","password")
db.people.save({city:"Mumbai", country:"India", language: "Hindi"});
db.people.save({city:"Pune", country:"India", language: "Hindi"});
