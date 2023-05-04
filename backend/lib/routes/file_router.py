from fastapi import APIRouter, File, UploadFile

from lib.models.responses.get_file_response import GetFileResponse
from lib import config

router = APIRouter()


@router.post("/", include_in_schema=False)
@router.post("", response_model=GetFileResponse)
def create_file_url(file: UploadFile):
    file_location = f"{config.UPLOAD_DIR}/{file.filename}"
    with open(file_location, "wb+") as file_object:
        file_object.write(file.file.read())

    return {"url": f"/assets/{file.filename}"}
