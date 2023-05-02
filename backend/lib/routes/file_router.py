from fastapi import APIRouter

from lib.models.responses.get_file_response import GetFileResponse

router = APIRouter()


@router.get("/", include_in_schema=False)
@router.get("", response_model=GetFileResponse)
def get_file_url():
    return {"url": "/assets/example.zip"}
