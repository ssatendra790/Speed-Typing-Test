"""
ASGI config for tallytype project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/asgi/
"""
from channels.routing import ProtocolTypeRouter, URLRouter
import os
from channels.security.websocket import AllowedHostsOriginValidator


from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'tallytype.settings')

asgi_application = get_asgi_application()

import multiplayer.routing

application = ProtocolTypeRouter({
    "http":asgi_application,
    "websocket": URLRouter(multiplayer.routing.websocket_urlpatterns)
})
