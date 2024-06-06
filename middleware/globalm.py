from flask import abort
from models.User import User
from models.Games import Game
from flask import abort

#CONSTANTES
MAX_TEXT_LENGTH = 300

def verify_user(userId):               
    user = User.get_user_by_id_model(userId)
    if not user:
        abort(400, {"message": "User not exist"})
    return user

def verify_game(gameId):
    game = Game.get_game_by_id_model(gameId)
    if not game:
        abort(400, {"message": "Game not exist"})
    return game

def verify_change_in_user(user_id, field_name, new_value):
    user = verify_user(user_id)
    if field_name in user:
        current_value = user[field_name]
        if current_value == new_value:
            abort(400, f"The {field_name} is the same")
        return current_value
    else:
        abort(400, f"User data is missing '{field_name}' field")

def verify_game_in_user_wishlist(userId, gameId):
    user = verify_user(userId)
    wishlist = user.get("wishlist", [])
    if wishlist:
        return True
    return False

