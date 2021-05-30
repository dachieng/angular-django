
from django.conf.urls import include
from django.contrib import admin
from django.db import router
from django.urls import path
from rest_framework.routers import DefaultRouter
from myapp.views import MovieViewSet, UserViewSet

router = DefaultRouter()
router.register('users', UserViewSet, basename="users"),
router.register('movies', MovieViewSet, basename="movies")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path("auth_user/", include('rest_framework.urls'))
]
