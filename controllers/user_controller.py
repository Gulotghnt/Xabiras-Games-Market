from models.User import User
import bcrypt
import base64
from flask_jwt_extended import create_access_token

def login(email, password):
    user = User.get_user_by_email_model(email)
    if user and bcrypt.checkpw(password.encode(), base64.b64decode(user["password"])):
        access_token = create_access_token(identity=email)
        return {"access_token": access_token}, 200
    else:
        return {"message": "Invalid email or password"}, 401
    

def create_user_controller(email,username, password, age):
    user = User.get_user_by_email_model(email)
    if user:
        return {"message": "User already created"}, 400
    hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt(10))
    hashed_password_base64 = base64.b64encode(hashed_password).decode()
    user_id = User.create_user_model(email,username, hashed_password_base64, age)
    return {"id": user_id, "message": f"User {username} created"}, 201

