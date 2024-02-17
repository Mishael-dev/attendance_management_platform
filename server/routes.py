from flask import Flask, request, jsonify
import database.models as models
from flask_cors import CORS
import jwt
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)

app.config["SECRET_KEY"] = 'qR7pXw2fL9sJ3mY8tZa6o'

@app.route("/send_class_template", methods=["POST"])
def send_class_template():
    data = request.json
    print(data)
    result = models.create_class_template(data)
    return result


@app.route("/get_class_templates", methods=["GET"])
def get_class_templates():
    result = models.get_class_templates()
    return result

@app.route("/get_class_instances", methods=["GET"])
def get_class_instances():
    result = models.get_class_instances()
    return result

@app.route("/send_class_data", methods=["POST"])
def send_class_data():
    data = request.json
    print(data)
    result = models.create_class(data)
    return result

@app.route("/register_student", methods=["POST"])
def register_student():
    data = request.json
    result = models.add_student(data)
    user = result["user"]

    token_payload = {
        "user":"student",
        "user_id":user["id"],
        "exp": datetime.utcnow() + timedelta(days=7)
    }

    token = jwt.encode(token_payload, app.config["SECRET_KEY"], algorithm="HS256" )
    return {
        "status":"successful",
        "message" : "login was successful",
        "token":token,
        "data":user,
    }
    

@app.route("/register_lecturer", methods=["POST"])
def register_lecturer():
    data = request.json
    result = models.add_lecturer(data)
    user = result["user"]

    token_payload = {
        "user":"lecturer",
        "user_id":user["id"],
        "exp": datetime.utcnow() + timedelta(days=7)
    }

    token = jwt.encode(token_payload, app.config["SECRET_KEY"], algorithm="HS256" )
    return {
        "status":"successful",
        "message" : "login was successful",
        "token":token,
        "data":user,
    }

@app.route("/sign_student", methods=["POST"])
def sign_student():
    data = request.json
    name = data["name"]
    matric_number = app["matric_number"]
    return "hello world"

@app.route("/sign_lecturer", methods=["POST","OPTIONS"])
def sign_lecturer():
    data = request.json
    result = models.add_lecturer(data)
    user = result["user"]

    token_payload = {
        "user":"lecturer",
        "user_id":user["id"],
        "exp": datetime.utcnow() + timedelta(days=7)
    }

    token = jwt.encode(token_payload, app.config["SECRET_KEY"], algorithm="HS256" )
    return {
        "status":"successful",
        "message" : "login was successful",
        "token":token,
        "data":user,
    }

if __name__ == "__main__":
    app.run()