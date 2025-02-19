from models.User import User
from middleware.globalm import (verify_user, verify_change_in_user, verify_game_in_user_wishlist)
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
    

def create_user_controller(email, username, password, age):
    user = User.get_user_by_email_model(email)
    if user:
        return {"message": "User already created"}, 400
    hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt(10))
    hashed_password_base64 = base64.b64encode(hashed_password).decode()
    user_id = User.create_user_model(email,username, hashed_password_base64, age)
    return {"id": user_id, "message": f"User {username} created"}, 201

def update_user_controller(user_id, new_data):
    updated_fields = {}
    for key, value in new_data.items():
        if key != "_id":
            updated_fields[key] = value

    for field_name, new_value in updated_fields.items():
        verify_change_in_user(user_id, field_name, new_value)

    User.update_user(user_id, updated_fields)

    return {"message": "User updated"}

def delete_user_controller(userId):
    verify_user(userId)
    User.delete_account_model(userId)
    return {"message": "User deleted"}, 200

def add_or_remove_wishlist_game_controller(user_id, gameId):
    already_in_wishlist = verify_game_in_user_wishlist(user_id, gameId)
    user = verify_user(user_id)
    wishlist = user.get("wishlist", [])
    if already_in_wishlist:
        wishlist.remove(gameId)
        User.update_user(user_id, {"wishlist": wishlist})
        return {"message": "Game removed"}, 200
    wishlist.append(gameId)
    User.update_user(user_id, {"wishlist": wishlist})
    return {"message": "Game added to your wishlist"}, 201
