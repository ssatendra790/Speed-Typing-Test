from django.urls import path
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator
from multiplayer.consumers import GameConsumer

application = ProtocolTypeRouter({
    'websocket':AllowedHostsOriginValidator(
        URLRouter([
            path('', GameConsumer)
        ])
    )
})