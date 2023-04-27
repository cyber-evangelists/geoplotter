from typing import Any, Dict

import jwt

from lib import config


def encode(payload: Dict[str, Any]) -> str:
    return jwt.encode(payload, config.JWT_SECRET, algorithm="HS256")


def decode(token: str) -> Dict[str, Any]:
    return jwt.decode(token, config.JWT_SECRET, algorithms=["HS256"])
