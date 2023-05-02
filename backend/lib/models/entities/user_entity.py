from beanie import Document, Indexed


class UserEntity(Document):
    email: Indexed(str)
    name: str
    password: bytes
