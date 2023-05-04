from fastapi import APIRouter, HTTPException

from lib.models.entities.user_entity import UserEntity
from lib.models.requests.login_request import LoginRequest
from lib.models.requests.signup_request import SignupRequest
from lib.models.responses.auth_response import AuthResponse
from lib.services import mybcrypt, myjwt

router = APIRouter()


@router.post("/login", response_model=AuthResponse)
async def user_login(body: LoginRequest):
    user = await UserEntity.find_one({"email": body.email})
    if mybcrypt.check(body.password, user.password):
        payload = {"userId": str(user.id)}

        return {"token": myjwt.encode(payload)}

    raise HTTPException(detail="Invalid credentials", status_code=401)


@router.post("/signup", response_model=AuthResponse)
async def user_register(body: SignupRequest):
    user = await UserEntity.find_one({"email": body.email})
    if user:
        raise HTTPException(detail="Email is already in use", status_code=400)

    encrypted_password = mybcrypt.hash(body.password)
    user_entity = UserEntity(
        email=body.email, name=body.name, password=encrypted_password
    )
    await user_entity.insert()

    inserted_user = await UserEntity.find_one({"email": body.email})
    payload = {"userId": str(inserted_user.id)}

    return {"token": myjwt.encode(payload)}
