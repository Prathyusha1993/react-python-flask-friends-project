from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os


app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///friends.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

frontend_folder = os.path.join(os.getcwd(), '..', 'chakra_react_frontend')
dist_folder = os.path.join(frontend_folder, 'dist')

# serve static files from the 'dist' folder under the 'chakra react frontend' directory
@app.route('/', defaults={'filename': ''})
@app.route('/<path:filename>')
def index(filename):
    if not filename:
        filename = 'index.html'
    return send_from_directory(dist_folder, filename)


# api routes
import routes

with app.app_context():
    db.create_all()


if __name__ == '__main__':
    app.run(debug=True)