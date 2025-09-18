import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/stats');
        setStats(res.data);
      } catch (err) {
        console.error('Failed to fetch stats', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const yieldData = {
    labels: ['Rice', 'Wheat', 'Corn', 'Soybean', 'Cotton', 'Tomato', 'Potato', 'Sugarcane'],
    datasets: [
      {
        label: 'Avg Yield (tons/ha)',
        data: [4.5, 3.2, 8.5, 2.8, 2.2, 25, 22, 70],
        backgroundColor: 'rgba(34, 197, 94, 0.6)'
      }
    ]
  };

  const nutrientDeficiencyData = {
    labels: ['Nitrogen', 'Phosphorus', 'Potassium', 'pH'],
    datasets: [
      {
        label: 'Deficiency Incidence',
        data: [48, 32, 28, 18],
        backgroundColor: [
          'rgba(239, 68, 68, 0.7)',
          'rgba(234, 179, 8, 0.7)',
          'rgba(59, 130, 246, 0.7)',
          'rgba(168, 85, 247, 0.7)'
        ],
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-2">Visual insights to support data-driven farming decisions.</p>
        </div>

        {loading ? (
          <div className="card text-center">Loading...</div>
        ) : (
          <div className="space-y-8">
            {/* Top Stats */}
            {stats && (
              <div className="grid md:grid-cols-4 gap-4">
                <div className="card text-center">
                  <div className="text-3xl font-bold text-primary-600">{stats.farmers_helped.toLocaleString()}</div>
                  <div className="text-gray-600">Farmers Helped</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-bold text-primary-600">{stats.total_crops_supported}</div>
                  <div className="text-gray-600">Crops Supported</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-bold text-primary-600">{stats.recommendation_accuracy}</div>
                  <div className="text-gray-600">Recommendation Accuracy</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-bold text-primary-600">{stats.avg_yield_improvement}</div>
                  <div className="text-gray-600">Yield Improvement</div>
                </div>
              </div>
            )}

            {/* Charts */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="card lg:col-span-2">
                <h2 className="text-lg font-semibold mb-4">Average Crop Yields</h2>
                <Bar
                  data={yieldData}
                  options={{
                    responsive: true,
                    plugins: { legend: { position: 'top' } },
                    scales: { y: { beginAtZero: true } }
                  }}
                />
              </div>

              <div className="card">
                <h2 className="text-lg font-semibold mb-4">Common Deficiencies</h2>
                <Doughnut
                  data={nutrientDeficiencyData}
                  options={{
                    responsive: true,
                    plugins: { legend: { position: 'bottom' } }
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
