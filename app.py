from flask_bootstrap import Bootstrap
from flask import Flask
from datetime import datetime
from flask import render_template

app = Flask(__name__)
Bootstrap(app)


@app.route("/")
def home():
    return render_template("first.html")

# New functions


@app.route("/tips/")
def about():
    return render_template("tips.html")


@app.route("/login/")
def contact():
    return render_template("login.html")


@app.route("/hello/")
@app.route("/hello/<name>")
def hello_there(name=None):
    return render_template(
        "hello_there.html",
        name=name,
        date=datetime.now()
    )

