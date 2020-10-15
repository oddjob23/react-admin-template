from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Todo
from .serializers import TodoSerialzier
# Create your views here.

class TodoViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny, )
    serializer_class = TodoSerialzier
    queryset = Todo.objects.all()