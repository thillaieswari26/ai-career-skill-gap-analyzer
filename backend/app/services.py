ROLE_SKILLS = {
    "Data Engineer": [
        ("Python", "Advanced", 0),
        ("SQL", "Advanced", 1),
        ("Machine Learning", "Intermediate", 2),
        ("Data Visualization", "Advanced", 1),
        ("Cloud (AWS)", "Intermediate", 2),
    ],
    "Backend Engineer": [
        ("Python", "Advanced", 0),
        ("FastAPI", "Intermediate", 1),
        ("SQL", "Advanced", 1),
        ("Docker", "Intermediate", 1),
        ("REST APIs", "Advanced", 0),
    ],
    "AI/ML Engineer": [
        ("Python", "Advanced", 0),
        ("Machine Learning", "Advanced", 1),
        ("Deep Learning", "Intermediate", 2),
        ("SQL", "Intermediate", 1),
        ("MLOps", "Intermediate", 2),
    ],
}

LEVELS = {"Beginner": 1, "Intermediate": 2, "Advanced": 3}

def analyze(target_role: str, skills: list[str]):
    role = target_role if target_role in ROLE_SKILLS else "Data Engineer"
    normalized = {s.strip().lower() for s in skills}

    rows = []
    for name, required, gap in ROLE_SKILLS[role]:
        if name.lower() in normalized:
            current = required
            actual_gap = 0
            status = "Matched"
        else:
            if gap == 0:
                current = "Intermediate"
                actual_gap = 1
            elif gap == 1:
                current = "Intermediate" if required == "Advanced" else "Beginner"
                actual_gap = 1
            else:
                current = "Beginner"
                actual_gap = 2
            status = "Improve"
        rows.append({
            "skill": name,
            "current_level": current,
            "required_level": required,
            "gap": actual_gap,
            "status": status,
        })

    matched = sum(r["gap"] == 0 for r in rows)
    improve = len(rows) - matched
    readiness = round((matched / len(rows)) * 100)
    return {
        "target_role": role,
        "readiness": readiness,
        "skills_matched": matched,
        "skills_to_improve": improve,
        "recommended_projects": 2,
        "learning_paths": 1,
        "skills": rows,
    }
