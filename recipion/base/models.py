from django.db import models

# Create your models here.

class Item(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField(max_length=500, default='')
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"user name [{self.name}] is just uploaded at {self.created}"