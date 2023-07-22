from django.db import models

class Player(models.Model):
    username = models.CharField(max_length=50, unique=True)

class Game(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    score = models.IntegerField(default=0)
    words_typed = models.IntegerField(default=0)
    completed_at = models.DateTimeField(null=True, blank=True)
    time_taken = models.FloatField(default=0.0)
    words_per_minute = models.FloatField(default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)