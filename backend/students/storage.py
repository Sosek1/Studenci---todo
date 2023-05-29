from functools import lru_cache


students_data = {}
students_grades = {}


@lru_cache()
def get_students_data():
    """Funkcja robi to i to"""
    return students_data


@lru_cache()
def get_students_grades():
    return students_grades