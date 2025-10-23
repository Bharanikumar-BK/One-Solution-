import React from "react";
import { Link } from "react-router-dom";

const ServiceBanner = ({ banner, reverse = false }) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 lg:gap-12 bg-white rounded-2xl shadow-xl overflow-hidden`}
    >
      {/* Image Section */}
      <div className="lg:w-1/2 w-full">
        <div className="relative h-80 lg:h-96 w-full">
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${banner.color} opacity-20`}
          ></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 w-full p-8 lg:p-12">
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-4">{banner.icon}</span>
          <div>
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {banner.subtitle}
            </span>
          </div>
        </div>

        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          {banner.title}
        </h3>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          {banner.description}
        </p>

        {/* Features */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Key Features:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {banner.features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className={`bg-gradient-to-r ${banner.color} hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold text-center transition-all duration-200 transform hover:scale-105`}
          >
            Get Free Quote
          </Link>
          <Link
            to="/services"
            className="border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-center transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex justify-between text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
