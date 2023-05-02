from pydantic import BaseModel


class GetFileResponse(BaseModel):
    url: str
