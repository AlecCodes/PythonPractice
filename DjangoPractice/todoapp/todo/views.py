from django.shortcuts import render
from .models import Todo
from .forms import TodoForm

# Create your views here.
def index(request):
    todos = Todo.objects.all()
    form = TodoForm()
    return render(request, "index.html", {"todos": todos, "form": form})