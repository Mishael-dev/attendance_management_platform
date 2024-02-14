
from sqlalchemy import insert
import database.tables as tables
import database.connection as connect


def create_class_template(data):
    with connect.engine.connect() as conn:
        query = insert(tables.class_template).values(
            lecturer_id=data["lecturer_id"], course_name=data["course_name"], course_code=data["course_code"], group=data["group"])
        conn.execute(query)
        conn.commit()
        return {
            "status":"successful",
            "message": "done"
        }


def create_class(data):
    with connect.engine.connect() as conn:
        query = insert(tables.class_instance).values(
            lecturer=data["lecturer_id"],
            course=data["course_name"],
            start_time=data["start_time"],
            end_time=data["end_time"],
            location=data["location"],
            attendance_list=data["attendance_list"],
            level_number=data["level_number"],
            group_character=data["group_character"]
        )
        conn.execute(query)
        conn.commit()
        return "data has been added"
