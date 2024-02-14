from sqlalchemy import create_engine, Table, Column, String, DateTime, Float, ARRAY, Integer, MetaData, JSON
import database.connection as connection 

metadata = MetaData()

class_template = Table(
    'class_template',
    metadata,
    Column('id', Integer, primary_key=True, autoincrement=True),
    Column('lecturer_id', Integer),
    Column('course_name', String),
    Column('course_code', String),
    Column('group', String)
)

class_instance = Table(
    'class_instance',
    metadata,
    Column('id', Integer, primary_key=True, autoincrement=True),
    Column('lecturer', String),
    Column('course', String),
    Column('start_time', DateTime),
    Column('end_time', DateTime),
    Column('location', JSON, nullable=False),
    Column('attendance_list', ARRAY(String)),
    Column('level_number', Integer),
    Column('group_character', String)
)


metadata.create_all(connection.engine)