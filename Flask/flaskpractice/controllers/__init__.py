from flask import Blueprint

routes = Blueprint("home",__name__)

@routes.get('/')
def home():
    return {"home":"This is the home route"}