from myapp.models import Movies
from django.shortcuts import render
from .serializer import MoviesSerializer, UserSerializer
from django.contrib.auth.models import User
from rest_framework import viewsets


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movies.objects.all()
    serializer_class = MoviesSerializer
