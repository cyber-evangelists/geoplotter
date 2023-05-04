import os

from dotenv import load_dotenv

load_dotenv()

JWT_SECRET = os.environ["JWT_SECRET"]
MONGO_URL = os.environ["MONGO_URL"]
UPLOAD_DIR = os.environ["UPLOAD_DIR"]
