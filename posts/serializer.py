from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
  class Meta:
    # Campos que solicitaremos del frontend
    model = Post
    # field = ('id','title','content','published','rating','created_at','updated_at')
    fields = '__all__'
