import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServiceBanner from "../components/ServiceBanner";
import networkImage from "../assets/images/network-solutions.jpg";
import cctvImage from "../assets/images/cctv-installation.jpg";
import automationImage from "../assets/images/home-automation.jpg";
import servicesBg from "../assets/images/services-bg.jpg";
import hikvisionImage from "../assets/images/hikvision.jpg";
import dahuaImage from "../assets/images/dahua.jpg";
import cpPlusImage from "../assets/images/cp-plus.jpg";
import cctvInstallation2 from "../assets/images/cctv-installation-2.jpg";

const Services = () => {
  const [activeTab, setActiveTab] = useState("network");

  const serviceBanners = [
    {
      title: "Network Solutions",
      subtitle: "Seamless Connectivity",
      description:
        "High-speed, reliable networking infrastructure for homes and businesses. We design and implement robust network solutions that ensure uninterrupted connectivity and optimal performance.",
      features: [
        "Structured Cabling Systems",
        "Enterprise Router & Switch Configuration",
        "Wi-Fi Network Design & Installation",
        "Server Rack Installation & Management",
        "Network Security & Firewall Setup",
      ],
      image: networkImage,
      color: "from-blue-500 to-blue-700",
      icon: "🌐",
    },
    {
      title: "CCTV Security Systems",
      subtitle: "24/7 Protection",
      description:
        "Advanced surveillance solutions with cutting-edge technology to protect your property. Our CCTV systems provide crystal-clear monitoring with remote access capabilities.",
      features: [
        "IP & Analog Camera Installation",
        "4K Ultra HD Surveillance",
        "Remote Mobile Viewing Setup",
        "Night Vision & Motion Detection",
        "Cloud & Local Storage Solutions",
      ],
      image: cctvImage,
      color: "from-green-500 to-green-700",
      icon: "📹",
    },
    {
      title: "Home Automation",
      subtitle: "Smart Living",
      description:
        "Transform your living space with intelligent automation that enhances comfort, security, and energy efficiency. Control your entire home with a single touch or voice command.",
      features: [
        "Smart Lighting Control Systems",
        "Automated Door Lock Installation",
        "Smart Appliance Integration",
        "Voice Control (Alexa/Google Home)",
        "Climate Control Automation",
      ],
      image: automationImage,
      color: "from-purple-500 to-purple-700",
      icon: "🏠",
    },
  ];

  const cctvBrands = [
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

  const services = {
    network: {
      title: "Network Solutions",
      description:
        "Comprehensive networking infrastructure solutions for businesses and homes, ensuring seamless connectivity and robust performance.",
      features: [
        "Structured Cabling Systems",
        "Enterprise Router & Switch Configuration",
        "Wi-Fi Network Design & Installation",
        "Server Rack Installation & Management",
        "Network Security & Firewall Setup",
        "VoIP System Integration",
        "Network Performance Optimization",
        "24/7 Network Monitoring",
      ],
      image: networkImage,
      benefits: [
        "Enhanced connectivity and bandwidth",
        "Improved network security",
        "Scalable infrastructure",
        "Reduced downtime",
        "Better resource management",
      ],
    },
    cctv: {
      title: "CCTV Installation",
      description:
        "Advanced surveillance solutions with cutting-edge technology to protect your property. Our CCTV systems provide crystal-clear monitoring with remote access capabilities.",
      features: [
        "IP & Analog Camera Installation",
        "4K Ultra HD Surveillance",
        "Remote Mobile Viewing Setup",
        "Night Vision & Motion Detection",
        "Cloud & Local Storage Solutions",
        "Smart Alert Systems",
        "Professional Maintenance",
        "System Integration Services",
      ],
      image: cctvImage,
      benefits: [
        "24/7 property protection",
        "Remote monitoring capability",
        "High-resolution recording",
        "Smart motion alerts",
        "Deter criminal activities",
      ],
    },
    automation: {
      title: "Home Automation",
      description:
        "Transform your living space with intelligent automation that enhances comfort, security, and energy efficiency. Control your entire home with a single touch.",
      features: [
        "Smart Lighting Control Systems",
        "Automated Door Lock Installation",
        "Smart Appliance Integration",
        "Voice Control (Alexa/Google Home)",
        "Climate Control Automation",
        "Security System Integration",
        "Energy Monitoring & Management",
        "Custom Automation Scenes",
      ],
      image: automationImage,
      benefits: [
        "Enhanced convenience",
        "Energy cost savings",
        "Improved security",
        "Remote home management",
        "Customizable living experience",
      ],
    },
  };

  const currentService = services[activeTab];

  return (
    <div className="pt-16">
      {/* Header with Background Image */}
      <section
        className="relative text-white py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${servicesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to meet your specific
            needs. From security to connectivity and automation.
          </p>
        </div>
      </section>

      {/* Service Banners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Premium Service Packages
            </h2>
            <p className="text-xl text-gray-600">
              Complete solutions designed for your specific needs
            </p>
          </div>
          <div className="space-y-12">
            {serviceBanners.map((banner, index) => (
              <ServiceBanner
                key={index}
                banner={banner}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CCTV Brands Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Premium CCTV Brands We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with leading CCTV manufacturers to bring you the best
              in surveillance technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {cctvBrands.map((brand, index) => (
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

      {/* Service Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Detailed Service Breakdown
            </h2>
            <p className="text-xl text-gray-600">
              Explore each service in detail
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(services).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  activeTab === key
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {services[key].title}
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {currentService.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {currentService.description}
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentService.features.map((feature, index) => (
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

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Benefits
                </h3>
                <ul className="space-y-2">
                  {currentService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  Get Free Consultation
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-1">
                <div className="bg-white rounded-xl overflow-hidden h-full">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Professional Installation
                    </h4>
                    <p className="text-gray-600">
                      Our certified technicians ensure perfect installation and
                      optimal performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free site survey and customized solution
            proposal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:8144682241"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Call Now: +91 8144682241
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
