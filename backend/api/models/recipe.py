from django.db import models

# Create your models here.

class OriginChoices(models.TextChoices):
  BE = 'Belgium'
  FR = 'France'
  UK = 'United Kingdom'
class Recipe(models.Model):
  stars = models.IntegerField()
  title = models.CharField(max_length=256)
  sub_title = models.CharField(max_length=256)
  cover_image = models.ImageField('images')
  text = models.CharField(max_length=2058)
  origin = models.CharField(max_length=50, choices=OriginChoices, default=OriginChoices.BE)

  def __str__(self):
    return self.title