from flask import request, jsonify, Blueprint
from controllers.game_controller import create_game_controller
from models.Games import Game

games_app = Blueprint("games_app", __name__)

@games_app.route("/api/games", methods=["POST"])
def create_games_route():
    data = request.get_json()
    if not all(key in data for key in ["name", "gender", "description", "developer", "date_of_publication", "price"]):
        return jsonify({"message": "Missing required fields"}), 400


    game_name = data["name"]
    gender = data["gender"]
    description = data["description"]
    developer = data["developer"]
    date_of_publication = data["date_of_publication"]
    price = data["price"]
    
    response, status_code = create_game_controller(game_name, gender, description, developer, date_of_publication, price)
    return jsonify(response), status_code

@games_app.route('/api/search', methods=['GET'])
def get_game_name():
    data = request.get_json()
    game_name = data["search"]
    game = Game.get_user_by_gamename_model(game_name)
    if game:
        return jsonify({"name": game.get("name", "Unknown")}), 200
    else:
        return jsonify({"message": "Game not found"}), 404
