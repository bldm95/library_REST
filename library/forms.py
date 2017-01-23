from django import forms
from library.models import Book
from rest_framework import serializers

class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = ('name', 'author', 'year_of_publication', 'description', 'image')


class DeleteBookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = ('name', 'author', 'year_of_publication', 'description', 'image')


class BookListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'name',  'author', 'year_of_publication', 'description', 'image')
