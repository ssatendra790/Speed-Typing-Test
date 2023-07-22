import json
import random
from .sentences import SENTENCES
import asyncio
from channels.generic.websocket import WebsocketConsumer, AsyncWebsocketConsumer
from channels.layers import channel_layers
from channels.db import database_sync_to_async
from .models import Game, Player

from channels.consumer import AsyncConsumer

class GameConsumer(AsyncWebsocketConsumer):
    async def connect(self, event):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        player_data = json.loads(text_data)
        player_data["username"] = "Guest_" + str(random.randint(10000, 99999))
        player_data["id"] = random.randint(10000, 99999)

        if player_data.get("type") == "join_game":
            await self.assign_random_id(player_data)

    async def assign_random_id(self, player_data):
        await asyncio.sleep(5) 
        player_data["id"] = random.randint(10000, 99999)  
        players = await self.get_all_players_data()
        data = {
            "type": "start_game",
            "common_paragraph": self.get_common_paragraph(),
            "players": players
        }
        await self.channel_layer.group_send("players", {"type": "send_game_update", "data": data})

    






