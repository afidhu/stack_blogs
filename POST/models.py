from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Poster(models.Model):
    
    name=models.CharField(max_length=100)
    email=models.CharField(max_length=100, null=True, blank=True)
    password=models.TextField(null=True, blank=True)
    
    def __str__(self):
        return self.name

class Post(models.Model):
    author=models.ForeignKey(Poster, on_delete=models.CASCADE)
    title=models.CharField(max_length=100, null=True, blank=True)
    description=models.TextField(null=True, blank=True)
    image=models.ImageField(upload_to='images/', null=True, blank=True)
    video=models.FileField(upload_to='video/', null=True, blank=True)
    date =models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
    
    


class Comment(models.Model):
    author =models.ForeignKey(Poster, on_delete=models.SET_NULL, null=True)
    post =models.ForeignKey(Post, on_delete=models.CASCADE)
    comment=models.TextField()
    
    