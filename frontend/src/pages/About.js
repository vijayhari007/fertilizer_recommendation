import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">About AgriTech Fertilizer Recommendation System</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            AgriTech is an intelligent fertilizer recommendation platform designed to empower farmers
            with data-driven decisions. By analyzing soil parameters, crop requirements, and environmental
            conditions, we provide precise fertilizer recommendations that boost yields and improve soil health.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">How It Works</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Collect soil parameters like pH, nitrogen, phosphorus, potassium, and organic matter.</li>
            <li>Select your crop and provide optional environmental inputs (temperature, moisture).</li>
            <li>Our recommendation engine combines rule-based logic with a trained ML model to suggest fertilizers.</li>
            <li>Get clear dosage guidance, reasoning, and priority indicators for each recommendation.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Key Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Optimized nutrient management for higher yields.</li>
            <li>Reduced fertilizer costs and improved ROI.</li>
            <li>Long-term soil health improvement and sustainability.</li>
            <li>Easy-to-use interface with analytics and insights.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Datasets Included</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Soil dataset with pH, N, P, K, organic matter, and location metadata.</li>
            <li>Crop dataset with agronomic requirements (N, P, K, pH range, duration, climate).</li>
            <li>Fertilizer dataset with composition, type, dosage, and crop suitability.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Disclaimer</h2>
          <p className="text-gray-700">
            The recommendations provided by this application are for guidance and educational purposes.
            Always consult local agricultural experts and consider field trials for final decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
