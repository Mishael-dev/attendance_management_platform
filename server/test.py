
import database.models as models
data = {
    "lecturer_id": "L001",
    "course_name": "Introduction to Python",
    "course_code": "PY101",
    "group": "A"
}
models.create_class_template(data)
