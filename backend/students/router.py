from fastapi import APIRouter, HTTPException
from .storage import get_students_data, get_students_grades
from .schema import Student, Update_student, Mark


router = APIRouter()

students_data = get_students_data()
students_grades = get_students_grades()

@router.get("/")
async def read_students():
    if len(students_data) > 0:
        return students_data
    return "There are no students"


@router.get("/{student_id}")
async def read_student(student_id: int):
    if student_id not in students_data.keys():
        raise HTTPException(status_code=404, detail="Student with entered id is not found")
    return students_data[student_id]


# @router.get("/{student_id}/marks")
# async def read_student_marks(student_id: int):


@router.post("/")
async def create_student(student: Student):
    if not (isinstance(student.first_name, str) and isinstance(student.last_name, str) and isinstance(student.id, int)):
        raise HTTPException(status_code=418, detail="Some of entered data types are wrong")
    if len(student.first_name) > 0 and len(student.first_name) > 0 :
        students_data[student.id] = student
        return student
    raise HTTPException(status_code=418, detail="Entered data cannot be empty")


# @router.post("/{student_id}/marks/{grade}")
# async def add_grade(student_id: int, grade: float, mark: Mark):
#     if not isinstance(student_id, int):
#         raise HTTPException(status_code=418, detail="Entered data type is wrong")
#     students_grades[student_id] = 


@router.patch("/{student_id}")
async def update_student_schema(update_student: Update_student, student_id:int):
    if not (isinstance(update_student.first_name, str) and isinstance(update_student.last_name, str)):
        raise HTTPException(status_code=418, detail="Some of entered data types are wrong")
    students_data[student_id] = update_student
    return update_student