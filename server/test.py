import datetime
import database.models as models
data = {
    "lecturer_id": "L001",
    "course_name": "Introduction to Python",
    "course_code": "PY101",
    "group": "A"
}

class_template = {
    "lecturer_id": "L001",
    "course_name": "Introduction to Python",
    "course_code": "PY101",
    "group": "A"
}

class_instance = {
    "lecturer_id": 123,
    "course_name": "Introduction to SQL",
    "course_code": "SQL101",
    "start_time": "2024-02-14T12:30:00.000Z", 
    "end_time": "2024-02-14T12:30:00.000Z", 
    "location": {"longitude": 40.7128, "latitude": -74.0060},
    "attendance_list": ["student_id_1", "student_id_2"],
    "level_number": 1,
    "group_character": "A"
}

# from flask import Flask, request, jsonify
# import jwt
# from datetime import datetime, timedelta

# app = Flask(__name__)

# # Secret key for encoding and decoding JWTs
# app.config['SECRET_KEY'] = 'your_secret_key'

# # Mock user data (replace with actual database interactions)
# users = [
#     {'id': 1, 'username': 'user1', 'password': 'hashed_password1'},
#     {'id': 2, 'username': 'user2', 'password': 'hashed_password2'},
# ]

# @app.route('/api/login', methods=['POST'])
# def login_user():
#     # Receive user sign-in credentials from the request
#     data = request.json
#     username = data.get('username')
#     password = data.get('password')

#     # Verify credentials and authenticate user (pseudo code)
#     user = authenticate_user(username, password)

#     if user:
#         # Generate a JWT token
#         token_payload = {
#             'user_id': user['id'],
#             'username': user['username'],
#             'exp': datetime.utcnow() + timedelta(days=1)  # Token expiration time
#         }

#         token = jwt.encode(token_payload, app.config['SECRET_KEY'], algorithm='HS256')

#         # Respond with the JWT token in the response body
#         return jsonify({'token': token, 'message': 'User authenticated successfully'})
#     else:
#         return jsonify({'error': 'Invalid credentials'}), 401

# def authenticate_user(username, password):
#     # Mock authentication (replace with actual database interactions)
#     for user in users:
#         if user['username'] == username and user['password'] == password:
#             return user
#     return None


# http://localhost:5000/get_student_classes?course_name=computer&group=C&level=200