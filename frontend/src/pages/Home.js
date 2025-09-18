import React from 'react';
import { Link } from 'react-router-dom';
import { 
  SparklesIcon, 
  BeakerIcon, 
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const features = [
    {
      icon: SparklesIcon,
      title: 'Smart Recommendations',
      description: 'AI-powered fertilizer recommendations based on soil conditions and crop requirements.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: BeakerIcon,
      title: 'Soil Analysis',
      description: 'Comprehensive soil health analysis with detailed nutrient status reports.',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics Dashboard',
      description: 'Visual insights and trends to help optimize your farming decisions.',
      color: 'text-purple-600 bg-purple-100'
    }
  ];

  const benefits = [
    'Increase crop yield by 15-25%',
    'Reduce fertilizer costs by up to 20%',
    'Improve soil health over time',
    'Data-driven farming decisions',
    'Environmental sustainability',
    'Expert agricultural guidance'
  ];

  const stats = [
    { label: 'Farmers Helped', value: '1,250+' },
    { label: 'Crops Supported', value: '50+' },
    { label: 'Accuracy Rate', value: '92%' },
    { label: 'Yield Improvement', value: '25%' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Smart Fertilizer
              <br />
              <span className="text-yellow-300">Recommendations</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Revolutionize your farming with AI-powered fertilizer recommendations. 
              Optimize crop nutrition, increase yields, and promote sustainable agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/recommendation"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Get Recommendations
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/soil-analysis"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                Analyze Soil
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Farming
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform provides everything you need for data-driven agricultural decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Platform?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of farmers who have transformed their agricultural practices 
                with our intelligent fertilizer recommendation system.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="btn-primary inline-flex items-center"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-primary-100 mb-6">
                  Get personalized fertilizer recommendations in just a few clicks. 
                  Input your soil parameters and crop details to receive expert guidance.
                </p>
                <Link
                  to="/recommendation"
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
                >
                  Start Now
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Farming Today
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join the agricultural revolution with smart, data-driven fertilizer recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/recommendation"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Free
            </Link>
            <Link
              to="/dashboard"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
