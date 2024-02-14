from flask import Flask, request
import database.models as models
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

@app.route("/send_class_template", methods=["POST"])
def send_class_template():
    data = request.json
    print(data)
    result = models.create_class_template(data)
    return result


@app.route("/send_class_data", methods=["POST"])
def send_class_data():
    data = request.json
    print(data)
    result = models.create_class(data)
    return result

@app.route("/get_class_templates", methods=["GET"])
def get_class_templates():
    result = models.get_class_templates()
    return result


if __name__ == "__main__":
    app.run()
