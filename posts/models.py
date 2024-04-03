from django.db import models

# Create your models here.
class Post(models.Model):
  title =  models.CharField(max_length=100)
  content = models.TextField(blank=True, null=True)
  published = models.BooleanField(default=False)
  rating  = models.IntegerField(blank=True, null=True, default=0)
  created_at  = models.DateTimeField(auto_now_add=True)
  updated_at  = models.DateTimeField(auto_now=True)


  def __str__(self) -> str:
    return self.title + " - " + str(self.created_at)[:10]
