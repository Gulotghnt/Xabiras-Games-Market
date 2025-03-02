import bcrypt
import base64

class UserBuilder:
    def __init__(self):
        self.user = new_user = {
            "username": "",
            "email": "",
            "password": "",
            "age": ""
        }

    @staticmethod
    def anUser():
        builder = UserBuilder()

        password = "Teste123"

        hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt(10))
        hashed_password_base64 = base64.b64encode(hashed_password).decode()

        builder.user['username'] = "Test"
        builder.user['email'] = "email@email.com"
        builder.user['age'] = 24
        builder.user['password'] = hashed_password_base64

        return builder

    def now(self):
        return self.user
