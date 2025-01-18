from django.shortcuts import render
from rest_framework import generics
from.serializer import AllPosterSerilizer, AllpostSerilizer, CommentSerilizer, CommentViewAllSerilizer
from django.contrib.auth.models import User
from.models import Post, Poster, Comment

from rest_framework.views import APIView
from rest_framework.response import Response


from.models import Post
# Create your views here.

class AllPosterView(generics.ListCreateAPIView):
    queryset=Poster.objects.all()
    serializer_class =AllPosterSerilizer
    
    
class AllPostView(generics.ListCreateAPIView):
    queryset=Post.objects.all().order_by('-date')
    serializer_class =AllpostSerilizer


class PostView(generics.RetrieveAPIView):
    queryset=Post.objects.all()
    serializer_class =AllpostSerilizer
    
    
class CrudPostView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Post.objects.all()
    serializer_class =AllpostSerilizer


# here commen add

class CommentListview(generics.ListCreateAPIView):
    queryset =Comment.objects.all()
    serializer_class =CommentSerilizer

# here view comment
class CommentListviewAll(generics.ListAPIView):
    # queryset =Comment.objects.all()
    serializer_class =CommentViewAllSerilizer
    
    def get_queryset(self):
        postId =self.kwargs['post_id']
        id_of_post=Post.objects.get(pk=postId)
        return Comment.objects.filter(post =id_of_post)
    


# this used to cound all comment according to post
class CommentCountView(APIView):
    def get(self, request, *args, **kwargs):
        postId = self.kwargs['post_id']
        id_of_post = Post.objects.get(pk=postId)
        count = Comment.objects.filter(post=id_of_post).count()
        return Response({'comment_count': count})


# HERE POSTER REGISTER

class RegisterPosterView(generics.ListCreateAPIView):
    queryset=Poster.objects.all()
    serializer_class =AllPosterSerilizer

# poster login
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse

@csrf_exempt
def poster_login(request):
    email=request.POST['email']
    password=request.POST['password']
    
    try:
        poster=Poster.objects.get(email=email, password=password)
    except Poster.DoesNotExist:
        poster=None   
    if poster:
        return JsonResponse({'bool':True, 'user_id':poster.id, 'name':poster.name})
    else:
        return JsonResponse({'bool':False})
