from django.contrib.auth.models import User
from tastypie.authorization import Authorization
from tastypie.resources import ModelResource
from library.models import Book


class BookResource(ModelResource):
    class Meta:
        queryset = Book.objects.all()
        resource_book = 'book'
        authorization = Authorization()


