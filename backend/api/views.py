from django.shortcuts import render

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from rest_framework.response import Response

# TODO: don't hardcode username & password
uri = "mongodb+srv://cmd-f-2025:bmNuFkoCwhJk49AS@cluster0.mma1n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Create your views here.

def homeview(request):
    database = client.get_database("sample_mflix")
    movies = database.get_collection("movies")
    # Query for a movie that has the title 'Back to the Future'
    query = { "title": "Back to the Future" }
    movie = movies.find_one(query)
    return Response(
        movie
    )