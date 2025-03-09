from django.shortcuts import render

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from pymongo import ReturnDocument



def connect_to_database():
    # TODO: don't hardcode username & password
    uri = "mongodb+srv://cmd-f-2025:bmNuFkoCwhJk49AS@cluster0.mma1n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    # Create a new client and connect to the server
    client = MongoClient(uri, server_api=ServerApi('1'))

    database = client.get_database("cmd-f")
    client.close()
    users = database.get_collection("users")
    return users

def get_data():
    users = connect_to_database()
    # Query for a movie that has the title 'Back to the Future'
    query = { "phone_number": 6049992837 }
    user = users.find_one(query)
    user["_id"] = str(user["_id"])
    return user

def delete_data():
    users = connect_to_database()
    users.find_one_and_delete
    return 204

def insert_data():
    users = connect_to_database()
    print('test')
    # print(data)
    query = {"phone_number":6049992837}
    user = users.find_one_and_update(filter=query, update={})
    return 500

#TODO: change insert to update. Cause insert sucks, and it's an update.
def update_verified():
    users = connect_to_database()
    print('test')
    query = {"phone_number":6049992837} #{'$inc': {'x': 3}}
    user = users.find_one_and_update(filter=query, update=({'$set':{'is_verified':True}}))
    user["_id"] = str(user["_id"])
    return user


#TODO: change insert to update. Cause insert sucks, and it's an update.
def create_user():
    users = connect_to_database()

    user = users.insert_one(
        {
	        "name":"Rachwle",
	        "phone_number":6049992845,
            "emergency_contacts": [
                {
                "contact_order": 1,
                "name_id": "The Kid",
                "phone_number": 6047782938
                }
            ],
            "sessions": {
                "check_ins": [
                    {
                        "location":"coords",
                        "notes":"plate number: xyz"
                    }
                ],
                "check_ins_missed": 0,
                "check_in_threshold": 3,
                "check_in_freq": 300
            },
            "is_verified": False
        })
    #user.inserted_id is the newly made user
    if user.acknowledged:
        return 200
    return 500


#insert_verification_number
def insert_verification_number():
    users = connect_to_database()
    print('test')
    # print(data)
    query = {"phone_number":6049992857}
    ver_num = 12345
    user = users.find_one_and_update(filter=query, update={'$set':{'verification_number':ver_num}}, return_document=ReturnDocument.AFTER)
    if user['verification_number'] == ver_num:
        return 200
    return 500
