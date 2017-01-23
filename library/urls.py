from django.conf.urls import  url, include
from . import views
from mysite.api import BookResource

book_resource = BookResource()

urlpatterns = [
    url(r'^api/', include(book_resource.urls)),
    url(r'^$', views.book_list, name='home'),
]