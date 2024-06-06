from flask import request, jsonify, Blueprint
from models.User import User
from controllers.user_controller import (login, create_user_controller, delete_user_controller, 
                                        update_user_controller, add_or_remove_wishlist_game_controller)

users_app = Blueprint("users_app", __name__)


@users_app.route("/api/login", methods=["POST"])
def login_route():
    data = request.get_json()
    if "email" not in data or "password" not in data:
        return jsonify({"message": "Missing email or password"}), 400

    email = data["email"]
    password = data["password"]

    response, status_code = login(email, password)
    return jsonify(response), status_code

@users_app.route("/api/users", methods=["POST"])
def create_user_route():
    data = request.get_json()
    if not all(key in data for key in ["username", "email", "password", "age"]):
        return jsonify({"message": "Missing required fields"}), 400


    username = data["username"]
    email = data["email"]
    password = data["password"]
    age = data["age"]
    
    response, status_code = create_user_controller(email, username, password, age)
    return jsonify(response), status_code

@users_app.route("/api/usersEdit/<user_id>", methods=["PUT"])
def update_user_route(user_id):
    data = request.get_json()

    try:
        update_user_controller(user_id, data)
        return jsonify({"message": "User updated"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    

@users_app.route("/api/usersDel/<userId>", methods=["DELETE"])
def delete_user_route(userId):
    response, status_code = delete_user_controller(userId)
    return jsonify(response), status_code

@users_app.route("/api/users/wishlist", methods=["PUT"])
def add_wishlist_route():
    data = request.get_json()
    user_id = data["userId"]
    game_id = data["gameId"]
    response, status_code = add_or_remove_wishlist_game_controller(user_id, game_id)
    return jsonify(response), status_code

@users_app.route('/api/user_name', methods=['GET'])
def get_user_name():
    data = request.get_json()
    user_id = data["userId"]
    user = User.get_user_by_id_model(user_id)
    if user:
        return jsonify({"user": user.get("username", "Unknown"), "email": user.get("email", "Unknown")}), 200
    else:
        return jsonify({"message": "User not found"}), 404