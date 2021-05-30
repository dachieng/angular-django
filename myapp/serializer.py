from myapp.models import Movies
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']


class MoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = "__all__"
