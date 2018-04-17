import serial

from flask import Flask, request, jsonify

app = Flask(__name__)

s = serial.Serial('/dev/ttyACM0', 9600, timeout=0)

@app.route("/", methods=['POST'])
def post_serial():
    request_serial = request.form['serial']
    s.write(b'l')
    
    state = s.read()
    return jsonify({"state": int(state)})

if __name__ == '__main__':
    app.run(debug=True) 