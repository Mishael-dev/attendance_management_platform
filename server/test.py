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

models.create_class(class_instance)
