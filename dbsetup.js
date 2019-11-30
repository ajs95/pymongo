conn = new Mongo();
db = conn.getDB("myDatabase");
db.peopletest.save({city:"Mumbai", country:"India", language: "Hindi"});
db.peopletest.save({city:"Pune", country:"India", language: "Hindi"});
db = conn.getDB("admin");
db.createUser({ user: "ajsadmin", pwd: "ajsadmin", roles: [ { role: "root", db: "admin" } ]});
