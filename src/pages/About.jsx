import React from "react";
import { Link } from "react-router-dom";
import teamImage from "../assets/images/team.jpg";
import aboutBg from "../assets/images/about-bg.jpg";

const About = () => {
  const team = [
    {
      name: "Technical Team",
      role: "Certified Engineers",
      description:
        "Our team of certified professionals brings years of experience in network infrastructure, security systems, and automation technology.",
      expertise: [
        "Network Engineering",
        "Security Systems",
        "Automation Technology",
      ],
    },
    {
      name: "Support Team",
      role: "Customer Success",
      description:
        "Dedicated support specialists ensuring your systems run smoothly with 24/7 monitoring and rapid response times.",
      expertise: [
        "Technical Support",
        "System Maintenance",
        "Customer Training",
      ],
    },
    {
      name: "Consulting Team",
      role: "Solution Architects",
      description:
        "Expert consultants who design customized solutions tailored to your specific requirements and business goals.",
      expertise: [
        "Solution Design",
        "Project Management",
        "Technology Consulting",
      ],
    },
  ];

  const milestones = [
    {
      year: "2018",
      event: "Company Founded",
      description:
        "Started with a vision to provide integrated technology solutions",
    },
    {
      year: "2019",
      event: "100+ Projects",
      description:
        "Completed over 100 successful installations across the region",
    },
    {
      year: "2020",
      event: "Team Expansion",
      description: "Expanded our team with certified professionals and experts",
    },
    {
      year: "2021",
      event: "Premium Partnerships",
      description: "Became authorized partners with leading technology brands",
    },
    {
      year: "2022",
      event: "500+ Projects",
      description: "Milestone of 500+ successful projects delivered",
    },
    {
      year: "2023",
      event: "Service Excellence",
      description: "Recognized for outstanding customer service and support",
    },
  ];

  return (
    <div className="pt-16">
      {/* Header with Background Image */}
      <section
        className="relative text-white py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner in security, networking, and automation
            solutions
          </p>
        </div>
      </section>

      {/* Rest of the About component remains the same */}
      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  One Solution Infotech was founded with a simple yet powerful
                  vision: to provide comprehensive technology solutions that
                  secure, connect, and automate modern spaces. We recognized the
                  growing need for integrated systems that work seamlessly
                  together to enhance security, improve connectivity, and
                  simplify daily operations.
                </p>
                <p>
                  Starting as a small team of passionate engineers, we've grown
                  into a trusted provider serving businesses and homeowners
                  across the region. Our journey has been marked by continuous
                  learning, adaptation to emerging technologies, and an
                  unwavering commitment to customer satisfaction.
                </p>
                <p>
                  Today, we take pride in being the go-to solution provider for
                  organizations seeking reliable, scalable, and future-ready
                  technology infrastructure. Our portfolio spans from enterprise
                  networking solutions to advanced security systems and smart
                  home automation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-1">
                <div className="bg-white rounded-xl overflow-hidden">
                  <img
                    src={teamImage}
                    alt="One Solution Infotech Team"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg">
                To be the leading provider of integrated technology solutions,
                empowering businesses and homeowners with secure, connected, and
                intelligent environments that enhance productivity, safety, and
                quality of life.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg">
                To deliver innovative, reliable, and customized technology
                solutions through expert consultation, quality installation, and
                exceptional after-sales support, ensuring complete customer
                satisfaction and long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Meet the dedicated professionals behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-6">{member.description}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Milestones in our growth and success story
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {milestone.event}
                </h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Partner With Us
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's work together to build secure, connected, and intelligent
            solutions for your needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Start Your Project
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
      </section>
    </div>
  );
};

export default About;
