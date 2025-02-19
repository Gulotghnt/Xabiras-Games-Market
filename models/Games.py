from pymongo import MongoClient
from bson import ObjectId
import os

client = MongoClient(os.getenv("MONGODB_URI"))
db = client.get_database(os.getenv("MONGODB_DBNAME"))

class Game:

    @staticmethod
    def create_game_model(game_name, gender, description, developer, date_of_publication, price):
        game_collection = db.games
        new_game = {
            "name": game_name,
            "gender": gender,
            "description": description,
            "developer": developer,
            "date_of_publication": date_of_publication,
            "price": price
        }
        result = game_collection.insert_one(new_game)
        return str(result.inserted_id)

    @staticmethod
    def get_user_by_gamename_model(game_name):
        games_collection = db.games
        game = games_collection.find_one({"name": game_name})
        return game
    
    @staticmethod
    def get_user_by_gender_model(gender):
        games_collection = db.games
        game = games_collection.find_one({"gender": gender})
        return game
    
    @staticmethod
    def get_game_by_id_model(id):
        games_collection = db.games
        Game = games_collection.find_one({"_id": ObjectId(id)})
        return Game
    


