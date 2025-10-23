import React from "react";
import hikvisionImage from "../assets/images/hikvision.jpg";
import dahuaImage from "../assets/images/dahua.jpg";
import cpPlusImage from "../assets/images/cp-plus.jpg";
import cctvInstallation2 from "../assets/images/cctv-installation-2.jpg";

const CCTVBrands = () => {
  const brands = [
    {
      name: "Hikvision",
      description:
        "World-leading CCTV and security products manufacturer offering cutting-edge surveillance technology with exceptional image quality and reliability.",
      features: [
        "4K Ultra HD Resolution",
        "ColorVu Technology",
        "AcuSense Technology",
        "Remote Monitoring",
        "Weather Resistant",
      ],
      image: hikvisionImage,
      specifications: [
        "Resolution: Up to 8MP",
        "Night Vision: Up to 30m",
        "Storage: Cloud & Local",
        "Warranty: 3 Years",
      ],
    },
    {
      name: "Dahua",
      description:
        "Innovative security solutions provider with advanced AI capabilities and smart detection features for comprehensive property protection.",
      features: [
        "AI-Powered Detection",
        "Starlight Technology",
        "Smart Motion Tracking",
        "Multi-channel Systems",
        "Easy Installation",
      ],
      image: dahuaImage,
      specifications: [
        "Resolution: Up to 12MP",
        "Night Vision: Up to 50m",
        "AI Features: Human/Vehicle Detection",
        "Warranty: 2 Years",
      ],
    },
    {
      name: "CP Plus",
      description:
        "Trusted Indian brand providing reliable and affordable CCTV solutions with excellent after-sales support and service network.",
      features: [
        "Cost-effective Solutions",
        "Easy to Use",
        "Wide Product Range",
        "Local Support",
        "Quick Installation",
      ],
      image: cpPlusImage,
      specifications: [
        "Resolution: Up to 5MP",
        "Night Vision: Up to 20m",
        "Storage Options: DVR/NVR",
        "Warranty: 2 Years",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Premium CCTV Brands We Provide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with leading CCTV manufacturers to bring you the best in
            surveillance technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">
                    {brand.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {brand.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {brand.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Specifications:
                  </h4>
                  <div className="grid grid-cols-1 gap-1">
                    {brand.specifications.map((spec, idx) => (
                      <div key={idx} className="text-sm text-gray-600">
                        • {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CCTV Installation Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={cctvInstallation2}
              alt="Professional CCTV Installation"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-gray-50 p-4">
              <h4 className="font-semibold text-gray-900">
                Professional Installation
              </h4>
              <p className="text-sm text-gray-600">
                Expert installation by certified technicians
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Why Choose Our CCTV Services?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-white mr-3"
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
                Certified installation technicians
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-white mr-3"
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
                Genuine products with warranty
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-white mr-3"
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
                24/7 technical support
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-white mr-3"
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
                Remote monitoring setup
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-white mr-3"
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
                Regular maintenance services
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCTVBrands;
