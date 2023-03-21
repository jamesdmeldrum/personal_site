from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='blog-home'),
    path('experience', views.experience, name='professional-experience'),

]