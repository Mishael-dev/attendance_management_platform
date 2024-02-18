
from click import group
from sqlalchemy import insert, select, and_
import database.tables as tables
import database.connection as connect


def create_class_template(data):
    with connect.engine.connect() as conn:
        query = insert(tables.class_template).values(
            lecturer_id=data["lecturer_id"], duration=data["duration"], course_name=data["course_name"], course=data["course"], course_code=data["course_code"], group=data["group"], level=data["level"])
        conn.execute(query)
        conn.commit()
        return {
            "status": "successful",
            "message": "done"
        }


def create_class(data):
    with connect.engine.connect() as conn:
        query = insert(tables.class_instance).values(
            lecturer=data["lecturer_id"],
            course_name=data["course_name"],
            course_code=data["course_code"],
            course=data["course"],
            status=data["status"],
            start_time=data["start_time"],
            end_time=data["end_time"],
            location=data["location"],
            attendance_list=data["attendance_list"],
            level=data["level"],
            group=data["group"]
        )
        conn.execute(query)
        conn.commit()
        return {
            "status": "successful",
            "message": "done"
        }


def get_class_templates():
    with connect.engine.connect() as conn:
        query = select(tables.class_template)
        result = conn.execute(query)

        rows = result.fetchall()

        class_templates = [
            dict(zip(result.keys(), row))
            for row in rows
        ]

        return {
            "message": "done",
            "status": "successful",
            "data": class_templates
        }


def get_class_instances():
    with connect.engine.connect() as conn:
        query = select(tables.class_instance)
        result = conn.execute(query)

        rows = result.fetchall()

        class_instances = [
            dict(zip(result.keys(), row))
            for row in rows
        ]

        return {
            "message": "done",
            "status": "successful",
            "data": class_instances
        }


def add_student(data):
    with connect.engine.connect() as conn:
        query = insert(tables.student).values(
            first_name=data["first_name"], 
            full_name=data["full_name"], 
            course=data["course"], 
            matric_number=data["matric_number"], 
            group=data["group"],
            level=data["level"], 
            password=data["password"], 
            email=data["email"]).returning(tables.student)
        result = conn.execute(query).fetchone()
        conn.commit()
        return {
            "status": "successful",
            "message": "done",
            "user": dict(result._asdict())
        }


def add_lecturer(data):
    with connect.engine.connect() as conn:
        query = insert(tables.lecturer).values(
            first_name=data["first_name"], full_name=data["full_name"], password=data["password"], email=data["email"]).returning(tables.lecturer)
        result = conn.execute(query).fetchone()
        conn.commit()
        return {
            "status": "successful",
            "message": "done",
            "user": dict(result._asdict())
        }


def get_single_student(matric_number, password):
    with connect.engine.connect() as conn:
        query = select(tables.student).where(
            and_(
                tables.student.c.password == password,
                tables.student.c.matric_number == matric_number
            )
        )
        result = conn.execute(query)

        row = result.fetchone()

        if row:
            student_data = dict(zip(result.keys(), row))

            return {
                "message": "done",
                "status": "successful",
                "data": student_data
            }
        else:
            return {
                "message": "Data wasn't found on the server",
                "status": "unsuccessful"
            }


def get_single_lecturer(email, password):
    with connect.engine.connect() as conn:
        query = select(tables.lecturer).where(
            and_(
                tables.lecturer.c.password == password,
                tables.lecturer.c.email == email
            )
        )
        result = conn.execute(query)

        row = result.fetchone()

        if row:
            student_data = dict(zip(result.keys(), row))

            return {
                "message": "done",
                "status": "successful",
                "data": student_data
            }
        else:
            return {
                "message": "Data wasn't found on the server",
                "status": "unsuccessful"
            }


def get_student_classes(course, group, level):
    with connect.engine.connect() as conn:
        query = select(tables.class_instance).where(
            and_(
                tables.class_instance.c.course == course,
                tables.class_instance.c.group == group,
                tables.class_instance.c.level == level  # Fix here
            )
        )
        result = conn.execute(query)

        rows = result.fetchall()

        student_classes = [
            dict(zip(result.keys(), row))
            for row in rows
        ]

        return {
            "message": "done",
            "status": "successful",
            "data": student_classes
        }


def get_lecturer_classes(id):
    with connect.engine.connect() as conn:
        query = select(tables.class_instance).where(
                tables.class_instance.c.lecturer == id
        )
        result = conn.execute(query)

        rows = result.fetchall()

        lecturer_classes = [
            dict(zip(result.keys(), row))
            for row in rows
        ]

        return {
            "message": "done",
            "status": "successful",
            "data": lecturer_classes
        }

from sqlalchemy import select

from datetime import datetime

def add_student_attendance(student_id, arrival_time, class_id):
    with connect.engine.connect() as conn:
        # Retrieve student information
        student_query = select(tables.student).where(tables.student.c.id == student_id)
        student_result = conn.execute(student_query)
        student_data = student_result.fetchone()

        if not student_data:
            return {
                "message": "Student not found",
                "status": "failed"
            }

        class_instance_query = select(tables.class_instance).where(
            (tables.class_instance.c.id == class_id)
        )
        class_instance_result = conn.execute(class_instance_query)
        class_instance_data = class_instance_result.fetchone()

        if not class_instance_data:
            return {
                "message": "No class instance found for the given student and time",
                "status": "failed"
            }

        # Update attendance list in class instance
        attendance_list = class_instance_data.attendance_list or []
        student_attendance = {
            "student_id": student_id,
            "arrival_time": arrival_time  # Assuming arrival_time is already in the correct format
        }
        attendance_list.append(student_attendance)

        # Update the database
        update_query = (
            tables.class_instance.update()
            .where(tables.class_instance.c.id == class_instance_data.id)
            .values(attendance_list=attendance_list)
        )
        conn.execute(update_query)
        conn.commit()

        return {
            "message": "Attendance added successfully",
            "status": "successful"
        }
