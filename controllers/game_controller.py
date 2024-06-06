from models.Games import Game
from middleware.globalm import (verify_game)

def create_game_controller(game_name, gender, description, developer, date_of_publication, price):
    game = Game.get_user_by_gender_model(gender)
    if game:
        return {"message": "User already created"}, 400
    game_id = Game.create_game_model(game_name, gender, description, developer, date_of_publication, price)
    return {"id": game_id, "message": f"Game {game_name} published"}, 201

def get_game_id_controller(gameId):
    post = verify_game(gameId)
    if not post:
        return {"message": "game not found"}, 404
    return Game.get_game_by_id_model(gameId)