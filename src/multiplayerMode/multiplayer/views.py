from django.shortcuts import render
from .models import Game, Player
from .consumers import GameConsumer


def multiplayer_game(request):
    
    username = f"Guest_{Player.objects.count() + 1}"
    player, _ = Player.objects.get_or_create(username=username)
    return render(request, "multiplayer.html", {"player": player})