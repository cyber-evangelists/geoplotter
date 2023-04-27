from beanie import init_beanie
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient

from lib import config
from lib.models.entities.user_entity import UserEntity
from lib.routes import user_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router.router, prefix="/users")


@app.on_event("startup")
async def on_start():
    client = AsyncIOMotorClient(config.MONGO_URL)
    await init_beanie(database=client.db_name, document_models=[UserEntity])
