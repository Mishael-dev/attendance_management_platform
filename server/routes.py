from flask import Flask, request 
import database.models as models

app = Flask(__name__)

@app.route("/send_class_template_data", methods=["POST"])
def send_class_template_data():
    data = request.json
    print(data)
    models.create_class_template(data)
    return "hello data had been added"

@app.route("/send_class_data", methods=["POST"])
def send_class_data():
    data = request.json
    print(data)
    models.create_class_template(data)
    return "hello data had been added"

if __name__ == "__main__":
    app.run()
