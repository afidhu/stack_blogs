from django.contrib.auth.models import User
from rest_framework import serializers
from.models import Post, Poster, Comment

class AllpostSerilizer(serializers.ModelSerializer):
    class Meta:
        model=Post
        fields="__all__"
        
        
class AllPosterSerilizer(serializers.ModelSerializer):
    class Meta:
        model=Poster
        fields="__all__"
        
        
        
class CommentSerilizer(serializers.ModelSerializer):
    class Meta:
        model=Comment
        fields="__all__"
        
        
        
class CommentViewAllSerilizer(serializers.ModelSerializer):
    class Meta:
        model=Comment
        fields=["id", 'author', 'post', 'comment']
        depth=1
        
        