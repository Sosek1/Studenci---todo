from fastapi import FastAPI
import students


app = FastAPI()


app.include_router(students.router, prefix="/students")


@app.get("/")
async def root():
    return "Homepage"