
from sqlalchemy import insert
import database.tables as tables
import database.connection as connect

def create_class_template(data):
    with connect.engine.connect() as conn:
        query = insert(tables.class_template).values(lecturer_id= data["lecturer_id"], course_name =data["course_name"], course_code = data["course_code"], group=data["group"])
        conn.execute(query)
        conn.commit()