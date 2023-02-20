#!flask/bin/python
from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/test')
@cross_origin()
def index():
    return "String data from http://localhost:3000/test api"

if __name__ == '__main__':
    app.run(debug=True)
