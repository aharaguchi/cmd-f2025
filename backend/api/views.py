import json
from django.shortcuts import render

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from django.template import Template
from django.http import JsonResponse

from database.getdata import get_data


# TODO: don't hardcode username & password

# database = client.get_database("sample_mflix")
# movies = database.get_collection("movies")
# # Query for a movie that has the title 'Back to the Future'
# query = { "title": "Back to the Future" }
# movie = movies.find_one(query)
# print(type(movie))
# print(movie)

# Create your views here.

@api_view(['GET'])
@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def get_user_data(request):
    data = get_data()
    return Response(data)

@api_view(['GET'])
@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def get_user_data(request):
    data = get_data()
    return Response(data)