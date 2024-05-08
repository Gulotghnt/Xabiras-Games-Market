import os

from flask import *

import pytest
import mongomock

from models.User import User
from UserBuilder import UserBuilder

from flask_jwt_extended import JWTManager
import jwt

from unittest.mock import patch, MagicMock


@pytest.fixture
@mongomock.patch(servers=((os.getenv("MONGODB_URI"), 27017),))
def app():
    import routes.user_routes

    app = Flask(__name__)
    app.config.update({
        "TESTING": True,
    })
    app.config["JWT_SECRET_KEY"] = os.getenv("SECRET_KEY")

    jwt = JWTManager(app)

    app.register_blueprint(routes.user_routes.users_app)

    return app

@pytest.fixture
def client(app):
    return app.test_client()

@patch.object(User, "create_user_model")
@patch.object(User, 'get_user_by_email_model')
def test_createUserWithoutEmail(mock_get_user, mock_create_user, client):
    mock_get_user.return_value = False
    mock_create_user.return_value = 1

    response = client.post("/api/users",
                           json={"username": "teste2",
                                "password": "teste123", "age": 20},
                           headers={"content-type": "application/json"})

    assert response.status_code == 400

@patch.object(User, 'get_user_by_email_model')
def test_login_with_correct_credentials(mock_get_user, client):
    mock_get_user.return_value = UserBuilder.anUser().now()

    response = client.post("/api/login",
                           json={"email": "email@email.com",
                                 "password": "Teste123"},
                           headers={"content-type": "application/json"})

    assert response.status_code == 200
    assert jwt.decode(response.json['access_token'], os.getenv("SECRET_KEY"), algorithms=["HS256"])['sub'] == 'email@email.com'
