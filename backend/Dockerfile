FROM python:3.9-buster

WORKDIR /app

RUN pip install poetry

COPY pyproject.toml .

RUN poetry install --no-root

COPY . .

CMD poetry run uvicorn lib.main:app --host 0.0.0.0 --log-config ./log-config.ini
