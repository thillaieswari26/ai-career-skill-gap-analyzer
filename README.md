# CareerAI — AI Career & Skill Gap Analyzer

A ready-to-run full-stack career dashboard matching the CareerAI UI mockup.

## Stack

- Frontend: React + Vite + Tailwind CSS
- Backend: Python + FastAPI
- Database: SQLite by default (zero setup); PostgreSQL-ready configuration
- Authentication: JWT-ready backend structure
- AI/NLP: Local skill matching engine with optional AI provider integration
- Deployment: Docker-ready

## Quick Start

### 1. Backend

```powershell
cd backend
python -m venv venv
venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend: http://127.0.0.1:8000

### 2. Frontend

Open another terminal:

```powershell
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173

No API key is required for the included demo analysis.

## GitHub

After testing:

```powershell
git init
git add .
git commit -m "Initial CareerAI project"
git branch -M main
git remote add origin https://github.com/thillaieswari26/ai-career-skill-gap-analyzer.git
git push -u origin main
```
