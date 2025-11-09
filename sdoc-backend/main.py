from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# ✅ Allow requests from your React app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PromptRequest(BaseModel):
    prompt: str

@app.post("/generate")
async def generate_document(request: PromptRequest):
    prompt = request.prompt
    result = f"Generated content for: {prompt}"
    return {"document": result}

@app.get("/")
def root():
    return {"message": "Backend is running fine!"}
