from django.urls import path
from.views import AllPosterView, AllPostView, PostView, CrudPostView, CommentListview, CommentListviewAll, CommentCountView, RegisterPosterView
from.import views

urlpatterns = [
    path('poster/', AllPosterView.as_view()),
    path('post/', AllPostView.as_view()),
    path('postView/<int:pk>/',PostView.as_view()),
    path('crudPostView/<int:pk>',CrudPostView.as_view()),
    
    path('commentlistview/',CommentListview.as_view()),
    path('commentlistviewall/<int:post_id>/',CommentListviewAll.as_view()),
    path('CommentListViewcount/<int:post_id>/', CommentCountView.as_view()),
    
    
    path('login/', views.poster_login),
    path('register/', RegisterPosterView.as_view())
]
