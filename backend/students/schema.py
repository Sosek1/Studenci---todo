from pydantic import BaseModel
from typing import Union


class Student(BaseModel):
    first_name: str
    last_name: str
    id: int 


class Mark(float, Enum):
    BARDZO_DOBRY = Union[5.0, None] = None
    DOBRY_PLUS = Union[4.5, None] = None
    DOBRY = Union[4.0, None] = None
    DOSTATECZNY_PLUS = Union[3.5, None] = None
    DOSTATECZNY = Union[3.0, None] = None
    NIEDOSTATECZNY = Union[2.0, None] = None


class Update_student(BaseModel):
    first_name: Union[str, None] = None
    last_name: Union[str, None] = None