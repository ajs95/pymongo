import pymongo
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["myDatabase"]
peopletest = db["peopletest"]
for x in peopletest.find():
    print(x)
db = client["customersdb"]
customers = db["customers"]
for x in customers.find():
    print(x)
