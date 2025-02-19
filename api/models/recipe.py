from django.db import models

# Create your models here.
class Recipe(models.Model):
  stars = models.IntegerField
  title = models.CharField(max_length=256)

  def __str__(self):
    return self.title