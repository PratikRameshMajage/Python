from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/process', methods=['POST'])  # Ensure POST method is defined
def process_request():
    data = request.json  # Extract JSON data from request
    return jsonify({"message": f"Received: {data}"}), 200  # Return JSON response

if __name__ == '__main__':
    app.run(debug=True)
