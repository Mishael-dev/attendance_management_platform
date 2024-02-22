from math import radians, sin, cos, sqrt, atan2
import os
import xlsxwriter
from datetime import datetime
import pandas as pd

from click import group

# student_location = {
#     "lat" : 44.9349348,
#     "long":39348348
# }

# class_location = {
#     "lat":89.03944,
#     "long":9.43094
# }


def distance(student_location, class_location):
    lat1 = student_location["lat"]
    lon1 = student_location["long"]

    lat2 = class_location['lat']
    lon2 = class_location["long"]

    lat1, lon1, lat2, lon2 = map(radians, [lat1, lon1, lat2, lon2])

    # Haversine formula
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    a = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    R = 6371000.0

    distance = R * c
    return distance


def euclidean_distance(student_location, class_location):
    lat1 = student_location["lat"]
    lon1 = student_location["long"]

    lat2 = class_location['lat']
    lon2 = class_location["long"]

    # Euclidean distance formula
    distance = sqrt((lat2 - lat1)**2 + (lon2 - lon1)**2)

    return distance


def student_location_data(student_location, class_location):
    data = {
    }

    data["distance"] = euclidean_distance(student_location, class_location)

    data["in_location"] = True

    if euclidean_distance(student_location, class_location) > 10:
        data["in_location"] = False

    return (data)


def create_file(file_name):
    script_directory = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(script_directory, file_name)

    with open(file_path, 'w'):
        pass

def get_formatted_date():
    current_time = datetime.now()
    formatted_datetime = current_time.strftime("%d %b %Y %I:%M%p")
    return formatted_datetime
    

def create_excel_file(data):
    # users = [
    #     {"name": "Alice", "age": 25, "address": "123 Main St"},
    #     {"name": "Bob", "age": 30, "address": "456 Oak Ave"},
    #     {"name": "Charlie", "age": 22, "address": "789 Pine Ln"},
    #     {"name": "David", "age": 28, "address": "101 Elm Blvd"},
    #     {"name": "Eva", "age": 35, "address": "202 Cedar Rd"},
    #     {"name": "Frank", "age": 27, "address": "303 Birch Dr"},
    #     {"name": "Grace", "age": 32, "address": "404 Maple Ct"},
    #     {"name": "Harry", "age": 24, "address": "505 Spruce Ave"},
    #     {"name": "Ivy", "age": 29, "address": "606 Willow St"},
    #     {"name": "Jack", "age": 31, "address": "707 Fir Ln"}]
    
    if not data:
        print("The data list is empty.")
        return
    
    course_id = 1
    output_file = f"{course_id}" + ".xlsx"

    keys = list(data[0].keys())

    df = pd.DataFrame(data, columns=keys)

    df.to_excel(output_file, index=False)

    return output_file
