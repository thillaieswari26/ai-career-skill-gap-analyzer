from fastapi import APIRouter, UploadFile, File
from app.schemas.career import AnalyzeRequest, AnalyzeResponse
from app.services import analyze

router = APIRouter()

@router.get("/career/roles")
def roles():
    return {
        "roles": [
            "Data Engineer",
            "Backend Engineer",
            "AI/ML Engineer"
        ]
    }

@router.post("/career/analyze", response_model=AnalyzeResponse)
def career_analyze(request: AnalyzeRequest):
    return analyze(request.target_role, request.skills)

@router.post("/resume/upload")
async def upload_resume(file: UploadFile = File(...)):
    return {
        "filename": file.filename,
        "message": "Resume uploaded successfully. Demo analyzer is ready."
    }
