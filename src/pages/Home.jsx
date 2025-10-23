import React from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import ServiceBanner from "../components/ServiceBanner";
import networkImage from "../assets/images/network-solutions.jpg";
import cctvImage from "../assets/images/cctv-installation.jpg";
import automationImage from "../assets/images/home-automation.jpg";

const Home = () => {
  const services = [
    {
      title: "Network Solutions",
      description:
        "Comprehensive networking infrastructure solutions for businesses and homes, ensuring seamless connectivity and robust performance.",
      features: [
        "Structured Cabling",
        "Routers & Switches Setup",
        "Wi-Fi Network Installation",
        "Server Racks Configuration",
        "Network Security",
      ],
      image: networkImage,
    },
    {
      title: "CCTV Installation",
      description:
        "Advanced surveillance systems with remote monitoring capabilities to protect your property and ensure peace of mind.",
      features: [
        "IP & Analog Cameras",
        "Remote Viewing Setup",
        "24/7 Monitoring",
        "Maintenance & Support",
        "High-Resolution Recording",
      ],
      image: cctvImage,
    },
    {
      title: "Home Automation",
      description:
        "Transform your living space with smart automation solutions that enhance comfort, security, and energy efficiency.",
      features: [
        "Smart Lighting Control",
        "Automated Door Locks",
        "Appliance Integration",
        "Alexa/Google Home Setup",
        "Energy Management",
      ],
      image: automationImage,
    },
  ];

  const serviceBanners = [
    {
      title: "Network Solutions",
      subtitle: "Seamless Connectivity",
      description:
        "High-speed, reliable networking infrastructure for homes and businesses",
      features: ["Structured Cabling", "Wi-Fi Setup", "Server Configuration"],
      image: networkImage,
      color: "from-blue-500 to-blue-700",
      icon: "🌐",
    },
    {
      title: "CCTV Security",
      subtitle: "24/7 Protection",
      description:
        "Advanced surveillance systems with remote monitoring capabilities",
      features: ["HD Cameras", "Remote Access", "Smart Alerts"],
      image: cctvImage,
      color: "from-green-500 to-green-700",
      icon: "📹",
    },
    {
      title: "Home Automation",
      subtitle: "Smart Living",
      description: "Transform your space with intelligent automation solutions",
      features: ["Voice Control", "Smart Lighting", "Energy Management"],
      image: automationImage,
      color: "from-purple-500 to-purple-700",
      icon: "🏠",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechCorp Solutions",
      content:
        "One Solution Infotech transformed our office network infrastructure. Their professional approach and technical expertise are exceptional.",
    },
    {
      name: "Priya Sharma",
      company: "Smart Homes Ltd",
      content:
        "The home automation system they installed has made our life so much easier. Highly recommended for their quality service and support.",
    },
    {
      name: "Amit Patel",
      company: "Secure Enterprises",
      content:
        "Outstanding CCTV installation service. The remote monitoring feature gives us complete peace of mind for our business security.",
    },
  ];

  const features = [
    {
      title: "Expert Team",
      description:
        "Certified professionals with years of experience in security and automation solutions.",
      icon: "👨‍💼",
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock technical support to ensure your systems are always running smoothly.",
      icon: "🛠️",
    },
    {
      title: "Quality Assurance",
      description:
        "We use only premium components and follow industry best practices for all installations.",
      icon: "⭐",
    },
    {
      title: "Custom Solutions",
      description:
        "Tailored solutions designed to meet your specific requirements and budget.",
      icon: "🎯",
    },
  ];

  return (
    <div>
      <Hero />

      {/* Service Banners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to secure, connect,
              and automate your space
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

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our complete range of technology solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600">
              We deliver excellence through innovation and dedication
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses and homeowners across the region
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch with us for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8144682241"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Call Now
            </a>
            <a
              href="mailto:support@onesolutioninfotech.in"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
