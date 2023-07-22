from django.urls import path
from . import views
from django.contrib import admin


urlpatterns = [
   
    path('multiplayer_game/', views.multiplayer_game, name="multiplayer_game"),
       
]