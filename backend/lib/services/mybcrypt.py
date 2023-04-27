import bcrypt


def hash(input: str) -> bytes:
    return bcrypt.hashpw(input.encode("utf-8"), bcrypt.gensalt())


def check(input: str, hash: bytes) -> bool:
    return bcrypt.checkpw(input.encode("utf-8"), hash)
