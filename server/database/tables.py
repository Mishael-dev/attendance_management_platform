from sqlalchemy import create_engine, Table, Column, String, DateTime, Float, ARRAY, Integer, MetaData, JSON
import database.connection as connection 

metadata = MetaData()

student = Table(
    'student',
    metadata,
    Column('id', Integer, primary_key=True, autoincrement=True),
    Column("first_name", String),
    Column("full_name", String),
    Column("matric_number", Integer),
    Column("email", String),
    Column("password", String),
    Column("level", Integer)
)

lecturer = Table(
    'lecturer',
    metadata,
    Column('id', Integer, primary_key=True, autoincrement=True),
    Column("first_name", String),
    Column("full_name", String),
    Column("email", String),
    Column("password", String)
)

class_template = Table(
    'class_template',
    metadata,
    Column('id', Integer, primary_key=True, autoincrement=True),
    Column('lecturer_id', Integer),
    Column('course_name', String),
    Column('course_code', String),
    Column('duration', Integer),
    Column('level', Integer),
    Column('group', String)
)

class_instance = Table(
    'class_instance',
    metadata,
    Column('id', Integer, primary_key=True, autoincrement=True),
    Column('lecturer', String),
    Column("status", String),
    Column('course_name', String),
    Column('course_code', String),
    Column('start_time', DateTime),
    Column('end_time', DateTime),
    Column('location', JSON, nullable=False),
    Column('attendance_list', JSON),
    Column('level', Integer),
    Column('group', String)
)


metadata.create_all(connection.engine)