from pydantic import BaseModel
from typing import List

class AnalyzeRequest(BaseModel):
    target_role: str = "Data Engineer"
    skills: List[str] = []

class SkillResult(BaseModel):
    skill: str
    current_level: str
    required_level: str
    gap: int
    status: str

class AnalyzeResponse(BaseModel):
    target_role: str
    readiness: int
    skills_matched: int
    skills_to_improve: int
    recommended_projects: int
    learning_paths: int
    skills: List[SkillResult]
