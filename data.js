conn = new Mongo();
db = conn.getDB("myDatabase");
db.peopletest.save({city:"Mumbai", country:"India", language: "Hindi"});
db.peopletest.save({city:"Pune", country:"India", language: "Hindi"});
