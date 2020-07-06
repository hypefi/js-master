var db = new Mongo().getDB("playground");

db.employees.find().pretty();
