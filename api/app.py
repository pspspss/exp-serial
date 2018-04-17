import serial

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config.from_pyfile('env.cfg')

s = serial.Serial(
   "/dev/ttyACM0",
    "9600",
    timeout=0)

@app.route("/", methods=['POST'])
@cross_origin(origin='*')
def post_serial():
    request_serial = request.form['serial']
    s.write(b'l')
    
    state = s.read()
    return jsonify({"state": int(state)})

@app.route("/", methods=['GET'])
@cross_origin(origin='*')
def get_serial():
    state = s.read()
    return jsonify({"state": int(state)})

if __name__ == '__main__':
    app.run(debug=True) 