from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import pandas as pd
import numpy as np
import joblib
import os
from datetime import datetime

# ---------- Flask App ----------
app = Flask(__name__, static_folder='../frontend/build')
CORS(app, origins=["https://fertilizer-recommendations-ngu8.onrender.com"])

# ---------- Serve React Frontend ----------
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_frontend(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# ---------- API Root ----------
@app.route('/api')
def api_root():
    return jsonify({
        "message": "Welcome to Fertilizer Recommendation API",
        "version": "1.0.0",
        "endpoints": {
            "/api/recommend": "POST - Get fertilizer recommendations",
            "/api/crops": "GET - Get all available crops",
            "/api/fertilizers": "GET - Get all available fertilizers",
            "/api/soil-analysis": "POST - Analyze soil conditions",
            "/api/stats": "GET - Get system statistics"
        }
    })

# ---------- Load Data & Model ----------
def load_data():
    try:
        backend_dir = os.path.dirname(os.path.abspath(__file__))
        project_root = os.path.dirname(backend_dir)
        datasets_dir = os.path.join(project_root, 'datasets')
        models_dir = os.path.join(project_root, 'models')

        soil_data = pd.read_csv(os.path.join(datasets_dir, 'soil_data.csv'))
        crop_data = pd.read_csv(os.path.join(datasets_dir, 'crop_data.csv'))
        fertilizer_data = pd.read_csv(os.path.join(datasets_dir, 'fertilizer_data.csv'))
        
        model_path = os.path.join(models_dir, 'fertilizer_model.pkl')
        model = joblib.load(model_path) if os.path.exists(model_path) else None

        return soil_data, crop_data, fertilizer_data, model
    except Exception as e:
        print(f"Error loading data: {e}")
        return None, None, None, None

soil_data, crop_data, fertilizer_data, model = load_data()

# ---------- API Endpoints ----------
@app.route('/api/recommend', methods=['POST'])
def recommend_fertilizer():
    data = request.get_json()
    # TODO: Add logic with `model` and datasets
    return jsonify({"success": True, "recommendations": [], "input": data})

@app.route('/api/crops', methods=['GET'])
def get_crops():
    crops = [
        {"name": "Rice", "value": "rice"}, 
        {"name": "Wheat", "value": "wheat"}
        # add other crops...
    ]
    return jsonify({"crops": crops})

@app.route('/api/fertilizers', methods=['GET'])
def get_fertilizers():
    fertilizers = [
        {"name": "Urea", "composition": "46-0-0"}
        # add other fertilizers...
    ]
    return jsonify({"fertilizers": fertilizers})

@app.route('/api/soil-analysis', methods=['POST'])
def soil_analysis():
    data = request.get_json()
    # Example: return nutrient balance analysis
    return jsonify({
        "success": True,
        "input": data,
        "analysis": {
            "nitrogen": "Low",
            "phosphorus": "Optimal",
            "potassium": "High"
        }
    })

@app.route('/api/stats', methods=['GET'])
def stats():
    return jsonify({
        "total_crops": 2 if crop_data is not None else 0,
        "total_fertilizers": 1 if fertilizer_data is not None else 0,
        "last_updated": datetime.utcnow().isoformat() + "Z"
    })

# ---------- Run App ----------
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
